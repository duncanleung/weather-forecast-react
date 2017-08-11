import React from "react";
import ReactDOM from "react-dom";
import { injectGlobal } from "styled-components";

import App from "./components/App";
import registerServiceWorker from "./registerServiceWorker";

injectGlobal`
  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen-Sans,Ubuntu,Cantarell,Helvetica Neue,sans-serif;
}`;

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
