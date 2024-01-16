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
}

const TableRows: React.FC<ITableRows> = ({ row, handleCreateOrUpdate, deleteString }) => {
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
          <S.TableRow onDoubleClick={handleDoubleClick}>
            <S.ButtonCell>
              <ManageStringButton onCreateClick={createNewRow} onDeleteClick={() => row.id && deleteString(row.id)} />
            </S.ButtonCell>
            <S.RowCell>{row.rowName}</S.RowCell>
            <S.RowCell>{row.salary}</S.RowCell>
            <S.RowCell>{row.equipmentCosts}</S.RowCell>
            <S.RowCell>{row.overheads}</S.RowCell>
            <S.RowCell>{row.estimatedProfit}</S.RowCell>
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
          />
        )
      }
      {
        row.child && row.child.map((child: IRow) => {
          return (
            <div style={{ marginLeft: `20px` }}>
              <TableRows 
                row={child} 
                handleCreateOrUpdate={handleCreateOrUpdate} 
                deleteString={deleteString}
                key={row.id}
              />
            </div>
          )
        })
      }
      {
        mode === Mode.Create && (
          <div style={{ marginLeft: `20px` }}>
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
            />
          </div>
        )
      }
    </>
  )
};

export default TableRows;