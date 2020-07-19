import React from "react";
import style from './link.module.css'
import {
    Link 
} from 'react-router-dom';

const LinkComponent = ({ title, href, index }) => {

    return (
        <li className={style.list_Item}>
            <Link to={href} key={index} clLinkssName={style["header-link"]}>
                {title}
            </Link>
        </li>
    )
}

export default LinkComponent;