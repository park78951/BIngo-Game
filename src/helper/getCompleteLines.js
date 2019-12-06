import { 
  getCompleteRow, 
  getCompleteColumn, 
  getCompleteDiagonal,
  findNewCompleteLine
} from './utils';

const getCompleteLines = (bingoNumbers, completeLines) => {
  const row = getCompleteRow(bingoNumbers);
  const column = getCompleteColumn(bingoNumbers);
  const diagonal = getCompleteDiagonal(bingoNumbers);
  
  const result = [...row, ...column, ...diagonal];

  const newAdded = findNewCompleteLine(result ,completeLines)

  return [...completeLines, ...newAdded];
};

export default getCompleteLines;

