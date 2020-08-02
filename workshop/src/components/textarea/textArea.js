import React from 'react';
import style from './textArea.module.css';

const TextArea = ({ func }) => {

    return (
        <textarea onChange={e => func(e)} className={style.textarea}></textarea>
    )
}

export default TextArea;