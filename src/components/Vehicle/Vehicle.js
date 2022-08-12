import {React, useState, useEffect} from 'react';

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
    'X-RapidAPI-Host': 'bing-image-search1.p.rapidapi.com'
  }
};

function Vehicle({car}) {
  let defaultCarImage = require('../../assets/default-car-card.jpg')
  const [image, setImage] = useState(defaultCarImage);

  useEffect(() => {
    setImage(defaultCarImage)
    if(car){
      getImage("car " + car.modelYear.Value + " " + car.manufacturer.Value.split(" ")[0] + " " + car.model.Value)
    }
  }, [car]);

  async function getImage(keyword){
    const imageUrl = await fetch(`https://bing-image-search1.p.rapidapi.com/images/search?q=${keyword}&count=1`, options)
    .then(response => response.json())
    .then(json => json.value[0].contentUrl);
    setImage(imageUrl)
  }
  
  if(car){
    const carFields = Object.entries(car).filter(([key, val]) => val.Value !== null)
    .map(([key, val]) => <p key={key} className="card-text small">{val.Variable}: {val.Value}</p>)
  
    return(
      <div className="card">
        <img className="card-img-top" src={ image } alt="Car Photo"/>
        <div className="card-body mx-4">
          {carFields}
        </div>
      </div>
    )
  }
}

export default Vehicle;
