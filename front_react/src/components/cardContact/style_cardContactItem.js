import styled from 'styled-components'

export const CardContainerContact = styled.div`
  width: 1780px;
  height: 433px;
  background: var(--unnamed-color-ffffff) 0% 0% no-repeat padding-box;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 4px 4px #00000005;
  border-radius: 20px;
  opacity: 1;
  margin: auto;
  position: relative;
`

export const Title = styled.h1`
  padding: 22px;
  font-size: 20px;
  font-family: 'Poppins';
  letter-spacing: 0px;
  color: #393939;
  opacity: 1;
`
export const Card = styled.div`
  display: flex;
`
export const CardItem = styled.div`
  margin-left: 60px;
  margin-right: 60px;
  width: 431px;
  height: 275px;
  background: var(--unnamed-color-ffffff) 0% 0% no-repeat padding-box;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #ebebeb;
  border-radius: 20px;
  opacity: 1;
`
export const CardText = styled.p`
  opacity: 1;
  padding: 20px;
  letter-spacing: 0px;
  font-size: 16px;
`
export const ReviewCard = styled.div`
  display: flex;
  padding-left: 20px;
  padding-right: 20px;
`

export const ImageReview = styled.image`
  background-color: grey;
  margin-top: 10px;
  width: 56px;
  height: 56px;
  border-radius: 8px;
  opacity: 1;
`
export const InfoContact = styled.div`
  margin-top: 10px;
  padding-left: 30px;
  width: 270px;
  & h1 {
    font-size: 16px;
    letter-spacing: 0px;
    color: #262626;
    opacity: 1;
    font-weight: bold;
  }

  & p {
    color: #799283;
    opacity: 1;
  }
`
export const CardBtn = styled.div`
  position: relative;
`

export const BtnCheck = styled.span`
  position: absolute;
  right: 0px;
  bottom: 1px;
  color: green;
`
export const BtnCancel = styled.span`
  position: absolute;
  color: red;
  right: 30px;
  bottom: 1px;
`
export const BtnSlide = styled.div`
  width: 56px;
  height: 56px;
  right: -33px;
  top: 180px;
  position: absolute;
  background: var(--unnamed-color-135846) 0% 0% no-repeat padding-box;
  border: 1px solid var(--unnamed-color-ffffff);
  background: #135846 0% 0% no-repeat padding-box;
  border: 1px solid #ffffff;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  opacity: 1;
`
