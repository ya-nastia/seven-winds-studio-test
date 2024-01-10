import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  flex-direction: column;

  grid-column: 1 / 3;

  background: #27272A;
`;

export const HeaderMenu = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;

  padding-left: 20px;
  width: 100%;
  height: 44px;

  & > * {
    cursor: pointer;
  }
`;

export const MenuItem = styled.div<{ isActive?: boolean }>`
  height: 100%;

  color: ${({isActive}) => isActive ? '#FFFFFF' : '#A1A1AA'};
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 44px;

  border-bottom: ${({isActive}) => isActive ? '2px solid #FFFFFF' : 'none'};
`;

export const HeaderTabs = styled.div`
  display: grid;
  grid-template-columns: 234px 314px auto;

  height: 44px;
  
  border-top: 1px solid #414144;
  border-bottom: 1px solid #414144;
`;

export const ProjectNameTab = styled.div`
  display: flex;
  justify-content: space-between;

  padding: 8px 7px 8px 20px;

  & svg {
    cursor: pointer;
  }
`;

export const ProjectNameGroup = styled.div`
  display: flex;
  flex-direction: column;

  color: #A1A1AA;
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  & span:first-child {
    font-size: 14px;
  }

  & span:last-child {
    font-size: 10px;
  }
`;

export const TitleTab = styled.div`
  padding: 11px 15px 12px;

  color: #FFF;
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  border-left: 1px solid #414144;
  border-right: 1px solid #414144;
`;