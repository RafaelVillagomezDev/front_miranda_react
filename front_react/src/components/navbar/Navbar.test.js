import '@testing-library/react'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom'
import { NavbarMain } from './style_navbar'

afterEach(cleanup)
test('It has to contain My Header', () => {
  render(
    <div>
      <NavbarMain />
    </div>,
  )
  const headerClass = NavbarMain().type.styledComponentId
  const MyHeaderRoots = document.getElementsByClassName(headerClass)
  const style = window.getComputedStyle(MyHeaderRoots[0])
  expect(style.backgroundColor).toBe('red')
})
