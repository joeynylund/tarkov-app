import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText
} from 'reactstrap';

function NavigationBar() {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar dark className="navbar navbar-gray fixed-top" expand="lg">
        <NavbarBrand href="/">Nylund's Tarkov App</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            
          </Nav>
          <NavbarText>
              <NavLink href="/components/">Ammo</NavLink>
            </NavbarText>
            <NavbarText>
              <NavLink href="/components/">Armor</NavLink>
            </NavbarText>
            <NavbarText>
              <NavLink href="/components/">Guns</NavLink>
            </NavbarText>
            <NavbarText>
              <NavLink href="/components/">Maps</NavLink>
            </NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavigationBar;