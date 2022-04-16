import React, { useState } from 'react';
import { Routes, Route } from "react-router-dom";

import { Header } from './components/header/Header';
import { Footer } from './components/footer/Footer';
import { Main } from './pages/main/Main';
import { Busket } from './pages/busket/Busket';
import { productsHard } from './constants'

import styles from './App.module.scss';
import { Item } from './components/Item/Item';

export const App = () => {
  const [busket, setBusket] = useState(JSON.parse(localStorage.getItem('busket')) || []);
  const [products, setProducts] = useState(JSON.parse(localStorage.getItem('filteredArray')) || []);
  const [input, setInput] = useState('')
  const [selected, setSelected] = useState([])
  const [price, setPrice] = useState(false)
  const [checkPrice, setCheckPrice] = useState({min: 0, max: 99999999})
  return (
    <div className={styles.app}>
      <div>
        <Header 
          busket={busket}
          input={input}
          setInput={setInput}
          setPrice={setPrice}
        />
        <Routes>
          <Route path="/" element={
            <Main 
              input={input}
              products={products} 
              setProducts={setProducts} 
              setBusket={setBusket}
              busket={busket}
              selected={selected}
              setSelected={setSelected}
              price={price}
              setCheckPrice={setCheckPrice}
            />
          } />
          <Route path="/product" element={<div>PRODUCT</div>} />
          <Route path="/busket" element={
            <Busket 
              busket={busket}
              setBusket={setBusket}
            />
          } />
          <Route path="/shop" element={<div>SHOP</div>} />
          <Route path="/contact" element={<div>CONTACT</div>} />
          <Route path={`/product/:product`} element={
            <Item products={products}/>
          }/>
        </Routes>
      </div>
      <Footer />
    </div>
  );
}