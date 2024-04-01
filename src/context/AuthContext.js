import { createContext, useContext } from "react";
import { auth } from "../auth/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

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
    } catch (error) {
      console.log(error)
    }
  };

  //* enable login with email/password
  const signIn = async (email, password) => {
    try {
      // firebase method to existing user to login
      await signInWithEmailAndPassword(auth, email, password)
      navigate("/")
    } catch (error) {
      console.log(error)
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