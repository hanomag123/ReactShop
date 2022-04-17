import React from 'react';
import { Link } from "react-router-dom";

import { Busket } from './busket/busket';
import { urlLogo } from '../../constants';
import logo from '../../assets/images/logo.png'

import styles from  './Header.module.scss';

export const Header = React.memo(({ busket , input, setInput, setPrice}) => {

    return(
        <header className={styles.header}>
            <img src={logo} />
            <nav>
                <Link to='/'>Home</Link>
                <div>About</div>
                <div onClick={() => setPrice(current => !current)}>Product</div>
                <div>Blog</div>
                <div>Shop</div>
                <div>Contact us</div>
            </nav>
            <Busket busket={busket} input={input} setInput={setInput}/>
        </header>
    )
})