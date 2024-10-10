import { Container } from "./styled";
import imgLogoPie from "../../assets/logo_odonto03.svg";

const Footer = () => {
  return (
    <>
      <Container>
        <div>
          <figure className="logito__picture">
            <img src={imgLogoPie} className="logito__img" alt="Logo_CtS" />
          </figure>
          <p className="anioWeb">Cambia Tu Sonrisa - 2024</p>
        </div>
      </Container>
    </>
  );
};

export default Footer;
