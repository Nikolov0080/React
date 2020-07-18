import React from 'react';
import Link from './link';
import style from './index.module.css';
import getNavigation from '../../utils/navigations'
const Header = () => {

    const links = getNavigation();
    return (
        <nav className={style.navigation}>
            <ul>
                {links.map((x,index)=>{
                    return(
                        <Link key={x.title} href={x.link} title={x.title} index={index} />
                    )
                })}
            </ul>
        </nav>
    )
}

export default Header;

