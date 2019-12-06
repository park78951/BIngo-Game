import equal from 'deep-equal';
import { ROW, DIAGONAL, COLUMN, BINGO_LINE } from '../conatants';

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

export const getCompleteRow = bingoNumbers => {
  const rowBingoLine = bingoNumbers.reduce((completeLine, bingoRow, row) => {
    if(bingoRow.every(numObj => numObj.selected)) {
      completeLine.push({
        type: ROW,
        line: row + 1
      });
    }
    
    return completeLine;
  }, []);

  return rowBingoLine;
};

export const getCompleteColumn = (bingoNumbers) => {
  const countStorage = new Array(BINGO_LINE).fill(0);

  bingoNumbers.forEach(bingoRow => {
    bingoRow.forEach((numObj, idx) => {
      if(numObj.selected) countStorage[idx] += 1;
    });
  });
    
  return getCompleteLine(countStorage, COLUMN);
}

export const getCompleteDiagonal = (bingoNumbers) => {
  let countStorage = [0, 0];

  bingoNumbers.forEach((bingoRow, rowIndex) => {
    bingoRow.forEach((numObj, columnIndex) => {
      if(rowIndex === columnIndex && numObj.selected) countStorage[0] += 1
      if(rowIndex + columnIndex === BINGO_LINE - 1 && numObj.selected) countStorage[1] += 1;
    });
  });

  return getCompleteLine(countStorage, DIAGONAL);
};

const getCompleteLine = (countStorage, direction) => {
  const completeBingoLine = countStorage
    .map((count, idx) => {
      return count === BINGO_LINE && {
        type: direction,
        line: idx + 1
      }
    })
    .filter(completeForm => completeForm);

  return completeBingoLine;
};

export const findNewCompleteLine = (newLines, prevLines) => {
  const newCompleteLine = newLines.filter(newLine => {
    return !prevLines.some(prevLine => {
      return equal(prevLine, newLine)
    });
  });

  return newCompleteLine;
};

export const generateKey = (pre) => {
  return `${ pre }_${ new Date().getTime() }`;
}
