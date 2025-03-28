//Arquivo para lidar com o carrinho

//CASOS DE USO
//add item no carrinho
async function addItem(userCart,item) {
    userCart.push(item);    
};

//Calcular o Total
async function calculateTotal(userCart) {
    const result = userCart.reduce((total, item) => total + item.subtotal(), 0);
    console.log(result);
};

//Deletar item do carrinho
async function deleteItem(userCart, name) {

};

//Remove um item do carrinho
async function removeItem(userCart, index) {
    
};

export {
    addItem,
    deleteItem,
    removeItem,
    calculateTotal,
};


