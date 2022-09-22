import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from "react-router-dom"
import mockRacoon from "../mockRacoon"
import RacoonShow from './RacoonShow';

const renderComponent = () => {
    render(
        <MemoryRouter initialEntries={["/racoonshow/1"]}>
            <Routes>
                <Route path='racoonshow/:id' element={<RacoonShow racoons={mockRacoon} />}/>
            </Routes>
        </MemoryRouter>
  )
}

describe("RacoonShow", () => {
    it("renders a card with a raccoon name", () => {
        renderComponent()
        expect(screen.getByText(mockRacoon[0].name)).toBeInTheDocument()
    })
})