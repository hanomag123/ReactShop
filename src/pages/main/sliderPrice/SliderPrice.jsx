import React from "react";
import Slider from '@mui/material/Slider';


const minDistance = 10;


export function SliderPrice({filter, setFilter}) {

    const handleChange1 = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
        return;
    }
    if (activeThumb === 0) {
        setFilter(current => current = {...current, price:[Math.min(newValue[0],current.price[1] - minDistance), current.price[1]]});
    } else {
        setFilter(current => current = {...current, price:[current.price[0], Math.max(newValue[1], current.price[0] + minDistance)]});
    }
    };
    
    return (
        <div>
            <Slider
        getAriaLabel={() => 'Minimum distance'}
        value={filter.price}
        onChange={handleChange1}
        valueLabelDisplay="auto"
        disableSwap
        max={1000}
        aria-labelledby="input-slider"
            />
        </div>
    );
}