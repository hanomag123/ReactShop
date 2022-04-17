import React from "react";

export const Inputs = React.memo(({filter, handleBlur, changeInput}) => {
    return (
        <>
                <span>от</span><input name="min" value={filter.price[0]} onBlur={e => handleBlur(e)} onChange={e=>changeInput(e)} type="number" />
                <span>до</span><input name="max" value={filter.price[1]} onBlur={e => handleBlur(e)} onChange={e=>changeInput(e)} type="number" />
        </>
    );
})