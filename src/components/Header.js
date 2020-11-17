import React, {useState, useCallback} from 'react';
import styled from 'styled-components';
import {Link} from 'gatsby';

import menu_icon from 'assets/icons/menu.svg';

const HeaderBlock = styled.header`
  display: flex;
  padding: 24px 50px;
  width: 100vw;
  box-sizing: border-box;
  justify-content: flex-end;
  align-items: center;
  position: absolute;
  z-index: 5;
`;

const LocalizationButtonGroup = styled.div`
  display: grid;
  column-gap: 12px;
  align-items: center;
  grid-auto-flow: column;
  margin-right: 24px;
`;

const LocalizationButton = styled.button`
  color: ${(props) => props.theme.MAIN_COLOR};
  font-size ${(props) => props.theme.NORMAL_SIZE};
`;

const Divider = styled.div`
  width: 1px;
  height: 15px;
  background-color: ${(props) => props.theme.MAIN_COLOR};
`;

const MenuGroup = styled.div`
  position: relative;
  display: flex;
  flex-direction: row-reverse;
`;

const Menu = styled.ul`
  display: grid;
  row-gap: 8px;
  grid-auto-flow: row;
  position: absolute;
  top: 58px;
`;

const Icon = styled.img`
  width: 30px;
  height: 30px;
`;

const MenuItem = styled.ul`
  font-size: ${(props) => props.theme.NORMAL_SIZE};
  font-weight: ${({current}) => current ? 'bold' : '400'};
  text-align: right;
  width: 120px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const MenuDecoration = styled.div`
  width: 50px;
  height: 2px;
  background-color: ${(props) => props.theme.MAIN_COLOR};
  margin-left: 8px;
`;

function Header() {
  const [menu_opened, setMenuOpened] = useState(false);

  const handleLocalization = useCallback(() => {
    alert('Not yet supporting');
  }, []);

  const handleMenu = useCallback(() => {
    setMenuOpened((current) => !current);
  }, []);

  const menu_items = [
    {name: '입구', path: ''},
    {name: '소개', path: 'about'},
    {name: '프로젝트', path: 'project'},
    {name: 'Dev.log', path: 'devlog'},
    {name: '연락처', path: 'contact'},
  ];

  return (
    <HeaderBlock>
      <LocalizationButtonGroup>
        <LocalizationButton>KR</LocalizationButton>
        <Divider />
        <LocalizationButton onClick={handleLocalization}>EN</LocalizationButton>
      </LocalizationButtonGroup>
      <MenuGroup>
        <button onClick={handleMenu}>
          <Icon src={menu_icon}/>
        </button>
        {
          menu_opened && (
            <Menu>
              {
                menu_items.map((menu, i) => {
                  const current = menu.path === window.location.pathname.split('/')[1];

                  return (
                    <MenuItem key={String(i)} current={current}>
                      <Link to={`/${menu.path}`}>
                        {menu.name}
                      </Link>
                      {
                        current && <MenuDecoration />
                      }
                    </MenuItem>
                  );
                })
              }
            </Menu>
          )
        }
      </MenuGroup>
    </HeaderBlock>
  );
}

export default Header;
