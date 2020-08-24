import React from 'react';
import {Route} from "react-router-dom";
import Chunk from "./chunk";

class ArrayIndex extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            // location: props.history.location
        };
    }
    render() {
        return (
            <>
                <Route path={'/array/chunk'} component={Chunk} />
            </>
        );
    }
}

export default ArrayIndex;