import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
  max-width: 1300px;
  margin: 2.5rem auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  figure {
    width: 50%;
  }

  div {
    width: 45%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    color: var(--black-basic);
  }

  h2 {
    fontsize: 1.8rem;
    color: var(--pink-dark-shadow);
    marginbottom: 10px;
  }

  p {
    fontsize: 1rem;
    lineheight: 1.6;
  }

  ul {
    liststyle: none;
    padding: 0;
  }

  li {
    font-size: 1.2rem;
    margin: 5px 0;
  }

  span {
    color: var(--pink-dark-shadow);
    font-weight: bold;
  }

  .parrafoFinal {
    color: var(--pink-dark-shadow);
    font-weight: bold;
  }
  .horarioAtencion {
    font-size: 1.1rem;
    color: #019149;
  }
`;
