import Greeting from './Greeting'
import userEvent from '@testing-library/user-event'
import { render, screen } from '@testing-library/react'

describe('Greeting component', () => {
  test('renders Hello World as a text', () => {
    // Arrange
    render(<Greeting />)

    // Act
    // ...nothing

    // Assert

    const helloWorldElement = screen.getByText('Hello World!', { exact: false })

    expect(helloWorldElement).toBeInTheDocument()
  })

  test('Renders "Good to see you" if button is not clicked', () => {
    // Arrange
    render(<Greeting />)

    // Act
    const GoodToSeeYouElement = screen.getByText('Its great to see you', {
      exact: false,
    })

    // Assert
    expect(GoodToSeeYouElement).toBeInTheDocument()
  })

  test('Renders Changed! if the button was clicked', () => {
    // Arrange
    render(<Greeting />)

    //Act
    const buttonElement = screen.getByRole('button')
    userEvent.click(buttonElement)

    //Assert
    const outputElement = screen.getByText('Changed', { exact: false })
    expect(outputElement).toBeInTheDocument()
  })

  test('Does not render "Good to see you" if the button was not clicked', () => {
    // Arrange
    render(<Greeting />)

    //Act
    const buttonElement = screen.getByRole('button')
    userEvent.click(buttonElement)

    //Assert
    const outputElement = screen.queryByText('great to see you', {
      exact: false,
    })
    expect(outputElement).toBeNull()
  })
})
