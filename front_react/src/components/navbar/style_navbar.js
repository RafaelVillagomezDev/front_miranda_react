import styled from 'styled-components'
import * as FaIcons from 'react-icons/fa'

export const NavbarMain = styled.nav`
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 40px;
  background: var(--unnamed-color-F8F8F8) 0% 0% no-repeat padding-box;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 10px #00000005;
  opacity: 1;
  z-index: 0;
  background-color: #ffffff;
`

export const DivOpen = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
`
//INPUT SEARCH

// export const InputSearch = styled.div`
//   display: flex;
//   flex-direction: row;
//   justify-content: center;
//   align-items: stretch;
//   padding-top: 28px;
//   & form {
//     color: #555;
//     display: flex;
//     padding: 2px;
//     border-radius: 5px;
//     margin: 0 0 30px;
//     background: #f8f8f8 0% 0% no-repeat padding-box;
//     border-radius: 12px;
//     opacity: 1;
//   }

//   & input {
//     border: none;
//     background: transparent;
//     margin: 0;
//     padding: 7px 25px;
//     font-size: 14px;
//     color: inherit;
//     border: 1px solid transparent;
//     border-radius: inherit;
//     outline: none;
//   }

//   & button {
//     width: 40px;
//     padding: 0;
//     margin: 0;
//     border: 1px solid transparent;
//     border-radius: inherit;
//     background-color: #f8f8f8;
//     color: grey;
//   }
// `

// DIV iCONS

export const IconsFa = [
  {
    icon: <FaIcons.FaRegEnvelope />,
  },
  {
    icon: <FaIcons.FaRegBell />,
  },

  {
    icon: <FaIcons.FaSignOutAlt />,
  },
]

export const ContainerDiv = styled.div`
  display: flex;
  padding-right: 80px;
`

export const IconDiv = styled.div`
  margin-right: 10px;
  & ul {
    display: flex;
  }

  & li {
    position: relative;
    padding: 18px;
    list-style: none;
  }

  & div {
    position: absolute;
    z-index: 1;
    top: 1px;
    right: 3px;
    width: 22px;
    height: 22px;
    border-radius: 8px;
    opacity: 1;
    border: 2px solid var(--unnamed-color-ffffff);
    background-color: #e23428;
    text-align: center;

    & p {
      color: #ffffff;
    }
  }
`
export const ImgDiv = styled.div`
  width: 60px;
  height: 60px;
  background-color: gray;
  position: relative;
  bottom: 6px;

  border-radius: 8px;
`

//VERTICAL NAVBAR

export const LogoDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 25px;

  & img {
    width: 75px;
    height: 75px;
  }

  & h1 {
    font-size: 25px;
    font-weight: bold;
    font-family: 'Poppins', sans-serif;
  }

  & div {
    padding-top: 12px;
    padding-left: 15px;
  }
`

export const ColumMenu = styled.div`
  width: 345px;
  position: fixed;
  top: 0;
  font-family: 'Poppins', sans-serif;
  background-color: #ffffff;
  height: 1812px;
  left: ${({ open }) => (open ? '0' : '100%')};
  z-index: 1;
`
export const IconClose = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  padding-right: 12px;
`
export const ColumnItems = styled.li`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: start;
  width: 100%;
  height: 30px;
  padding: 3rem 0 1.25rem;
  font-family: 'Poppins', sans-serif;
`

export const ColumnItemLinks = styled.a`
  display: flex;
  align-items: center;
  padding: 0 2rem;

  font-size: 20px;
  text-decoration: none;
  color: #799283;
  opacity: 1;
  font-family: 'Poppins', sans-serif;
  & span {
    color: #799283;
    opacity: 1;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  & :hover {
    color: red;
  }

  /* & span ::after:hover {
    content: 'ss';
    position: fixed;
    width: 10px;
    height: 8px;
    background-color: red;
  } */
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
    font-family: 'Poppins', sans-serif;
    letter-spacing: 0px;
    color: #393939;
    font-size: 18px;
    padding-top: 22px;
    opacity: 1;
  }

  & p {
    padding-top: 12px;
    text-align: center;
    font: normal normal 300 12px/18px;
    font-family: 'Poppins', sans-serif;
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
    font-family: 'Poppins', sans-serif;
    letter-spacing: 0px;
    color: #212121;
    opacity: 1;
    font-size: 18px;
  }

  & p {
    text-align: left;
    font-family: 'Poppins', sans-serif;
    letter-spacing: 0px;
    color: #799283;
    opacity: 1;
  }
`

export const TextLove = styled.p`
  padding-top: 50px;
  text-align: left;
  font-family: 'Poppins', sans-serif;
  letter-spacing: 0px;
  color: #799283;
  opacity: 1;
`
