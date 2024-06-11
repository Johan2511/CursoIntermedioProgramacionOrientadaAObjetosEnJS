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