"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vehicle = void 0;
class Vehicle {
    constructor(model, plate, color) {
        this.model = model;
        this.plate = plate;
        this.color = color;
        this.auto = [];
        this.getModel = () => {
            return this.model;
        };
        this.getPlate = () => {
            return this.plate;
        };
        this.getColor = () => {
            return this.color;
        };
        this.setModel = (model) => {
            return this.model = model;
        };
        this.setPlate = (plate) => {
            return this.plate = plate;
        };
        this.setColor = (color) => {
            return this.color = color;
        };
        this.getAcesso = (timeAcesso) => {
            console.log(`Modelo: ${this.getModel()}\n
            Placa: ${this.getPlate()}\n
            Cor: ${this.getColor()}`);
            return `Acesso realizado em: ${timeAcesso}`;
        };
    }
}
exports.Vehicle = Vehicle;
