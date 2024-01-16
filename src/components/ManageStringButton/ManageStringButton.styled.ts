import styled from "styled-components";

export const IconsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;

  padding: 3px 7px;

  border-radius: 6px;
  transition: 0.3s;

  & svg {
    cursor: pointer;
  }

  & svg:last-child {
    display: none;
  }

  &:hover {
    background: #414144;

    & svg:last-child {
      display: block;
    }
  }
`;