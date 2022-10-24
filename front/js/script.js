const host = "http://127.0.0.1:3000";
const url = host + "/api/products/";
const productSection = document.getElementById("items");

const createProduct = function(product) {

    const ref = document.createElement("a");
    ref.href = "./product.html?id=" + product._id;

    const article = document.createElement("article");
    ref.appendChild(article);

    const image = document.createElement("img");
    article.appendChild(image);
    image.src = product.imageUrl;
    image.altTxt = product.altTxt;
    
    const productName = document.createElement("h3");
    article.appendChild(productName);
    productName.innerHTML = product.name;

    const productDescription = document.createElement("p");
    article.appendChild(productDescription);
    productDescription.innerHTML = product.description;

    return ref;
}

const displayProducts = function() {
    fetch(url)
    .then(response => response.json())
    .then(products => {

        for(let i = 0; i< products.length;i++){
            const product = products[i];
            const productElement = createProduct(product);
            productSection.appendChild(productElement);
            
        }
    })
}



displayProducts();
