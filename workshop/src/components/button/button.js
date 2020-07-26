import React from 'react';
import style from './button.module.css';

const Button = ({value }) => {

    return (
        <button type="submit" className={style.button}>
            {value}
        </button>
    );
}

export default Button;