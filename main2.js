// const obj1 = {
//     a : "a",
//     b: "b",
//     c: {
//         d: "d",
//         e: "e",
//     }
// }

// const obj2 = {}
//     for (prop in obj1) {
//         obj2[prop] = obj1[prop];
// }

// const obj3 = Object.assign({}, obj1) ;
// const obj4 = Object.create(obj1) ;

// Abstracción con objetos literales y deep copy

function isObject(subject) {
    return typeof subject == "object";
}
function isArray(subject) {
    return Array.isArray(subject)
}

function deepCopy(subject) {
    let copySubject;
 
    const subjectIsObject = isObject(subject);
    const subjectIsArray = isArray(subject)
 
    if (subjectIsArray) {
     copySubject = [];
    } else if (subjectIsObject) {
     copySubject = {};
    } else {
     return subject;
    }
 
    for (key in subject) {
     const keyIsObject = isObject(subject[key]);
     if (keyIsObject) {
         // copySubject[key] = deepCopy(subject[key]);
     } else {
         if (subjectIsArray) {
             copySubject.push(subject[key]);
         } else {
             copySubject[key] = subject[key];
         }
     }
    }
 
    return copySubject; 
 }


 const studentBase = {
    name: undefined,
    email: undefined,
    age: undefined,
    approveCourse: undefined,
    learningPaths: undefined,
    socialMedia: {
        twitter: undefined,
        instagram: undefined,
        facebook: undefined,
    }
 };

 const Johana = deepCopy(studentBase);
 Object.seal(Johana);
//  Object.isSealed(Johana);
// Object.isFrozen(Johana);
    Johana.name ='Jonanita'

function requiredParam(param) {
    throw new Error(param + " es obligatio");
}

function createLearningPath({
    name = requiredParam(name),
    courses: [],
}){
    const private = {
        "_name": name,
        "_courses": courses,
        
    };

    const public = {
        get name() {
            return private['_name'];
        },

        set name(newName) {
            if (newName.length != 0) {
                private['_name'] = newName;
            } else {
                console.warn("Tu nombre debe tener al menos 1 carácter");
            }
        },

        get courses() {
            return private['_courses'];
        },

    };
    return public;
}

function createStudents({
    name = requiredParam("name"),
    email = requiredParam("email"),
    age,
    twitter,
    instagram,
    facebook,
    approvedCourse = [],
    learningPaths = [],
}= {}) {

    const private = {
        "_name": name,
        "_learningPaths": learningPaths
    };

    const public = {
        email,
        age,
        approvedCourse,
        socialMedia: {
            twitter,
            instagram,
            facebook,
            },

        get name() {
            return private['_name'];
        },

        set name(newName) {
            if (newName.length != 0) {
                private['_name'] = newName;
            } else {
                console.warn("Tu nombre debe tener al menos 1 carácter");
            }
        },
        get learningPaths() {
            return private['_learningPaths'];
        },

        set learningPaths(newLP) {

            if (!newLP.name){
                console.warn("Tu LP no tiene la propiedad name");
                return;
            } 

            if (!newLP.courses) {
                console.warn("Tu LP no tiene Courses");
                return;
            }
            if (!isArray(newLP.courses)) {
                console.warn("Tu LP no es una lista (*de cursos)");
                return;
            }
                

            private["_learningPaths"] = newLP;


        },
    // readName() {
    //     return private['_name'];
    //     },
    // changeName(newName) {
    //     private['_name'] = newName;
    //     },
    };


    
    // //Evitar que modifiquen las funciones
    // Object.defineProperty(public, "readName", {
    //     writable: false,
    //     configurable: false,
    // })
    // Object.defineProperty(public, "changeName", {
    //     writable: false,
    //     configurable: false,
    // })


    return public;
        
    
}

const juaninto = createStudents({
    name: 'Juan',
    age: 18,
    email: 'juan@gmail.com',
    twitter: 'juan@gmail.com',
    facebook: 'facebook.com',
    instagram: 'instagram.com',
}) ;

juaninto.learningPaths = "Nueva ruta de aprendizaje"