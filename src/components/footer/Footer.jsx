import React from 'react';

import styles from './Footer.module.scss';
import footerLogo from '../../assets/images/footerLogo.png'

export const Footer = () => {
    return(
        <footer className={styles.footer}>
            <img src={footerLogo} />
            <div className={styles.footer__container}>
                <div className={styles.footer__title}>ABOUT THE STORE</div>
                <div className={styles.footer__description}>STORE - worldwide fashion store since 1978. We sell over 1000+ branded products on our web-site.</div>
                <div className={styles.footer__link}>www.company.com</div>
            </div>
        </footer>
    )
}