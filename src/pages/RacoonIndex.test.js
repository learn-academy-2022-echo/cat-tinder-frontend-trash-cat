import { render, screen } from '@testing-library/react';
import RacoonIndex from './RacoonIndex';
import  mockRacoon from '../mockRacoon'

describe("<RacoonIndex/>", () => {
    it("RacoonIndex renders without crashing", () => {
        render(<RacoonIndex />)
        expect(screen.getByText("All Raccoons")).toBeInTheDocument()
    })
   
    it("renders raccoon cards", () => {
        render(<RacoonIndex mockRacoon={mockRacoon} />)
        mockRacoon.forEach((value) => {
          const RacoonName = screen.getByText(value.name)
          expect(RacoonName).toBeInTheDocument()
        })
    })
})