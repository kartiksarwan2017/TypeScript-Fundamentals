"use strict";
/* Type Assertion */
const myobj = {
    name: "krishna",
    email: "krishna@gmail.com"
};
let key = "name";
// myobj[key];
myobj[key];
const getData = (key) => {
    return myobj[key];
};
getData("name");
