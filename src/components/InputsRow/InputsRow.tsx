import React from "react";
import * as S from '../Content/Content.styled';
import { ReactComponent as PaperIcon } from '../../assets/icons/paper-icon.svg';

interface IInputsRowProps {
  rowNameValue: string | null,
  salaryValue: number,
  equipmentCostsValue: number,
  overheadsValue: number,
  estimatedProfitValue: number,
  handleRowNameChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
  handleSalaryChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
  handleEquipmentCostsChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
  handleOverheadsValueChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
  handleEstimatedProfitChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
  localCreateString: (e: React.KeyboardEvent<HTMLInputElement>) => void
}

const InputsRow: React.FC<IInputsRowProps> = ({
  localCreateString,
  rowNameValue,
  salaryValue,
  equipmentCostsValue,
  overheadsValue,
  estimatedProfitValue,
  handleRowNameChange,
  handleSalaryChange,
  handleEquipmentCostsChange,
  handleOverheadsValueChange,
  handleEstimatedProfitChange,
}) => {
  return (
    <S.TableRow>
      <S.ButtonCell>
        <PaperIcon />
      </S.ButtonCell>
      <S.RowCell>
        <S.InputCell 
          value={String(rowNameValue)} 
          onChange={handleRowNameChange} 
          onKeyDown={(e) => localCreateString(e)} 
        />
      </S.RowCell>
      <S.RowCell>
        <S.InputCell 
          type='number' 
          value={salaryValue} 
          onChange={handleSalaryChange} 
          onKeyDown={(e) => localCreateString(e)} 
        />
      </S.RowCell>
      <S.RowCell>
        <S.InputCell 
          type='number' 
          value={equipmentCostsValue} 
          onChange={handleEquipmentCostsChange} 
          onKeyDown={(e) => localCreateString(e)} 
        />
      </S.RowCell>
      <S.RowCell>
        <S.InputCell 
          type='number' 
          value={overheadsValue} 
          onChange={handleOverheadsValueChange} 
          onKeyDown={(e) => localCreateString(e)} 
        />
      </S.RowCell>
      <S.RowCell>
        <S.InputCell 
          type='number' 
          value={estimatedProfitValue} 
          onChange={handleEstimatedProfitChange} 
          onKeyDown={(e) => localCreateString(e)} 
        />
      </S.RowCell>
    </S.TableRow>
  )
};

export default InputsRow;