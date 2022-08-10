import {React, useState, useEffect, useSyncExternalStore} from 'react';
import PropTypes from 'prop-types';
//defaultCarImage = 

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'b9ae5338cdmsh5a9a21091cb064fp193584jsnbd73bf8dbe29',
    'X-RapidAPI-Host': 'bing-image-search1.p.rapidapi.com'
  }
};

function Vehicle({car}) {
  let defaultCarImage = require('../../assets/default-car-card.jpg')
  const [image, setImage] = useState(defaultCarImage);
  useEffect(() => {
    getImage(car.manufacturer + " " + car.model)
  }, [car]);

  async function getImage(key){
    console.log(key)
    // const imageUrl = await fetch(`https://bing-image-search1.p.rapidapi.com/images/search?q=${key}&count=1`, options)
    // .then(response => response.json())
    // .then(json => {
    //   return json.value[0].contentUrl
    // });
    const imageUrl = defaultCarImage
    //console.log(`imageUrl: ${imageUrl}`)
    setImage(imageUrl)
  }

  return(
  <div className="card">
    <img className="card-img-top" src={ image } alt="Car Photo"/>
    <div className="card-body mx-4">
      <p className="card-text">Manufacturer: {car.manufacturer}</p>
      <p className="card-text">Model: {car.model}, {car.modelYear}</p>
      <p className="card-text">Plant Country: {car.plantCountry}</p>
      <p className="card-text">Fuel type: {car.fuelType}</p>
    </div>
  </div>
  )
}

Vehicle.propTypes = {};
Vehicle.defaultProps = {};

export default Vehicle;
