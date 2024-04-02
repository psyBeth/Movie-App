import { createContext, useContext } from "react";
import { auth } from "../auth/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { toastErrorNotify, toastSuccessNotify } from "../helpers/ToastNotify";
export const AuthContext = createContext();
// const { Provider } = createContext();
//* custom hook 
export const useAuthContext = () => {
    return useContext(AuthContext);
};
const AuthContextProvider = ({ children }) => {
  const navigate = useNavigate();
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

  const values = {createUser, signIn};
  return (
    <AuthContext.Provider value={values}>
        { children }
    </AuthContext.Provider>
  )
};
export default AuthContextProvider;