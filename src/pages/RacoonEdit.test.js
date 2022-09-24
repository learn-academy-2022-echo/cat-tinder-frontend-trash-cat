import { render, screen } from '@testing-library/react';
import RacoonEdit from './RacoonEdit';
import { BrowserRouter } from 'react-router-dom'
import React from 'react'


describe('<RacoonEdit/>', () => {
    test("renders without crashing", () => {
        render(
            <BrowserRouter>
                <RacoonEdit/>
            </BrowserRouter>
        )
    const heading = screen.getByText(/Edit Your Profile/i)
    expect(heading).toBeInTheDocument()
    })
})