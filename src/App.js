import React, { useState } from 'react';
import $ from "jquery";
import Car from "./model/Car"
import Vehicle from "./components/Vehicle/Vehicle" 

import './App.css';
import RecentRequested from './components/RecentRequested/RecentRequested';

function App() {
  const [vin, setVin] = useState(undefined);
  const [recentVins, setVins] = useState(undefined);
  const [car, setCar] = useState(new Car());
  const VinRegex = "[(A-H|J-N|P|R-Z|0-9)]{17}"

  const handleSubmit = (event) => {
    event.preventDefault()
    // console.log(recentVins)
    if(recentVins){
     setVins([vin, ...recentVins])
    }
    else setVins([vin])

    console.log(recentVins)
    $.ajax({
      url:
        `https://vpic.nhtsa.dot.gov/api/vehicles/decodeVinExtended/${vin}?format=json`,
      type: "GET",
      dataType: "json",
      success: function (result) {
        setCar(new Car(result.Results))
      },
      error: function (xhr, ajaxOptions, thrownError) {
        console.log(xhr.status);
        console.log(thrownError);
      }
    });
  };

  const handleChange = (event) => {
    setVin(event.target.value)
  }
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <main>
        <div className="container">
          <form onSubmit={handleSubmit}>
            <label>Vin </label>
            <input type="text" name="vin" placeholder="VIN" pattern={VinRegex} onChange={handleChange} />
            <input type="submit" value="Search" />
          </form>
          <Vehicle car={car}/>
          <RecentRequested requestedVins={recentVins || []}/>
        </div>
      </main>
    </div>
  );
}

export default App;
