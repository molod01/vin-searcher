import { React, useState, useEffect } from 'react';
import $ from "jquery";
import PropTypes from 'prop-types';
import { render } from '@testing-library/react';
import { Link, useParams } from 'react-router-dom';


const Variables = () => { 
  let variables = []
  const [listItems, setListItems] = useState([]);
  useEffect(() => {
    $.ajax({
      url:
        `https://vpic.nhtsa.dot.gov/api/vehicles/getvehiclevariablelist?format=json`,
      type: "GET",
      dataType: "json",
      headers:{
        "Access-Control-Allow-Origin": "https://vpic.nhtsa.dot.gov",
        "Access-Control-Allow-Credentials": true
      },
      success: function (response) {
        console.log(response.Results)
        variables = response.Results
      },
      error: function (xhr, ajaxOptions, thrownError) {
        console.log(xhr.status);
        console.log(thrownError);
      }
  }).then(()=>{
    setListItems(variables.map((v) => <Link to={`/variables/${v.ID}`} key={v.ID} className='list-group-item'>{v.Name}</Link>));
  });
  }, []);
  return(
  <div>
    <h1 className='text-center my-4'>Variables</h1>
    <ul className="list-group m-2">
      {listItems}
    </ul>
  </div>
  );
};

Variables.propTypes = {};

Variables.defaultProps = {};

export default Variables;

