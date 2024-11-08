import styled, {createGlobalStyle} from 'styled-components' 

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }
  ul, li {
    list-style: none;
  }
`
export const SWrap = styled.div`
  display: flex;
  gap: 20px;
  justify-content: space-between;
`

export const STitle = styled.h2`
  text-align: center;
  margin-top: 5px;
  margin-bottom: 15px;
`

export const SList = styled.li`
  border: 2px solid lightgray;
  border-radius: 10px;
  padding: 15px;
  margin-bottom: 5px;
  margin: 10px;
  max-width: 900px;
  margin: 10px auto;
`

export const SImage = styled.img`
  max-width: 200px;
  max-height: 200px;
  margin: 5px;
`

export const SPrice = styled.p`
  font-size: 20px;
  font-weight: 600;
  color: #a90e12;
`

export const SDescription = styled.p`
  max-width: 450px;
`
