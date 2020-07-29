import React, { Component } from 'react';
import Link from './link';
import style from './sideBar.module.css'
import getNavigation from '../../utils/navigations';
import UserContext from '../../context/userContext';
class Aside extends Component {

    static contextType = UserContext;

    render() {


        const {
            isLogged,
            user
        } = this.context;

        const links = getNavigation(isLogged, user);

        console.log(user)
        return (
            <aside className={style.Aside}>
                <ul>
                    {links.map((x, index) => {
                        return (
                            <Link key={x.title} href={x.link} title={x.title} index={index} />
                        )
                    })}
                </ul>
            </aside>

        )
    }

}


export default Aside;