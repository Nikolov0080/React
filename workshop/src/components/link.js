import React from 'react';
import style from './footer/footer.module.css'
import {
    Link as Link1
} from 'react-router-dom';

const Link = ({ title, href, index }) => {
    return (
        <li key={index} className={style.listItem}>
         <Link1 to={href} key={index} className={style["header-link"]}>
                {title}
            </Link1>

        </li>
    )
}

   

export default Link;