import React from 'react';
import { ReactComponent as CreateIcon } from '../../assets/icons/paper-icon.svg';
import { ReactComponent as DeleteIcon } from '../../assets/icons/delete-icon.svg';
import * as S from './ManageStringButton.styled';

interface IManageStringButtonProps {
  onCreateClick: () => void;
  onDeleteClick: () => void;
}

const ManageStringButton: React.FC<IManageStringButtonProps> = ({onCreateClick, onDeleteClick}) => {
  return (
    <S.IconsContainer>
      <CreateIcon onClick={onCreateClick} />
      <DeleteIcon onClick={onDeleteClick} />
    </S.IconsContainer>
  )
}

export default ManageStringButton;
