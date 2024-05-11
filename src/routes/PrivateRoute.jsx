import PropType from "prop-types";
import { Navigate, useLocation } from "react-router-dom";
import Loader from "../components/Loader";
import useAuth from "../hooks/useAuth";
const PrivateRoute = ({ children }) => {
  const { user, isLoading } = useAuth();
  const location = useLocation();
  if (isLoading) {
    return <Loader />;
  }
  if (user) {
    return children;
  }
  return <Navigate to="/login" state={location.pathname} />;
};

PrivateRoute.propTypes = {
  children: PropType.node,
};

export default PrivateRoute;
