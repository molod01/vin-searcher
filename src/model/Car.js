export class Car{
    constructor(json) {
        if(json != undefined){
            this.manufacturer = json.find(obj => obj.Variable === 'Manufacturer Name').Value
            this.model = json.find(obj => obj.Variable === 'Model').Value
            this.modelYear = json.find(obj => obj.Variable === 'Model Year').Value
            this.bodyClass = json.find(obj => obj.Variable === 'Body Class').Value
            this.plantCountry = json.find(obj => obj.Variable === 'Plant Country').Value
            this.plantState = json.find(obj => obj.Variable === 'Plant State').Value
            this.plantCity = json.find(obj => obj.Variable === 'Plant City').Value
            this.fuelType = json.find(obj => obj.Variable.includes('Fuel Type')).Value
        }
        else{
            this.manufacturer ="" 
            this.model = ""
            this.modelYear = ""
            this.bodyClass = ""
            this.plantCountry ="" 
            this.plantState =""
            this.plantCity =""
            this.fuelType =""
        }
    }

}

export default Car;