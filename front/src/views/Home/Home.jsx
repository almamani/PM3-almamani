import { Container } from "./styled";
import consultorioImg from "../../assets/consultorio.png";

const Home = () => {
  return (
    <Container>
      <figure>
        <img src={consultorioImg} alt="Imagen Consultorio" />
      </figure>

      <div>
        <h2>Registrá tu turno fácilmente</h2>
        <p>
          Bienvenido a nuestro consultorio odontológico, donde ofrecemos una
          variedad de servicios para cuidar tu salud bucodental y embellecer tu
          sonrisa.
        </p>
        <ul>
          <li>
            <span>*</span>Blanqueamiento
          </li>
          <li>
            <span>*</span>Tratamiento de Conducto
          </li>
          <li>
            <span>*</span>Extracciones
          </li>

          <li>
            <span>*</span>Prótesis Dentales
          </li>
        </ul>
        <p className="horarioAtencion">
          Nuestro horario de atención es de{" "}
          <strong>Lunes a Viernes de 10:00 a 18:00 hs</strong>.
        </p>
        <p className="parrafoFinal">
          ¡Esperamos verte pronto para cuidar tu sonrisa!
        </p>
      </div>
    </Container>
  );
};

export default Home;
