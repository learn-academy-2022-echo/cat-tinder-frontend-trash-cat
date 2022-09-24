import { render, screen } from '@testing-library/react';
import RacoonEdit from './RacoonEdit';
import { BrowserRouter } from 'react-router-dom'


describe("<RacoonEdit/>", () => {
    it("RacoonEdit renders without crashing", () => {
        render(
            <BrowserRouter>
                <RacoonEdit/>
            </BrowserRouter>
        )
        expect(screen.getByText("Edit Your Profile")).toBeInTheDocument()
    })
})