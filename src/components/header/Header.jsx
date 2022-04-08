import React from 'react';
import { Link } from "react-router-dom";

import { Busket } from './busket/busket';
import { urlLogo } from '../../constants';

import styles from  './Header.module.scss';

export const Header = ({ busket }) => {
    return(
        <header className={styles.header}>
            <img src={urlLogo} />
            <div>
                <Link to='/'>Home</Link>
                <div>Shop</div>
                <div>Contact</div>
            </div>
            <Busket busket={busket}/>
        </header>
    )
}