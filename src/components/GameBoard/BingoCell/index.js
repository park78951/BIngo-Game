import React from 'react';
import Style from './styles';

const BingoCell = ({ children }) => {
  return (
    <Style.BingoCellWrapper>
      { children }
    </Style.BingoCellWrapper>
  );
};

export default BingoCell;