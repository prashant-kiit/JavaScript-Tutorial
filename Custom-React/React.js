export function render(root, App) {
    const appToBeRendered = App();
    root.innerHTML = appToBeRendered;
    hydrate();
}

function hydrate() {
    for (const STATE of STATES) {
        for (const handler of STATE.handlers) {
            const element = document.getElementById(handler.source);
            console.log(element)
            element.addEventListener(handler.event, (event) => {
                console.log("clicking")
                STATE.updateState(handler);
                console.log(STATE);
            });
        }

    }
}

const STATES = []

function registerForHydration(STATE) {
    STATES.push(STATE);
}

export class STATE {
    state = null;
    handlers = [];
    target = null;

    constructor(target, defaultValue) {
        this.target = target;
        this.name = name;
        this.state = defaultValue;
        registerForHydration(this);
    }

    setState(source, event, handler) {
        this.handlers.push({
            source: source,
            event: event,
            callback: handler.bind(this)
        });
    }

    getState() {
        return this.state;
    }

    updateState(handler) {
        const newState = handler.callback(this.state);
        this.state = newState;
        const targetElement = document.getElementById(this.target);
        console.log(targetElement)
        targetElement.innerHTML = newState;
    }
}