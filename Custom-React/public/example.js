const STATES = []

function child(STATE) {
    STATES.push(STATE);
}

class STATE {
    name = null;
    state = null;
    handler = null;
    eventType = null;

    constructor(name, defaultValue) {
        this.name = name;
        this.state = defaultValue;
    }

    setState(handler) {
        this.handler = handler.bind(this);
    } 

    getState() {
        return this.state;
    }

    updateState() {
        const newState = this.handler(this.state);
        this.state = newState;
    }
}

function parent() {
    const count = new STATE("button", 0)
    count.setState((value) => --value);
    child(count);
}

function myhandle() {
    STATES[0].updateState();
}

function main() {
    parent();
    myhandle();
    console.log(STATES[0]);
}

main();