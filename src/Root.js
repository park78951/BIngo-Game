import { hot } from 'react-hot-loader/root';
import React from 'react';
import GameContainer from './container/GameContainer';

const Root = () => {
  return (
    <>
      <GameContainer />
    </>
  );
}

export default hot(Root);