import React from 'react';
import Item from './item'
import style from './sideBar.module.css'

const Aside = () => {
    return (
        <aside className={style.Aside}>
            <ul>
                <Item className1={style.list_Item} text='someText' />
                <Item className1={style.list_Item} text='someText' />
                <Item className1={style.list_Item} text='someText' />
                <Item className1={style.list_Item} text='someText' />
                <Item className1={style.list_Item} text='someText' />
                <Item className1={style.list_Item} text='someText' />
                <Item className1={style.list_Item} text='someText' />
            </ul>
        </aside>

    )
}


export default Aside;