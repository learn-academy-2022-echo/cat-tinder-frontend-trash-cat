import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import { BrowserRouter } from 'react-router-dom';
import Header from './Header';

// $ yarn add --dev @testing-library/user-event
// Test for Header to render 
// Test for click 
    // Test for All Raccoons
    // Test for Create a Profile! 
    // Test Profile 
    // Test View Profile
    // Test Edit Profile 


describe("<Header />", () => { 
    it("Header renders without error", () => {
        render (
            <BrowserRouter>
             <Header />
             </BrowserRouter>
        )
    })
    it("it has clickable link", () => {
        render(
            <BrowserRouter>
            <Header />
            </BrowserRouter>
        )
        userEvent.click(screen.getByText("All Raccoons"))
        expect(screen.getByText("All Raccoons")).toBeInTheDocument()

        userEvent.click(screen.getByText("Create a Profile!"))
        expect(screen.getByText("Create a Profile!")).toBeInTheDocument()

        userEvent.click(screen.getByText("Profile"))
        expect(screen.getByText("Profile")).toBeInTheDocument()

        userEvent.click(screen.getByText("Edit Profile"))
        expect(screen.getByText("Edit Profile")).toBeInTheDocument()

        userEvent.click(screen.getByText("View Profile"))
        expect(screen.getByText("View Profile")).toBeInTheDocument()

    })
}) 


