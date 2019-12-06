import React from 'react';
import Style from './styles';

const BingoCell = ({ children, selected }) => {
  return (
    <Style.BingoCellWrapper selected={ selected }>
      { children }
    </Style.BingoCellWrapper>
  );
};

export default BingoCell;