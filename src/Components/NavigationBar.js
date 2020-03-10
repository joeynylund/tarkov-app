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
        <NavbarBrand href="/">Tarkov</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/components/">Ammo</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/components/">Armor</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/components/">Guns</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/components/">Maps</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavigationBar;