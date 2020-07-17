import React from 'react';
import style from './footer/footer.module.css'

const Link = ({ title, href }) => {
    return (
        <li className={style.listItem}>
            <a href={href} className={style["header-link"]}>
                {title}
            </a>
        </li>
    )
}

export default Link;