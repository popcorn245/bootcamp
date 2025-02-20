let numberOfClicks = 0;

let shoppingCartTotal = 0;

function addToCart(itemPrice = 0) {
    shoppingCartTotal += itemPrice;
    displayShoppingCartTotal();
}

function confirmPurchase() {
    if (confirm(`Are you sure you want to spend $${shoppingCartTotal}?`)) {
        alert("I stole yo money!");
        shoppingCartTotal = 0;
        displayShoppingCartTotal();
    } else {
        // Do Nothing
    }
}

function displayShoppingCartTotal () {
    document.querySelector("#in-cart span").textContent = shoppingCartTotal;
}

function yellAtMe (event, clickMessageCount = 3) {
    console.log(event);
    numberOfClicks++;
    // const message = numberOfClicks > 3 ? "Stop clicking me!" : event.target.dataset.message;
    let message;
    if (numberOfClicks > clickMessageCount) {
        message = "Stop clicking me!";
        numberOfClicks = 0;
    } else {
        message = event.target.dataset.message;
    }
    alert(message);
    return message;
};

function submitMyForm(event) {
    event.preventDefault();
    if (event.target.id === "one") {
        console.log(event);
    }
}