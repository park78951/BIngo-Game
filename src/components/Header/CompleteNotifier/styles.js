import styled from 'styled-components';

const CompleteNotifierWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 35%;
  height: 100%;

  & > span {
    display: inline-block;
    font-weight: bold;
    font-size: 1.3rem;
  }

  & > div {
    width: 70%;
    height: 100%;
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    justify-content: flex-start;

    & > p {
        margin: 0;
        font-size: 1.3rem;
      }
  }

`;

export default { CompleteNotifierWrapper };