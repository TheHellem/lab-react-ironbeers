import Navbar from "../components/Navbar";
import {useState, useEffect} from 'react'
import axios from 'axios'

import BeerListCard from "../components/BeerListCard";

const Beers = () => {
  const [beers, setBeers] = useState([])

  useEffect(() => {
    axios.get("https://ih-beers-api2.herokuapp.com/beers")
      .then((response) => {
        console.log("response.data", response.data);
        setBeers(response.data);
      });
  }, []);

  return (
    <>
    <Navbar/>
    {beers.map( beer => <BeerListCard beers={beer} />)}
    </>
  )
};

export default Beers;
