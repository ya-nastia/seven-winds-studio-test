import React, { ReactNode } from 'react';
import * as S from './Layout.styled';
import { Header } from '../Header';
import { Sidebar } from '../Sidebar';

interface ILayoutProps {
  children: ReactNode
}

const Layout: React.FC<ILayoutProps> = ({ children }) => {
  return (
    <S.Layout>
      <Header />
      <Sidebar />
      {children}
    </S.Layout>
  )
}

export default Layout;
