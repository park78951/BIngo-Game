import React, { useCallback } from 'react';
import CompleteLines from './CompleteLines';
import Button from '.././CustomButton';
import { useSelector, useDispatch } from 'react-redux';
import { startGame } from '../../actions';
import { START_BUTTON, RESTART_BUTTON } from '../../conatants';
import Style from './styles';


const Header = () => {
  const isPlaying = useSelector(({ inGame }) => inGame.isPlaying);
  const dispatch = useDispatch();

  const gameStarter = useCallback(() => {
    dispatch(startGame());
  }, [isPlaying])

  return (
    <Style.HeaderWrapper>
      <CompleteLines />
      <Button onClick={ gameStarter }>
        { isPlaying ? RESTART_BUTTON : START_BUTTON  }
      </Button>
      <CompleteLines />
    </Style.HeaderWrapper>
  );
};

export default Header;