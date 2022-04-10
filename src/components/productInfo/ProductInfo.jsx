import React from 'react';
import { Link } from 'react-router-dom';
import { StarRating } from '../StarRating/StarRating';

import styles from './ProductInfo.module.scss';

export const ProductInfo = ({
    img, name, price, setBusket, rating
}) => {
    const showButton = (e) => {
        const parent = e.target.closest('section');
        parent.children[1].hidden = !parent.children[1].hidden
    }
    return(
        <section onPointerEnter={e => showButton(e)} onPointerLeave={e => showButton(e)} className={styles.product}>
            <Link to={`/product/${name.replace(/ |\//g, '')}`}><img src={img} /></Link>
            <button onClick={() => setBusket()} hidden>Add</button>
            <div className={styles.product__container}>
                <div className={styles.name}>{name}</div>
                <div className={styles.price}>$ {price} / <s>$ {price}</s></div>
                <StarRating rating={rating}/>
            </div>
        </section>
    )
}