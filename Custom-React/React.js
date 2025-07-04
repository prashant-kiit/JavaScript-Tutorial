export function render(root, App) {
    const appToBeRendered = App();
    root.innerHTML = appToBeRendered;
    hydrate();
}

function hydrate() {
    for (const STATE of STATES) {
        for (const handler of STATE.handlers) {
            if (handler.source === "EFFECT") return;
            const element = document.getElementById(handler.source);
            element.addEventListener(handler.event, (event) => {
                console.log("clicking")
                STATE.updateState(handler);
            });
        }

    }
}

const STATES = []
const EFFECTS = []
let currentEffectTags = []

function registerForHydration(STATE) {
    STATES.push(STATE);
}
function registerEffect(EFFECT) {
    EFFECTS.push(EFFECT);
}

export class STATE {
    state = null;
    handlers = [];
    target = null;

    constructor(target, defaultValue) {
        this.target = target;
        this.state = defaultValue;
        registerForHydration(this);
    }

    setState(...args) {
        if (args.length === 3) {
            const source = args[0];
            const event = args[1];
            const handler = args[2];
            this.handlers.push({
                source: source,
                event: event,
                callback: handler.bind(this)
            });
        }
        if (args.length === 1) {
            const handler = args[0]
            currentEffectTags.forEach((currentEffectTag) => {
                STATES.map((STATE) => {
                    if (STATE.target === currentEffectTag) {
                        for (const previousHandler of STATE.handlers) {
                            this.handlers.push({
                                source: previousHandler.source,
                                event: previousHandler.event,
                                callback: handler.bind(this)
                            });
                        }
                    }
                })

            })
        }
    }

    getState() {
        return this.state;
    }

    updateState(handler) {
        const newState = handler.callback(this.state);
        this.state = newState;
        const targetElement = document.getElementById(this.target);
        targetElement.innerHTML = newState;
        for (const EFFECT of EFFECTS) {
            if (EFFECT.tags.includes(this.target)) {
                EFFECT.handler();
            }
        }
    }
}

export class EFFECT {
    handler = null;
    tags = [];

    constructor(handler, tags) {
        this.handler = handler.bind(this);
        this.tags = tags;
        currentEffectTags = tags;
        registerEffect(this);
        handler();
    }
}