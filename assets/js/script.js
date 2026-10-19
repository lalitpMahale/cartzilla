

// for product lists script  
let products =[
    { id: 1, name:"Muesli Fitness Energy, gluten free",price:125, mrp:150 ,discount:"20%", image: "assets/img/product-muesli.png" ,rating: "  (4.5)"},
    { id: 2, name:"Fresh orange Klementina, Spain", price:100, mrp:120, discount:"30%", image: "assets/img/product-oranges.png", weight:"1kg", rating: " (4.5)"},
    { id: 3, name:"Pepsi soda classic, can" ,price:40, mrp:45 , discount: "", image:"assets/img/product-cola.png", weight: "330ml ",rating: "(4.5)"},
    { id: 4, name:"Mozzarella mini cheese Granaloro" ,price:200, mrp:225 , discount: "", image:"assets/img/product-mozzarella.png", weight: "250g ",rating: "(4.5)"},
    { id: 5, name:"Coconut, Indonesia" ,price:80, mrp:65 , discount: "", image:"assets/img/product-coconut.png", weight: " ",rating: "(4.5)"},
    { id: 6, name:"Pesto sauce Barilla with parmesan and basil" ,price:450, mrp:500 , discount: "", image:"assets/img/product-pesto.png", weight: "200g",rating: "(4.5)"},
    { id: 7, name:"Fresh mango, Spain" ,price:200, mrp:210 , discount: "", image:"assets/img/product-mango.png ", weight: " ",rating: "(4.5)"},
    { id: 8, name:"Fresh red grapefruit" ,price:400, mrp:335 , discount: "", image:"assets/img/product-asparagus.png", weight: "1kg ",rating: "(4.5)"},
    { id: 9, name:"Pure virgin olive oil Basso" ,price:40, mrp:45 , discount: "", image:" ", weight: "1000ml",rating: "(4.5)"},
    { id: 10, name:"Fresh red seedless grapes" ,price:200, mrp:245 , discount: "", image:" ", weight: " 1kg",rating: "(4.5)"},
    { id: 11, name:"Pepsi soda classic, can" ,price:40, mrp:45 , discount: "", image:"", weight: "1kg",rating: "(4.5)"},
    { id: 12, name:"Pepsi soda classic, can" ,price:40, mrp:45 , discount: "", image:" ", weight: " ",rating: "(4.5)"},
    { id: 13, name:"Pepsi soda classic, can" ,price:40, mrp:45 , discount: "", image:" ", weight: " ",rating: "(4.5)"},
    { id: 14, name:"Pepsi soda classic, can" ,price:40, mrp:45 , discount: "", image:" ", weight: " ",rating: "(4.5)"},
    { id: 15, name:"Pepsi soda classic, can" ,price:40, mrp:45 , discount: "", image:" ", weight: " ",rating: "(4.5)"},
]



let cart = [];



// function to display products

function displayProducts(productList) {
    let productContainer = document.getElementById("products");

    productContainer.innerHTML = "";

    productList.forEach(function(product){
        let cartProduct = cart.find(function(item){
            return item.id === product.id;
        });


        productContainer.innerHTML += ` <article class="product-card">
          <button class="product-favorite" type="button" aria-label="Add asparagus to favorites">♡</button>
          <a class="product-image" href="#asparagus"><img src="${product.image}" alt="${product.name}"></a>
          <button class="product-add" type="button" aria-label="Add asparagus to cart">+</button>
          <p class="product-price">${product.price}</p><h3>${product.name}</h3><p class="product-size">${product.weight}</p>
        </article> `;
    });
}

displayProducts(products);

