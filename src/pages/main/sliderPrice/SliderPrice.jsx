import React, { useCallback , memo} from "react";
import Slider from '@mui/material/Slider';
import { throttle } from "../../../Helper";

const minDistance = 10;

export const SliderPrice = memo(({filter, setFilter, products}) => {
    const handleChange1 = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
        return;
    }
    if (activeThumb === 0) {
        setFilter({price:[Math.min(newValue[0],filter.price[1] - minDistance), filter.price[1]]});
    } else {
        setFilter({price:[filter.price[0], Math.max(newValue[1], filter.price[0] + minDistance)]});
    }
    };
    // const debouncedChangeHandler = useCallback(throttle(handleChange1, 100), [])
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
})