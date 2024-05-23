const juan = {
    names: 'Juan',
    age: 20,
    approvedCourses: ['Curso 1'],
    addCourse(newCourse) {
        console.log("This", this);
        console.log("This.approvedCourses", this.approvedCourses);
        this.approvedCourses.push(newCourse);
    }
};

// console.log( Object.keys(juan));
// console.log(Object.getOwnPropertyNames((juan))); 
// console.log(Object.entries((juan)));


// Object.defineProperty(juan, "", {
//     value:"",
//     enumerable: true,
//     writable: true,
//     configurable: true,
// } );
// Object.defineProperty(juan, "navigator", {
//     value:"Chrome",
//     enumerable: false,
//     writable: true,
//     configurable: true,
// } );

// Object.defineProperty(juan, "editor", {
//     value:"VsCode",
//     enumerable: false,
//     writable: false,
//     configurable: true,
// } );

// Object.defineProperty(juan, "terminal", {
//     value:"WSL",
//     enumerable: true,
//     writable: true,
//     configurable: false,
// } );

// Object.defineProperty(juan, "pruebaNASA", {
//     value:"extraterrestres",
//     enumerable: false,
//     writable: false,
//     configurable: false,
// } );

// Object.seal(juan); // Ayuda a que las prpiedades se puedan borrar con el configurable en false
Object.freeze(juan); // configurable en false y writable en false no se puede borrar ni sobreescribir

console.log(Object.getOwnPropertyDescriptors(juan));