// EJERCICIOS

// 1- Crear una función que reciba un número por parámetro e indique en consola si el número es par o impar.
// 2- Crear una función que reciba dos números por parámetro e indique en consola que número es mayor, y si ninguno lo es, indicar por consola que son iguales.
// 3- Crear una función que reciba un número por parámetro e indique en consola si ese número es múltiplo de 5.
// 4- Crear una función que reciba un número por parámetro e imprima por consola todos los números desde el 0 hasta llegar a ese número.
// 5 - Crear una función que reciba una palabra y un número por parámetro e imprima por consola  esa palabra la cantidad correspondiente al número indicado.
// 6 - Crear una función que reciba un array por parámetro e imprima por consola todos los valores de ese array.
// 7 - Crear una función que reciba un array con 10 números e imprima por consola todos los valores de ese array, menos el que se encuentre en la 5ta posición del mismo. Ayuda: Recuerden que el primer índice de un array es "0".
// 8 - Crea una función que reciba un array de números y un número por parámetro e imprima por consola cada número del array multiplicado por el número pasado por parámetro.
console.log("––––•(-•( INICIO )•-)•–––– ");
console.log(
  "1- Crear una función que reciba un número por parámetro e indique en consola si el número es par o impar."
);

const ParImpar = (num) => {
  if (num % 2 === 0) {
    console.log(`${num} es Par`);
  } else {
    console.log(`${num} es Impar`);
  }
};
ParImpar(2184543);
console.log("▂ ▃ ▅ ▆ █ SIGUIENTE EJERCICIO █ ▆ ▅ ▃ ▂ ");
console.log(
  "2- Crear una función que reciba dos números por parámetro e indique en consola que número es mayor, y si ninguno lo es, indicar por consola que son iguales."
);
const MayorMenor = (num1 = 0, num2 = 0) => {
  if (num1 === num2) {
    console.log(`${num1} y ${num2} son iguales`);
  } else if (num1 < num2) {
    console.log(`${num1} es menor a ${num2}`);
  } else {
    console.log(`${num1} es mayor a ${num2}`);
  }
};
MayorMenor(68);
console.log("▂ ▃ ▅ ▆ █ SIGUIENTE EJERCICIO █ ▆ ▅ ▃ ▂ ");
console.log(
  "3- Crear una función que reciba un número por parámetro e indique en consola si ese número es múltiplo de 5."
);
const MultiploFive = (num) => {
  if (num % 5 === 0) {
    console.log(`${num} es multiplo de 5`);
  } else {
    console.log(`${num} no es multiplo de 5`);
  }
};
MultiploFive(148254555);
console.log("▂ ▃ ▅ ▆ █ SIGUIENTE EJERCICIO █ ▆ ▅ ▃ ▂ ");
console.log(
  "4- Crear una función que reciba un número por parámetro e imprima por consola todos los números desde el 0 hasta llegar a ese número."
);

const NumSecuencia = (num) => {
  for (let i = 0; i <= num; i++) {
    console.log(i);
  }
};
NumSecuencia(13);
console.log("▂ ▃ ▅ ▆ █ SIGUIENTE EJERCICIO █ ▆ ▅ ▃ ▂ ");
console.log(
  "5 - Crear una función que reciba una palabra y un número por parámetro e imprima por consola  esa palabra la cantidad correspondiente al número indicado."
);
const PalabraCantidad = (palabra, num = 0) => {
  for (let i = 0; i < num; i++) {
    console.log(palabra);
  }
};
PalabraCantidad("perro", 10);
console.log("▂ ▃ ▅ ▆ █ SIGUIENTE EJERCICIO █ ▆ ▅ ▃ ▂ ");
console.log(
  "6 - Crear una función que reciba un array por parámetro e imprima por consola todos los valores de ese array."
);
const PrintArray = (arry) => {
  for (let i of arry) {
    console.log(i);
  }
};
PrintArray(["pera", "manzana", "banana", "kiwi"]);
console.log("▂ ▃ ▅ ▆ █ SIGUIENTE EJERCICIO █ ▆ ▅ ▃ ▂ ");
console.log(
  "7 - Crear una función que reciba un array con 10 números e imprima por consola todos los valores de ese array, menos el que se encuentre en la 5ta posición del mismo. Ayuda: Recuerden que el primer índice de un array es '0'"
);
const UnoMenosArray = (arry) => {
  for (let i of arry) {
    if (i !== arry[4]) {
      console.log(i);
    }
  }
};
UnoMenosArray([10, 22, 36, 44, 45456456458, 96, 57, 68, 39, 310.89]);
console.log("▂ ▃ ▅ ▆ █ SIGUIENTE EJERCICIO █ ▆ ▅ ▃ ▂ ");
console.log(
  "8 - Crea una función que reciba un array de números y un número por parámetro e imprima por consola cada número del array multiplicado por el número pasado por parámetro."
);
const MultiArray = (arry, num = 0) => {
  for (let i of arry) {
    console.log(i * num);
  }
};
MultiArray([25, 65, 9, 56, 1]);
console.log("––––•(-•( AL FIN )•-)•–––– ");
