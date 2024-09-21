import styled from "styled-components";

const Container = styled.div`
  width: 90%;
  max-width: 1300px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;

  img {
    width: 100%;
    display: block;
  }

  figure {
    width: 40%;
    max-width: 220px;
  }

  ul {
    display: flex;
  }

  li {
    list-style: none;
    padding: 0.5rem 1.5rem;

    &:hover {
      color: var(--pink-dark);
      cursor: pointer;
    }
  }
`;

export { Container };
