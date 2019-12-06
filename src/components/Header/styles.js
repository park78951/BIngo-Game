import styled from 'styled-components';

const HeaderWrapper = styled.div`
  display: flex;
  height: 11rem;
  justify-content: space-between;
  align-items: flex-end;
  background-color: green;

  .header__notification {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 30%;

    & > p {
      font-size: 1.5rem;
      margin: 1rem 0;
    }
  }
`;

export default { HeaderWrapper };