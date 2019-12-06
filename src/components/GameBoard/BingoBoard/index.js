import React, { useMemo } from 'react';
import BingoCell from '../BingoCell';
import { generateKey } from '../../../helper/utils';
import Style from './styles';

const BingoBoard = ({ numbers, player }) => {
  const bignoCells = useMemo(() => {
    return numbers.flat()
      .map(numObj => {
        const { number, selected } = numObj;
        
        return (
          <BingoCell 
            key={ generateKey(number) }
            selected={ selected }
            number={ number }
            player={ player }
          />
        );
  })}, [numbers]);

  return (
    <Style.BingoBoardWrapper>
      { bignoCells}
    </Style.BingoBoardWrapper>
  );
};

export default BingoBoard;