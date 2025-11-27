"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const car_1 = require("./models/model-car/car");
const myCar = new car_1.Car("Toyota Corolla", "ABC-1234", "Blue");
console.log(myCar.getAcesso(new Date()));
const accessTime = new Date();
console.log(myCar.setColor("Red"));
console.log(myCar.getAcesso(accessTime));
