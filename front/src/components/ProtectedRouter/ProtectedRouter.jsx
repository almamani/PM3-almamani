import { Navigate } from "react-router-dom";
import { SLASH } from "../../helpers/pathsRoutes";

const ProtectedRouter = ({ children }) => {
  // En esta variable utilizaré estados globales - tendré el id cuando el usuario esté logueado
  const userID = true;

  if (!userID) {
    return <Navigate to={SLASH} replace />;
  }

  return children;
};

export default ProtectedRouter;
