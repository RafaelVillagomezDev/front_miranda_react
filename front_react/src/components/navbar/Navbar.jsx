import {
  CardImg,
  ColumMenu,
  ColumnItemLinks,
  ColumnItems,
  ContainerDiv,
  DivOpen,
  DivRightReserved,
  DivUser,
  IconClose,
  IconDiv,
  IconsFa,
  ImgDiv,
  LogoDiv,
  NavbarMain,
  TextLove,
} from './style_navbar'
import * as FaIcons from 'react-icons/fa'
import { useState } from 'react'
import { RoutesNav } from './routes_nav'
import { NavLink, useNavigate } from 'react-router-dom'
import logo from '../../assets/LogoHotel.svg'

function Navbar() {
  let navigate = useNavigate()
  const [open, setOpen] = useState(false)
  const showColumnMenu = () => setOpen(!open)

  //Metodo logOut dandole al boton
  const handleLogOut = () => {
    localStorage.removeItem('authenticated')
    navigate('/login')
  }

  return (
    <>
      <NavbarMain>
        <DivOpen>
          <FaIcons.FaBars onClick={showColumnMenu} />
          <h1>Dashboard</h1>
        </DivOpen>

        {/* <InputSearch>
          <form action="">
            <input type="text" placeholder="" name="search" />
            <button type="submit">
              <FaIcons.FaSearch />
            </button>
          </form>
        </InputSearch> */}
        <ContainerDiv>
          <IconDiv>
            <ul>
              {IconsFa.map((item, index) => {
                if (index === 2) {
                  return (
                    <li onClick={() => handleLogOut()} key={index}>
                      {item.icon}
                    </li>
                  )
                } else {
                  return (
                    <li key={index}>
                      <div>
                        <p>1</p>
                      </div>
                      {item.icon}
                    </li>
                  )
                }
              })}
            </ul>
          </IconDiv>
          <ImgDiv></ImgDiv>
        </ContainerDiv>
      </NavbarMain>
      <ColumMenu open={open}>
        <LogoDiv>
          <img src={logo} alt="Logo" />
          <div>
            <h1>travel</h1>
            <p>Hotel Admin Dashboard</p>
          </div>
        </LogoDiv>
        <IconClose onClick={showColumnMenu}>
          <FaIcons.FaTimes />
        </IconClose>

        {RoutesNav.map((item, index) => {
          return (
            <ColumnItems key={index}>
              <ColumnItemLinks>
                <NavLink to={item.path} style={{ textDecoration: 'none' }}>
                  <span style={{ marginLeft: '16px' }}>
                    {item.icon}
                    {item.title}
                  </span>
                </NavLink>
              </ColumnItemLinks>
            </ColumnItems>
          )
        })}
        <DivUser>
          <CardImg />
          <h1>William Johanson</h1>
          <p>williamjohn@mail.com</p>
          <button>Contact Us</button>
        </DivUser>
        <DivRightReserved>
          <h1>Travl Hotel Admin Dashboard</h1>
          <p>© 2020 All Rights Reserved</p>
          <TextLove>Made with ♥ by Rafael</TextLove>
        </DivRightReserved>
      </ColumMenu>
    </>
  )
}

export default Navbar
