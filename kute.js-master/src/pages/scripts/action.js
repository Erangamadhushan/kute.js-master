function purchaseItem(img, title, desc, price, discount) {
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
    localStorage.setItem('cart', JSON.stringify(cart));
    alert("Item added to cart");

    window.location.replace("buyItem.html");
}