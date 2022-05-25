import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`

export const ContainerCard = styled.div`
  width: 340px;
  display: flex;
  align-items: center;
  flex-direction: row;
  height: 125px;
  background: var(--unnamed-color-ffffff) 0% 0% no-repeat padding-box;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 4px 4px #00000005;
  border-radius: 12px;
  opacity: 1;
  margin: 40px;
`
export const DivImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: red;
  width: 65px;
  height: 65px;
  background: #ffedec 0% 0% no-repeat padding-box;
  border-radius: 8px;
  margin: 20px;
  opacity: 1;
`
export const DivText = styled.div`
  padding: 20px, 20px;

  h1 {
    color: var(--unnamed-color-393939);
    text-align: left;
    font: normal normal 600 30px/46px Poppins;
    letter-spacing: 0px;
    color: #393939;
    opacity: 1;
    font-size: 30px;
    font-weight: bold;
  }

  p {
    color: var(--unnamed-color-787878);
    text-align: left;
    font: normal normal 300 14px/21px Poppins;
    letter-spacing: 0px;
    color: #787878;
    opacity: 1;
  }
`
