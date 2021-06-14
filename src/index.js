import React from "react";
import ReactDOM from "react-dom";
// import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import theme from "./themes/default";
import GlobalStyles from "./styles/Globals";

ReactDOM.render(
    <BrowserRouter>
        <React.StrictMode>
            <ThemeProvider theme={theme}>
                <GlobalStyles />
                <App />
            </ThemeProvider>
        </React.StrictMode>
    </BrowserRouter>,
    document.getElementById("root")
);
