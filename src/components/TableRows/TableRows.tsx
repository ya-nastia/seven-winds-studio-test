import React, { useCallback, useState } from "react";
import * as S from '../Content/Content.styled';
import { ManageStringButton } from '../ManageStringButton';
import { IRow } from "../../types/common.types";
import { useInputHandlers } from "../Content/useInputHandlers";
import { Mode } from "./TableRows.types";
import { InputsRow } from "../InputsRow";

interface ITableRows {
  row: IRow;
  handleCreateOrUpdate: (event: React.KeyboardEvent<HTMLInputElement>, type: string, data?: any) => void;
  deleteString: (id: number) => void;
  level?: number;
}

const TableRows: React.FC<ITableRows> = ({ 
  row, 
  handleCreateOrUpdate, 
  deleteString, 
  level = 0,
}) => {
  const [mode, setMode] = useState<Mode>(Mode.Default);

  const {
    rowNameValue,
    salaryValue,
    equipmentCostsValue,
    overheadsValue,
    estimatedProfitValue,
    setRowNameValue,
    setSalaryValue,
    setEquipmentCostsValue,
    setEstimatedProfitValue,
    setOverheadsValue,
    handleRowNameChange,
    handleSalaryChange,
    handleEquipmentCostsChange,
    handleOverheadsValueChange,
    handleEstimatedProfitChange,
  } = useInputHandlers();

  const localCreateString = useCallback((e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e?.key === 'Enter') {
      const data = {
        rowNameValue,
        salaryValue,
        equipmentCostsValue,
        overheadsValue,
        estimatedProfitValue,
        id: row.id,
      };

      handleCreateOrUpdate(e, mode, data);
      setMode(Mode.Default);

      setRowNameValue('');
      setSalaryValue(0);
      setEquipmentCostsValue(0);
      setEstimatedProfitValue(0);
      setOverheadsValue(0);
    }
  }, [
    handleCreateOrUpdate, 
    equipmentCostsValue,
    setEquipmentCostsValue,
    estimatedProfitValue, 
    overheadsValue, 
    setEstimatedProfitValue,
    setOverheadsValue,
    setRowNameValue,
    setSalaryValue,
    row.id, 
    rowNameValue, 
    salaryValue,
    mode,
  ]);

  const handleDoubleClick = useCallback(() => {
    setRowNameValue(row.rowName);
    setEquipmentCostsValue(row.equipmentCosts);
    setEstimatedProfitValue(row.estimatedProfit);
    setOverheadsValue(row.overheads);
    setSalaryValue(row.salary)

    setMode(Mode.Edit);
  }, [
    row.equipmentCosts, 
    row.estimatedProfit, 
    row.overheads, 
    row.rowName, 
    row.salary,
    setEquipmentCostsValue, 
    setEstimatedProfitValue,
    setOverheadsValue,
    setRowNameValue,
    setSalaryValue,
  ]);

  const createNewRow = useCallback(() => {
    setMode(Mode.Create);
  }, []);

  return (
    <>
      {
        mode !== Mode.Edit && (
          <S.TableRow onDoubleClick={handleDoubleClick} firstRow={100 + level * 20}>
            <S.ButtonCell>
              <ManageStringButton onCreateClick={createNewRow} onDeleteClick={() => row.id && deleteString(row.id)} />
            </S.ButtonCell>
            <S.RowCell title={row.rowName || ''}>{row.rowName}</S.RowCell>
            <S.RowCell title={`${row.salary}`}>{row.salary}</S.RowCell>
            <S.RowCell title={`${row.equipmentCosts}`}>{row.equipmentCosts}</S.RowCell>
            <S.RowCell title={`${row.overheads}`}>{row.overheads}</S.RowCell>
            <S.RowCell title={`${row.estimatedProfit}`}>{row.estimatedProfit}</S.RowCell>
          </S.TableRow>
        )
      }
      {
        mode === Mode.Edit && (
          <InputsRow 
            rowNameValue={rowNameValue}
            salaryValue={salaryValue}
            equipmentCostsValue={equipmentCostsValue}
            overheadsValue={overheadsValue}
            estimatedProfitValue={estimatedProfitValue}
            handleRowNameChange={handleRowNameChange}
            handleSalaryChange={handleSalaryChange}
            handleEquipmentCostsChange={handleEquipmentCostsChange}
            handleOverheadsValueChange={handleOverheadsValueChange}
            handleEstimatedProfitChange={handleEstimatedProfitChange}
            localCreateString={localCreateString} 
            level={level}
          />
        )
      }
      {
        row.child && row.child.map((child: IRow) => {
          return (
            <TableRows 
              row={child} 
              handleCreateOrUpdate={handleCreateOrUpdate} 
              deleteString={deleteString}
              key={row.id}
              level={level + 1}
            />
          )
        })
      }
      {
        mode === Mode.Create && (
          <InputsRow 
            rowNameValue={rowNameValue}
            salaryValue={salaryValue}
            equipmentCostsValue={equipmentCostsValue}
            overheadsValue={overheadsValue}
            estimatedProfitValue={estimatedProfitValue}
            handleRowNameChange={handleRowNameChange}
            handleSalaryChange={handleSalaryChange}
            handleEquipmentCostsChange={handleEquipmentCostsChange}
            handleOverheadsValueChange={handleOverheadsValueChange}
            handleEstimatedProfitChange={handleEstimatedProfitChange}
            localCreateString={localCreateString} 
            level={level + 1}
          />
        )
      }
    </>
  )
};

export default TableRows;