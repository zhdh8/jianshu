import styled from 'styled-components';
import logoImage from '../../static/logo.png';

export const HeaderWrapper = styled.div`
  height: 58px;
  light-height: 58px;
  border-bottom: 1px solid #f0f0f0;
  position: fixed;
  right: 0;
  left: 0;
  z-index: 1030;
`;

export const Wrapper = styled.div`
  width: 1440px;
  height: 56px;
  light-height: 56px;
  margin: 0 auto;
`;

export const Logo = styled.a.attrs({
  'href': '/'
})`
  display: inline-block;
  width: 100px;
  height: 56px;
  background: url(${logoImage});
  background-size: contain;
`;

export const Contain = styled.div`
  display: inline-block;
  width: 960px;
  height: 56px;
  light-height: 56px;
  margin: 0 auto;
`;

export const Nav = styled.div`
  
`;

export const NavItem = styled.a`
  display: block;
  width: 90px;
  height: 56px;
  line-height: 56px;
  margin-right: 10px;
  text-align: center;
  float: left;
  &.active {
    color: #ea6f5a;
  }
  &.searchWrap {
    .slide-enter {
      transition: all .2s ease-in;
    }
    .slide-enter-active {
      width: 240px;
    }
    .slide-exit: {
      transition: all .2s ease-out;
    }
    .slide-exit-active: {
      width: 180px;
    }
  }
`;

export const SearchInput = styled.input.attrs({
  'placeholder': '搜索'
})`
  width: 180px;
  height: 38px;
  border-radius: 40px;
  padding: 0 40px 0 20px;
  border: 1px solid #eee;
  background: #eee;
  outline: none;
  &.focused {
    width: 255px;
  }
`;