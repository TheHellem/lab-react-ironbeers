import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "./Navbar";
import axios from "axios";

const BeerDetailedView = () => {
  const [beer, setBeer] = useState(null);
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
      .then((response) => {
        console.log("response.data", response.data);
        setBeer(response.data);
      });
  }, [id]);

  if (beer) {
    return (
      <>
        <Navbar />
        <div className="card">
          <img
            style={{ width: "15%" }}
            src={beer.image_url}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{beer.name}</h5>
            <p className="card-text">{beer.tagline}</p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">{beer.first_brewed}</li>
            <li className="list-group-item">{beer.attenuation_level}</li>
            <li className="list-group-item">{beer.description}</li>
            <li className="list-group-item">{beer.contributed_by}</li>
          </ul>
        </div>
      </>
    );
  }
};

export default BeerDetailedView;
