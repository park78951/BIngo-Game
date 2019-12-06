import React, { useMemo } from 'react';
import BingoCell from '../BingoCell';
import Style from './styles';

const mockData = new Array(25).fill().map((_, idx) => idx + 1);

const BingoBoard = () => {
  const bignoCells = useMemo(() => mockData.map(num => {
    return (
      <BingoCell key={ num }>
        { num }
      </BingoCell>
    );
  }));

  return (
    <Style.BingoBoardWrapper>
      { bignoCells}
    </Style.BingoBoardWrapper>
  );
};

export default BingoBoard;