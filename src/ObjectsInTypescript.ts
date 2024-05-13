/* Objects in Typescript */

// const obj: {
//     height: number, 
//     weight: number,
//     gender: boolean
// } = {
//     height: 3434,
//     weight: 244,
//     gender: true
// };

// type Obj = {
//     height: number, 
//     weight: number, 
//     gender: boolean
// };

// const obj: Obj = {
//     height: 160,
//     weight: 70,
//     gender: true
// };


// const obj2: Obj = {
//     height: 190,
//     weight: 78,
//     gender: false
// };

/* Making Gender Optional */
// type Obj = {
//     height: number, 
//     weight: number, 
//     gender?: boolean
// };

// const obj3: Obj = {
//     height: 190,
//     weight: 78
// };


/* Interface */
interface Obj {
    height: number, 
    weight: number, 
    gender?: boolean
};

const obj: Obj = {
    gender: true,
    height: 180,
    weight: 70
};



/* Note: Wherever we have to use classes or objects we could use Interface,

because the major difference between type and interface is Interface could be extended using extends keyword
 */

// interface NewObj extends Obj {
//     scholar: boolean
//     func: (n: number, m: number) => void;
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

// kendal?.func(20, 10); 



interface NewObj extends Obj {
    scholar: boolean
    func: (n: number, m: number) => void;
};

const newObj:NewObj = {
    height: 135,
    weight: 30,
    scholar: true,
    func: (n, m) => {
        console.log(n*m)
    }
};

const kendal: NewObj = {
    height: 180,
    weight: 80,
    scholar: true,
    func: (n, m) => {
        console.log(n*m)
    }
}

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