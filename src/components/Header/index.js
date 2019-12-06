import React, { useCallback } from 'react';
import CompleteNotifier from './CompleteNotifier';
import Button from '.././CustomButton';
import { useSelector, useDispatch } from 'react-redux';
import { startGame } from '../../actions';
import { 
  START_BUTTON, 
  RESTART_BUTTON, 
  PLAYER1, 
  PLAYER2 
} from '../../conatants';
import Style from './styles';


const Header = () => {
  const { isPlaying, turn, completeLines } = useSelector((state) => ({
    isPlaying: state.inGame.isPlaying,
    turn: state.inGame.turn,
    completeLines: state.completeLines
  }));
  
  const dispatch = useDispatch();

  const gameStarter = useCallback(() => {
    dispatch(startGame());
  }, [isPlaying])

  return (
    <Style.HeaderWrapper>
      <CompleteNotifier completeLines={ completeLines[PLAYER1] } />
      <div className='header__notification'>
        <Button onClick={ gameStarter }>
          { isPlaying ? RESTART_BUTTON : START_BUTTON  }
        </Button>
        <p>현재 Turn: { isPlaying ? turn : '시작 전' }</p>
      </div>
      <CompleteNotifier completeLines={ completeLines[PLAYER2] } />
    </Style.HeaderWrapper>
  );
};

export default Header;