import axios from "axios";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import PropType from "prop-types";
import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [show, setShow] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const createUser = (email, password) => {
    setIsLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginUser = (email, password) => {
    setIsLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const updateUser = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  const googleProvider = new GoogleAuthProvider();
  const handleGoogleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const githubProvider = new GithubAuthProvider();
  const handleGithubLogin = () => {
    return signInWithPopup(auth, githubProvider);
  };

  const logOut = () => {
    setIsLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unsubScribe = onAuthStateChanged(auth, (currentUser) => {
      const userEmail = currentUser?.email || user?.email;
      const loggedInUser = { email: userEmail };
      if (currentUser) {
        setUser(currentUser);
        axios
          .post(`${import.meta.env.VITE_URL}/jwt`, loggedInUser, {
            withCredentials: true,
          })
          .then(() => {
            {
              /*console.log(res.data)*/
            }
          })
          .catch((error) => toast.error(error.message));
      } else {
        setUser(null);
        axios
          .post(`${import.meta.env.VITE_URL}/logOut`, loggedInUser, {
            withCredentials: true,
          })
          .then(() => {
            {
              /*console.log(res.data)*/
            }
          })
          .catch((err) => console.log(err.message));
      }
      setIsLoading(false);
    });
    return () => unsubScribe();
  }, [user]);

  const allInfo = {
    setShow,
    show,
    user,
    setUser,
    isLoading,
    setIsLoading,
    createUser,
    loginUser,
    updateUser,
    handleGoogleLogin,
    handleGithubLogin,
    logOut,
  };
  return (
    <AuthContext.Provider value={allInfo}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropType.node,
};
export default AuthProvider;
