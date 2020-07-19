import React from 'react';
import style from './footer/footer.module.css'

const Link = ({ title, href, index }) => {
    return (
        <li key={index} className={style.listItem}>
            <a href={href} key={index} className={style["header-link"]} >
                {title}
            </a>
        </li>
    )
}

export default Link;