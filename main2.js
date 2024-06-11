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

function requiredParam(param) {
    throw new Error(param + " es obligatio");
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


    return {
        name,
        email,
        age,
        approvedCourse,
        learningPaths,
        socialMedia: {
            twitter,
            instagram,
            facebook,
        },
    }
}

const juaninto = createStudents({
    name: 'Juan',
    age: 18,
    email: 'juan@gmail.com',
    twitter: 'juan@gmail.com',
    facebook: 'facebook.com',
    instagram: 'instagram.com',
}) ;