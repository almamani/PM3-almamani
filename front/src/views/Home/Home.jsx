import { Container } from "./styled";
import consultorioImg from "../../assets/consultorio.png";

const Home = () => {
  return (
    <Container>
      {/* Espacio para la imagen */}
      <figure>
        <img src={consultorioImg} alt="Imagen Consultorio" />
      </figure>

      <div>
        <h1
          style={{ fontSize: "2.5rem", color: "#ee027e", marginBottom: "10px" }}
        >
          Consultorio Odontológico - Cambiá tu sonrisa
        </h1>
        <h2
          style={{ fontSize: "1.8rem", color: "#db0475", marginBottom: "10px" }}
        >
          Registrá tu turno fácilmente
        </h2>
        <p style={{ fontSize: "1rem", lineHeight: "1.6" }}>
          Bienvenido a nuestro consultorio odontológico, donde ofrecemos una
          variedad de servicios para cuidar tu salud bucodental y embellecer tu
          sonrisa.
        </p>
        <ul style={{ listStyle: "none", padding: "0" }}>
          <li style={{ fontSize: "1.2rem", color: "#fe7abf", margin: "5px 0" }}>
            Blanqueamiento
          </li>
          <li style={{ fontSize: "1.2rem", color: "#fe7abf", margin: "5px 0" }}>
            Tratamiento de Conducto
          </li>
          <li style={{ fontSize: "1.2rem", color: "#fe7abf", margin: "5px 0" }}>
            Extracciones
          </li>
          <li style={{ fontSize: "1.2rem", color: "#fe7abf", margin: "5px 0" }}>
            Carillas Dentales
          </li>
          <li style={{ fontSize: "1.2rem", color: "#fe7abf", margin: "5px 0" }}>
            Prótesis Dentales
          </li>
        </ul>
        <div style={{ fontSize: "1.1rem", color: "#019149", margin: "10px 0" }}>
          Nuestro horario de atención es de{" "}
          <strong>Lunes a Viernes de 10:00 a 18:00 hs</strong>.
        </div>
        <p style={{ fontSize: "1rem", lineHeight: "1.6" }}>
          ¡Esperamos verte pronto para cuidar tu sonrisa!
        </p>
      </div>
    </Container>
  );
};

export default Home;
