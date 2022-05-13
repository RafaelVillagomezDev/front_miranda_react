import {
  CardImg,
  ColumMenu,
  ColumnItemLinks,
  ColumnItems,
  DivOpen,
  DivRightReserved,
  DivUser,
  IconClose,
  NavbarMain,
  TextLove,
} from './style_navbar'
import * as FaIcons from 'react-icons/fa'
import { useState } from 'react'
import { RoutesNav } from './routes_nav'
import { NavLink } from 'react-router-dom'

function Navbar() {
  const [open, setOpen] = useState(false)
  const showColumnMenu = () => setOpen(!open)

  return (
    <>
      <NavbarMain>
        <DivOpen>
          <FaIcons.FaBars onClick={showColumnMenu} />
          <h1>Dashboard</h1>
        </DivOpen>

        <h1>DashBoard</h1>
        <h1>DashBoard</h1>
      </NavbarMain>
      <ColumMenu open={open}>
        <IconClose onClick={showColumnMenu}>
          <FaIcons.FaTimes />
        </IconClose>
        {RoutesNav.map((item, index) => {
          return (
            <ColumnItems key={index}>
              <ColumnItemLinks>
                {item.icon}
                <NavLink to={item.path} style={{ textDecoration: 'none' }}>
                  <span style={{ marginLeft: '16px' }}>{item.title}</span>
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
