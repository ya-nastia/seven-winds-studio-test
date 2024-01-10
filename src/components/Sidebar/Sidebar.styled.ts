import styled from "styled-components";

export const Sidebar = styled.nav`
  width: 234px;

  display: flex;
  flex-direction: column;

  background: #27272A;
`;

export const SidebarItem = styled.div<{ isActive?: boolean }>`
  display: flex;
  align-items: center;
  gap: 14px;

  padding: 5px 0 5px 20px;

  color: #FFF;
  font-family: Roboto;
  font-size: 14px;
  font-weight: 400;

  background: ${({isActive}) => isActive ? '#A1A1AA' : 'none'};
  cursor: pointer;
`;