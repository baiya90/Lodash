import React from 'react';

class Chunk extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            // location: props.history.location
        };
    }
    render() {
        return (
            <>
                <p>ChunkChunkChunk</p>
                <p>ChunkChunkChunk</p>
            </>
        );
    }
}

export default Chunk;