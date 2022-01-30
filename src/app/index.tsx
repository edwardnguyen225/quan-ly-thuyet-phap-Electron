import "./App.css";
import { Routing } from "../pages";

const App = () => {
  console.log("[DEBUG] rendering app/index.tsx");

  return (
    <div className="App">
      <Routing />
    </div>
  );
};

export default App;
