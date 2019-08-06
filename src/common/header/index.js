import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import { HeaderWrapper, Wrapper, Contain, Logo, Nav, NavItem, SearchInput } from './style';

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isFocused: false
    }

    this.handleFocus = this.handleFocus.bind(this)
    this.handleBlur = this.handleBlur.bind(this)
  }

  render() {
    return (
      <HeaderWrapper>
        <Wrapper>
          <Logo></Logo>
          <Contain>
            <Nav>
              <NavItem className="active">首页</NavItem>
              <NavItem>下载</NavItem>
              <CSSTransition in={this.state.isFocused} timeout={200} classNames='slide'>
                <NavItem className='searchWrap'>
                  <SearchInput className={this.state.isFocused?'focused': ''} onFocus={this.handleFocus} onBlur={this.handleBlur}></SearchInput>
                </NavItem>
              </CSSTransition>
            </Nav>
          </Contain>
        </Wrapper>
      </HeaderWrapper>
    )
  }

  handleFocus() {
    this.setState({
      isFocused: true
    })
  }
  handleBlur() {
    this.setState({
      isFocused: false
    })
  }
}

export default Header