import * as React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

const Header = ({nav}) => {
  return (
    <Navbar className="header-blue" expand="md">
      <NavbarBrand className="text-white" href="/">reactstrap</NavbarBrand>
      <NavbarToggler onClick={nav.toggle} />
      <Collapse isOpen={nav.isOpen} navbar>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink className="text-white" href="/components/">Settings</NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
}

export default Header;