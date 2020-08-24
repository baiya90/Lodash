import React from 'react';
// import {Route, Router  } from "react-router";
import { Route } from "react-router-dom";
import Page from "./page";


class App extends React.Component {
    render() {
        return (
            <Route component={Page}>  </Route>
        );
    }
}

export default App;