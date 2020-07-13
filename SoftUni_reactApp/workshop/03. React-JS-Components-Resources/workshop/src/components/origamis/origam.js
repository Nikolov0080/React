import React from 'react';
import style from './index.module.css';


const Origam = ({ description, author }) => {
    return (
        <div className={style.Post}>
                <img className={style.img}></img>
            <p className={style.description}>
                {description}
            </p>

         
     

            <div>
                <span className={style.user}>{author.username}</span>
            </div>
        </div>
    )
}

export default Origam