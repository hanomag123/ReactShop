import React from "react";
import styles from "./StarRating.module.scss"
import {FaStar} from "react-icons/fa"

// const Star = ({selected = false}) => <FaStar color={selected ? 'red' : 'grey'} />

export const StarRating = ({rating}) => {
    return [...Array(5)].map((_, i) => <FaStar key={i} color={rating > i ? 'red' : 'grey'}/>)
}