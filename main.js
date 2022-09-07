const idinput =document.getElementById('idInput');
const nombrePizza =document.getElementById('pName');
const precioPizza =document.getElementById('pPrice');
const ingredientesPizza =document.getElementById('pIngr')

const pizzas = [
    {
      id: 1,
      nombre: "Muzzarela",
      precio: 1000,
      ingredientes: ["Muzzarela", "Aceitunas"],
    },
    {
      id: 2,
      nombre: "Napolitana",
      precio: 1200,
      ingredientes: ["Muzzarela", "Tomate"],
    },
    {
      id: 3,
      nombre: "Margarita",
      precio: 1500,
      ingredientes: ["Muzzarela", "Aceite de Oliva", "Albahaca"],
    },
    {
      id: 4,
      nombre: "Jamon",
      precio: 1700,
      ingredientes: ["Muzzarela", "Jamon", "Morron"],
    },
    {
      id: 5,
      nombre: "Especial",
      precio: 2000,
      ingredientes: ["Muzzarela", "Panceta", "Cheddar", "Verdeo"],
    },
    {
      id: 6,
      nombre: "Mini",
      precio: 500,
      ingredientes: ["Muzzarela"],
    },
  ];


const renderPizza = e => {
    e.preventDefault();
    if (pizzaSearch(pizzas) == undefined){
        alert('No existe la Pizza, por favor seleccione otro numero.')
        return
    } else {
        nombrePizza.textContent=`Tipo: ${pizzaSearch(pizzas).nombre}`;
        ingredientesPizza.textContent=`Ingredientes: ${pizzaSearch(pizzas).ingredientes}`
        precioPizza.textContent=`Precio: $ ${pizzaSearch(pizzas).precio}`;
    }
}

const pizzaSearch = () => {
    const valor = getValue();
    const laPizza = pizzas.find(pizza => pizza.id == valor)
    return laPizza
}

const getValue = () => {
    const valor = idinput.value
    return valor;
}

const init = () => {
    searchPizza.addEventListener ('submit', renderPizza)
}

init();
