const products = [
    { id: 1, name: "Muesli Fitness Energy, gluten free", price: 2.15, mrp: 2.15, image: "assets/img/product-muesli.png", weight: "500g" },
    { id: 2, name: "Fresh orange Klementina, Spain", price: 3.12, mrp: 4.05, discount: "-30%", image: "assets/img/product-oranges.png", weight: "1kg" },
    { id: 3, name: "Cola soda classic, can", price: 0.80, mrp: 0.80, image: "assets/img/product-cola.png", weight: "330ml" },
    { id: 4, name: "Mozzarella mini cheese Granarolo", price: 2.99, mrp: 2.99, image: "assets/img/product-mozzarella.png", weight: "250g" },
    { id: 5, name: "Coconut, Indonesia", price: 1.24, mrp: 1.24, image: "assets/img/product-coconut.png", weight: "1 coconut" },
    { id: 6, name: "Pesto sauce with parmesan and basil", price: 3.95, mrp: 3.95, image: "assets/img/product-pesto.png", weight: "200g" },
    { id: 7, name: "Fresh mango, Spain", price: 1.99, mrp: 1.99, image: "assets/img/product-mango.png", weight: "1 mango" },
    { id: 8, name: "Fresh green asparagus, bunch", price: 2.40, mrp: 2.40, image: "assets/img/product-asparagus.png", weight: "300g" }
];

const cart = [];

function displayProducts(productList) {
    const productContainer = document.getElementById("products");
    if (!productContainer) return;

    productContainer.innerHTML = productList.map((product) => {
        const cartProduct = cart.find((item) => item.id === product.id);
        return `
            <article class="product-card">
                <button class="product-favorite" type="button" aria-label="Add ${product.name} to favorites">♡</button>
                ${product.discount ? `<span class="product-discount">${product.discount}</span>` : ""}
                <a class="product-image" href="#product-${product.id}">
                    <img src="${product.image}" alt="${product.name}">
                </a>
                <button class="product-add" type="button" aria-label="Add ${product.name} to cart" onclick="addToCart(${product.id})">+</button>
                <p class="product-price">$${product.price.toFixed(2)}${product.mrp > product.price ? ` <del>$${product.mrp.toFixed(2)}</del>` : ""}</p>
                <h3>${product.name}</h3>
                <p class="product-size">${product.weight}${cartProduct ? ` · In cart: ${cartProduct.quantity}` : ""}</p>
            </article>`;
    }).join("");
}

function addToCart(id) {
    const selectedProduct = products.find((product) => product.id === id);
    if (!selectedProduct) return;

    const cartProduct = cart.find((item) => item.id === id);
    if (cartProduct) {
        cartProduct.quantity += 1;
    } else {
        cart.push({ id, quantity: 1 });
    }

    updateCart();
    displayProducts(products);
}

function increaseQuantity(id) {
    const cartProduct = cart.find((item) => item.id === id);
    if (!cartProduct) return;

    cartProduct.quantity += 1;
    updateCart();
    displayProducts(products);
}

function updateCart() {
    const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
    const totalAmount = cart.reduce((total, item) => {
        const product = products.find((entry) => entry.id === item.id);
        return total + (product ? product.price * item.quantity : 0);
    }, 0);

    const countElement = document.getElementById("count");
    if (countElement) countElement.textContent = totalQuantity;

    const cartTotalElement = document.getElementById("cartTotal");
    if (cartTotalElement) cartTotalElement.textContent = `Cart subtotal: $${totalAmount.toFixed(2)}`;

    const cartLink = document.getElementById("cartLink");
    if (cartLink) cartLink.setAttribute("aria-label", `Shopping cart, ${totalQuantity} items`);
}

displayProducts(products);
