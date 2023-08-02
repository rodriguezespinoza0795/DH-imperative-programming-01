// Salir de viaje
let budget = 1000;
const start_date = '2023-12-24';
const hora_salida = '20:00:00';
const asiento = '24A';
let equipaje = true;
const end_date = '2023-12-30';
const trasporte = 'Avión first class';
const destino = 'Dubai';

// Inicio del viaje
equipaje = false;
const gasto_dia_1 = 50;
console.log(
  `Al final del dia 1 nos quedan ${(budget -= gasto_dia_1)} de presupuesto`,
);
const gasto_dia_2 = 50;
console.log(
  `Al final del dia 2 nos quedan ${(budget -= gasto_dia_2)} de presupuesto`,
);
const gasto_dia_3 = 200;
console.log(
  `Al final del dia 3 nos quedan ${(budget -= gasto_dia_3)} de presupuesto`,
);
const gasto_dia_4 = 50;
console.log(
  `Al final del dia 4 nos quedan ${(budget -= gasto_dia_4)} de presupuesto`,
);
const gasto_dia_5 = 50;
console.log(
  `Al final del dia 5 nos quedan ${(budget -= gasto_dia_5)} de presupuesto`,
);
const gasto_dia_6 = 300;
console.log(
  `Al final del dia 6 nos quedan ${(budget -= gasto_dia_6)} de presupuesto`,
);
const gasto_dia_7 = 50;
console.log(
  `Al final del dia 7 nos quedan ${(budget -= gasto_dia_7)} de presupuesto`,
);

// Ver Barbie al cine
const pelicula = 'Barbie';
const is3D = false;
const category = 'Drama';
const boletos = 3;
const is2D = true;
const date = '2023-08-01';
const time_start = '12:00:00';
const bocadillo = true;

console.log(
  `La función es a las ${time_start}, vamos a ver la pelicula ${pelicula}, seremos ${boletos} personas`,
);

let cajon_1 = 'pantalon';
let cajon_2 = 'sudadera';
console.log(`Tenemos ${cajon_1} en el cajón 1`);
console.log(`Tenemos ${cajon_2} en el cajón 2`);
const mano = cajon_2;
cajon_2 = cajon_1;
cajon_1 = mano;
console.log(`Ahora tenemos ${cajon_2} en el cajón 2`);
console.log(`Ahora tenemos ${cajon_1} en el cajón 1`);
