class Car {
    #currentFuelVolume = 0;
    #isStarted = false;
    #mileage = 0;

  constructor(brand, model, yearOfManufacturing, maxSpeed, maxFuelVolume, fuelConsumption) {
    this.setBrand(brand);
    this.setModel(model);
    this.setYearOfManufacturing(yearOfManufacturing);
    this.setMaxSpeed(maxSpeed);
    this.setmaxFuelVolume(maxFuelVolume);
    this.setFuelConsumption(fuelConsumption);
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
    if (!newMaxFuelVolume || typeof newMaxFuelVolume !== 'number' || newMaxFuelVolume === Infinity || newMaxFuelVolume === -Infinity || isNaN(newMaxFuelVolume)) {
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
    if (!speed || typeof speed !== 'number' || speed <= 0 || ) {

    };
  }
}
