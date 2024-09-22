import styled from "styled-components";

const Container = styled.div`
  padding-top: 1rem;
  h1 {
    text-align: center;
  }

  width: 90%;
  max-width: 1300px;
  margin: 0 auto;

  .containerTurnos {
    margin-top: 3rem;
    display: grid;
    grid-template-columns: repeat(4, 25%);
    justify-content: space-between;
    align-content: center;
    row-gap: 3rem;
  }
`;

export { Container };
