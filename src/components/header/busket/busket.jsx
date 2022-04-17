import React, {memo} from 'react';
import { Link } from "react-router-dom";
import styles from '../Header.module.scss';

import busketIcon from '../../../assets/images/Busket/busket.svg';

export const Busket = memo(({ busket, input , setInput }) => {

    const getSum = () => {
        return busket.reduce((acc, el) => {
            return acc + (el.price * el.count)
        }, 0).toFixed(2)
    }
    console.log(getSum())
    return(
        <div className={styles.busket}>
            <input value={input} onChange={e => setInput(e.target.value)}></input>
            <Link className={styles.busketIcon} to='/busket'>
                <img src={busketIcon} />
                <div className={styles.count}>{busket.length}</div>
            </Link>
            <div className={styles.money}>$ {getSum()}</div>
        </div>
    )
})

