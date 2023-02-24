import "./App.css";
import Home from "./pages/Home";
import Beers from "./pages/Beers";
import BeerDetailedView from "./components/BeerDetailedView";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/beers" element={<Beers />} />
        <Route path="/beers/:id" element={<BeerDetailedView/>} />
      </Routes>
    </div>
  );
}

export default App;
