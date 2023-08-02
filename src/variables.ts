// npx ts-node ./src/variables.ts
// DATOS PRIMITIVOS
const name = 'David';
const age = 28;
const isStudying = true;
let userName;
const city = null;

console.log(
  `Hola mi nombre es ${name} tengo ${age} años ${
    isStudying ? 'Si' : 'No'
  } estoy estudiando actualmente y mi nombre de usuario es ${userName} y vivo en ${city}`,
);

export {};
