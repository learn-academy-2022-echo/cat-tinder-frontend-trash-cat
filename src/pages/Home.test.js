import { render, screen } from '@testing-library/react';
import Home from './Home';

describe("<Home/>", () => {
    it("Home Renders without crashing", () => {
        render(<Home />)
        expect(screen.getByText("Let's find your Trash Cat!")).toBeInTheDocument()
    })
})