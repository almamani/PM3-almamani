import imgUser from "../../assets/user.jpg";
import { Container } from "./styled";
import { useSelector } from "react-redux";

const Logged = () => {
  const userLogged = useSelector((state) => state.userSlice.user.name);

  return (
    <>
      <Container>
        <figure>
          <img src={imgUser} alt="Logo Usuario" />
        </figure>
        <p>{userLogged}</p>
      </Container>
    </>
  );
};

export default Logged;
