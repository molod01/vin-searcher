import {React, useState, useEffect} from 'react';

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
    setImage(defaultCarImage)
    if(car){
      getImage(car.manufacturer.split()[0] + " " + car.model + " " + car.modelYear)
    }
  }, [car]);

  async function getImage(keyword){
    console.log(keyword)
    const imageUrl = await fetch(`https://bing-image-search1.p.rapidapi.com/images/search?q=${keyword}&count=1`, options)
    .then(response => response.json())
    .then(json => {
      return json.value[0].contentUrl
    });
    // const imageUrl = defaultCarImage
    setImage(imageUrl)
  }
  if(car){
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
}

export default Vehicle;
