import React, { useEffect , useReducer} from 'react';

import { ProductInfo } from '../../components/productInfo/ProductInfo';
import { urlForProduct } from '../../constants';

import styles from './Main.module.scss';
import { newCount } from '../../Helper';
import { Filter } from '../../components/filter/Filter';

export const Main = React.memo(({
    products, setProducts, setBusket, busket, input, selected, setSelected, price, setCheckPrice
}) => {
    const FILTER = {
        price: [0, 1000],
        'men\'s clothing': true, 
        'women\'s clothing': true, 
        'electronics': true, 
        'jewelery': true
    }
    const [filter, setFilter] = useReducer((user, newData) => ({...user, ...newData}), FILTER)
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
            <Filter filter={filter} setFilter={setFilter} products={products} />
        </>
    )
}, (prev, next) => prev.products?.length === next.products?.length ? true : false)