import React from 'react';
import { Link } from 'react-router-dom';

import styles from './ProductInfo.module.scss';

export const ProductInfo = ({
    img, name, price, setBusket
}) => {
    return(
        <div className={styles.product}>
            <Link to={`/product/${name}`}><img src={img} /></Link>
            <div>{name}</div>
            <div>{price}</div>
            <button onClick={() => setBusket()}>ADD TO CART</button>
        </div>
    )
}