const products = ['Camiseta de Metallica', 'Pantalón vaquero', 'Gorra de beisbol', 'Camiseta de Basket', 'Cinturón de Orión', 'AC/DC Camiseta']

function searchProducts(products, list) {
    list.forEach((list) => {
        if (list.includes('products')) {
            console.log(list);
        }
    });
}
searchProducts(products, 'Camiseta');