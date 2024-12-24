window.addEventListener("DOMContentLoaded", () => {
    renderServiceContent();
});

let serviceContainer = document.querySelector('.serviceContainer');
function renderServiceContent() {
    serviceContainer.innerHTML = `
        <div class="grid grid-cols-1 xl:grid-cols-3 md:grid-cols-2 gap-4 px-5 mx-auto place-items-center">

            <div class="shadow-md p-10 my-5 rounded-md bg-white hover:bg-green-100">
                <h2 class="text-green-400 text-2xl py-3 font-semibold">Premium Vegetable Selection</h2>
                <p class="text-lg">-> Farm-fresh seasonal vegetables sourced directly from local growers</p>
                <p class="text-lg">-> Organic and conventional produce options available</p>
                <p class="text-lg">-> Daily quality inspections ensuring maximum freshness</p>
                <p class="text-lg">->Wide variety of exotic and specialty vegetables</p>
            </div>

            <div class="shadow-md p-10 my-5 rounded-md bg-white hover:bg-green-100">
                <h2 class="text-green-400 text-2xl py-3 font-semibold">Delivery Services</h2>
                <p class="text-lg">-> Same-day home delivery within 10-mile radius</p>
                <p class="text-lg">-> Weekly subscription boxes of seasonal vegetables</p>
                <p class="text-lg">-> Temperature-controlled vehicles for optimal freshness</p>
                <p class="text-lg">-> Real-time order tracking</p>
            </div>

            <div class="shadow-md p-10 my-5 rounded-md bg-white hover:bg-green-100" >
                <h2 class="text-green-400 text-2xl py-3 font-semibold">Business Services</h2>
                <p class="text-lg">-> Wholesale supply for restaurants and cafes</p>
                <p class="text-lg">-> Bulk ordering for events and institutions</p>
                <p class="text-lg">-> Customized packaging solutions</p>
                <p class="text-lg">-> Regular supply contracts with flexible terms</p>
            </div>

            <div class="shadow-md p-10 my-5 rounded-md bg-white hover:bg-green-100">
                <h2 class="text-green-400 text-2xl py-3 font-semibold">Customer Support</h2>
                <p class="text-lg">-> Expert advice on vegetable selection and storage</p>
                <p class="text-lg">-> Recipe recommendations and cooking tips</p>
                <p class="text-lg">-> Easy returns and quality guarantee</p>
                <p class="text-lg">-> Online ordering through website and mobile app</p>
            </div>

            <div class="shadow-md p-10 my-5 rounded-md bg-white hover:bg-green-100">
                <h2 class="text-green-400 text-2xl py-3 font-semibold">Additional Features</h2>
                <p class="text-lg">-> Loyalty program with exclusive discounts</p>
                <p class="text-lg">-> Educational workshops on sustainable farming</p>
                <p class="text-lg">-> Online produce freshness guide</p>
                <p class="text-lg">-> Custom gift baskets for special occasions</p>
            </div>

            
        </div>
        <div >
            <p class="text-green-400 text-lg text-center">Contact us at (555) 123-4567 or visit www.Grocery.com for more information.</p>
        </div>
    `
}