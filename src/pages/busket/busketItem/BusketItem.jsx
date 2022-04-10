import React, { useState } from 'react';
import { newCount } from '../../../Helper';
import { Link } from 'react-router-dom';

import styles from './BusketItem.module.scss'

export const BusketItem = ({
    img, title, price,
    count, id, busket,
    setBusket
}) => {

    const onDelete = () => {
        const newItemsBusket = busket.filter(el => el.id !== id);
        setBusket(newItemsBusket);
    }

    const changeInput = (e) => {
        const text = e.target.value;
        setBusket(newCount(busket, id, Number(text)))
    }

    return(
        <div className={styles.itemContainer}>
            <button onClick={onDelete}>X</button>
            <Link to={`/product/${title.replace(/ |\//g, '')}`}><img src={img} /></Link>
            <div>{title}</div>
            <div>{price}</div>
            <input onChange={changeInput} type="number" min="1" value={count} />
            <div>{(count * price).toFixed(2)}</div>
        </div>
    )
}