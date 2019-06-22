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

import {headerState}  from './interface';

import './style.scss';

const Header = ({nav}) => {
  return (
    <Navbar className="header-blue" expand="md">
      <NavbarBrand className="text-white" href="/">reactstrap</NavbarBrand>
      <NavbarToggler onClick={nav.toggle} />
      <Collapse isOpen={nav.isOpen} navbar>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink className="text-white" href="/boards/">
              <Button className="dark" color="primary">All Boards</Button>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="text-white" href="/components/">
              <Button className="dark" color="primary">Settings</Button>
            </NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
}

export default class HeaderComponent extends React.Component <{}, headerState>{
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    const navSettings = {
      isOpen: this.state.isOpen,
      toggle: this.toggle,
    };
    return (
      <Header nav = {navSettings}/>
    );
  }
}
