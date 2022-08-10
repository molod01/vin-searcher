import {React, useState, useEffect, useSyncExternalStore} from 'react';
import PropTypes from 'prop-types';

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'b9ae5338cdmsh5a9a21091cb064fp193584jsnbd73bf8dbe29',
    'X-RapidAPI-Host': 'bing-image-search1.p.rapidapi.com'
  }
};

function Vehicle({car}) {
  const [image, setImage] = useState('defaultimage');

  useEffect(() => {
    console.log('useEffect')
    getImage(car.manufacturer + " " + car.model)
  }, [car]);

  async function getImage(key){
    console.log(key)
    if(key != "null null"){
      const imageUrl = await fetch(`https://bing-image-search1.p.rapidapi.com/images/search?q=${key}&count=1`, options)
      .then(response => response.json())
      .then(json => {
        return json.value[0].thumbnailUrl
      });
      console.log(`imageUrl: ${imageUrl}`)
      setImage(imageUrl)
    }
  }

  return(
  <div className="card">
    <img className="card-img-top" src={image} alt="Car Photo"/>
    <div className="card-body">
      <p className="card-text">Manufacturer: {car.manufacturer}</p>
      <p className="card-text">Model: {car.model}</p>
      <p className="card-text">Year: {car.modelYear}</p>
      <p className="card-text">Body Class: {car.bodyClass}</p>
    </div>
  </div>
  )
}

Vehicle.propTypes = {};
Vehicle.defaultProps = {};

export default Vehicle;