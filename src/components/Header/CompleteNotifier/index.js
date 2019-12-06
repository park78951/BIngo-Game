import React, { useMemo } from 'react';
import { generateKey } from '../../../helper/utils';
import Style from './styles';

const CompleteNotifier = ({ completeLines }) => {
  const completeInfo = useMemo(() => {
    return completeLines.map((completeLine, idx) => {
      const { type, line } = completeLine;

      return(
        <p key={ generateKey(idx) }>
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

export default CompleteNotifier;