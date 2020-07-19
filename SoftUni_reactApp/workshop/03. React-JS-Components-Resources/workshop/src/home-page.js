import React from 'react';
import style from './app.module.css';
import Header from './components/header/index';
import Aside from './components/aside/sideBar';
import Origamis from './components/origamis';
import Footer from './components/footer/footer';
function App() {
  return (
    <div className={style.app}>
      <Header />
      <div className={style.container}>
        <Aside />
        <div className={style.inner}>
        <Origamis />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
