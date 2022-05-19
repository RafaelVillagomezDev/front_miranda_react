import '@testing-library/react'
import { render, cleanup, getByText } from '@testing-library/react'
import '@testing-library/jest-dom'
import { ButtonRafa } from './ButtonRafa'

afterEach(cleanup)

test('It has to contain My Header', () => {
  const { getByText } = render(<ButtonRafa bg={'red'}>Rafa</ButtonRafa>)

  expect(getByText('Rafa')).toBeInTheDocument()
})
