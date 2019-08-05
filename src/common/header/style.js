import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  height: 58px;
  light-height: 58px;
  border-bottom: 1px solid #f0f0f0;
  position: fixed;
  right: 0;
  left: 0;
  z-index: 1030;
`;

export const Contain = styled.div`
  width: 1440px;
  height: 56px;
  light-height: 56px;
  margin: 0 auto;
`;

export const Logo = styled.a.attrs({
  'href': '/'
})`

`;