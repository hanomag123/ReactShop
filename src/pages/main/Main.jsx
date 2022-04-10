import React, { useEffect } from 'react';

import { ProductInfo } from '../../components/productInfo/ProductInfo';
import { urlForProduct } from '../../constants';

import styles from './Main.module.scss';
import { newCount } from '../../Helper';

export const Main = ({
    products, setProducts, setBusket, busket, input, selected, setSelected
}) => {

    const getData = async() => {
        if (!localStorage.getItem('products')) {
        const data = await fetch(urlForProduct);
        const dataJson = await data.json()
        console.log(dataJson)
        setProducts(dataJson);
        localStorage.setItem('products', JSON.stringify(dataJson))
        } else {
            setProducts(JSON.parse(localStorage.getItem('products')))
        }
    }

    useEffect(() => {
        getData();
    }, [])
    useEffect(async () => {
        await getData()
        let regExp = new RegExp(`${input}`, 'gi')
        let mainProduct = JSON.parse(localStorage.getItem('products'))
        let newArr = mainProduct.filter(el => regExp.test(el.title))
        setProducts(newArr)
    }, [input])

    const addedBusket = el => {
        const currentProd = busket.find(product => product.id === el.id)
        if (currentProd) {
            setBusket(newCount(busket, currentProd.id))
            localStorage.setItem('busket', JSON.stringify(newCount(busket, currentProd.id)))
        } else {
            setBusket(state => [...state, {
            ...el,
            count: 1
            }])
            const abc = JSON.parse(localStorage.getItem('busket')) || []

            abc.push({
                ...el,
                count: 1
            })
            localStorage.setItem('busket', JSON.stringify(abc))
        }
    }

    console.log(products)
    return (
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
                        rating={Math.floor(el.rating.rate)}
                    />
                ))
            }
        </div>
    )
}