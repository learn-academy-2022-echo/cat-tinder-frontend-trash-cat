import React from 'react'
import { useState } from 'react'
import { Collapse,
        Navbar,
        NavbarToggler,
        NavbarBrand,
        Nav,
        NavItem,
        NavLink,
        UncontrolledDropdown,
        DropdownToggle,
        DropdownMenu,
        DropdownItem,
        NavbarText, 
} from 'reactstrap'
import './App.css'

//Psuedo for Structure
// 1. Need Home -> for home
// 2. RacoonIndex -> for displaying all raccoons (All Raccoons)
// 3. RacoonNew -> For new profile
// 4. RacoonShow -> Displaying individual raccoons
// 5. RacoonEdit -> for updating individual raccoons

const Header = () => {
    
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => setIsOpen(!isOpen)
    
    return (
    <>
      <div className='header'>
        <Navbar className='header'>
          <NavbarBrand href="/">Home</NavbarBrand>
            <NavbarToggler onClick={toggle} />
              <Collapse isOpen={isOpen} navbar>
            <Nav className="me-auto" navbar>
              <NavItem>
                <NavLink href="/racoonindex">All Raccoons</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/racoonnew">Create a Profile!</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Profile
                </DropdownToggle>
                <DropdownMenu end>
                  <DropdownItem>
                      <NavLink href="/racoonshow">
                          View Profile
                      </NavLink>
                  </DropdownItem>
                  <DropdownItem>
                      <NavLink href="/racoonedit">
                          Edit Profile
                      </NavLink>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Reset</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    </>
    )
}


export default Header