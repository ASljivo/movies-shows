import { Header } from "components/atoms/header/Header";
import { GlobalContext, useGlobalContext } from "context/globalContext";
import "./App.css";
import AppRoutes from "./routes/Routes";

function App() {
  const globalContext = useGlobalContext();
  return (
    <GlobalContext.Provider value={globalContext}>
      <Header />
      <div className="app-container">
        <AppRoutes />
      </div>
    </GlobalContext.Provider>
  );
}

export default App;
