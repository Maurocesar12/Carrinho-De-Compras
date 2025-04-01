//Aqui onde o usuario vai estar interagindo
import * as cartService from './services/cart.js';
import createItem from './services/item.js';

const myCart = [];
const myWhishList = [];

console.log("BEM-VINDO AO CARRINHO!");

const item1 = await createItem("Teclado", 20.33, 1);
const item2 = await createItem("Mouse", 59.99, 2);

await cartService.addItem(myCart, item1);
await cartService.addItem(myCart, item2);

await cartService.removeItem(myCart, 1);

await cartService.displayCart(myCart);


//await cartService.deleteItem(myCart, item2.name);
//await cartService.deleteItem(myCart, item1.name);

console.log("Total Do Carrinho:");

await cartService.calculateTotal(myCart);