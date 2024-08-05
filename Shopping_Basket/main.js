const openShopping = document.querySelector(".shopping"),
    closeShopping = document.querySelector(".closeShopping"),
    body = document.querySelector("body"),
    list = document.querySelector(".list"),
    listCard = document.querySelector(".listCard"),
    total = document.querySelector(".total"),
    quantity = document.querySelector(".quantity");


openShopping.addEventListener("click", () => {
    body.classList.add("active");
})

closeShopping.addEventListener("click", () => {
    body.classList.remove("active")
})

let products = [
    {
        "id": 1,
        "name": "PRODUCT1",
        "image": "iş.jpg",
        "price": 77
    },
    {
        "id": 2,
        "name": "PRODUCT2",
        "image": "hp1.jpg",
        "price": 80
    },
    {
        "id": 3,
        "name": "PRODUCT3",
        "image": "gyk.jpg",
        "price": 47
    },
    {
        "id": 4,
        "name": "PRODUCT4",
        "image": "fvi.jpg",
        "price": 54
    },
    {
        "id": 5,
        "name": "PRODUCT5",
        "image": "csg.jpg",
        "price": 47
    },
    {
        "id": 6,
        "name": "PRODUCT6",
        "image": "ut.jpg",
        "price": 53
    },
]

let listCards = [];

const initApp = () => {
    products.forEach((value, key) => {
        let newDiv = document.createElement("div");
        newDiv.classList.add("item");
        newDiv.innerHTML = `
            <img src ="img/${value.image}">
            <div class = "title">${value.name}</div>
            <div class = "price">${value.price.toLocaleString()}</div>
            <button onclick ="addToCard(${key})">Add To Card</botton>
            `;
        list.appendChild(newDiv)
    })
}

initApp()

const addToCard = key => {
    if (listCards[key] == null) {
        listCards[key] = JSON.parse(JSON.stringify(products[key]))
        console.log([key])
        console.log(listCards)
        listCards[key].quantity = 1;
        console.log(listCard.quantity);
    }
    reloadCard()
}

const reloadCard = () => {
    listCard.innerHTML = "";
    let count = 0;
    let totalPrice= 0;

    listCards.forEach((value, key) => {
        totalPrice = totalPrice + value.price
        count = count + value.quantity;

        if(value != null) {
            let newDiv = document.createElement("li");
            newDiv.innerHTML = `
                <div><img src = "img/${value.image}"></div>
                <div class = "cardTitle">${value.name}</div>
                <div class = "cardPrice">${value.price.toLocaleString()}</div>

                <div>
                    <button style = "background-color:#560bad;" class = "cardButton" onclick = "changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class = "count">${value.quantity}</div>
                    <button style = "background-color:#560bad;" class = "cardButton" onclick = "changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>
            `
            listCard.appendChild(newDiv)
        }

        total.innerText = totalPrice.toLocaleString();
        quantity.innerText = count;
    })
}

const changeQuantity = (key, quantity) =>{
    if(quantity == 0){
        delete listCards[key]
    }
    else{
        listCards[key].quantity=quantity;
        listCards[key].price = quantity*products[key].price
    }
    reloadCard()
}