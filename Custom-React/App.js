import { registerForHydration, STATE } from "./React.js";

function App() {
    const count = new STATE("hello", 0);
    count.setState("btn-inc", "click", (value) => ++value);
    count.setState("btn-dec", "click", (value) => --value);
    // TODO: useEffect
    
    return ` 
        <h2>Welcome to Counter</h2>
        <p> Count is <span id="hello">${count.getState()}</span></span></p>
        <button id="btn-inc">Increment</button>
        <button id="btn-dec">Decrement</button>
    `
}
export default App;