import React from 'react';
import style from './footer.module.css'

const Link = ({ text }) => {
    return (
        <li className={style.listItem}>
            <a href="#" className={style.link}>{text}</a>
        </li>
    )
}

export default Link;