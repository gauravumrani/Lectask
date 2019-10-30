import * as React from 'react';
import {useState} from 'react';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
} from 'reactstrap';

import {HeaderState}  from './interface';

import './style.scss';

const Header = (): JSX.Element => {
  let [isOpen, toggle] = useState(false);
  return (
    <Navbar className="header-blue" expand="md">
      <NavbarBrand className="text-white">
        Lectask
      </NavbarBrand>
      <NavbarToggler onClick={(): void => toggle(!isOpen)} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ml-auto" navbar>
        </Nav>
      </Collapse>
    </Navbar>
  );
}

export default class HeaderComponent extends React.Component <{}, HeaderState>{
  constructor(props: any) {
    super(props);
  }
  render(): React.ReactNode {
    return (
      <Header/>
    );
  }
}
