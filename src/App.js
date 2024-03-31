import AuthContextProvider from "../src/context/AuthContext";
import AppRouter from "./router/AppRouter";

function App() {
  return (
    <div>
      <AuthContextProvider >
        <AppRouter />
      </AuthContextProvider>
    </div>
  );
};

export default App;
