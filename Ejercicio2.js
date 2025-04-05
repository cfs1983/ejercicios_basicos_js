// 1. Luke skywalker comple años
const jedi = { nombre: "luke skywalker" , edad: 19};
jedi.edad = 25;
console.log(jedi.edad);

// 2. Presentacion al estio Leia Organa
let nombre = "Leia";
let apellidos = "Organa";
let edad = 20;
console.log("Hola soy " + nombre + " " + apellidos + " y tengo " + edad + " años y soy una princeas de Alderaan");

// 3. Calcula el coste total de sable de luz
const sable1 = { nombre: "Shoto de Yoda", precio: 1500};
const sable2 = { nombre: "sable de Darth Vader", precio:20000};
console.log("El coste total de los sables de luz es: " + (sable1.precio + sable2.precio) `+ sable1.nombre +` ` y ` `+ sable2.nombre`);

// 4. Actualizando el precio de las naves
let precioBaseGlobal = 10000;
const nave1 = {nombre: "Ala-X", precioBase: 50000, precioFinal: 60000};
const nave2 = {nombre: "Halcón Milenario", precioBase: 70000, precioFinal: 80000};

precioBaseGlobal =25000;
nave1.precioFinal= precioBaseGlobal + nave1.precioBase;
nave2.precioFinal= precioBaseGlobal + nave2.precioBase;
console.log("El precio final de la nave" + nave1.nombre + " es: " + nave1.precioFinal);
console.log("El precio final de la nave" + nave2.nombre + " es: " + nave2.precioFinal);
