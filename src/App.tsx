import React, { useState } from 'react';
import ProductCard from './components/Product-card.component';
import { GlobalStyle, SButtonAddProduct, SButtonBusket } from './style/style';
import { Modal } from './components/Modal';


function App() {
  const [isOpenModal, setOpenModal] = useState(false)
  return (
    <>
      <ProductCard />
      <SButtonBusket />
      <SButtonAddProduct onClick={() => setOpenModal(true)} $isVisible={isOpenModal} />
      <Modal isOpen={isOpenModal} onClose={setOpenModal} />
      <GlobalStyle />
    </>
  );
}

export default App;
