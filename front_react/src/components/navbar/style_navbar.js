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
  height: 90px;
  padding: 1rem 0 1.25rem;
`

export const ColumnItemLinks = styled.a`
  display: flex;
  align-items: center;
  padding: 0 2rem;
  font-size: 20px;
  text-decoration: none;
  color: black;

  &:hover {
    background-color: black;
    color: #000080;
    width: 100%;
    height: 45px;
    text-align: center;
    border-radius: 5px;
    margin: 0 2rem;
  }
`
