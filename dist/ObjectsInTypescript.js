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
