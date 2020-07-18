import React from 'react';
import style from './index.module.css';
import Header from '../../components/header/index';
import Aside from '../../components/aside/sideBar';
import Footer from '../../components/footer/footer';


const ShareThoughts = () => {
    return (
        <div className={style.app}>
            <Header />
            <div className={style.container}>
                <Aside />
                <div className={style.inner}>
                    
                </div>
            </div>
            <Footer />
        </div>
)
}

export default ShareThoughts;