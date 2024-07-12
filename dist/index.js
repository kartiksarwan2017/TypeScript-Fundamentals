"use strict";
// let a = 25;
// a = "sad";
// console.log(a);
// let a = 25;
// let Name = "Krishna";
// Name / a;
// let a:string = "{23}";
// let username:number = 243;
// let check:boolean;
// let a:string;
// let username:number;
// let check:boolean;
// Any type is used when the variable could be of string, number etc
// let a;
// let username;
// let check;
/* Always avoid the use of the type any in typescript */
// let check:any;
// let username=<string>"Krishna";
// let username=<string>234;  ERROR
/* UNION VARIABLES is havig multiple types
   UNION TYPES we could add multiple types
*/
// let surname: string | number;
// surname = "Krishna";
// surname = 453;
/* If we don't defined the parameters type of the function it will detect it as any
    the function is having return type as void since its not returning anything
*/
// const func = (n:number, m: number) => {
//    console.log(n, m);
// };
// /* Here the return type of the function is number */
// const func1 = (n:number, m: number) => {
//     return n*m;
// };
// /* Here the return type of the function is string since we are explicitly converting the type while we are returning */
// const func2 = (n:number, m: number) => {
//     return String(n*m);
// };
// /* Explicitly mentioning the return type */
// const func3 = (n:number, m: number): number => {
//     return n * m;
// };
// // Functions Which Return Promises
// const func4 = async (): Promise<number> => {
//     return 24;
// }
// let res = func4().then((data) => console.log(data));
// console.log(res);
// // Return Type Annotations
// const func5 = (n: number, m: number): number => {
//     return n * m;
// }
// console.log(func5(4, 7));
