import styled from "styled-components";

// Estilos del contenedor
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 70px;
  border: 1px solid var(--pink-light);
  padding: 1rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  border-radius: 8px;
  margin-bottom: 1rem;

  button {
    background-color: var(--pink-basic);
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
      background-color: var(--pink-dark);
    }
  }
`;

const Estado = styled.p`
  font-weight: bold;
  color: ${(props) =>
    props.status === "cancelled" ? "var(--pink-dark)" : "var(--green-basic)"};
`;

export { Container, Estado };
