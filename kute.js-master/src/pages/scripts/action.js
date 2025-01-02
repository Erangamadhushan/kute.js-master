function purchaseItem(img, title, desc, price, discount, subDesc) {
    const currentItem = [];
    let item = {
        img,
        title,
        desc,
        price,
        discount,
        subDesc
    }
    let cart = localStorage.getItem('cart');
    if(cart == null) {
        cart = [];
    }
    else {
        cart = JSON.parse(cart);
    }
    
    cart.unshift(item);
    currentItem.push(item);
    localStorage.setItem('cart', JSON.stringify(cart));
    sessionStorage.setItem('currentItem', JSON.stringify(currentItem));

    window.location.replace("buyItem.html");
}