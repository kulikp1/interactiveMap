import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import UkraineMap from "./components/Map/map";
import Statistic from "./components/Statistic/Statistic";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UkraineMap />} />
        <Route path="/statistic" element={<Statistic />} />
      </Routes>
    </Router>
  );
}

export default App;
