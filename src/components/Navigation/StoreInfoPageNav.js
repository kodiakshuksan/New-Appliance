import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

const StoreInfoNav = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const businessName = {
        paddingLeft: "10px",
        color: "#4e342e"
        }
   
   const businessNameStyle = {
        color: "#4e342e"
}

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand style={businessName} href="/">Mathias Appliances</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink style={businessNameStyle} href="/HomePage">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink style={businessNameStyle} href="https://offerup.com/p/21498274" target="_blank" rel="noopener noreferrer">Browse Inventory</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default StoreInfoNav;