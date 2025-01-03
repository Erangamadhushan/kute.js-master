window.addEventListener("DOMContentLoaded", () => {
    renderBuyItemContent();
});

function renderBuyItemContent() {
    let cart = sessionStorage.getItem('currentItem');
    cart = JSON.parse(cart);
    let buyItemContainer = document.querySelector('.buyItemContainer');
    let buyItemContent = `
        <div class="max-w-[70vw] mx-auto grid grid-cols-1 md:grid-cols-2 p-4 border border-green-400 rounded-lg group overflow-hidden relative" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="200" data-aos-placement="bottom-center ">
            <div class="p-4">
                <img src="${cart[0].img}" class="w-full bg-cover "/>
                <h1 class="text-3xl font-bold text-center">${cart[0].title}</h1>
                <h2>${cart[0].subDesc}</h2>
                <span class="ml-5 text-2xl font-bold">$${cart[0].price}</span>
            </div>
            <div class=" p-4">
                <p>${cart[0].desc}</p>
                <form action="" onsubmit="event.preventDefault();">
                    <div class="mt-5 grid grid-cols-2 gap-4">
                        <div>
                            <input type="number" class="p-2 border border-green-400 rouned-lg w-full" placeholder="Quanity" min="1" value="1" min="1000" id="quantity" onchange="calculateTotal('${cart[0].price}')"/>
                        </div>
                        <div>
                            <select name="" id="" class="p-2 border border-green-400 rouned-lg w-full">
                                <option value="Cash">Cash</option>
                                <option value="Card">Card</option>
                                <option value="Paypal">Paypal</option>
                            </select>
                        </div>
                    </div>
                    <div class="w-[300px] grid gap-4 mt-5">
                        <div>
                            <p class="text-2xl font-semibold">$ <del>${cart[0].price}</del>  -<span class="text-xl">${cart[0].discount}% off</span></p>
                            <p class="text-2xl font-bold">$ <span class="text-green-400" id="itemPrice">${cart[0].price-(cart[0].price*cart[0].discount)/100}</span> (per 1kg)</p>
                        </div>
                        <div class=" p-2">
                            <p class="text-2xl font-bold">$ <span class="text-green-400" id="totalPrice"></span></p>
                        </div>
                        
                    </div>
                    <div class="w-[200px] mx-auto grid gap-4 mt-5">
                        <button type="submit" class="p-2 bg-green-400 text-white rounded-lg w-full" onclick="executePaymentGateWay()">Buy Now</button>
                    </div>
                </form>
                
            </div>
        </div>
    `;
    buyItemContainer.innerHTML = buyItemContent;
    calculateTotal(`${cart[0].price}`);
}

function calculateTotal(price) {
    let quantity = Number(document.querySelector('#quantity').value);
    if(quantity <= 1000) {
        let totalPrice = quantity * price;
        totalPrice = totalPrice.toFixed(2);
        document.getElementById('totalPrice').innerHTML = totalPrice;
    }
    else {
        confirm("Quantity should be less than 1000");
        document.getElementById('totalPrice').innerHTML = "NaN"
    }
}
