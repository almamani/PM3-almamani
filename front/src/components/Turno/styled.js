import styled from "styled-components";

const Container = styled.div`
  width: 200px;
  text-align: center;
  height: auto;
  background-color: var(--pink-light-very); /* #ffd5eb */
  border: 1px solid var(--pink-light); /* #fe7abf */
  padding: 1rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  border-radius: 8px;

  button {
    margin-top: 1rem;
    background-color: var(--pink-light); /* #fe7abf */
    color: white;
    border: none;
    padding: 8px 18px;
    font-size: 14px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease, opacity 0.3s ease;

    &:disabled {
      background-color: #f5a5c6;
      color: #ffe4f2;
      cursor: not-allowed;
      opacity: 0.7;
    }

    &:hover:not(:disabled) {
      background-color: #e65ca2;
    }
  }
`;

export { Container };
