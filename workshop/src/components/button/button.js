import React from 'react';
import style from './button.module.css';

const Button = ({ value, onClick ,func}) => {

    return (
        <button type="submit" className={style.button} onClick={onClick}>
            {value}
        </button>
    );
}

export default Button;