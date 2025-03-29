import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import UkraineMap from "./components/Map/map";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UkraineMap />} />
      </Routes>
    </Router>
  );
}

export default App;
