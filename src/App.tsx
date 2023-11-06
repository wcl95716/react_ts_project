import React from "react";
import "./App.css";

import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { FluentProvider, webLightTheme } from "@fluentui/react-components";
import AntdExample from "apps/antdExample";
import { navigationItems } from "components/NavigationBar/index";
import { store } from "./store";

import ExampleGrpc from "./apps/example";
import NavigationBar from "./components/NavigationBar";

import { Default } from "./apps/fluentuiExample";

const App = (): JSX.Element => (
    <Provider store={store}>
        <FluentProvider theme={webLightTheme}>
            <Router>
                <NavigationBar items={navigationItems}>
                    <Routes>
                        <Route path="/" element={<ExampleGrpc />} />
                        <Route path="/test1" element={<ExampleGrpc />} />
                        <Route path="/test2" element={<Default />} />
                        <Route path="/test3" element={<AntdExample />} />
                    </Routes>
                </NavigationBar>
            </Router>
        </FluentProvider>
    </Provider>
);

export default App;
