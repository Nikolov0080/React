
import React from 'react';
import style from './wrapper.modules.css'
import Header from '../header/index';
import Aside from '../aside/sideBar';
import Footer from '../footer/footer';

function PageWrapper(props) {
    return (
        <div className={style.app}>
            <Header />
            <div className={style.container}>
                <Aside />
                {props.children}

            <div className={style.inner}>
            </div>
            </div>
            <Footer />
        </div>
    );
}

export default PageWrapper;