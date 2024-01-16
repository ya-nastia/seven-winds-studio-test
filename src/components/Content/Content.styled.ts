import styled from "styled-components";

export const Table = styled.div`
  padding: 10px;
`;

export const TableHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr 5fr repeat(4, 2fr);
`;

export const HeaderCell = styled.div`
  padding: 0 12px 12px;

  color: #A1A1AA;
  font-feature-settings: 'clig' off, 'liga' off;
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
  letter-spacing: 0.1px;
`;

export const TableRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 5fr repeat(4, 2fr);

  border-top: 1px solid #414144;
`;

export const RowCell = styled.div`
  padding: 21px 12px;

  color: #FFF;

  font-feature-settings: 'clig' off, 'liga' off;
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
  letter-spacing: 0.1px;
`;

export const ButtonCell = styled.button`
  display: flex;
  align-items: center;

  padding: 21px 12px;

  border: none;
  background-color: transparent;
`;

export const InputCell = styled.input`
  width: 100%;
  height: 36px;

  color: #FFF;

  border-radius: 6px;
  border: 1px solid #414144;
  background: transparent;
`;