/// reference path="lib.ts"/>

namespace parcial {
    export class Car {
        public brand: string;
        public color: string;
        public price: number;

        constructor(brand: string, color: string, price: number){
            this.brand = brand;
            this.color = color;
            this.price = price;
        }

        public toJson() :string{
            return JSON.stringify(this);
        }
    }
}
