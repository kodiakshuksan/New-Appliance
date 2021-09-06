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
import { Container } from 'reactstrap';

const HomePageNav = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const businessName = {
    paddingLeft: "20px",
    color: "#4e342e"
}

const businessNameStyle = {
    color: "#4e342e", 
    fontWeight: "400px"
}
  
  

  return (
    <div>
      
        <Navbar color="light" light expand="md">
          <NavbarBrand style={businessName} href="/">Mathias Appliances</NavbarBrand>
            <NavbarToggler onClick={toggle} />
              <Collapse isOpen={isOpen} navbar>
                <Nav className="mr-auto nav justify-content-center" navbar>
                  <NavItem>
                    <NavLink style={businessNameStyle} href="/StoreInfoPage">Store Info</NavLink>
                  </NavItem>
              </Nav>
            </Collapse>
        </Navbar>
      
    </div>
  );
}

export default HomePageNav;