import React, { Component } from 'react';
import Link from './link';
import style from './index.module.css';
import getNavigation from '../../utils/navigations';
import UserContext from '../../context/userContext';


class Header extends Component {

    static contextType = UserContext;

    render() {

        const {
            user
        } = this.context;

        const links = getNavigation(user);
      
        return (
            <nav className={style.navigation}>
                <ul>
                    {links.map((x, index) => {
                        return (
                            <Link key={x.title} href={x.link} title={x.title} index={index} />
                        )
                    })}
                </ul>
            </nav>
        )
    }
}

export default Header;

