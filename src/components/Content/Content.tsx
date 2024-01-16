import React, { useCallback, useEffect, useState } from 'react';
import { ReactComponent as PaperIcon } from '../../assets/icons/paper-icon.svg';
import * as S from './Content.styled';

import { TableRows } from '../TableRows';
import { IRow } from '../../types/common.types';
import { useInputHandlers } from './useInputHandlers';
import { createOrUpdateRow, deleteRow, getRows } from '../../api/api';
import { createOrUpdateLocalData } from './Content.service';
import { removeElementWithID } from './utils';


const Content: React.FC = () => {
  const [data, setData] = useState<Array<IRow>>([]);

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

  useEffect(() => {
    getRows().then((res) => setData(res.data));
  }, []);

  const handleCreateOrUpdate = useCallback((
    event: React.KeyboardEvent<HTMLInputElement>, 
    type: string,
    stringData?: any,
  ) => {
    if (event.key === 'Enter') {
      const body = {
        equipmentCosts: stringData?.equipmentCostsValue || equipmentCostsValue,
        estimatedProfit: stringData?.estimatedProfitValue || estimatedProfitValue,
        machineOperatorSalary: 0,
        mainCosts: 0,
        materials: 0,
        mimExploitation: 0,
        overheads: stringData?.overheadsValue || overheadsValue,
        parentId: stringData?.id || null,
        rowName: stringData?.rowNameValue || rowNameValue || null,
        salary: stringData?.salaryValue || salaryValue,
        supportCosts: 0
      };
  
      createOrUpdateRow(type, body).then((res) => {
        createOrUpdateLocalData(
          res.data,
          type, 
          stringData,
          setData,
          setRowNameValue,
          setSalaryValue,
          setEquipmentCostsValue,
          setEstimatedProfitValue,
          setOverheadsValue,
        )
      })
      .catch((err) => {
        console.log('error', err);
      })
    }
  }, [
    equipmentCostsValue, 
    estimatedProfitValue, 
    overheadsValue, 
    rowNameValue, 
    salaryValue,
    setRowNameValue,
    setSalaryValue,
    setEquipmentCostsValue,
    setEstimatedProfitValue,
    setOverheadsValue,
  ]);

  const deleteString = (id: number) => {
    deleteRow(id).then(() => {
      const newData = [...data];
      removeElementWithID(newData, id);
      setData(newData);
    })
    .catch((err) => {
      console.log('error', err);
    })
  }
  
  return (
    <S.Table>

      <S.TableHeader>
        <S.HeaderCell>Уровень</S.HeaderCell>
        <S.HeaderCell>Наименование работ</S.HeaderCell>
        <S.HeaderCell>Основная з/п</S.HeaderCell>
        <S.HeaderCell>Оборудование</S.HeaderCell>
        <S.HeaderCell>Оборудование</S.HeaderCell>
        <S.HeaderCell>Сметная прибыль</S.HeaderCell>
      </S.TableHeader>

      {
        !data.length ? (
          <S.TableRow>
            <S.ButtonCell><PaperIcon /></S.ButtonCell>
            <S.RowCell>
              <S.InputCell 
                value={rowNameValue || ''} 
                onChange={handleRowNameChange} 
                onKeyDown={(e) => handleCreateOrUpdate(e, 'create')} 
              />
            </S.RowCell>
            <S.RowCell>
              <S.InputCell 
                type='number' 
                value={salaryValue} 
                onChange={handleSalaryChange} 
                onKeyDown={(e) => handleCreateOrUpdate(e, 'create')} 
              />
            </S.RowCell>
            <S.RowCell>
              <S.InputCell 
                type='number' 
                value={equipmentCostsValue} 
                onChange={handleEquipmentCostsChange} 
                onKeyDown={(e) => handleCreateOrUpdate(e, 'create')}
              />
            </S.RowCell>
            <S.RowCell>
              <S.InputCell 
                type='number' 
                value={overheadsValue} 
                onChange={handleOverheadsValueChange} 
                onKeyDown={(e) => handleCreateOrUpdate(e, 'create')} 
              />
            </S.RowCell>
            <S.RowCell>
              <S.InputCell 
                type='number' 
                value={estimatedProfitValue} 
                onChange={handleEstimatedProfitChange} 
                onKeyDown={(e) => handleCreateOrUpdate(e, 'create')} 
              />
            </S.RowCell>
          </S.TableRow>
        ) : (
          <>
            {
              data.map(listItem => {
                return (
                  <TableRows 
                    row={listItem} 
                    handleCreateOrUpdate={handleCreateOrUpdate} 
                    deleteString={deleteString} 
                  />
                )
              })
            }
          </>
        )
      }
    </S.Table>
  )
}

export default Content;
