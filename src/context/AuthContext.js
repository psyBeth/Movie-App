import { createContext, useContext, useEffect } from "react";
import { auth } from "../auth/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { toastErrorNotify, toastSuccessNotify } from "../helpers/ToastNotify";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useState } from "react";


export const AuthContext = createContext();
// const { Provider } = createContext();

//* custom hook 
export const useAuthContext = () => {
  return useContext(AuthContext);
};

const AuthContextProvider = ({ children }) => {

  const [currentUser, setCurrentUser] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    userObserver();
  }, []);

  const createUser = async (email, password) => {
    try {
      // firebase method to sign up a new user
      await createUserWithEmailAndPassword(auth, email, password)
      navigate("/")
      toastSuccessNotify("Registered successfully!");
    } catch (error) {
      console.log(error);
      toastErrorNotify(error.message);
    }
  };

  //* enable login with email/password
  const signIn = async (email, password) => {
    try {
      // firebase method to existing user to login
      await signInWithEmailAndPassword(auth, email, password)
      navigate("/")

      toastSuccessNotify("Logged in successfully!");

    } catch (error) {
      console.log(error)

      toastErrorNotify(error.message);
    }
  };

  const userObserver = () => {
    //* firebase method that detecting if user signed in, when user changes it gives the new user as a response
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { email, displayName, photoURL } = user;
        setCurrentUser({ email, displayName, photoURL });
      } else {
        // user signed out
        setCurrentUser(false);
      }
    });
  };

  const logOut = () => {
    signOut(auth)
    toastSuccessNotify("Logged out successfully!")
  };

  const values = { createUser, signIn, logOut, currentUser };

  return (
    <AuthContext.Provider value={values}>
      {children}
    </AuthContext.Provider>
  )
};
export default AuthContextProvider;