import React from 'react';
import { Route } from "react-router-dom";
import ArrayIndex from "../pages/array/index";
import CollectionIndex from "../pages/collection/index";
import LangIndex from "../pages/lang";

class RouterCtx extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            // location: props.history.location
        };
    }
    render() {
        return (
            <>
                <Route component={ArrayIndex} />
                <Route component={CollectionIndex} />
                <Route component={LangIndex} />
            </>
        );
    }
}

export default RouterCtx;
