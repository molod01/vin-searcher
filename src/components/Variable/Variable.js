import {React, useState, useEffect} from 'react';
import { Link, useParams } from 'react-router-dom';

const Variable = () => {
  const params = useParams();
  const [variable, setVariable] = useState(undefined);

  useEffect(() => {
    async function fetchAPI(){
      await fetch(`https://vpic.nhtsa.dot.gov/api/vehicles/getvehiclevariablelist?format=json`)
      .then(response => { return response.json() })
      .then(response => { setVariable(response.Results.find(v => v.ID == params.id))})
      .catch(error => { throw Error(error)})
    }
    fetchAPI()
  }, []);

  
  if (variable) {
    return (
      <div className="container mt-4">
        <h2 className="text-center mb-4">{variable.GroupName} / {variable.Name}</h2>
        <div className="container-sm" dangerouslySetInnerHTML={{__html: `${variable.Description}`}}></div>
        <Link to={'/variables'} className="ms-2" style={{color: "black"}}>🠔 BACK</Link>
      </div>
    );
  }
  else{
    return (
      <h4 className="text-center font-weight-bold mt-5">Loading...</h4>
    );
  }
};

export default Variable;
