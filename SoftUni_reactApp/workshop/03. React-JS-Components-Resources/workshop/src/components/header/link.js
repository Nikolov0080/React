import React from "react";
import style from './link.module.css'

const Link = ({ title, href }) => {

    return (
        <li className={style.list_Item}>
            <a href={href} className={style["header-link"]}>
                {title}
            </a>
        </li>
    )
}

export default Link;