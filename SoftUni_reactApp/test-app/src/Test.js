import React from 'react';

function Test(props) {
    return (
        <code>
            Code: {props.children}
            <br></br>
           <name>{props.name}</name>
        </code>
    )
}

export default Test;