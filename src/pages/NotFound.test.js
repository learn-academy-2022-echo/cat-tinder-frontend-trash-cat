import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import { BrowserRouter } from 'react-router-dom';
import NotFound from './NotFound';

describe("<NotFound/>", () => {
    it("NotFound Renders without crashing", () => {
        render(<NotFound />)
        expect(screen.getByText("Oops...Something went wrong")).toBeInTheDocument()
    })
    it("renders a photo with a src and alt", () => {
        render(<NotFound />)
        const photo = screen.getByRole("img")
        expect(photo).toHaveAttribute("src", "https://static.boredpanda.com/blog/wp-content/uploads/2020/10/funny-raccoons-301-5f880b3349df0__700.jpg")
    })
})