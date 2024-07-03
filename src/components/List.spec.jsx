import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import List from "../components/List"

test('Jest', () => {
    const { getByText } = render(<List/>)

    expect(screen.getByText('Sales')).toBeInTheDocument(); 
})