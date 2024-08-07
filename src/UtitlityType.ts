/* Type Utility */
// Partial<Type>
// Required<Type>
// ReadOnly<Type>
// Record<Keys, Type>
// Pick<Type, Keys>
// Omit<Type, Keys>
// Exclude<Type, ExcludedUnion>
// Extract<Type, Union>
// NonNullable<Type>
// Parameters<Type>
// ConstructorParameters<Type>
// ReturnType<Type>
// InstanceType<Type>


/* Partial<Type> 
   It makes the properties of the type as optional
   Makes Required Properties are optional
*/

// type User = {
//     name: string,
//     email: string
// }

// If we have to create another user with properties are optional
// type User = {
//     name?: string,
//     email?: string
// }

// Using Partial<Type>
// type User2 = Partial<User>;



/* Required<Type>  Opposite of the Partial<Type> 
   Makes optional Properties as required
*/
// type User = {
//     name?: string,
//     email?: string
// }

// type User = {
//     name?: string,
//     email: string
// }

// // type User2 = Required<User>;

// const user: Required<User> = {
//     name: "Krishna",
//     email: "Krishna@gmail.com"
// }


/* Readyonly<Type>  Makes every property readonly */
// type User = {
//    readonly name: string,
//    readonly email: string
// }

// type User = {
//     name: string,
//     email: string
// }

// const user: Readonly<User> = {
//     name: "Krishna",
//     email: "krishna@gmail.com"
// }

// user.name = "krishna";


/* Record<Keys, Value> We could use it in case we have data in (key, value) pairs like in case of objects  */

// type User = {
//     name: string;
//     email: string;
// }

// type User2 = Record<"name" | "email" | "gender", string>


// Example
// interface UserInfo {
//     age: number;
// }

// type UserName = "john" | "andrew" | "elon" | "jack";

// const users: Record<UserName, UserInfo> = {
//     john: { age: 34 },
//     andrew: { age: 54},
//     elon: { age: 23 },
//     jack: { age: 26 }
// };


/* Pick<Type, Keys>  picks the specific properties from the interface */
// interface OrderInfo {
//     readonly id: string;
//     user: string;
//     city: string;
//     state: string;
//     country: string;
//     status: string;
// }

// type ShippingInfo = Pick<OrderInfo, "city" | "state" | "country">


/* Omit<Type, Keys> Omit the properties we dont want to use from the interface */
// interface ShippingInfo {
//     city: string;
//     state: string;
//     country: string;
// }

// type Random = Omit<ShippingInfo, "country">

/* Exclude<Type, ExcludedUnion>
   Exclude is used to omit the type we want
*/

// type MyUnion = string | number | boolean;
// type Random = Exclude<MyUnion , boolean>


/*  Extract<Type, Union 
    extract the type we want from the list of types
*/

// type MyUnion = string | number | boolean;
// type Random = Extract<MyUnion , boolean>

/* NonNullable<Type> it will omit the null and undefined  */

// type MyUnion = string | number | boolean | null | undefined;
// type Random = NonNullable<MyUnion>
// type Random2 = Exclude<MyUnion, undefined | null>

/* Parameters<Type> 
   provides the parameters of the function in the form of array
*/
// const myfunc = (a: number, b: string) => {
//    console.log(a + b);
// };

// type Random = Parameters<typeof myfunc>

/* ConstructorParameters<Type>
   provides the parameters of the constructor in the form of array
*/
// class SampleClass {
//    constructor(public s: string, public t: string) {}
// }
// type Random = ConstructorParameters<typeof SampleClass>

/* ReturnType<Type> 
   we could use it in cases we want to know the return type of the function 
   that is coming from the other modules
*/

// const myfunc = (a: number, b: string) => {
//    // console.log(a + b);
//    return a + b;
// };

// type FuncType = ReturnType<typeof myfunc>

/* InstanceType<Type> */
// class SampleClass {
//    constructor(public s: string, public t: string) {}
// }
// type Random = InstanceType<typeof SampleClass>

// const user: Random = {
//    s: "Hare",
//    t: "Krishna!"
// }
