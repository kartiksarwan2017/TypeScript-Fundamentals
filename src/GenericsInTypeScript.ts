/* Generics 
   
   synonym Common
   
*/

/* In this case we know what needs to be send as parameter */
// const func = (n: number): number => {
//     return n;
// };

// const ans = func(20);

/* Cases in which we don't know the type that is being send as parameter to the function */
// const getData = (key: number): number => {
//     return key;
// }


/* avoid using any type since there is no purpose then of using typescript to identify the type  */
// const func = (n: any): any => {
//     return n;
// };

// const ans = func(20);
// const ans1 = func("20");
// const ans2 = func(true);


/* Using Generics Generally we name customType as T   */
// const func = <CustomType>(n: CustomType): CustomType => {
//     let text: CustomType;
//     return n;
// };

// const ans = func(20);
// const ans2 = func("20");
// const ans3 = func(true);


// const func = <T>(n: T): T => {
//     let text: T;
//     return n;
// };

// const ans = func(20);
// const ans2 = func("20");
// const ans3 = func(true);


// type Person {
//     name: string;
//     age: number;
// }

// const func = <T>(n: T): T => {
//     let text: T;
//     return n;
// };

// const person1: Person = {
//     name: "Krishna",
//     age: 7
// };

// // const ans = func(person1);
// // console.log(ans.name);
// // console.log(ans.name);

// const ans = func<Person>(person1);


/* Generics are used in arrays  */
// const arr: number[] = [];
// const arr2: Array<number> = [];


// const func = <T, U>(n: T, o: U): { n: T, o: U } => {
//     return  { n, o };
// };

// const ans = func<number, string>(108, "Harekrishna");

// console.log("n: ", ans.n);
// console.log("o: ", ans.o);


// We are applying extends keyword this will allow end the type of Generic U as number only
// const func = <T, U extends T>(n: T, o: U): {n: T, o: U} => {
//    return {n, o};
// }

// const ans = func<number, number>(20, 24.6);


// type Person = {
//    name: string;
//    age: number;
// };

// type Person2 = {
//    name: string;
//    age: number;
//    email: string;
// };

// const user: Person = {
//    name: "Krishna",
//    age: 20
// }

// const user2: Person2 = {
//    name: "Krishna",
//    age: 20,
//    email: "krishna@gmail.com"
// }

// const func = <T, U extends T>(n: T, o: U): {n: T, o: U} => {
//      return { n, o };
// };

// const ans = func<Person, Person2>(user, user2);


// type Person = {
//    name: string;
//    age: number;
// }

// const users: Person[] = [
//    {
//       name: "Krishna", 
//       age: 12
//    },
//    {
//       name: "Ram", 
//       age: 23
//    },
//    {
//       name: "Balram", 
//       age: 12
//    },
//    {
//       name: "Sudama", 
//       age: 18
//    }
// ];

// const filterByPeoples = (arr: [], property: any, value: any) => {
//    arr.filter(item => item[property] === value);
// }

// const filteredPeopleByName = filterByPeoples(users, "name", "Krishna");


// Converting to Generic
// users[index][keyofobject]
// const filterByPeoples = <T, U extends keyof T>(arr: T[], property: U, value: T[U]): T[]  => {
//    return arr.filter(item => item[property] === value);
// }

// const filteredPeopleByName = filterByPeoples(users, "name", "Krishna");
// const filteredPeopleByAge = filterByPeoples(users, "age", 12);
// console.log(filteredPeopleByName);
// console.log(filteredPeopleByAge);






























