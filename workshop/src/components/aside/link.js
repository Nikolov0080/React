import React from 'react';
import style from './sideBar.module.css'
import {
    Link as Link1
} from 'react-router-dom';
const Link = ({ title, href, index }) => {
    return (
        <li key={index} className={style.list_Item}>
            <Link1 to={href} key={index} className={style.list_item_a}>
                {title}
            </Link1>
        </li>
    )
}


export default Link;