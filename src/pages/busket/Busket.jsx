import React from 'react';

import { BusketItem } from './busketItem/BusketItem';

import styles from './Busket.module.scss';

export const Busket = ({ busket, setBusket }) => {
    const ids = busket.map(el => el.id)
    const filtered = busket.filter(({id}, index) => !ids.includes(id, index + 1))

    return(
            <div className={styles.busket}>
            <div className={styles.items}>
                {
                    filtered.map(el => (
                        <BusketItem 
                            key={el.id}
                            img={el.image}
                            title={el.title}
                            price={el.price}
                            count={el.count}
                            setBusket={setBusket}
                            id={el.id}
                            busket={busket}
                        />
                    ))
                }
            </div>
        </div>
    )
} 