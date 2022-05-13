import styled from 'styled-components'

export const NavbarMain = styled.nav`
  background-color: rebeccapurple;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 40px;
`

export const DivOpen = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
`

export const ColumMenu = styled.div`
  width: 345px;
  position: fixed;
  top: 0;

  background-color: #ffffff;
  height: 1812px;
  left: ${({ open }) => (open ? '0' : '100%')};
`
export const IconClose = styled.div`
  float: right;
  padding-top: 12px;
  padding-right: 15px;
`
export const ColumnItems = styled.li`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: start;
  width: 100%;
  height: 30px;
  padding: 1rem 0 1.25rem;
`

export const ColumnItemLinks = styled.a`
  display: flex;
  align-items: center;
  padding: 0 2rem;
  font-size: 20px;
  text-decoration: none;
  color: #799283;
  opacity: 1;
  & span {
    color: #799283;
    opacity: 1;
  }
`

export const DivUser = styled.div`
  position: relative;
  top: 33px;
  width: 233px;
  height: 221px;
  opacity: 1;
  margin: auto;
  border-radius: 18px;
  background: var(--unnamed-color-ffffff) 0% 0% no-repeat padding-box;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 20px 30px #00000014;
  text-align: center;

  & h1 {
    color: var(--unnamed-color-393939);
    font: normal normal medium 12px Poppins;
    letter-spacing: 0px;
    color: #393939;
    font-size: 18px;
    padding-top: 22px;
    opacity: 1;
  }

  & p {
    padding-top: 12px;
    text-align: center;
    font: normal normal 300 12px/18px Poppins;
    letter-spacing: 0px;
    color: #b2b2b2;
    opacity: 1;
  }

  & button {
    width: 158px;
    height: 47px;
    border-radius: 8px;
    background: #ebf1ef 0% 0% no-repeat padding-box;
    margin-top: 12px;
    color: var(--unnamed-color-135846);
    text-align: center;
    font: normal normal 600 14px/21px Poppins;
    letter-spacing: 0px;
    color: #135846;
    opacity: 1;
  }
`

export const CardImg = styled.div`
  width: 70px;
  height: 70px;
  margin: auto;
  position: relative;
  top: 12px;
  background: var(--unnamed-color-c5c5c5) 0% 0% no-repeat padding-box;
  background: #c5c5c5 0% 0% no-repeat padding-box;
  border-radius: 8px;
  opacity: 1;
`
export const DivRightReserved = styled.div`
  position: relative;
  top: 90px;
  margin-left: 23px;
  margin-right: 23px;

  & h1 {
    text-align: left;
    font: normal normal 600 16px/25px Poppins;
    letter-spacing: 0px;
    color: #212121;
    opacity: 1;
  }

  & p {
    text-align: left;
    font: normal normal 300 14px/21px Poppins;
    letter-spacing: 0px;
    color: #799283;
    opacity: 1;
  }
`

export const TextLove = styled.p`
  padding-top: 90px;
  text-align: left;
  font: normal normal 300 14px/21px Poppins;
  letter-spacing: 0px;
  color: #799283;
  opacity: 1;
`
