//Arquivo para lidar com os itens

//CASOS DE USO DOS ITEMS

//Criar item com subtotal correto.
async function createItem(name, price, quantify) {
    return {
        name,
        price,
        quantify,
        subtotal: () => price * quantify,
    };
}

export default createItem;