import React, { useMemo } from 'react';
import Style from './styles';

const CompleteNotifier = ({ completeLines }) => {
  const completeInfo = useMemo(() => {
    return completeLines.map(({ type, line } ) => {
      return(
        <p key={ Date.now() * line }>
          { type }의 { line }번 째줄
        </p>
      );
    });
  }, [completeLines]);

  return (
    <Style.CompleteNotifierWrapper>
      <span>완성라인:</span>
      <div>
        { completeInfo }
      </div>
    </Style.CompleteNotifierWrapper>
  );
};

export default React.memo(CompleteNotifier);