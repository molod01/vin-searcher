export default class Car{
    constructor(json) {
        this.manufacturer = json.find(obj => obj.Variable === 'Manufacturer Name')
        this.model = json.find(obj => obj.Variable === 'Model')
        this.modelYear = json.find(obj => obj.Variable === 'Model Year')
        this.plantCountry = json.find(obj => obj.Variable === 'Plant Country')
        this.fuelType = json.find(obj => obj.Variable === 'Fuel Type - Primary')
        this.enginePower = json.find(obj => obj.Variable === 'Engine Power (kW)')
        this.engineManufacturer = json.find(obj => obj.Variable === 'Engine Manufacturer')
        this.engineModel = json.find(obj => obj.Variable === 'Engine Model')
        this.engineNumberOfCylinders = json.find(obj => obj.Variable === 'Engine Number of Cylinders')
    }
}