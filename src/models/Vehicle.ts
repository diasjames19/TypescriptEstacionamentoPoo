export abstract class Vehicle {
        private model: string; 
        private plate: string; 
        private color: string; 
        private readonly acessIn:Date;
        private acessOut?: Date;

    constructor( model: string, plate: string, color: string, acessIn: Date){
        this.model = model;
        this.plate = plate;
        this.color = color;
        this.acessIn = acessIn;
    }
        
     getModel =(): string =>{
        return this.model;
    }
     getPlate=(): string =>{
        return this.plate;
    }
     getColor=(): string=> {
        return this.color;
    }
    setModel=(model: string): string =>{
       return this.model = model;
    }
     setPlate=(plate: string): string =>{
        return this.plate = plate;
    }
     setColor=(color: string): string=> {
        return this.color = color;
    }

    getAcessIn=(): Date =>{
        return this.acessIn;
    }
     getAcessInfo=(): string =>{

        console.log(
           `Modelo: ${this.getModel()}\nPlaca: ${this.getPlate()}\nCor: ${this.getColor()}`
        );
        return `Acesso realizado em: ${this.acessIn}`;
    }
    setTimeExit=(exit: Date):Date =>{
        this.acessOut = exit;
        return this.acessOut;        

    }
    getTempoSaida=():string =>{

        return`Tempo de permanência:${this.acessOut} `;

    }

    getCalc=(valueHors:number):void =>{

        if(!this.acessOut){
            throw new Error("Acesso de saída não registrado.");
        }   
      
        
    }
}