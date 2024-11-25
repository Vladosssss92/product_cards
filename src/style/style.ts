import styled, { createGlobalStyle } from "styled-components";
import {
  IButtonAddProductVisibilityProps,
  IButtonBasketVisibilityProps,
  IButtonProps,
  IRequriedInput,
} from "../components/product/product.model";
import { ReactComponent as CloseButton } from "../style/icons/close-square-svgrepo-com.svg";
import { ReactComponent as AddProduct } from "../style/icons/add-square-svgrepo-com.svg";
import { ReactComponent as Basket } from "../style/icons/basket-alt-3-svgrepo-com.svg";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    /* outline: 1px solid black; */
  }
  ul, li {
    list-style: none;
  }
  body {
    background-color: gray;
  }
`;

export const SContainer = styled.div`
  margin: 0 auto;
  width: 800px;
  min-width: 200px;
`;

export const STitle = styled.h3`
  text-align: center;
  margin-top: 5px;
  margin-bottom: 15px;
`;

export const SUl = styled.ul`
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 15px;
  margin-bottom: 15px;
`;

export const SList = styled.li`
  background-color: white;
  display: flex;
  flex-direction: column;
  gap: 10px;
  border: 2px solid lightgray;
  border-radius: 10px;
  padding: 15px;
  max-width: 250px;
  div {
    display: flex;
    gap: 20px;
    justify-content: space-between;
    width: 100%;
  }
`;

export const SWrapDescription = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: auto;
`;

export const SImage = styled.img`
  width: 50%;
  height: auto;
  align-self: center;
`;

export const SPrice = styled.p`
  font-size: 20px;
  font-weight: 600;
  color: #a90e12;
  align-self: end;
`;

export const SButton = styled.button<IButtonProps>`
  display: ${({ $modalButton }) => ($modalButton ? "inline-block" : "block")};
  width: ${({ $modalButton, $counter }) =>
    $counter ? "30px" : $modalButton ? "230px" : "115px"};
  height: ${({ $counter }) => ($counter ? "30px" : "")};
  margin-top: ${({ $modalButton }) => ($modalButton ? "40px" : "0")};
  padding: 4px;
  border-radius: ${({ $counter }) => ($counter ? "20px" : "10px")};
  background-color: ${({ $counter }) => ($counter ? "lightgreen" : "")};
  font-size: 14px;
  cursor: pointer;
  &:hover {
    box-shadow: 0 0 5px gray;
  }
`;

export const SOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 99;
`;

export const SModal = styled.div<IRequriedInput>`
  text-align: center;
  padding: 30px;
  position: fixed;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 800px;
  min-width: 400px;
  height: auto;
  border-radius: 15px;
  background-color: #9aafcf;
  z-index: 100;
  transition: 1s;
  h2 {
    margin-bottom: 15px;
  }
  div {
    display: flex;
    align-items: center;
    text-align: center;
    flex-direction: column;
    gap: 20px;
    margin: auto 0;
  }
  input {
    outline: none;
    border-radius: 7px;
    height: 30px;
    width: 250px;
    padding-left: 5px;
    border: 2px solid green;
    &:hover {
      border: 2px solid darkcyan;
    }
    &:focus {
      box-shadow: 0 0 10px darkcyan;
    }
    &[value=""] {
      border: ${({ $requiredInput }) =>
        $requiredInput ? "2px solid red" : ""};
      box-shadow: ${({ $requiredInput }) =>
        $requiredInput ? "0 0 10px red" : ""};
    }
  }
  label {
    cursor: pointer;
  }
`;

export const SButtonCloseModal = styled(CloseButton)`
  width: 40px;
  height: 40px;
  position: absolute;
  right: 5px;
  top: 5px;
  cursor: pointer;
  &:hover {
    filter: drop-shadow(0 0 8px darkblue);
  }
`;

export const SButtonAddProduct = styled(
  AddProduct
)<IButtonAddProductVisibilityProps>`
  position: fixed;
  bottom: 80px;
  right: 22px;
  width: 55px;
  height: 55px;
  display: ${({ $isVisible, $isVisibilityLoadind }) =>
    $isVisible || $isVisibilityLoadind ? "none" : "dispay-block"};
  cursor: pointer;
  &:hover {
    filter: drop-shadow(0 0 10px blue);
  }
`;

export const SButtonBusket = styled(Basket)<IButtonBasketVisibilityProps>`
  position: fixed;
  bottom: 10px;
  right: 10px;
  width: 80px;
  height: 80px;
  display: ${({ $isVisibilityLoadind }) =>
    $isVisibilityLoadind ? "none" : "dispay-block"};
  cursor: pointer;
  z-index: 1;
  &:hover {
    filter: drop-shadow(0 0 10px blue);
  }
`;

export const SButtonBuy = styled.button`
  width: 100%;
  border-radius: 20px;
  font-size: 20px;
  height: 40px;
  cursor: pointer;
  color: white;
  background-color: blue;
  &:hover {
    box-shadow: 0 0 10px darkblue;
  }
`;

export const SCountProductInBasket = styled.span<IButtonBasketVisibilityProps>`
  position: fixed;
  right: 10px;
  bottom: 58px;
  font-size: 15px;
  color: white;
  font-weight: 600;
  width: 22px;
  height: 22px;
  background-color: #1c274c;
  border: 3px solid #1c274c;
  border-radius: 50%;
  display: ${({ $isVisibilityLoadind }) =>
    $isVisibilityLoadind ? "none" : "flex"};
  justify-content: center;
  align-items: center;
`;
