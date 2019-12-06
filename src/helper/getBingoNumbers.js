import { shuffle, createOnBoardNumbers } from './utils';
import { BINGO_LINE } from '../conatants';

const getBingoNumbers = () => {
  const totalNumbers = BINGO_LINE * BINGO_LINE;

  const bingoNumbers = new Array(totalNumbers)
    .fill()
    .map((_, idx) => ({
        number: idx + 1, 
        selected: false 
    }));

  const shuffledNumbers = shuffle(bingoNumbers);
  const onBoardNumbers = createOnBoardNumbers(shuffledNumbers);

  return onBoardNumbers;
};

export default getBingoNumbers;