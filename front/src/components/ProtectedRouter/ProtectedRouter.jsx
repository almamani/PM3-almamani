import { Navigate } from "react-router-dom";
import { SLASH } from "../../helpers/pathsRoutes";
import { useSelector } from "react-redux";

const ProtectedRouter = ({ children }) => {
  const loggedInUser = useSelector((state) => state.userSlice.login);
  if (!loggedInUser) {
    return <Navigate to={SLASH} replace />;
  }

  return children;
};

export default ProtectedRouter;
