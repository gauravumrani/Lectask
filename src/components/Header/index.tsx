import * as React from 'react';

import HeaderPage from '../../pages/Header';
import {headerState}  from './interface';

import './style.scss';

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
      <HeaderPage nav = {navSettings}/>
    );
  }
}