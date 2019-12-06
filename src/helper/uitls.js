import { BINGO_LINE } from '../conatants';

export const createOnBoardNumbers = (bingoNumbers) => {
  const onBoardNumbers = [];

  for(let i = 0; i < BINGO_LINE; i++) {
    onBoardNumbers.push(bingoNumbers.splice(0, 5));
  }

  return onBoardNumbers;
};

export const shuffle = (bingoNumbers) => {
  const shuffledNumbers = [...bingoNumbers];
  const lastIdx = shuffledNumbers.length;

  for(let i = 0; i < lastIdx; i++) {
    const randomNumber = Math.floor(Math.random() * lastIdx);

    const temp = shuffledNumbers[i].number;
    shuffledNumbers[i].number = shuffledNumbers[randomNumber].number;
    shuffledNumbers[randomNumber].number = temp;
  }
  
  return shuffledNumbers;
};