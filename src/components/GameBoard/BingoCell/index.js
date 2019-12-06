import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { selectNumber } from '../../../actions';
import Style from './styles';

const BingoCell = ({ selected, number }) => {
  const dispatch = useDispatch();
  const cellClicker = useCallback(() => {
    if(selected) return;

    dispatch(selectNumber(number))
  }, [selected])

  return (
    <Style.BingoCellWrapper 
      selected={ selected }
     onClick={ cellClicker }
    >
      { number }
    </Style.BingoCellWrapper>
  );
};

export default BingoCell;