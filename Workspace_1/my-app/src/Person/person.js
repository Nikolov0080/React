import React from 'react';

const person = (props) => {
    return (
        <div>
            <p>{props.name} age is {props.age}</p>
            <p>{props.children} </p>
        </div>
    )
}

export default person;