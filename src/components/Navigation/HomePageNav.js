import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  PaginationLink
} from 'reactstrap';

const HomePageNav = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  
  

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Mathias Appliances</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto nav justify-content-center" navbar>
            <NavItem>
              <NavLink href="/StoreInfoPage">Store Info</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default HomePageNav;