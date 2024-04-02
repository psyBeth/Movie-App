import { ToastContainer } from "react-toastify";
import AuthContextProvider from "../src/context/AuthContext";
import AppRouter from "./router/AppRouter";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="min-h-screen">
      <AuthContextProvider >
        <AppRouter />
        <ToastContainer />
      </AuthContextProvider>
    </div>
  );
};

export default App;
