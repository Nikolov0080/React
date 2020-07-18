import React from 'react';
import style from './sideBar.module.css'

const Link = ({ title, href, index }) => {
    console.log(index)
    return (
        <li key={index} className={style.list_Item}>
            <a href={href} key={index} className={style.list_item_a}>
                {title}
            </a>
        </li>
    )
}

export default Link;