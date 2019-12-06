import { 
  getCompleteRow, 
  getCompleteColumn, 
  getCompleteDiagonal 
} from './utils';

const getCompleteLines = (bingoNumbers) => {

  const row = getCompleteRow(bingoNumbers);
  const column = getCompleteColumn(bingoNumbers);
  const diagonal = getCompleteDiagonal(bingoNumbers);

  return [...row, ...column, ...diagonal]
};

export default getCompleteLines;

