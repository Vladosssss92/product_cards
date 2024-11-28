import styled, { createGlobalStyle } from "styled-components";
import {
  IButtonAddProductVisibilityProps,
  IButtonBasketVisibilityProps,
  IButtonDelete,
  IButtonProps,
  IRequriedInput,
} from "../components/product/product.model";
import { ReactComponent as CloseButton } from "../style/icons/close-square-svgrepo-com.svg";
import { ReactComponent as AddProduct } from "../style/icons/add-square-svgrepo-com.svg";
import { ReactComponent as Basket } from "../style/icons/basket-alt-3-svgrepo-com.svg";
import { ReactComponent as Delete } from "../style/icons/delete-1-svgrepo-com.svg";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }
  ul, li {
    list-style: none;
  }
  body {
    background-color: lightgray;
  }
  h1 {
    text-align: center;
    color: #000080;
    margin: 20px;
    font-size: 50px;
  }
  `;

export const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 80%;
  min-width: 200px;
`;

export const SSummProduct = styled.div`
  position: sticky;
  top: 10px;
  border: 2px solid lightgray;
  border-radius: 10px;
  width: 90%;
  margin: 0 auto;
  padding: 15px;
  z-index: 2;
  box-shadow: 0 0 15px black;
  background-color: #c4cce3;
  margin-bottom: 20px;
`;

export const STitle = styled.h3`
  text-align: center;
  margin-top: 5px;
  margin-bottom: 15px;
  span {
    font-size: 25px;
    cursor: pointer;
  }
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
  position: relative;
  gap: 10px;
  border: 2px solid lightgray;
  border-radius: 10px;
  padding: 15px;
  width: 250px;
  justify-content: space-between;
  box-shadow: 0 0 10px black;
  div {
    display: flex;
    gap: 20px;
    width: 100%;
  }
`;

export const SWrapRaiting = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const SWrapCounter = styled.div`
  display: flex;
  justify-content: space-between;
  span {
    align-self: center;
    font-size: 25px;
    font-weight: 800;
    color: #000080;
  }
`;

export const SWrapDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const SPrice = styled.p`
  font-size: 20px;
  font-weight: 600;
  color: #a90e12;
  align-self: end;
`;

export const SImageWrap = styled.div`
  width: 50px;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background-color: white;
`;
export const SImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
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
  width: 70%;
  max-width: 400px;
  min-width: 200px;
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
  label {
    &::before {
      content: "Добавьте изображение товара";
      padding-top: 5px;
      display: inline-block;
      background-color: white;
      color: black;
      border-radius: 5px;
      cursor: pointer;
      border-radius: 7px;
      border: 2px solid blue;
      height: 25px;
      width: 255px;
      transition: background-color 0.3s ease;
    }
    &:hover {
      border-radius: 7px;
      box-shadow: 0 0 10px darkcyan;
    }
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
    &[type="file"] {
      border: none;
      display: none;
    }
  }
  label {
    cursor: pointer;
  }
`;

export const SButtonClose = styled(CloseButton)<IButtonProps>`
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
  bottom: 85px;
  right: 12px;
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
  right: 0;
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
  right: 2px;
  bottom: 60px;
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

export const SButtonDelete = styled(Delete)<IButtonDelete>`
  display: ${({ $custom }) => ($custom ? "dispay-block" : "none")};
  width: 40px;
  height: 40px;
  position: absolute;
  right: 5px;
  top: 5px;
  cursor: pointer;
  &:hover {
    filter: drop-shadow(0 0 8px red);
  }
`;
