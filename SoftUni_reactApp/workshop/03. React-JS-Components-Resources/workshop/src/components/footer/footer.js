import React from 'react';
import style from './footer.module.css'
import Link from './link';


const Footer = () => {
    return (
        <div>
            <footer className={style.container_footer}>
                <ul>
                    <Link text="1" />
                    <Link text="2" />
                    <Link text="3" />
                    <Link text="4" />
                    <Link text="4" />
                    <Link text="4" />
                    <Link text="4" />
                    <Link text="4" />
                    <Link text="4" />
                    <Link text="4" />
                    <Link text="4" />
                    <Link text="4" />
                    <Link text="4" />
                    <Link text="4" />
                    <Link text="4" />
                    <Link text="4" />
                    <Link text="5" />
                </ul>
                <p className={style.paragraph}>Paragraph</p>
            </footer>
        </div>

    )
}

export default Footer;