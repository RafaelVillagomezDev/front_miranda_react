import styled from 'styled-components'

export const ContainerCard = styled.div`
  display: flex;
  width: 1475px;
  height: 792px;
  margin: auto;
  margin-top: 50px;
  opacity: 1;
`
// PARTE 1 Card
export const Card = styled.div`
  width: 50%;
  height: 100%;
  background-color: #ffffff;
  border-top-left-radius: 12px;
`

export const CardProfile = styled.div`
  width: 100%;
  height: 30%;
`

export const CardText = styled.div`
  padding: 30px;

  & h1 {
    text-align: left;
    letter-spacing: 0px;
    color: #212121;
    font-size: 30px;
    opacity: 1;
  }

  & p {
    color: #799283;
    text-align: left;
    font-family: 'Poppins';
    letter-spacing: 0px;
    opacity: 1;
  }
`

//CARD INFO PROFILE
export const CardInfo = styled.div`
  width: 100%;
  height: 70%;
`
export const CardCheck = styled.div`
  display: flex;
  flex-direction: row;
  padding-left: 30px;
  gap: 92px;
`
export const ItemCheck = styled.div`
  & h3 {
    font-size: 12px;
    color: #799283;
  }
  & h1 {
    font-size: 18px;
  }
`
export const EyeLiner = styled.div`
  width: 670px;
  height: 2px;
  margin-left: 30px;
  background-color: #ebebeb;
`

//Parte de abajo de parte 1

export const CardMoreInfo = styled.div`
  padding: 30px;
  display: flex;
  gap: 30px;
`
export const ItemRoom = styled.div`
  width: 50%;

  & h3 {
    font-size: 12px;
    color: #799283;
  }
  & h1 {
    font-size: 25px;
  }
  & sub {
    color: #799283;
    font-size: 15px;
  }
`

export const CardRoomInfo = styled.div`
  padding: 30px;

  & p {
    padding-bottom: 6px;
  }
`
export const Facilities = styled.div`
  padding: 30px;
  & h3 {
    font-size: 12px;
    color: #799283;
  }
`

export const ListBtn = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 12px;
`
export const BigBtnFacilities = styled.button`
  width: 180px;
  height: 65px;
  background-color: #eef9f2;
  border-radius: 12px;
  margin-top: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  color: #799283;
  & h3 {
    font-size: 15px;
    font-weight: bold;
  }
`
export const SmallBtnFacilities = styled.button`
  width: 120px;
  height: 35px;
  background-color: #eef9f2;
  border-radius: 12px;
  margin-top: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 18px;
  color: #799283;
  & h3 {
    font-size: 14px;
    font-weight: bold;
  }
`

//PARTE 2 :Slider Image
export const SliderImg = styled.div`
  background-color: gray;
  border-top-right-radius: 12px;
  width: 50%;
  height: 100%;
`
