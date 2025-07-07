const cartCount = document.getElementById("count").innerText;

let convertedCount = parseInt(cartCount);

const loadAllProduct = () => {
    fetch('https://fakestoreapi.com/products')
  .then(response => response.json())
  .then(data => {
    displayProduct(data);
});
}


const displayProduct = (products) => {
    const productContains = document.getElementById("product-container");

    products.forEach(product => {
        console.log(product);
        const div = document.createElement("div");
        div.classList.add("card");
        div.innerHTML = `
        <img class="card-img" src=${product.image} alt="" />
        <h5>${product.title}</h5>
        <h3>price: ${product.price} $</h3>
        <p>${product.description.slice(0, 50)}</p>
        <button>Details</button>
        <button onclick="handleAddToCart('${product.title.slice(0,10)}','${product.price}')">Add To Cart</button>
        `;

        productContains.appendChild(div);
    });
};


const handleAddToCart = (name, price) => {
    const cartCount = document.getElementById("count").innerText;

    let convertedCount = parseInt(cartCount);
    convertedCount += 1;
    document.getElementById("count").innerText = convertedCount;
    //console.log(name, price);
    const container = document.getElementById("cart-main-container");

    const div = document.createElement("div");
    div.classList.add("cart-info");
    div.innerHTML = `
    <p>${name}</p>
    <h3 class="price">${price}</h3>

    `;
    container.appendChild(div);
    UpdateTotal();
};


const UpdateTotal = () => {
const allPrice = document.getElementsByClassName("price");
let count = 0;
for (const element of allPrice) {
    count = count + parseFloat(element.innerText)
}
document.getElementById("total").innerText = count.toFixed(2);
};

loadAllProduct();