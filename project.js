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
        const div = document.createElement("div");

        div.innerHTML = `
        <img src="" alt="" />
        <h5>h</h5>
        <p></p>
        <button>Details</button>
        <button>Add To Cart</button>
        `;

        productContains.appendChild(div);
    });
};

loadAllProduct();