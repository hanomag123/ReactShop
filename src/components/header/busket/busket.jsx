import React from 'react';
import { Link } from "react-router-dom";

import busketImg from '../../../assets/images/basket.svg';

export const Busket = ({ busket }) => {

    const getSum = () => {
        // let sum = 0;
        // busket.forEach(el => sum = sum + el.price)
        // return sum
        
        return busket.reduce((acc, el) => {
            return acc + (el.price * el.count)
        }, 0).toFixed(2)
    }

    console.log(getSum())
    return(
        <Link to='/busket'>
            <img src={busketImg} />
            <div>{busket.length}</div>
            <div>{getSum()}</div>
        </Link>
    )
}