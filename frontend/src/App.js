import "./App.css";
import { useState } from "react";

function App() {
    const [counter, setCounter] = useState(0);
    const url = "http://localhost:3000/";

    //...

    const handleGetJson = () => {
        fetch(url)
            .then((res) => res.json())
            .then((json) => setCounter(json.counter));
    };

    //...

    const handlePostJson = () => {
        fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
        });
    };

    //...

    return (
        <div className="App">
            <header className="App-header">
                <button onClick={handleGetJson}>
                    GET: <span>{counter}</span>
                </button>
                <br />
                <button onClick={handlePostJson}>POST</button>
            </header>
        </div>
    );
}

export default App;
