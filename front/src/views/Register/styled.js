import styled from "styled-components";

const Container = styled.div`
  padding-top: 0.3rem;

  h1 {
    text-align: center;
    margin-bottom: 0.5rem;
  }

  form {
    display: flex;
    flex-direction: column;
    width: 25%;
    margin: 0 auto;
  }

  label {
    font-size: 0.9rem;
    font-weight: bold;
  }

  input {
    width: 100%;
    padding: 0.5rem;
    margin-bottom: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  p {
    color: var(--pink-basic);
    font-size: 0.8rem;
    margin: 0.2rem 0 0 0; /* Espacio entre input y mensaje de error */
  }

  .login {
    margin-top: 0.9rem;
    color: var(--green-basic);
    font-size: 1.05rem;
    font-weight: bold;
    text-align: center;
  }

  button {
    margin-top: 1rem;
    width: 100%;
    padding: 0.5rem;
    background-color: var(--pink-basic);
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-weight: bold;
    transition: background-color 0.3s;

    &:hover {
      background-color: var(--pink-dark);
    }
  }
`;

export { Container };
