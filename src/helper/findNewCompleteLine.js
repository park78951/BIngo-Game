import equal from 'deep-equal';

const findNewCompleteLine = (newLines, prevLines) => {
  const newCompleteLine = newLines.filter(newLine => {
    return !prevLines.some(prevLine => {
      return equal(prevLine, newLine)
    });
  });
  return newCompleteLine;
};

export default findNewCompleteLine;