import styled from 'styled-components'

export const ContainerList = styled.div`
  margin: auto;
  width: 1475px;
  border-radius: 20px;
  margin-top: 40px;
  opacity: 100%;
`
export const ItemList = styled.div`
  display: flex;
  padding-left: 60px;
  flex-direction: row;
  background: #ffffff 0% 0% no-repeat padding-box;
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 20px;
  padding-top: 12px;
  padding-bottom: 12px;
  opacity: 1;
  margin-bottom: 1px;
  height: 65px;
`
export const ItemListDescription = styled.div`
  display: flex;
  padding-left: 60px;
  flex-direction: row;
  background: #ffffff 0% 0% no-repeat padding-box;
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 20px;
  opacity: 1;
  margin-bottom: 1px;
  height: 65px;
`
export const ItemCol = styled.div`
  width: 1475px;
  display: flex;
  gap: 12px;
  flex-direction: row;
  align-items: center;

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
export const ItemGuestImg = styled.div`
  width: 45px;
  height: 45px;
  background: var(--unnamed-color-c5c5c5) 0% 0% no-repeat padding-box;
  background: #c5c5c5 0% 0% no-repeat padding-box;
  border-radius: 8px;
  opacity: 1;
`
export const ItemGuest = styled.div`
  & h1 {
    font-family: 'Poppins';
    text-align: left;
    letter-spacing: 0px;
    color: #393939;
    opacity: 1;
    font-size: 15px;
    color: var(--unnamed-color-393939);
  }
  & p {
    font-family: 'Poppins';
    text-align: left;
    letter-spacing: 0px;
    color: #799283;
    opacity: 1;
  }
`

export const OrderDate = styled.h1`
  color: var(--unnamed-color-393939);
  text-align: left;
  font-family: 'Poppins';
  letter-spacing: 0px;
  color: #393939;
  font-size: 16px;
  font-weight: 200;
  opacity: 1;
`
/*Sirve para Check In y Check out*/

export const CheckIn = styled.div`
  & h1 {
    color: var(--unnamed-color-393939);
    text-align: left;
    font: normal normal medium 16px/25px Poppins;
    letter-spacing: 0px;
    color: #393939;
    opacity: 1;
  }

  & p {
    color: var(--unnamed-color-393939);
    text-align: left;
    font: normal normal normal 14px/21px Poppins;
    letter-spacing: 0px;
    color: #393939;
    opacity: 1;
  }
`
export const SpecialRequest = styled.button`
  width: 160px;
  height: 48px;
  background: #eef9f2 0% 0% no-repeat padding-box;
  border-radius: 12px;
  opacity: 1;

  & h1 {
    text-align: center;
    font-size: 16px;
    font-family: 'Poppins';
    font-weight: 400;
    color: #212121;
    opacity: 1;
  }
`
export const RoomType = styled.div`
  & h1 {
    letter-spacing: 0px;
    color: #393939;
    opacity: 1;
    color: var(--unnamed-color-393939);
  }
`

export const Status = styled.button`
  width: 109px;
  height: 48px;
  background: #ffedec 0% 0% no-repeat padding-box;
  border-radius: 12px;
  opacity: 1;
  & h1 {
    text-align: center;
    font: normal normal medium 16px/25px Poppins;
    letter-spacing: 0px;
    color: #e23428;
    opacity: 1;
  }
`
//USERS COMPONENTES EXCLUSIVOS

//Componente exclusivo para users
export const TlfEelement = styled.span`
  padding-left: 12px;
`

//ROOMS COMPONENTES EXCLUSIVOS
//Componente exclusivo para price rate
export const SubPrice = styled.sub`
  color: green;
`
export const PriceRate = styled.span`
  font-weight: bold;
`
