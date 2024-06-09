import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Home from '../page'
import { fetchBreeds } from '../actions'
 
describe('Page loads', () => {
  it('renders a footer', () => {
    render(<Home />)
 
    const footer = screen.getByText(/nelson rojas/i)
 
    expect(footer).toBeInTheDocument()
  })
})