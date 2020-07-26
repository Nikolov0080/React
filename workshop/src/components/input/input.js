import React from 'react';
import style from './input.module.css';

const Input = ({ label, name, placeholder, type,onChange }) => {
    return (
        <div>
            <label className={style.label}>{label}</label>
            <input className={style.input}
                name={name} 
                type={type}
                onChange={onChange}
                placeholder={placeholder}></input>
        </div>

    )
}

export default Input