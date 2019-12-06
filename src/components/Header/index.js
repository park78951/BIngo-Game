import React, { useCallback } from 'react';
import CompleteLines from './CompleteLines';
import Button from '.././CustomButton';
import { useSelector, useDispatch } from 'react-redux';
import { startGame } from '../../actions';
import { START_BUTTON, RESTART_BUTTON } from '../../conatants';
import Style from './styles';


const Header = () => {
  const { isPlaying, turn } = useSelector(({ inGame }) => ({
    isPlaying: inGame.isPlaying,
    turn: inGame.turn
  }));
  const dispatch = useDispatch();

  const gameStarter = useCallback(() => {
    dispatch(startGame());
  }, [isPlaying])

  return (
    <Style.HeaderWrapper>
      <CompleteLines />
      <div className='header__notification'>
        <Button onClick={ gameStarter }>
          { isPlaying ? RESTART_BUTTON : START_BUTTON  }
        </Button>
        <p>현재 Turn: { isPlaying ? turn : '시작 전' }</p>
      </div>
      <CompleteLines />
    </Style.HeaderWrapper>
  );
};

export default React.memo(Header);