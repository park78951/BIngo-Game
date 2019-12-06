import { 
  WINNER_MESSAGE, 
  DRAW_MESSAGE,
  PLAYER1,
  PLAYER2
} from '../conatants'

const getFinishingMessage = (bothCompleteLines) => {
  const { completeLinesPlayer1, completeLinesPlayer2 } = bothCompleteLines;
  let FinishingMessage = null;
  
  const isPlayer1Bingo = completeLinesPlayer1.length === 5;
  const isPlayer2Bingo = completeLinesPlayer2.length === 5;
  
  if(isPlayer1Bingo && isPlayer2Bingo) FinishingMessage = DRAW_MESSAGE; 
  else if(isPlayer1Bingo) FinishingMessage = PLAYER1 + WINNER_MESSAGE;
  else if(isPlayer2Bingo) FinishingMessage = PLAYER2 + WINNER_MESSAGE;

  return FinishingMessage;
};

export default getFinishingMessage;