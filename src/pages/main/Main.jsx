import React, { useEffect } from 'react';

import { ProductInfo } from '../../components/productInfo/ProductInfo';
import { urlForProduct } from '../../constants';

import styles from './Main.module.scss';
import { newCount } from '../../Helper';

export const Main = ({
    products, setProducts, setBusket, busket
}) => {

    const getData = async() => {
        const data = await fetch(urlForProduct);
        const dataJson = await data.json()
        console.log(dataJson)
        setProducts(dataJson);
    }

    useEffect(() => {
        getData();
    }, [])

    const addedBusket = el => {
        const currentProd = busket.find(product => product.id === el.id)
        if (currentProd) {
            setBusket(newCount(busket, currentProd.id))
        } else {
        setBusket(state => [...state, {
        ...el,
        count: 1
    }])
    }
}

    return(
        <div className={styles.productContainer}>
            {
                products?.map(el => (
                    <ProductInfo
                        key={el.id}
                        img={el.image}
                        name={el.title}
                        price={el.price}
                        setBusket={() => addedBusket(el)}
                        busket={busket}
                    />
                ))
            }
        </div>
    )
}