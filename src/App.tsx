import { useState } from 'react';
import ProductCard from './components/Product-card.component';
import { GlobalStyle } from './style/style';
import { ModalAddProduct } from './components/ModalAddProduct';



import { ButtonsAddProductAndButton } from './components/ButtonsAddProductAndButton';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Basket } from './components/Basket.component';

function App() {

  const [isOpenModalAddProduct, setOpenModalAddProduct] = useState(false)
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/product_cards' element={
          <>
            <ProductCard />
            <ModalAddProduct isOpen={isOpenModalAddProduct} onClose={setOpenModalAddProduct} />
            <ButtonsAddProductAndButton isOpenAddProduct={setOpenModalAddProduct} isVisibility={isOpenModalAddProduct} />
          </>
        } />
        <Route path='/basket' element={
          <Basket />
        } />
      </Routes>
      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
