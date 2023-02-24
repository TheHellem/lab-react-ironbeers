import "./App.css";
import Home from "./pages/Home";
import Beers from "./pages/Beers";
import BeerDetailedView from "./components/BeerDetailedView";
import RandomBeer from "./pages/random-beer";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/beers" element={<Beers />} />
        <Route path="/beers/:id" element={<BeerDetailedView/>} />
        <Route path="random-beers" element={<RandomBeer/>}/>
      </Routes>
    </div>
  );
}

export default App;
