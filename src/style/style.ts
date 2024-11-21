import styled, { createGlobalStyle } from "styled-components";
import {
  IButtonSaveNewProducr,
  IButtonVisibilityProps,
  IRequriedInput,
} from "../components/product/product.model";
import { ReactComponent as CloseButton } from "../style/icons/close-square-svgrepo-com.svg";
import { ReactComponent as AddProduct } from "../style/icons/add-square-svgrepo-com.svg";
import { ReactComponent as Basket } from "../style/icons/basket-alt-3-svgrepo-com.svg";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }
  ul, li {
    list-style: none;
  }

`;
export const SWrap = styled.div`
  display: flex;
  gap: 20px;
  justify-content: space-between;
`;

export const STitle = styled.h3`
  text-align: center;
  margin-top: 5px;
  margin-bottom: 15px;
`;
export const SUl = styled.ul`
  margin: 45px;
  margin-top: 15px;
`;
export const SList = styled.li`
  border: 2px solid lightgray;
  border-radius: 10px;
  padding: 5px;
  max-width: 900px;
  min-width: 400px;
  margin: 10px auto;
`;

export const SImage = styled.img`
  width: 25%;
  height: 25%;
`;

export const SPrice = styled.p`
  font-size: 20px;
  font-weight: 600;
  color: #a90e12;
`;

export const SDescription = styled.p`
  min-width: 200px;
`;
export const SButton = styled.button<IButtonSaveNewProducr>`
  display: ${({ $modalButton }) => ($modalButton ? "inline-block" : "block")};
  width: ${({ $modalButton }) => ($modalButton ? "230px" : "auto")};
  margin-top: ${({ $modalButton }) => ($modalButton ? "40px" : "10px")};
  border: 2px solid gray;
  padding: 8px;
  border-radius: 10px;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    border: 2px solid green;
    box-shadow: 0 0 5px green;
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
    width: 200px;
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

export const SButtonAddProduct = styled(AddProduct)<IButtonVisibilityProps>`
  position: fixed;
  bottom: 120px;
  right: 25px;
  width: 80px;
  height: 80px;
  display: ${({ $isVisible }) => ($isVisible ? "none" : "dispay-block")};
  cursor: pointer;
  &:hover {
    filter: drop-shadow(0 0 10px blue);
  }
`;

export const SButtonBusket = styled(Basket)`
  position: fixed;
  bottom: 10px;
  right: 10px;
  width: 110px;
  height: 110px;
  cursor: pointer;
  opacity: 1;
  &:hover {
    filter: drop-shadow(0 0 10px blue);
  }
`;
