"use strict";
/* Functions with Objects */
// type GetDataType = (product: {
//     name: string;
//     stock: number;
//     price: number;
//     photo: string;
// }) => void;
// const getData: GetDataType = (product) => {
//     console.log(product);
// };
// const productOne:  {
//     name: string;
//     stock: number;
//     price: number;
//     photo: string;
// } = {
//     name: "Macbook",
//     stock: 46,
//     price: 999999,
//     photo: "samplephotourl"
// }
// getData(productOne);
// getData({
//     name: "Macbook",
//     stock: 46,
//     price: 999999,
//     photo: "samplephotourl"
// });
// getData({
//     name: "Macbook",
//     stock: 46
// })
/* Here there is a lot of repetition of code of defining product Types Above lets create interface to resolve it */
// interface Product {
//     name: string;
//     stock: number;
//     price: number;
//     photo: string; 
// }
// type GetDataType = (product: Product) => void;
// const getData: GetDataType = (product) => {
//     console.log(product);
// };
// const productOne: Product = {
//     name: "Macbook",
//     stock: 46,
//     price: 999999,
//     photo: "samplephotourl"
// }
// getData(productOne);
// ReadyOnly Property
// interface Product {
//     name: string;
//     stock: number;
//     price: number;
//     photo?: string; // Making photo optional
//     readonly id: string;  // ReadOnly we can't change it once its declared
// }
// type GetDataType = (product: Product) => void;
// const getData: GetDataType = (product) => {
//     product.name = "Dell";
//     // product.id = "dfgdgdhfg";   // id is read-only we can't change its value
//     console.log(product);
// };
// const productOne: Product = {
//     name: "Macbook",
//     stock: 46,
//     price: 999999,
//     photo: "samplephotourl",
//     id: "krishnavasudeva"
// }
// getData(productOne);
// Never Type
// const err = new Error();   
/* In case of error it returns the never keyword as type when we throw error from function */
// const errorHandler = (): never => {
//     throw new Error();
// };
/* now the below function has return type as Error since we are retuning the Error */
// const errorHandler = () => {
//     return new Error();
// };
// type themeMode = "light" | "Dark";
// const mode: themeMode = "fgdfh";
// const mode: themeMode = "light";
