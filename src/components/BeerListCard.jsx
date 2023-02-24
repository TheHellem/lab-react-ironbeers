import { Link } from "react-router-dom";

const BeerListCard = ({beers: beer}) => {

  return (
    
    <Link key={beer._id} to={`/beers/${beer._id}`}>
    <div  className="card mb-3" style={{maxWidth: '540px'}}>
      <div className="row no-gutters">
        <div className="col-md-4">
          <img style={{ width: '15%' }} src={beer.image_url} className="card-img" alt="" />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{beer.name}</h5>
            <p className="card-text">
              {beer.tagline}
            </p>
            <p className="card-text">
              <small className="text-muted">{beer.contributed_by}</small>
            </p>
          </div>
        </div>
      </div>
    </div>
    </Link>
  );
};

export default BeerListCard;
