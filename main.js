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

console.log(Object.getOwnPropertyDescriptors(juan));

Object.defineProperty(juan, "pruebaNASA", {
    value:"extraterrestres",
    enumerable: true,
    writable: true,
    configurable: true
} );
