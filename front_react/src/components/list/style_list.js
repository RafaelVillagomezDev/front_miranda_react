import styled from 'styled-components'

export const ContainerList = styled.div`
  margin: auto;
  width: 1475px;
  border-radius: 20px;
  opacity: 1;
  background-color: #ffffff;
`
export const ItemList = styled.div`
  display: flex;
  flex-direction: row;

  height: 65px;
`
export const ItemCol = styled.div`
  width: 1475px;

  & h1 {
    text-align: left;
    opacity: 1;
    letter-spacing: 0px;
    font-family: 'Poppins';
    font-style: normal;
    color: #393939;
    font-size: 16px;
    font-weight: bold;
  }
`
//CHECKBOX

export const CheckBox = styled.label`
  font-family: 'Poppins';
  font-size: 2rem;
  font-weight: bold;
  line-height: 1.1;
  display: grid;
  grid-template-columns: 1em auto;
  gap: 0.5em;
`
