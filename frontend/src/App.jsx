import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Backanimation from "./assets/Hero Animation/Backanimation";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Backanimation />
      </div>
    </Router>
  );
}

export default App;
