class Car {
    #currentFuelVolume = 0;
    #isStarted = false;
    #mileage = 0;
    #brand;
    #model;
    #yearOfManufacturing;
    #maxSpeed;
    #maxFuelVolume;
    #fuelConsumption;

  constructor(options) {
    this.setBrand(options.brand);
    this.setModel(options.model);
    this.setYearOfManufacturing(options.yearOfManufacturing);
    this.setMaxSpeed(options.maxSpeed);
    this.setMaxFuelVolume(options.maxFuelVolume);
    this.setFuelConsumption(options.fuelConsumption);
  }

  getBrand() {
    return this.#brand;
  } 

  setBrand(newBrand) {
    newBrand = newBrand.trim();

    if (!newBrand || typeof newBrand !== 'string') {
      throw new Error('Enter a brand name!');
    };

    if (newBrand.length < 1 || newBrand.length > 50) {
        throw new Error('Brand must be between 1 and 50 characters');
    };

    this.#brand = newBrand;
  }

  getModel() {
    return this.#model;
  }

  setModel(newModel) {
    newModel = newModel.trim();

    if (!newModel || typeof newModel !== 'string') {
      throw new Error('Enter a brand name!');
    };

    if (newModel.length < 1 || newModel.length > 50) {
        throw new Error('Model must be between 1 and 50 characters');
    };

    this.#model = newModel;
  }

  getYearOfManufacturing() {
    return this.#yearOfManufacturing;
  }

  setYearOfManufacturing(newYearOfManufacturing) {
    if (!newYearOfManufacturing || typeof newYearOfManufacturing !== 'number' || newYearOfManufacturing < 1990 || newYearOfManufacturing > 2022 || newYearOfManufacturing === Infinity || newYearOfManufacturing === -Infinity || isNaN(newYearOfManufacturing)) {
      throw new Error('Enter a number from 1900 up to and including the current year!');
    };

    this.#yearOfManufacturing = newYearOfManufacturing;
  }

  getMaxSpeed() {
    return this.#maxSpeed;
  } 

  setMaxSpeed(newMaxSpeed) {
    if (!newMaxSpeed || typeof newMaxSpeed !== 'number' || newMaxSpeed < 100 || newMaxSpeed > 300 || newMaxSpeed === Infinity || newMaxSpeed === -Infinity || isNaN(newMaxSpeed)) {
      throw new Error('Enter a number from 100 up to 300!');
    };

    this.#maxSpeed = newMaxSpeed;
  } 

  getMaxFuelVolume() {
    return this.#maxFuelVolume;
  } 

  setMaxFuelVolume(newMaxFuelVolume) {
    if (!newMaxFuelVolume || typeof newMaxFuelVolume !== 'number' || newMaxFuelVolume < 5 || newMaxFuelVolume > 20 || newMaxFuelVolume === Infinity || newMaxFuelVolume === -Infinity || isNaN(newMaxFuelVolume)) {
      throw new Error('Enter a number from 5 up to 20!');
    };

    this.#maxFuelVolume = newMaxFuelVolume;
  } 

  getFuelConsumption() {
    return this.#fuelConsumption;
  }

  setFuelConsumption(newFuelConsumption) {
    if (!newFuelConsumption || typeof newFuelConsumption !== 'number' || newFuelConsumption === Infinity || newFuelConsumption === -Infinity || isNaN(newFuelConsumption)) {
      throw new Error('Enter a valid number of Fuel Consumption!');
    };

    this.#fuelConsumption = newFuelConsumption;
  }

  getCurrentFuelVolume() {
    return this.#currentFuelVolume;
  } 

  getIsStarted() {
    return this.#isStarted;
  } 

  getMileage() {
    return this.#mileage;
  }

  start() {
    if (this.#isStarted) {
      throw new Error('Machine ignition done!');
    };

      this.#isStarted = true;
  }

  shutDownEngine() {
    if (!this.#isStarted) {
      throw new Error('The car hasn\'t been ignited yet!');
    };

      this.#isStarted = false;
  }

  fillUpGasTank(fuelQuantity) {
    if (typeof fuelQuantity !== 'number') {
      throw new Error('Not a number! Incorrect amount of fuel to refuel');
    };

    if (typeof fuelQuantity === 'number' && fuelQuantity <= 0 || fuelQuantity === Infinity || fuelQuantity === -Infinity || isNaN(fuelQuantity)) {
      throw new Error('Incorrect amount of fuel to refuel');
    };

    if (fuelQuantity > this.#maxFuelVolume || fuelQuantity + this.#currentFuelVolume > this.#maxFuelVolume) {
      throw new Error('Fuel tank full!');
    };

    this.#currentFuelVolume = this.#currentFuelVolume + fuelQuantity;
  }

  drive(speed, hoursNumber) {
    const distance = speed * hoursNumber;
    const fuelCostPerTrip = Math.round((distance * this.#fuelConsumption) / 100);
    console.log(fuelCostPerTrip)

    if (!speed || typeof speed !== 'number' && speed <= 0 || speed === Infinity || speed === -Infinity || isNaN(speed)) {
      throw new Error('Wrong speed');
    };

    if (speed > this.#maxSpeed) {
      throw new Error(`Speed limit of car is ${this.#maxSpeed} km per hour!`);
    }

    if (!hoursNumber || typeof hoursNumber !== 'number' && hoursNumber <= 0 || hoursNumber === Infinity || hoursNumber === -Infinity || isNaN(hoursNumber)) {
      throw new Error('Wrong number of hours');
    };

    if (speed > this.#maxSpeed) {
      throw new Error('The car can\'t go so fast!');
    };

    if (!this.#isStarted) {
      throw new Error('The car ignition must be on to drive!');
    };

    if (this.#currentFuelVolume < fuelCostPerTrip) {
      throw new Error('Not enough fuel!');
    };

    this.#currentFuelVolume = this.#currentFuelVolume - fuelCostPerTrip;
    this.#mileage = this.#mileage + distance;
  }
}

const subaru = new Car({
brand: 'Subaru', 
model: 'Impressa', 
yearOfManufacturing: 2008, 
maxSpeed: 170, 
maxFuelVolume: 20, 
fuelConsumption: 6
});

module.exports = { Car };
