import React from 'react';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import { CSSTransition } from 'react-transition-group';
import { HeaderWrapper, Wrapper, Contain, Logo, Nav, NavItem, SearchInput } from './style';


const Header = (props) => (
  <HeaderWrapper>
    <Wrapper>
      <Logo></Logo>
      <Contain>
        <Nav>
          <NavItem className="active">首页</NavItem>
          <NavItem>下载</NavItem>
          <CSSTransition in={props.isFocused} timeout={200} classNames='slide'>
            <NavItem className='searchWrap'>
              <SearchInput className={props.isFocused?'focused': ''} onFocus={props.handleFocus} onBlur={props.handleBlur}></SearchInput>
            </NavItem>
          </CSSTransition>
        </Nav>
      </Contain>
    </Wrapper>
  </HeaderWrapper>
)


const mapStateToProps = (state) => ({
  ...state.header
})

const mapDispatchToProps = (dispatch) => ({
  handleFocus() {
    dispatch(actionCreators.handleSearchFocus(true))
  },

  handleBlur() {
    dispatch(actionCreators.handleSearchBlur(false))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)