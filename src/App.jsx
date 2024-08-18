import "./App.css";
import Portfolio from "./components/Portfolio/Portfolio";
import { projectData } from "./Projectdata";

function App() {
  return (
    <div className="container">
      <Portfolio projectData={projectData} />
    </div>
  );
}

export default App;
