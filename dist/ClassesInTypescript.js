"use strict";
/* Classes in Typescript */
class Product {
    constructor(name, price, stock) {
        this.name = name;
        this.price = price;
        this.stock = stock;
        this.id = (Math.random() * 1000).toString();
        this.lol = true;
        // get getId(): string {
        //     return this.id;
        // }
        this.getId = () => this.id;
    }
}
const product1 = new Product("Macbook", 2000, 20);
// console.log("ID", product1.getId);
console.log("ID", product1.getId());
