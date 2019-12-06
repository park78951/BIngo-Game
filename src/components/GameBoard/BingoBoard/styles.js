import styled from 'styled-components';

const BingoBoardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  width: 30rem;
  height: 30rem;

  background-color: ${({ selected }) => selected && '#000'};
  color: ${({ selected }) => selected && '#ffffff'}
`;

export default { BingoBoardWrapper };

