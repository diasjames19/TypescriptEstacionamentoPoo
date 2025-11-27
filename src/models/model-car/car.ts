import { Vehicle } from "../Vehicle";

export class Car extends Vehicle {
    constructor(model: string, plate: string, color: string, acessInto: Date) {
          super(model, plate, color,acessInto);
        }


}