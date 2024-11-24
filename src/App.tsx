import { useState } from 'react';
import ProductCard from './components/Product-card.component';
import { GlobalStyle } from './style/style';
import { ModalAddProduct } from './components/ModalAddProduct';

import { ButtonsAddProductAndButton } from './components/ButtonsAddProductAndButton';
import { ModalBasket } from './components/ModalBasket';

function App() {
  const [isOpenModalAddProduct, setOpenModalAddProduct] = useState(false)
  const [isOpenModalBasket, setOpenModalBasket] = useState(false)
  return (
    <>
      <ProductCard />
      <ModalAddProduct isOpen={isOpenModalAddProduct} onClose={setOpenModalAddProduct} />
      <ModalBasket isOpen={isOpenModalBasket} onClose={setOpenModalBasket}/>
      <ButtonsAddProductAndButton isOpenAddProduct={setOpenModalAddProduct} isOpenBasket={setOpenModalBasket} isVisibility={isOpenModalAddProduct} />
      <GlobalStyle />
    </>
  );
}

export default App;
