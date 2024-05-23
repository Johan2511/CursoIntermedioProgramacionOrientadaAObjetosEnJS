// const obj1 = {
//     a : "a",
//     b: "b",
//     c: {
//         d: "d",
//         e: "e",
//     }
// }

// const stringifyComplexObj = JSON.stringify(obj1);
// // "{\"a\":\"a\",\"b\":\"b\",\"c\":{\"d\":\"d\",\"e\":\"e\"},\"f\":[1,\"2\",3]}"

// const obj2 = JSON.parse(stringifyComplexObj);
// // {a: "a", b: "b", c: {d: "d", e: "e"}}   

// Recursividad

// function recursiva() {
//     if (/* Validacion */) {
//         // llamadados recursivos
//     } else {
//         // llamados normales, sin recursividad
//     }
// }

// Funcion normal
const numeritos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 454646, 7];
// let numerito = 0;
// for (let i = 0; i < numeritos.length; i++) {
//     numerito = numeritos[i];
//     console.log({i, numerito});

// }

function recursiva (numberArray) {
    if(numberArray.length != 0) {
        const firtNum = numberArray[0];
        console.log(firtNum);

        
        numberArray.shift();
        recursiva(numberArray);
    }
}