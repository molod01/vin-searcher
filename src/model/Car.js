export class Car{
    constructor(json) {
        this.manufacturer = json.find(obj => obj.Variable === 'Manufacturer Name').Value
        this.model = json.find(obj => obj.Variable === 'Model').Value
        this.modelYear = json.find(obj => obj.Variable === 'Model Year').Value
        this.plantCountry = json.find(obj => obj.Variable === 'Plant Country').Value
        this.fuelType = json.find(obj => obj.Variable === 'Fuel Type - Primary').Value
        this.enginePower = json.find(obj => obj.Variable === 'Engine Power (kW)').Value
        this.engineManufacturer = json.find(obj => obj.Variable === 'Engine Manufacturer').Value
        this.engineModel = json.find(obj => obj.Variable === 'Engine Model').Value
        this.engineNumberOfCylinders = json.find(obj => obj.Variable === 'Engine Number of Cylinders').Value
    }
}

export default Car;