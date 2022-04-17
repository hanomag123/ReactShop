import React, { memo, useState } from 'react';
import { Link } from 'react-router-dom';
import { StarRating } from '../StarRating/StarRating';
import Rating from '@mui/material/Rating';


import styles from './ProductInfo.module.scss';

export const ProductInfo = memo(({
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
                <Rating name="read-only" value={rating} readOnly />
                {/* <StarRating rating={rating}/> */}
            </div>
        </section>
    )
}, () => true)