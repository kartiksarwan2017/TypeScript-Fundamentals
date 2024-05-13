"use strict";
/* Functions in Typescript */
// type FuncType = (n: number, m: number) => number;
// // const functionOne:FuncType = (a, b) => {
// //     return a*b;
// // };
// /* The name of the parameter doesnot matter it will be of same type as number sicne the functionOne is of FuncType */
// const functionOne:FuncType = (n, m) => {
//     return n * m;
// };
// console.log(functionOne(10, 20));
// type FuncType = (n: number, m: number, l: number) => number;
// const functionOne: FuncType = (n, m, l) => {
//     return n * m * l;
// };
// functionOne(25, 23, 43);
/* Making one parameter as optional
   Optional Parameter
*/
// type FuncType = (n: number, m: number, l?: number) => number;
// const functionOne: FuncType = (n, m, l) => {
//     if(typeof l === "undefined") {
//         return n * m;
//     }
//     return n * m * l;
// };
// console.log(functionOne(10, 23));
// type FuncType = (n: number, m: number, l?: number) => number | string;
// const functionOne: FuncType = (n, m, l) => {
//     if(typeof l === "undefined") {
//         return "L was not provided";
//     }
//     return n * m * l;
// };
// console.log(functionOne(10, 23));
/* Default Parameter */
// type FuncType = (n: number, m: number, l?: number) => number;
// // Default Parameter
// const functionOne:FuncType = (n, m, l = 20) => {
//     return n * m * l;
// };
// console.log(functionOne(10, 20));
/* Another way for default parameter */
// Default Parameter
// const functionOne = (n: number, m: number, l: number = 20): number => {
//     return n * m * l;
// };
// console.log(functionOne(10, 20));
