// Primer desafío entregable


class ProductManager {


    static ultId = 0;


    constructor() {
        this.products = [];
    }

     

    addProduct(title, description, price, img, code, stock) {

        
        if(!title || !description || !price || !img || !code || !stock){
            console.log("Todos los campos son obligatorios"); 
            return;
        }

         
        if(this.products.some(item => item.code === code)){
            console.log("El codigo debe ser unico");
            return;
        }

        

        const newProduct = {
            id: ++ProductManager.ultId,
            title,
            description,
            price,
            img,
            code,
            stock
        }

        

        this.products.push(newProduct);

    }

    getProducts() {
        console.log(this.products);
    }

    getProductById(id) {
        const product = this.products.find(item => item.id === id);

        if(!product) {
            console.log("Producto no encontrado");
        } else {
            console.log("Su producto: ", product);
        }
        
    }


}






const manager = new ProductManager();


manager.getProducts();


manager.addProduct("producto prueba", "este es un producto prueba", 200, "sin imagen", "abc123", 25);




manager.addProduct("fideos", "los mas ricos", 200, "sin imagen", "abc124", 50);


manager.addProduct("arroz", "el más rico", 200, "sin imagen", "abc125", 50);


manager.getProducts();



manager.addProduct("Pantalón XL", "Los más cómodos", 200, "sin imagen", "abc125", 50);


manager.getProductById(2);
manager.getProductById(50);