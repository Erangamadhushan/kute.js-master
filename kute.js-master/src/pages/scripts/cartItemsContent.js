window.addEventListener("DOMContentLoaded", () => {
    renderCartItemsContent();
});

function renderCartItemsContent() {
    const cartItemContainer = document.querySelector('.cartItemDetailsContainer');
    let cart = localStorage.getItem('cart');
    cart = JSON.parse(cart);
    
}