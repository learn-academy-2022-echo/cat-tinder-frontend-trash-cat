import { render, screen } from '@testing-library/react';
import RacoonNew from './RacoonNew';
import  mockRacoon from '../mockRacoon'
import { BrowserRouter } from 'react-router-dom'


describe("<RacoonNew/>", () => {
    it("RacoonNew renders without crashing", () => {
        render(
            <BrowserRouter>
                <RacoonNew racoons={mockRacoon}/>
            </BrowserRouter>
        )
        expect(screen.getByText("Create Your Profile")).toBeInTheDocument()
    })
    })
