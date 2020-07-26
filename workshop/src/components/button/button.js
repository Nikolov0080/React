import React from 'react';
import style from './button.module.css';

const Button = ({ type ,value }) => {

    return (
        <button type="submit" className={style.button}>
            {value}
        </button>
    );
}

export default Button;