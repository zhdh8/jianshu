import React, { Component } from 'react';
import { HeaderWrapper, Contain, Logo } from './style';

class Header extends Component {
  render() {
    return (
      <HeaderWrapper>
        <Contain>
          <Logo></Logo>
        </Contain>
      </HeaderWrapper>
    )
  }
}

export default Header