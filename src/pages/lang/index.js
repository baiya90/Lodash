import React from 'react';
import {Route} from "react-router-dom";
import IsObject from "./IsObject";
import isSymbol from "./isSymbol";

class LangIndex extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            // location: props.history.location
        };
    }
    render() {
        return (
            <>
                <Route path={'/lang/isObject'} component={IsObject} />
                <Route path={'/lang/isSymbol'} component={isSymbol} />
            </>
        );
    }
}

export default LangIndex;
