import React, { useState } from 'react';
import $ from "jquery";
import Car from "./model/Car"
import Vehicle from "./components/Vehicle/Vehicle" 

import './App.css';
import RecentRequested from './components/RecentRequested/RecentRequested';

function App() {
  const [vin, setVin] = useState(undefined);
  const [recentVins, setVins] = useState([]);
  const [car, setCar] = useState(new Car());
  const VinRegex = "[(A-H|J-N|P|R-Z|0-9)]{17}"
  
  const recentProcessing = () =>{
    if(recentVins.includes(vin)){
      const temp = recentVins.filter(rvin => rvin != vin)
      setVins([vin, ...temp.slice(0, 4)])
    }
    else setVins([vin, ...recentVins.slice(0, 4)])
  }
  const handleSubmit = (event) => {
    console.log("handleSubmit")
    console.log(vin)
    event.preventDefault()
    recentProcessing()
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

  const searchFromRecently = (event) =>{
    setVin(event.target.innerText)//меняю поле
    $('.form-control').val(event.target.innerText)//меняю инпут текст
    //handleSubmit(event)//поиск
  }

  const handleChange = (event) => {
    setVin(event.target.value)
  }

  return (
    <div className="App">
      <main>
        <div className="container-fluid">
          <form className='form-inline' onSubmit={handleSubmit}>
            <div className="input-group mb-2 mr-sm-2">
              <input className="form-control" placeholder="VIN" pattern={VinRegex} onChange={handleChange} type="text"/>
              <div className="input-group-append">
                <input className="btn btn-primary" type="submit" value="Search"/>
              </div>
            </div>
          </form>
          <Vehicle car={car}/>
          <RecentRequested requestedVins={recentVins || []} handler={searchFromRecently}/>
        </div>
      </main>
    </div>
  );
}

export default App;
