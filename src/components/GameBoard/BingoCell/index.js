import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectNumber } from '../../../actions';
import Style from './styles';

const BingoCell = ({ selected, number, player }) => {
  const turn = useSelector(({ inGame }) => inGame.turn);
  const dispatch = useDispatch();

  const cellClicker = useCallback(() => {
    if(player !== turn ) return alert('임시!');
    if(selected) return;

    dispatch(selectNumber(number));
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