import { ToastContainer } from "react-toastify";
import AuthContextProvider from "../src/context/AuthContext";
import AppRouter from "./router/AppRouter";
import 'react-toastify/dist/ReactToastify.css';
import MovieContextProvider from "./context/MovieContext";

function App() {
  return (
    <div className="min-h-screen dark:bg-gray-dark-main">
      <AuthContextProvider >
        <MovieContextProvider>
          <AppRouter />
          <ToastContainer />
        </MovieContextProvider>
      </AuthContextProvider>
    </div>
  );
};

export default App;
