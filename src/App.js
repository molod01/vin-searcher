import $ from "jquery";
import Car from "./model/Car"
import Vehicle from "./components/Vehicle/Vehicle" 
import RecentlyRequested from './components/RecentlyRequested/RecentlyRequested';
import { React, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const App = () => {
  const [recentVins, setVins] = useState([]);
  const [vin, setVin] = useState(undefined);
  const [car, setCar] = useState(undefined);
  const [waitForRequest, setWaitForRequest] = useState(false);
  const VinRegex = "[(A-H|J-N|P|R-Z|0-9)]{17}"
  
  useEffect(() => {
    if(waitForRequest){
      handleSubmit()
      setWaitForRequest(false)
    }
  }, [vin]);

  async function handleSubmit(event) {
    if(event){
      event.preventDefault()
    }
    if(vin){
      await fetch(`https://vpic.nhtsa.dot.gov/api/vehicles/decodeVinExtended/${vin}?format=json`)
      .then(response => { return response.json()})
      .then(response => { 
        console.log(response.Message)
        setCar(new Car(response.Results))
      })
      .catch(error => { throw Error(error)})
      updateRecentlyRequested()
    }
  };
  
  const handleChange = (event) => setVin(event.target.value)

  const updateRecentlyRequested = () =>{
    if(recentVins.includes(vin)){
      const temp = recentVins.filter(rvin => rvin !== vin)
      setVins([vin, ...temp.slice(0, 4)])
    }
    else setVins([vin, ...recentVins.slice(0, 4)])
  }

  const searchFromRecent = (event) =>{
    $('.form-control').val(event.target.innerText)
    setVin(event.target.innerText)
    setWaitForRequest(true)
  }

  return(
    <div className="App">
    <main className='m-3'>
      <div className='container-md mx-6'>
        <form className='form-inline' onSubmit={handleSubmit}>
          <div className="input-group mb-2 mr-sm-2">
            <input className="form-control" placeholder="VIN" pattern={VinRegex} onChange={handleChange} type="text"/>
            <div className="input-group-append">
              <input className="btn btn-primary" type="submit" value="Search"/>
            </div>
          </div>
        </form>
        <Vehicle car={car}/>
        <RecentlyRequested requestedVins={recentVins} handler={searchFromRecent}/>
        <p className='text-center mt-2 small'><Link to={"/variables"}>About Variables</Link></p>
      </div>
    </main>
  </div>
)
}

export default App;
