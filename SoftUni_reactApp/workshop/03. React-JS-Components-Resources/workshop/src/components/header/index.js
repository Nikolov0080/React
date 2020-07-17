import React from 'react';
import Link from './link';
import style from './index.module.css';
import getNavigation from '../../utils/navigations'
const Header = () => {

    const links = getNavigation();
    return (
        <nav className={style.navigation}>
            <ul>
                {links.map((x)=>{
                    return(
                        <Link href={x.link} title={x.title} />
                    )
                })}
            </ul>
        </nav>
    )
}

export default Header;

