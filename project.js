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
        <button>Add To Cart</button>
        `;

        productContains.appendChild(div);
    });
};

loadAllProduct();