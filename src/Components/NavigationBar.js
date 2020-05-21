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
              <NavLink href="/ammo/">Ammo</NavLink>
            </NavbarText>
            <NavbarText>
              <NavLink href="/armor/">Armor</NavLink>
            </NavbarText>
            <NavbarText>
              <NavLink href="/guns/">Guns</NavLink>
            </NavbarText>
            <NavbarText>
              <NavLink href="/maps/">Maps</NavLink>
            </NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavigationBar;