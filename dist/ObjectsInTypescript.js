"use strict";
/* Objects in Typescript */
;
const obj = {
    gender: true,
    height: 180,
    weight: 70
};
;
const newObj = {
    height: 135,
    weight: 30,
    scholar: true,
    func: (n, m) => {
        console.log(n * m);
    }
};
const kendal = {
    height: 180,
    weight: 80,
    scholar: true,
    func: (n, m) => {
        console.log(n * m);
    }
};
kendal.func(20, 10);
/* Another way  Using type in Interface */
// type FuncType = (n: number, m: number) => void;
// interface NewObj extends Obj {
//     scholar: boolean
//     func: FuncType;
// };
// const newObj:NewObj = {
//     height: 135,
//     weight: 30,
//     scholar: true,
//     func: (n, m) => {
//         console.log(n*m)
//     }
// };
// const kendal: NewObj = {
//     height: 180,
//     weight: 80,
//     scholar: true,
//     func: (n, m) => {
//         console.log(n*m)
//     }
// }
// kendal.func(20, 10); 
