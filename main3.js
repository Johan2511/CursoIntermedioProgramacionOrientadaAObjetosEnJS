const obj1 = {
    a : "a",
    b: "b",
    c: {
        d: "d",
        e: "e",
    },

    editA() {
        this.a = "AAAAAAA";
    }
}

const stringifyComplexObj = JSON.stringify(obj1);
// "{\"a\":\"a\",\"b\":\"b\",\"c\":{\"d\":\"d\",\"e\":\"e\"},\"f\":[1,\"2\",3]}"

const obj2 = JSON.parse(stringifyComplexObj);
// {a: "a", b: "b", c: {d: "d", e: "e"}}   

Recursividad

// function recursiva() {
//     if (/* Validacion */) {
//         // llamadados recursivos
//     } else {
//         // llamados normales, sin recursividad
//     }
// }

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



// // Funcion normal
// const numeritos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 454646, 7];
// // let numerito = 0;
// // for (let i = 0; i < numeritos.length; i++) {
// //     numerito = numeritos[i];
// //     console.log({i, numerito});

// // }

// function recursiva (numberArray) {
//     if(numberArray.length != 0) {
//         const firtNum = numberArray[0];
//         console.log(firtNum);


//         numberArray.shift();
//         recursiva(numberArray);
//     }
// }