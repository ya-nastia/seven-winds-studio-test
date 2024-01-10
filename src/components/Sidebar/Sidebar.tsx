import React from 'react';
import { ReactComponent as SidebarIcon } from '../../assets/icons/navbar-icon.svg';
import * as S from './Sidebar.styled';

const Sidebar: React.FC = () => {
  return (
    <S.Sidebar>
      <S.SidebarItem>
        <SidebarIcon />
        По проекту
      </S.SidebarItem>
      <S.SidebarItem>
        <SidebarIcon />
        Объекты
      </S.SidebarItem>
      <S.SidebarItem>
        <SidebarIcon />
        РД
      </S.SidebarItem>
      <S.SidebarItem>
        <SidebarIcon />
        МТО
      </S.SidebarItem>
      <S.SidebarItem isActive={true}>
        <SidebarIcon />
        СМР
      </S.SidebarItem>
      <S.SidebarItem>
        <SidebarIcon />
        График
      </S.SidebarItem>
      <S.SidebarItem>
        <SidebarIcon />
        МиМ
      </S.SidebarItem>
      <S.SidebarItem>
        <SidebarIcon />
        Рабочие
      </S.SidebarItem>
      <S.SidebarItem>
        <SidebarIcon />
        Капвложения
      </S.SidebarItem>
      <S.SidebarItem>
        <SidebarIcon />
        Бюджет
      </S.SidebarItem>
      <S.SidebarItem>
        <SidebarIcon />
        Финансирование
      </S.SidebarItem>
      <S.SidebarItem>
        <SidebarIcon />
        Панорамы
      </S.SidebarItem>
      <S.SidebarItem>
        <SidebarIcon />
        Камеры
      </S.SidebarItem>
      <S.SidebarItem>
        <SidebarIcon />
        Поручения
      </S.SidebarItem>
      <S.SidebarItem>
        <SidebarIcon />
        Контрагенты
      </S.SidebarItem>
    </S.Sidebar>
  )
}

export default Sidebar;
