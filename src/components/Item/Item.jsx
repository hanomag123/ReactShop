import React from "react";
import { StarRating } from "../StarRating/StarRating";
import styles from "./Item.module.scss"

const getName = pathname => {
    return pathname.replace(/(\/product\/)|(%20)/gi, (...match) => {
        return ''
    }).trim()
}

export const Item = ({products}) => {
    const pathname = getName(window.location.pathname);
    const currentObj = products.find(v => v.title.replace(/ |\//g, '') === pathname);
    const rating = Math.floor(currentObj.rating.rate);
    return (
        <div className={styles.item}>
            <div><img className={styles.image} src={currentObj.image} alt="img" /></div>
            <div className={styles.title}>{currentObj.title}</div>
            <div className={styles.description}>{currentObj.description}</div>
            <div className={styles.price}>$ {currentObj.price}</div>
            <div className={styles.rate}><StarRating rating={rating}/>
            </div>
        </div>
    );
}

console.log(getName(window.location.pathname))