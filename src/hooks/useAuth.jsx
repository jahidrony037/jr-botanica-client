import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const useAuth = () => {
  const allData = useContext(AuthContext);
  return allData;
};

export default useAuth;
