import { useContext } from "react";
import { AuthContextCurrent } from "../../Context/AuthContext";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContextCurrent);
  if(loading) {
    return <span className="loading loading-infinity loading-lg"></span>;
  }
  if(user?.email) {
    return children;
  }
};

export default PrivateRoute;
