import React, { useEffect , useMemo, useState, useReducer} from 'react';

import { ProductInfo } from '../../components/productInfo/ProductInfo';
import { urlForProduct } from '../../constants';

import styles from './Main.module.scss';
import { newCount } from '../../Helper';
import {SliderPrice} from './sliderPrice/SliderPrice'
import Checkbox from '@mui/material/Checkbox';

export const Main = React.memo(({
    products, setProducts, setBusket, busket, input, selected, setSelected, price, setCheckPrice
}) => {
    const Filter = {
        price: [0, 1000],
        'men\'s clothing': true, 
                    'women\'s clothing': true, 
                    'electronics': true, 
                    'jewelery': true
    }
    const [filter, setFilter] = useReducer((user, newData) => ({...user, ...newData}), Filter)
    const init = useMemo(() => {
        
    }, [])
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
    const category = ['men\'s clothing', 'women\'s clothing', 'electronics', 'jewelery']
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
    useEffect(() => {
        let mainProduct = JSON.parse(localStorage.getItem('products'))
        setProducts(mainProduct = mainProduct?.filter(v => v.price < filter.price[1] && v.price > filter.price[0] && filter[v.category]))
        localStorage.setItem('filter', JSON.stringify(filter))
    }, [filter])
    useEffect(() => {
        setProducts(current => current?.sort((a, b) => price ? a.price - b.price : b.price - a.price))
    }, [price])

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
    const changeInput = e => {
        console.log('hello')
        if (e.target.value < 0) {
            e.target.value = 0
        } else if (e.target.value > 1000) {
            e.target.value = 1000
        }
        console.log(filter)
        e.target.name === 'min' ? setFilter({price: [+e.target.value, filter.price[1]]}) : (
            setFilter({price: [filter.price[0], +e.target.value]})
        )

    }
    const handleBlur = (e) => {
        if (e.target.value < 0) {
            e.target.value = 0
        } else if (e.target.value > 1000) {
            e.target.value = 1000
        }
    };
    console.log('render')
    const changeBox = (e) => {
        // setFilter(current => Object.assign({}, current, current.categorys[e.target.id] = !current.categorys[e.target.id]))
        setFilter({[e.target.id]: e.target.checked})
    }
    return (
        <>
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
            <div className={styles.filter}>
                <span>от</span><input name="min" value={filter.price[0]} onBlur={e => handleBlur(e)} onChange={e=>changeInput(e)} type="number" />
                <span>до</span><input name="max" value={filter.price[1]} onBlur={e => handleBlur(e)} onChange={e=>changeInput(e)} type="number" />
                <SliderPrice filter={filter} setFilter={setFilter}/>
                {[...Array(category.length)].map((_, i) => <div key={i}><Checkbox checked={filter[category[i]]} onChange={e => changeBox(e)} id={category[i]} /><span>{category[i]}</span></div>)}
            </div>
        </>
    )
})