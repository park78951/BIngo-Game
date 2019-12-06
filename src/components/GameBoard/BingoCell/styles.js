import styled from 'styled-components';

const BingoCellWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 5.5rem;
  height: 5.5rem;
  font-size: 2rem;
  border: 1px solid #000;
  border-radius: 1rem;

  background-color: ${({ selected }) => selected && '#000'};
  color: ${({ selected }) => selected && '#ffffff'};
`;

export default { BingoCellWrapper }