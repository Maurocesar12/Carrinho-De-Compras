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
    const index = userCart.findIndex((item) => item.name === name);

    if(index !== -1) {
        userCart.splice(index, 1);
    }
};

//Remove um item do carrinho
async function removeItem(userCart, index) {
    //transforma o item visual do usuario, para o index do backend
    const deleteIndex = index - 1;

    //Verifico se o index é menor que o zero
    if(index >= 0 && index < userCart.length) {
        userCart.splice(deleteIndex, 1);
    }
};

async function displayCart(userCart) {
    console.log("Carriho cart list:");
    userCart.forEach((item, index) => {
        console.log(`${index + 1}. ${item.name} - R$ ${item.price} / ${item.quantify}X / Subtotal ${item.subtotal()}`);
    });
}

export {
    addItem,
    deleteItem,
    removeItem,
    calculateTotal,
    displayCart,
};


