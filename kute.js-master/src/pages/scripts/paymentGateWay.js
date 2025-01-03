window.addEventListener("DOMContentLoaded", () => {
    renderPaymentGateWay();
});

function renderPaymentGateWay() {
    const paymentGatewayContainer = document.querySelector('.paymentGateContainer');
    paymentGatewayContainer.innerHTML = `
        <div class="w-[600px] mx-auto grid gap-5 mt-5  border border-green-400 rounded-lg min-h-[90vh] justify-center items-center">
            <div class="p-5 py-5">
                <form action="" onsubmit="event.preventDefault();">
                    <div class="grid gap-5">
                        <div>
                            <h2 class="text-2xl font-bold">Payment Details</h2>
                        </div>
                        <div class="flex">
                            <div class="w-[150px] relative flex">
                                <img src="./icons/payments/visa.png" alt="" class="w-[50%]"/>
                                <input type="radio" name="paymentType" class="w-[20px]"/>
                            </div>
                            <div class="w-[150px] relative flex">
                                <img src="./icons/payments/mastercard.png" alt="" class="w-[50%]"/>
                                <input type="radio" name="paymentType" class="w-[20px]"/>
                            </div>
                            <div class="w-[150px] relative flex">
                                <img src="./icons/payments/paypal.png" alt="" class="w-[50%]"/>
                                <input type="radio" name="paymentType" class="w-[20px]"/>
                            </div>
                        </div>
                        <div>
                            <label for="cardName">Card Name</label>
                            <input type="text" class="p-2 border border-green-400 rouned-lg w-full" id="cardName" placeholder="Card Name" required/>
                        </div>
                        <div>
                            <label for="cardExpiry">Card Expiry</label>
                            <input type="text" class="p-2 border border-green-400 rouned-lg w-full" id="cardExpiry" placeholder="Card Expiry" required/>
                        </div>
                        <div>
                            <label for="cardCVV">Card CVV</label>
                            <input type="text" class="p-2 border border-green-400 rouned-lg w-full" id="cardCVV" placeholder="Card CVV" required/>
                        </div>
                        <div>
                            <input type="submit" value="Pay Now" class="p-2 cursor-pointer bg-green-400 text-white rounded-lg w-full" onclick="checkPaymentGateWay()"/>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    `
}