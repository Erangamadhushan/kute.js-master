window.addEventListener("DOMContentLoaded", () => {
    renderBuyItemContent();
});

function renderBuyItemContent() {
    let cart = sessionStorage.getItem('currentItem');
    cart = JSON.parse(cart);
    let buyItemContainer = document.querySelector('.buyItemContainer');
    let buyItemContent = `
        <div class="w-[400px] mx-auto p-4 border border-green-400 rounded-lg group overflow-hidden relative" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="200" data-aos-placement="bottom-center ">
            <div class="">
                <img src="${cart[0].img}" class="w-full bg-cover "/>
                <h1 class="text-3xl font-bold text-center">${cart[0].title}</h1>
                <h2>${cart[0].desc}</h2>
                <span class="ml-5 text-2xl font-bold">$${cart[0].price}</span>
            </div>
            <div class="absolute top-0 m-4 p-5 right-0 w-[150px] h-[60px]  hover:h-auto overflow-hidden cursor-pointer discountSection z-10">
                <h1 class="text-white text-2xl">Discount</h1>
                <h1 class="text-white text-center text-3xl">${cart[0].discount} %</h1>
            </div>
        </div>
    `;
    buyItemContainer.innerHTML = buyItemContent;
}