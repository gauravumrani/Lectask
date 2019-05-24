import * as React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button
} from 'reactstrap';

const Header = ({nav}) => {
  return (
    <Navbar className="header-blue" expand="md">
      <NavbarBrand className="text-white" href="/">reactstrap</NavbarBrand>
      <NavbarToggler onClick={nav.toggle} />
      <Collapse isOpen={nav.isOpen} navbar>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink className="text-white" href="/components/">
              <Button color="primary">Setting</Button>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="text-white" href="/boards/">
              <Button color="primary">All Boards</Button>
            </NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
}

export default Header;