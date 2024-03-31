import { createContext, useContext } from "react";

export const AuthContext = createContext();
// const { Provider } = createContext();

//* custom hook 
export const useAuthContext = () => {
    return useContext(AuthContext);
};

const AuthContextProvider = ({ children }) => {
    const values = {};

  return (
    <AuthContext.Provider value={values}>
        { children }
    </AuthContext.Provider>
  )
};

export default AuthContextProvider;