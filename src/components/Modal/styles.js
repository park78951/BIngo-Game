import styled from 'styled-components';

const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 30rem;
  height: 10rem;
  background-color: #ffffff;
  border: 2px solid #000;
  border-radius: 1rem;

  & > p {
    font-size: 1.3rem;
  }
`;

export default { ModalWrapper };