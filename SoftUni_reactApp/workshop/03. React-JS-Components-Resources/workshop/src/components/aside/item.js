import React from 'react';


const Item = ({ className1, text }) => {
    return (
        <li className={className1} >
            <a href="/#">
                {text}
            </a>
        </li>
    )
}

export default Item;