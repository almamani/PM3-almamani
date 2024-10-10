import styled from "styled-components";
import imgPie from "../../assets/img_pie.png";

const Container = styled.div`
  width: 100%;
  background-color: pink;
  height: 50px;
  background-image: url(${imgPie});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;

  div {
    margin: 0 auto;
    width: 95%;
    display: flex;
    justify-content: flex-end;
  }

  .logito__picture {
    width: 2.1%;
  }

  .anioWeb {
    font-size: 1.1rem;
    color: var(--gray-light);
  }
`;

export { Container };
