namespace parcial {
    export class Car {
        private brand: string;
        private color: string;
        private price: number;

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
