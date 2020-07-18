import React from "react";
import style from './link.module.css'

const Link = ({ title, href ,index}) => {

    return (
        <li key={index} className={style.list_Item}>
            <a href={href} key={index} className={style["header-link"]}>
                {title}
            </a>
        </li>
    )
}

export default Link;