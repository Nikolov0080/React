import React from 'react';

function Test(props) {
    return (
        <code>
            Code: {props.children}
            <br></br>
            <h1>{props.name+ props.data}</h1>
        </code>
    )
}

export default Test;