window.addEventListener("DOMContentLoaded", () => {
    renderCartItemsContent();
});


function renderCartItemsContent() {
    const cartItemContainer = document.querySelector('.cartItemsContent');
    cartItemContainer.innerHTML = " ";
    let cart = localStorage.getItem('cart');
    cart = JSON.parse(cart);
    //console.log(cart);
    let template = document.querySelector('template');
    cart.forEach((ele,index) => {
        let tr = template.content.cloneNode(true);
        tr.querySelector('.itemTitle').textContent = ele.title;
        tr.querySelector('.itemPrice').textContent = ele.price;
        tr.querySelector('.itemDescription').textContent = ele.subDesc;
        tr.querySelector('.buyItemNow').onclick = () => {
            const currentItem = [];
            let item = {
                img: ele.img,
                title: ele.title,
                desc: ele.desc,
                price: ele.price,
                discount: ele.discount,
                subDesc: ele.subDesc
            }
            currentItem.push(item);
            sessionStorage.setItem('currentItem', JSON.stringify(currentItem));

            window.location.replace("buyItem.html");
        }
        tr.querySelector('.removeItemNow').onclick = () => {
            cart.splice(index, 1);
            localStorage.setItem('cart', JSON.stringify(cart));
            renderCartItemsContent();
        }
        cartItemContainer.appendChild(tr);
})
}