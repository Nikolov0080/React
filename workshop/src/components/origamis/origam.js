import React from 'react';
import style from './index.module.css';

const image = "https://upload.wikimedia.org/wikipedia/commons/f/f9/Phoenicopterus_ruber_in_S%C3%A3o_Paulo_Zoo.jpg"

const Origam = ({ description, author, index }) => {
    return (
        <div className={style.Post}>
            <img src={image} alt="ajhsjkahskj" className={style.img} />
            <p className={style.description}>
               {index+=1}. {description}
            </p>
            <div>
                <span className={style.user}>{author.username}</span>
            </div>
        </div>
    )
}

export default Origam; 