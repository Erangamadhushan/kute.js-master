window.addEventListener("DOMContentLoaded", () => {

})
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
    currentItem.push(item);
    sessionStorage.setItem('currentItem', JSON.stringify(currentItem));

    window.location.replace("buyItem.html");
}

function addtoCart(img, title, desc, price, discount, subDesc) {
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
    localStorage.setItem('cart', JSON.stringify(cart));
    
    function actionAlert() {
        Swal.fire({
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500
          });
    }
    actionAlert();
}

function clearCartItems() {
    localStorage.removeItem('cart');
    renderCartItemsContent();
}

function executePaymentGateWay() {
    window.location.replace("paymentGateWay.html");
}

function checkPaymentGateWay(event) {
    event.preventDefault();
    Swal.fire({
        icon: "success",
        title: "Payment Successful",
        showConfirmButton: false,
        timer: 1500
      });
}