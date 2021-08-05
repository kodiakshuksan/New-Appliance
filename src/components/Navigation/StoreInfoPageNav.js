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
        paddingLeft: "10px"
    }

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand style={businessName} href="/">Mathias Appliances</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/HomePage">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://offerup.com/p/21498274">Browse Inventory</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default StoreInfoNav;