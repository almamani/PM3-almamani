import styled from "styled-components";

// Contenedor principal con espacio para la imagen a la izquierda
export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  height: 100vh;

  figure {
    width: 50%; // Espacio para la imagen
    img {
      width: 100%;
      height: auto;
    }
  }
`;

// Sección de información
export const InfoSection = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  color: #333;
`;

// Título principal
export const Title = styled.h1`
  font-size: 2.5rem;
  color: #ee027e; // Rosa fuerte para resaltar
  margin-bottom: 10px;
`;

// Subtítulo
export const Subtitle = styled.h2`
  font-size: 1.8rem;
  color: #db0475; // Variación de rosa
  margin-bottom: 10px;
`;

// Párrafos comunes
export const Paragraph = styled.p`
  font-size: 1rem;
  line-height: 1.6;
`;

// Lista de servicios
export const ServicesList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const ServiceItem = styled.li`
  font-size: 1.2rem;
  color: #fe7abf; // Otro tono de rosa
  margin: 5px 0;
`;

// Horario de atención
export const WorkingHours = styled.div`
  font-size: 1.1rem;
  color: #019149; // Verde para resaltar
  margin: 10px 0;
  strong {
    font-weight: bold;
  }
`;
