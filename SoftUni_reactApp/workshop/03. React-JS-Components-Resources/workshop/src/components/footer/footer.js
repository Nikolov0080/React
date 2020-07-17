import React from 'react';
import style from './footer.module.css'
import Link from '../link';
import getFooter from '../../utils/navigations';

const Footer = () => {
    const links = getFooter();
    return (
        <div>
            <footer className={style.container_footer}>
                <ul>
                    {links.map((x) => {
                        return (
                            <Link href={x.link} title={x.title} type="footer" />
                        )
                    })}
                </ul>
                <p className={style.paragraph}>Paragraph</p>
            </footer>
        </div>

    )
}

export default Footer;