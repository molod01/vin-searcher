import { React, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


const Variables = () => { 
  const [listItems, setListItems] = useState([]);
  const [variables, setVariables] = useState(undefined);

  useEffect(() => {
    async function fetchAPI(){
      await fetch(`https://vpic.nhtsa.dot.gov/api/vehicles/getvehiclevariablelist?format=json`)
      .then(response => { return response.json() })
      .then(response => { setVariables(response.Results)})
      .catch(error => { throw Error(error)})
    }
    fetchAPI()
  }, []);

  useEffect(() => {
    if(variables){
      setListItems(
        variables.map((v) => 
          <Link to={`/variables/${v.ID}`} key={v.ID} className='list-group-item px-4'>{v.Name}</Link>
      ));
    }
  }, [variables]);

  if(variables){
    return(
    <div>
      <div className='container-sm'>
        <span className='my-4'>
        <Link to={'/'} className="position-absolute text-decoration-none display-2 ms-2" style={{color: "black", lineHeight: "0.8"}}>🠔</Link>
        <h1 className='text-center'>Variables</h1>
        </span>
        <ul className="list-group m-2">
          {listItems}
        </ul>
      </div>
    </div>
    );
  }
  else{
    return(
      <h4 className="text-center font-weight-bold mt-5">Loading...</h4>
    )
  }
};

export default Variables;

