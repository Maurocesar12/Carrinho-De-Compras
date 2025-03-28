//Aqui onde o usuario vai estar interagindo
import * as cartService from './services/cart.js';
import createItem from './services/item.js';

const myCart = [];
const myWhihList = [];

console.log("BEM-VINDO AO CARRINHO!");

const item1 = await createItem("Teclado", 20.33, 2);
const item2 = await createItem("Mouse", 59.99, 2);

await cartService.addItem(myCart, item1);
await cartService.addItem(myWhihList, item2);

console.log("Total Do Carrinho:");

await cartService.calculateTotal(myCart);