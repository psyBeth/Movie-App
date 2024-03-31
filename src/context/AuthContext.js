import { createContext, useContext } from "react";
import { auth } from "../auth/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

export const AuthContext = createContext();
// const { Provider } = createContext();

//* custom hook 
export const useAuthContext = () => {
    return useContext(AuthContext);
};

const AuthContextProvider = ({ children }) => {
  const createUser = async (email, password) => {
    try {
      // firebase method to sign up a new user
      await createUserWithEmailAndPassword(auth, email, password)
    } catch (error) {
      console.log(error)
    }
  };

    const values = {createUser};

  return (
    <AuthContext.Provider value={values}>
        { children }
    </AuthContext.Provider>
  )
};

export default AuthContextProvider;