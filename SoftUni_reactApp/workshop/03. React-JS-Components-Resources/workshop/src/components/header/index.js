import React from 'react';
import Link from './link';
import style from './index.module.css';

const Header = () => {
    return (
        <nav className={style.navigation}>
            <ul>
                <Link href="#" title="One" />
                <Link href="#" title="Two" />
                <Link href="#" title="Three" />
                <Link href="#" title="Four" />
            </ul>
        </nav>
    )
}

export default Header;

