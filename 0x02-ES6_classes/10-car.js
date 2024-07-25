// 10-car.js
const CarSymbol = Symbol('Car');

export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  cloneCar() {
    const NewCar = this.constructor[CarSymbol] || this.constructor;
    return new NewCar();
  }

  static get [CarSymbol]() {
    return this;
  }
}

// 10-main.js
import Car from './10-car.js';

class TestCar extends Car {}

const tc1 = new TestCar('Nissan', 'Turbo', 'Pink');
const tc2 = tc1.cloneCar();

console.log(tc1);
console.log(tc1 instanceof TestCar);

console.log(tc2);
console.log(tc2 instanceof TestCar);

console.log(tc1 == tc2);

