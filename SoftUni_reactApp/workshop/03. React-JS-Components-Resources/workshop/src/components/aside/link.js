import React from 'react';
import style from './sideBar.module.css'

const Link = ({ title, href }) => {
    return (
        <li className={style.list_Item}>
            <a href={href} className={style.list_item_a}>
                {title}
            </a>
        </li>
    )
}

export default Link;