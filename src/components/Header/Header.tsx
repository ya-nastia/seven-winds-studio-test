import React from 'react';
import { ReactComponent as MenuIcon } from '../../assets/icons/menu-icon.svg';
import { ReactComponent as BackIcon } from '../../assets/icons/back-icon.svg';
import { ReactComponent as ArrowIcon } from '../../assets/icons/arrow-down.svg';
import * as S from './Header.styled';

const Header: React.FC = () => {
  return (
    <S.Header>

      <S.HeaderMenu>
        <div><MenuIcon /></div>
        <div><BackIcon /></div>
        <S.MenuItem isActive={true}>Просмотр</S.MenuItem>
        <S.MenuItem>Управление</S.MenuItem>
      </S.HeaderMenu>

      <S.HeaderTabs>

        <S.ProjectNameTab>

          <S.ProjectNameGroup>
            <span>Название проекта</span>
            <span>Аббревиатура</span>
          </S.ProjectNameGroup>

          <ArrowIcon />

        </S.ProjectNameTab>

        <S.TitleTab>Строительно-монтажные работы</S.TitleTab>
      </S.HeaderTabs>
    </S.Header>
  )
}

export default Header;
