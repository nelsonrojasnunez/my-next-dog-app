import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Home from '../app/page'
 
describe('Page loads', () => {
  it('renders a footer', () => {
    render(<Home />)
 
    const footer = screen.getByRole('footer')
 
    expect(footer).toBeInTheDocument()
  })
})