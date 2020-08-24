import React from 'react';
import {Route} from "react-router-dom";
import ToNumber from "./toNumber";

class CollectionIndex extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            // location: props.history.location
        };
    }
    render() {
        return (
            <>
                <Route path={'/collection/toNumber'} component={ToNumber} />
            </>
        );
    }
}

export default CollectionIndex;
