import React, { Component } from 'react';
import style from './footer.module.css'
import Link from '../link';
import getFooter from '../../utils/navigations';
import UserContext from '../../context/userContext';

class Footer extends Component {

    static contextType = UserContext;

    render() {

        const {
            user
        } = this.context;

        const links = getFooter(user);
        return (
            <div>
                <footer className={style.container_footer}>
                    <ul>
                        {links.map((x, index) => {
                            return (
                                <Link key={x.title} href={x.link} title={x.title} index={index} type="footer" />
                            )
                        })}
                    </ul>
                    <p className={style.paragraph}>Paragraph</p>
                </footer>
            </div>
        )
    }

}

export default Footer;