const str = window.location;
const url = new URL(str);
const id = url.searchParams.get("id");
const host = "http://127.0.0.1:3000";
const productUrl = host + "/api/products/" + id;

const displayProduct = function() {
    fetch(productUrl)
    .then(response => response.json())
    .then(product => {
            //affichage de l'image
            const imageSection = document.getElementsByClassName("item__img")[0];
            imageSection.innerHTML = `<img src=${product.imageUrl} alt=${product.altTxt}>`
            //affichage du nom
            const titleSection = document.getElementById("title");
            titleSection.innerHTML = product.name;
            //affichage du prix
            const priceSection = document.getElementById("price");
            priceSection.innerHTML = product.price;
            //affichage du description
            const descriptionSection = document.getElementById("description");
            descriptionSection.innerHTML = product.description;
            //affichage des options de choix de couleur
            const colorsSection = document.getElementById("colors");
            for (let i = 0; i<product.colors.length; i++){
                colorsSection.innerHTML += `<option value=${product.colors[i]}>${product.colors[i]}</option>`
            }
    })
}

function itemQuantity(){
    const quantity = document.getElementById("quantity");
    return quantity.value;
}

function productColor(){
    const color = document.getElementById("colors");
    return color.value;
}

function productName(){
    const name = document.getElementById("name");
    return name.value;
}

const addToCartButton = document.getElementById("addToCart");
addToCartButton.addEventListener("click", () =>{
    //utilise JSON.parse et JSON.stringify
    let qty = itemQuantity();
    let clr = productColor();
    let 
})
displayProduct();
