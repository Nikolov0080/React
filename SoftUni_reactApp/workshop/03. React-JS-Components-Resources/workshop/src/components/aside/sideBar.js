import React from 'react';
import Link from './link';
import style from './sideBar.module.css'
import getAside from '../../utils/navigations';

const Aside = () => {
    const links = getAside();
    return (
        <aside className={style.Aside}>
            <ul>
                {links.map((x,index) => {
                    return (
                        <Link href={x.link} title={x.title} index={index} />
                    )
                })}
            </ul>
        </aside>

    )
}


export default Aside;