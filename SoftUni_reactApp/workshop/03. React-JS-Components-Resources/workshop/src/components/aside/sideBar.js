import React from 'react';
import Link from './link';
import style from './sideBar.module.css'
import getNavigation from '../../utils/navigations';

const Aside = () => {
    const links = getNavigation('userId---Here');
    return (
        <aside className={style.Aside}>
            <ul>
                {links.map((x,index) => {
                    return (
                        <Link key={x.title} href={x.link} title={x.title} index={index} />
                    )
                })}
            </ul>
        </aside>

    )
}


export default Aside;