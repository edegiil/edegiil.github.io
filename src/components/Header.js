import React from 'react';
import styled, {keyframes} from 'styled-components';
import {Link} from 'gatsby';

const HeaderBlock = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 0;
  width: 100vw;
  box-sizing: border-box;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
`;

const NavGroup = styled.div`
  display: grid;
  width: 800px;
  grid-auto-flow: column;
  column-gap: 32px;
  justify-content: start;
  @media ${(props) => props.theme.tablet} {
    width: 80%;
  }
  @media ${(props) => props.theme.mobile} {
    width: 90%;
    column-gap: 16px;
  }
`;

const shine = keyframes`
  from {
    background-position: top left;
  }

  to {
    background-position: top right;
  }
`;

const Nav = styled(Link)`
  font-family: 'Half-Elven', sans-serif;

  &.current {
    font-weight: bold;
    animation: ${shine} 2s linear infinite;
    color: #ff9e00;
    background: linear-gradient(
      45deg,
      rgba(255,158,0,1) 25%,
      rgba(255,0,0,1) 54%,
      rgba(255,158,0,1) 75%
    );
    background-size: 400% 100%;
    background-repeat: no-repeat;
    background-position: 0 0;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-shadow: 0px 0px 8px #ffc900;
  }
`;

function Header() {
  const menu_items = [
    {name: 'ABOUT', path: '/about'},
    {name: 'PROJECT', path: '/project'},
    {name: 'DEV.log', path: '/devlog'},
    {name: 'CONTACT', path: '/contact'},
  ];

  return (
    <HeaderBlock>
      <NavGroup>
        {
          menu_items.map(({name, path}) => {
            return (
              <Nav key={path} to={path} activeClassName='current' partiallyActive>{name}</Nav>
            );
          })
        }
      </NavGroup>
    </HeaderBlock>
  );
}

export default Header;
