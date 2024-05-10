"use strict";
/* Type Aliases */
// type UserName = string | number;
// a cannot be undefined
// let a: UserName = undefined;
// let a:UserName = "Krishna";
// let a:UserName = 7;
// let a:UserName = false;
// const function1 = (n: number, m: number): number => {
//     console.log(n, m);
//     return n * m;
// };
// type UserName = (n: number, m: number) => number;
// const functionSample: UserName = (n, m) => {
//     console.log(n, m);
//     return n*m;
// };
// type UserName = (n: string, m: string) => string;
// const functionSample: UserName = (n, m) => {
//     console.log(n, m);
//     return n + m;
// }
/* Arrays in Typescript
   Note: if you assign the value and want to know the type of it just hover over the variable
*/
/* Declaring Arrays */
// const arr: number[] = [12, 24, 36, 48];
// const arr2: string[] = ["Krishna"];
// const arr: Array<string> = [];
// const arr2: Array<string> = new Array(20);
const arr = ["Krishna", 240, 7, 35, "Ram"];
arr[0] = "Abhi";
console.log(arr);
const arr2 = ["Krishna", "Ram"];
arr2.forEach(i => {
    i.toLowerCase();
});
console.log(arr2);
const arr3 = [234.4, 344, 244];
// Here using forEach we could manipulate the element by inbuilt JS methods for number.
arr3.forEach(i => {
    console.log(i);
});
/* To define a fixed sized array we define a Tuple */
// const tupleArray: [number, number, number] = [244, 35, 3545];
// const tupleArray: [number, number, number] = [244, 35, 3545, 4];
