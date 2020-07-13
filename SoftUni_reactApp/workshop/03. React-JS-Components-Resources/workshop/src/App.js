import React from 'react';
import style from './app.module.css';
import Header from './components/header/index';
import Aside from './components/aside/sideBar';
import Origamis from './components/origamis';

function App() {
  return (
    <div className={style.app}>
      <Header />
      <div className={style.container}>
        <Aside />
        <Origamis />
      </div>

    </div>
  );
}

export default App;
