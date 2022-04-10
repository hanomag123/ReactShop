import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { StarRating } from '../StarRating/StarRating';

import styles from './ProductInfo.module.scss';

export const ProductInfo = ({
    img, name, price, setBusket, rating
}) => {
    const [visible, setVisible] = useState(false)
    const showButton = () => {
        setVisible(current => !current)
    }
    return(
        <section onPointerEnter={showButton} onPointerLeave={showButton} className={styles.product}>
            <Link to={`/product/${name.replace(/ |\//g, '')}`}><img src={img} /></Link>
            {visible && <button onClick={() => setBusket()}>Add</button>}
            <div className={styles.product__container}>
                <div className={styles.name}>{name}</div>
                <div className={styles.price}>$ {price} / <s>$ {price}</s></div>
                <StarRating rating={rating}/>
            </div>
        </section>
    )
}