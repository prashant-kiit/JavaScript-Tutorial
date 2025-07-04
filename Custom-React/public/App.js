import { STATE, EFFECT } from "./React.js";

function App() {
    const count = new STATE("count", 0);
    const clicks = new STATE("clicks", 0);
    count.setState("btn-inc", "click", (value) => ++value);
    count.setState("btn-dec", "click", (value) => --value);
    new EFFECT(() => {
        console.log("Effect is Running")
        clicks.setState((value) => ++value);
    }, ["count"]);
    // TOD0: Add express server

    return ` 
    <div class="main">
        <h2>Welcome to Counter</h2>
        <p> Count is <span id="count">${count.getState()}</span></span></p>
        <p> Number of clicks is <span id="clicks">${count.getState()}</span></span></p>
        <button id="btn-inc">Increment</button>
        <button id="btn-dec">Decrement</button>
    </div>
    `
}
export default App;