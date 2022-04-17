import React from "react";
import { Checkbox } from "@mui/material";

export const Checkboxes = React.memo(({filter, changeBox, products}) => {
    const category = ['men\'s clothing', 'women\'s clothing', 'electronics', 'jewelery']
    return (
            <>
            {[...Array(category.length)].map((_, i) => <div key={i}><Checkbox checked={filter[category[i]]} onChange={e => changeBox(e)} id={category[i]} /><span>{category[i]}</span></div>)}
            </>       );
}, (prev, next) => prev.products?.length === next.products?.length ? true : false)
