import { Car } from "./models/model-car/car";

const myCar = new Car("Toyota Corolla", "ABC-1234", "Blue", new Date());
console.log(myCar.getAcessInfo());

const myCar2 = new Car("Honda Civic", "XYZ-5678", "Black", new Date());
console.log(myCar2.getAcessInfo());
console.log(myCar2.setTimeExit(new Date()));

console.log(myCar2.getCalc(5));
