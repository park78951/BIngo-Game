import { BINGO_LINE } from '../conatants';

const markSelected = (bingoNumbers, payload) => {
  const newBingoNumbers = bingoNumbers.map(row => {
    return row.map(numObj => {
      if(numObj.number === payload) numObj.selected = true

      return numObj;
    });
  })
  
  return newBingoNumbers;
};

export default markSelected;