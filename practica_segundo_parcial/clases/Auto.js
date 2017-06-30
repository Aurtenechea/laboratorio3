var Car = (function () {
    function Car(brand, color, price) {
        this.brand = brand;
        this.color = color;
        this.price = price;
    }
    Car.prototype.toJson = function () {
        return JSON.stringify(this);
    };
    return Car;
}());
