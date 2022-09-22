import { render, screen } from '@testing-library/react';
import RacoonIndex from './RacoonIndex';
import  mockRacoon from '../mockRacoon'
import { BrowserRouter } from 'react-router-dom'


describe("<RacoonIndex/>", () => {
    it("RacoonIndex renders without crashing", () => {
        render(
            <BrowserRouter>
                <RacoonIndex racoons={mockRacoon}/>
            </BrowserRouter>
        )

        mockRacoon.forEach(racoon => {
        const RacoonName = screen.getByText(racoon.name)
        expect(RacoonName).toBeInTheDocument()
    })
    })
})