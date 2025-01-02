function purchaseItem(img, title, desc, price, discount) {
    const currentItem = [];
    let item = {
        img,
        title,
        desc,
        price,
        discount
    }
    let cart = localStorage.getItem('cart');
    if(cart == null) {
        cart = [];
    }
    else {
        cart = JSON.parse(cart);
    }
    cart.push(item);
    currentItem.push(item);
    localStorage.setItem('cart', JSON.stringify(cart));
    sessionStorage.setItem('currentItem', JSON.stringify(currentItem));
    alert("Item added to cart");

    window.location.replace("buyItem.html");
}