import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import registerServiceWorker from "./registerServiceWorker";

import Routes from "./routes";

ReactDOM.render(
    <Router>
        <div className="App">
            <Routes />
        </div>
    </Router>,
    document.getElementById("root")
);
registerServiceWorker();
