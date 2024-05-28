/* Type Assertion */

// const btn = document.getElementById("btn");

/* Typescript could'nt able to identify whether the button exists in the html or not it is considering it as null or we remove ? */
// btn.onclick

/* Using Type Assertion */
// const btn = document.getElementById("btn") as HTMLElement;
// btn.onclick

// const btn = <HTMLElement>document.getElementById("btn");
// btn.onclick

// const btn = document.getElementById("btn")!;
// btn.onclick

// const img = document.getElementById("myimg") as HTMLImageElement;
// img.src


/* In Case of querySelector we are directly selecting the element so its know that element is HTMLIMAGEELMENT */
// const img = document.querySelector("img") as HTMLImageElement;
// img.src

// const img = document.querySelector("img")!;
// img.src


// const form = document.getElementById("myform") as HTMLFormElement;
// const myinput = document.querySelector("form > input") as HTMLInputElement;

// form.onsubmit = (e: SubmitEvent) => {
//     e.preventDefault();
//     console.log(myinput.value);
//     console.log(typeof myinput.value);
// };

/* DOM MANIPULATION */
// const form = document.getElementById("myform") as HTMLFormElement;
// const myinput = document.querySelector("form > input") as HTMLInputElement;
// // const result = document.getElementById("result") as HTMLHeadElement;

// form.onsubmit = (e: SubmitEvent) => {
//     e.preventDefault();

//     const h2 = document.createElement("h2");
//     const body = document.querySelector("body")!;
//     const value = Number(myinput.value);
//     // console.log(value);
//     // console.log(typeof value);
//     // result.textContent = (String)(value + 20);

//     h2.textContent = String(value + 20);
//     body.append(h2);
// };

/* Index Signature */
// interface Person {
//     [key: string]: string;
// }

// const myobj: Person = {
//     name: "krishna",
//     email: "krishna@gmail.com"
// };

// const getName = (): string => {
//     return myobj["name"];
// };

// const getEmail = (): string => {
//     return myobj["email"];
// };

// const getData = (key: string): string => {
//     return myobj[key];
// };
 
 
// console.log(myobj);
// console.log(myobj.name);


/* keyof operator */
// interface Person {
//     name: string;
//     email: string;
// }

// const myobj: Person = {
//     name: "krishna",
//     email: "krishna@gmail.com"
// };

// const getName = (): string => {
//     return myobj["name"];
// };

// const getEmail = (): string => {
//     return myobj["email"];
// };

// const getData = (key: "name" | "email"): string => {
//     return myobj[key];
// };
 
//  // we can pass any key in the argument and which is not part of object
// // getData("lol");
// getData("name");
// console.log(myobj);
// console.log(myobj.name);




// interface Person {
//     name: string;
//     email: string;
// }

// const myobj: Person = {
//     name: "krishna",
//     email: "krishna@gmail.com"
// };

// const getName = (): string => {
//     return myobj["name"];
// };

// const getEmail = (): string => {
//     return myobj["email"];
// };

// const getData = (key: keyof Person): string => {
//     return myobj[key];
// };
 
//  // we can pass any key in the argument and which is not part of object
// // getData("lol");
// getData("name");
// console.log(myobj);
// console.log(myobj.name);


// interface Person {
//     name: string;
//     email: string;
// }

// const myobj: Person = {
//     name: "krishna",
//     email: "krishna@gmail.com"
// };


// let key = "name";
// // myobj[key];

// myobj[key as keyof Person];


/* Cases in which we are not aware of the the Person Interface having how many keys */


interface Person {
    name: string;
    email: string;
}

const myobj: Person = {
    name: "krishna",
    email: "krishna@gmail.com"
};


let key = "name";
// myobj[key];

myobj[key as keyof typeof myobj];


const getData = (key: keyof Person): string => {
    return myobj[key];
}

getData("name");