import React from 'react';
import { Route } from "react-router-dom";
import ArrayIndex from "../pages/array/index";


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
            </>
        );
    }
}

export default RouterCtx;