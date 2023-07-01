import { useContext } from "react";
import { authContext } from "../contexts/authContext";
import api, { setAuthHeaders } from "../util/axiosConfig";
import { Navigate } from "react-router-dom";

const useAuth = () => {
  const { auth, setAuth } = useContext(authContext);

  const signUp = async (email, username, password, confirmPassword) => {};

  const signIn = async (email, password) => {
    if (email !== "" && password !== "") {
      api.post("/auth/signin", { email, password }).then((response) => {
        const { token, user } = response.data;
        // console.log(user);
        // console.log(token);
        setAuth({ isAuthenticated: true, user: user });
        setAuthHeaders(token);
      });
    }
  };

  const signOut = () => {};

  return {
    auth,
    signUp,
    signIn,
    signOut,
  };
};

export default useAuth;
