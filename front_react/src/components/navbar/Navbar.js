import {
  ColumMenu,
  ColumnItemLinks,
  ColumnItems,
  DivOpen,
  IconClose,
  NavbarMain,
} from './style_navbar'
import * as FaIcons from 'react-icons/fa'
import { useState } from 'react'
import { RoutesNav } from './routes_nav'
import { Link, NavLink } from 'react-router-dom'

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
        <h1>Miranda</h1>
        <IconClose onClick={showColumnMenu}>
          <FaIcons.FaTimes />
        </IconClose>
        {RoutesNav.map((item, index) => {
          return (
            <ColumnItems key={index}>
              <ColumnItemLinks>
                {item.icon}
                <NavLink to={item.path}>
                  <span style={{ marginLeft: '16px' }}>{item.title}</span>
                </NavLink>
              </ColumnItemLinks>
            </ColumnItems>
          )
        })}
      </ColumMenu>
    </>
  )
}

export default Navbar
