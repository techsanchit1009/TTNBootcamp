class Vehicle {
  constructor(wheelCount, engineType) {
    this.wheelCount = wheelCount;
    this.engineType = engineType;
  }
}

class Car extends Vehicle {
  constructor(wheelCount, engineType, transmissionType) {
    super(wheelCount, engineType);
    this.transmissionType = transmissionType;
  }
}

class Audi extends Car {
  constructor(wheelCount, engineType, transmissionType, model, color) {
    super(wheelCount, engineType, transmissionType);
    this.model = model;
    this.color = color;
  }

  static countInstances() {
    this.count++;
    return this.count;
  }

  getCarDetails() {
    return {
      wheelsCount: this.wheelCount,
      engineType: this.engineType,
      transmissionType: this.transmissionType,
      model: this.model,
      color: this.color
    }
  }
}

Audi.count = 0;

let myCar = new Audi(4, "v8", "manual", "a3", "black");
console.log('-------------------');
console.log(`Getting car details of first object:`);
console.log('-------------------');
console.log(myCar.getCarDetails());
console.log(`Count of instances -> ${Audi.countInstances()}`);


let myCar2 = new Audi(4, "v1", "automatic", "q7", "red");
console.log('-------------------');
console.log(`Getting car details of second object:`);
console.log('-------------------');
console.log(myCar2.getCarDetails());
console.log(`Count of instances -> ${Audi.countInstances()}`);