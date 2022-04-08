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
  const [busket, setBusket] = useState([]);
  const [products, setProducts] = useState(productsHard);

  return (
    <div className={styles.app}>
      <div>
        <Header busket={busket}/>
        {/* <Banner /> */}

        <Routes>
          <Route path="/" element={
            <Main 
              products={products} 
              setProducts={setProducts} 
              setBusket={setBusket}
              busket={busket}
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