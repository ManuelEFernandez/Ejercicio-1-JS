
const pizzas = [


  {id: 1, 
  nombre: "Muzzarella", 
  ingredientes: 
  ["Queso muzarella", "Aceitunas verdes", "Orégano"], 
  precio: 1000},

  {id: 2, 
  nombre: "Napolitana", 
  ingredientes: 
  ["Queso muzarella", "Aceitunas negras", "Tomate", "Ajo"], 
  precio: 1100},

  {id: 3, 
  nombre: "Provolone", 
  ingredientes: 
  ["Queso muzarella", "Queso provolone", "Aceitunas verdes"], 
  precio: 1100},


  {id: 4, 
  nombre: "Jamón y morrones", 
  ingredientes: 
  ["Queso muzarella", "Jamón", "Morrones", "Orégano"], 
  precio: 1200},


  {id: 5, 
  nombre: "Calabresa", 
  ingredientes: 
  ["Queso muzarella", "Queso provolone", "Longaniza"], 
  precio: 1300},

   
  

    {id: 6, 
    nombre: "Fugazzetta (porción)", 
    ingredientes: 
    ["Queso muzarella", "Jamón",], 
    precio: 400},
]

console.log(`

Ejercicio a)

`)
const pizzasImpares = pizzas.map(pizza => { 
  
  if (pizza.id %2 !== 0) {

    console.log(`La pizza ${pizza.nombre} tiene como id ${pizza.id}, que es un número impar.`);

  }
  });


  console.log(`

Ejercicio b)

`)
  const pizza600 = pizzas.map (pizza => {

    let precio = 600; 
    if (pizza.precio < precio) {

      console.log(`Hay pizzas por menos de ${"$" + precio} (la pizza ${pizza.nombre} vale ${"$" + pizza.precio}).`);
    }
  })

console.log(`

Ejercicio c)
  
`)

  let nombresPizzas = [];
  const juntarNombresPizzas = pizzas.map (pizza => {

    numPizzas = Object.keys(pizzas).length;

  
    nombresPizzas.push(pizza.nombre);

    if (pizza.id === numPizzas) {

    const cadenaPizzas = nombresPizzas.join(", ");
    console.log(`Los nombres de las pizzas son: ${cadenaPizzas}.`);

  };}
  );

console.log(`

Ejercicio d)
  
`)

  let preciosPizzas = [];

  const juntarPreciosPizzas = pizzas.map(pizza => {

    numPizzas = Object.keys(pizzas).length;

    preciosPizzas.push(pizza.precio);

    if (pizza.id === numPizzas) {

      const cadenaPizzasPrecios = preciosPizzas.join(", $");
      console.log(`Los precios de las pizzas son: $${cadenaPizzasPrecios}.`);
    }

  });

console.log(`

Ejercicio e)
  
`)

  let preciosYNombres = pizzas.map (pizza => {

    console.log(`La pizza ${pizza.nombre} sale $${pizza.precio}.`);
  });

  