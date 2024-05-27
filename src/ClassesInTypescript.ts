/* Classes in Typescript */

// class Player {
//     height;
//     weight;

//     constructor(height: number, weight: number) {
//         this.height = height;
//         this.weight = weight;
//     }
// }

// const abhi = new Player(100, 150);

// /* Since height and weight are public we could access it outside class */
// console.log(abhi.height);
// console.log(abhi.weight);


/* Access modifiers in Typescript */
// class Player {
//     private hieght;
//     public weight;

//     constructor(hieght: number, weight: number) {
//         this.height = hieght;
//         this.weight = weight;
//     }

//     myHeight = () => {
//         return this.height;
//     };
// }

// const abhi = new Player(100, 150);

/* Since height and weight are private we could not access it outside class */
// console.log(abhi.height);
// console.log(abhi.weight);

// console.log(abhi.myHeight());

/* Its a private property in class we could not able to access it
   But private keyword doesnot exists in JS so it is still showing the value
*/
// console.log(abhi.height);



// class Player {
//     constructor(private height: number, public weight: number) { }

//     myHeight = () => {
//         return this.height;
//     };
// }

// const abhi = new Player(100, 150);
// // console.log(abhi.height);
// console.log(abhi.weight);



// class Player {
//     constructor(private height: number, public weight: number, protected power: number) { }

//     getMyHeight = () => this.height;
// }

// // const abhi = new Player(100, 150, 23);
// // console.log(abhi.power)

// class Player2 extends Player {
//     special: boolean;
//     constructor(height: number, weight: number, power: number, special: boolean) {
//         super(height, weight, power);
//         this.special = special;
//     }

//     getMyPower = () => this.power;
// }

// const abhi = new Player2(100, 150, 23, true);
// console.log("Weight", abhi.weight);
// // console.log("height", abhi.height);

// /* We can access the protected properties in the class and in their sub classes not outside that */
// // console.log("Power", abhi.power);

// console.log("Height", abhi.getMyHeight());
// console.log(abhi.getMyPower());


// class Player {
//     public readonly id: string;
//     constructor(private height: number, public weight: number, protected power: number) { 
//         this.id = String(Math.random() * 100);
//     }

//     getMyHeight = () => this.height;
// }

// // const abhi = new Player(100, 150, 23);
// // console.log(abhi.power)

// class Player2 extends Player {
//     special: boolean;
//     constructor(height: number, weight: number, power: number, special: boolean) {
//         super(height, weight, power);
//         this.special = special;
//         // this.id = 133;  // we can access id here but not change its value
//     }

//     getMyPower = () => this.power;
// }

// const abhi = new Player2(100, 150, 23, true);
// console.log("Weight", abhi.weight);
// // console.log("height", abhi.height);

// /* We can access the protected properties in the class and in their sub classes not outside that */
// // console.log("Power", abhi.power);

// console.log("Height", abhi.getMyHeight());
// console.log("Power", abhi.getMyPower());
// console.log("Id", abhi.id);
// abhi.id = 244;



/* Setters and Getter Functions */
// class Player {
//     public readonly id: string;
//     constructor(private height: number, public weight: number, protected power: number) { 
//         this.id = String(Math.random() * 100);
//     }

//     get getMyHeight(): number {
//         return this.height;
//     };

//     // no need of return type annotation in setters
//     set changeHeight(val: number) {
//         this.height = val;
//     }
// }

// const abhi = new Player(100, 150, 23);

// console.log("Height", abhi.getMyHeight);
// abhi.changeHeight = 500;
// // We dont have to call the setters function 
// console.log("Height", abhi.getMyHeight);


// interface ProductType {
//     name: string;
//     price: number;
//     stock: number;
//     id: string;
//     offer?: boolean;
// }


// class Product implements ProductType {
//     public name: string;
//     public price: number;
//     public stock: number;
//     public id: string = (Math.random() * 1000).toString();

//     constructor(name: string, price: number, stock: number) {
//         this.name = name;
//         this.price = price;
//         this.stock = stock;
//     }
// }



// class Product implements ProductType {
//   public id: string = (Math.random() * 1000).toString();
//   private lol: boolean = true;

//   constructor(
//     public name: string,
//     public price: number,
//     public stock: number
//   ) {}
// }


/* In this case the with in ProductType we have the property id as public and Product class
has id as private in order to make id as private remove the id from interface */
// interface ProductType {
//     name: string;
//     price: number;
//     stock: number;
//     getId: () => string;
//     offer?: boolean;
// }

// class Product implements ProductType {
//     private id: string = (Math.random() * 1000).toString();
//     private lol: boolean = true;
  
//     constructor(
//       public name: string,
//       public price: number,
//       public stock: number
//     ) {}

//     // get getId(): string {
//     //     return this.id;
//     // }

//     getId = () => this.id;
// }


// const product1 = new Product("Macbook", 2000, 20);
// // console.log("ID", product1.getId);

// console.log("ID", product1.getId());





interface ProductType {
    name: string;
    price: number;
    stock: number;
    offer?: boolean;
}

interface GiveId {
    getId: () => string;
}

class Product implements ProductType, GiveId {
    private id: string = (Math.random() * 1000).toString();
    private lol: boolean = true;
  
    constructor(
      public name: string,
      public price: number,
      public stock: number
    ) {}

    // get getId(): string {
    //     return this.id;
    // }

    getId = () => this.id;
}


const product1 = new Product("Macbook", 2000, 20);
// console.log("ID", product1.getId);

console.log("ID", product1.getId());