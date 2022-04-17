import React from "react";
import styles from "./../../pages/main/Main.module.scss"
import { SliderPrice } from "../../pages/main/sliderPrice/SliderPrice";
import { Checkboxes } from "./CheckBoxes/CheckBoxes";

export const Filter = React.memo(({filter, setFilter, products}) => {
    const handleBlur = (e) => {
        if (e.target.value < 0) {
            e.target.value = 0
        } else if (e.target.value > 1000) {
            e.target.value = 1000
        }
    };
    // console.log('render', products)
    const changeBox = (e) => {
        // setFilter(current => Object.assign({}, current, current.categorys[e.target.id] = !current.categorys[e.target.id]))
        setFilter({[e.target.id]: e.target.checked})
    }
    const changeInput = e => {
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
    return (
    <div className={styles.filter}>
        <span>от</span><input name="min" value={filter.price[0]} onBlur={e => handleBlur(e)} onChange={e=>changeInput(e)} type="number" />
        <span>до</span><input name="max" value={filter.price[1]} onBlur={e => handleBlur(e)} onChange={e=>changeInput(e)} type="number" />
        <SliderPrice filter={filter} setFilter={setFilter} products={products}/>
        <Checkboxes changeBox={changeBox} filter={filter} products={products}/>
    </div>
    )
}, )