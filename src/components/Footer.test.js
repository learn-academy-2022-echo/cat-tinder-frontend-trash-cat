import { render, screen } from '@testing-library/react';
import Footer from './Footer';

describe("<Footer/>", () => {
    it("renders the footer for the user", () => {
        render(<Footer />)
        expect(screen.getByText("Trash Cat:Find Your Match")).toBeInTheDocument()
    })
})