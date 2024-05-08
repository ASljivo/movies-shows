import { GlobalContext, useGlobalContext } from "context/globalContext";
import "./App.css";
import AppRoutes from "./routes/Routes";

function App() {
  const globalContext = useGlobalContext();
  return (
    <div className="container">
      <GlobalContext.Provider value={globalContext}>
        <AppRoutes />
      </GlobalContext.Provider>
    </div>
  );
}

export default App;
