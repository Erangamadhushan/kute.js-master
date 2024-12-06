window.addEventListener("DOMContentLoaded", () => {
    renderNavBar();
});

let navBar = document.querySelector('.pageNavBar');
function renderNavBar() {
    navBar.innerHTML = " ";
    let navBarContent = " ";
    navBarContent += `
        <div>
            <h3><span class="text-green-400 fond-bold text-2xl">Grocery</span>.com</h3>
        </div>
    `;
    navBarContent += `
        <div class="flex flex-row space-x-5 justify-center items-center hidden md:block">
            <a href="#" class="text-lg border-green-400 text-green-400 hover:border-b-4">Home</a>
            <a href="#" class="text-lg border-green-400 hover:text-green-400 hover:border-b-4">About Us</a>
            <a href="#" class="text-lg border-green-400 hover:text-green-400 hover:border-b-4">Services</a>
            <a href="#" class="text-lg border-green-400 hover:text-green-400 hover:border-b-4">Categories</a>
            <a href="#" class="text-lg border-green-400 hover:text-green-400 hover:border-b-4">Contact</a>
        </div>
    `;
    navBarContent += `
        <div class="grid grid-cols-2 space-x-5 justify-end px-5 hidden lg:block">
            <div>
                <a href="#"><img src="./icons/navbar/add-to-cart.png" alt="add to card images"/></a>
            </div>
            <div>
                <button type="button" class="p-2 px-4 border rounded-full text-green-400 border-green-400 hover:bg-green-400 hover:text-white">Sign In</button>
            </div>
        </div>
    `;
    navBarContent += `
        <div class="grid grid-cols-2 space-x-5 justify-end px-5 block md:hidden">
            <div>
                <button type="button" class="p-2 px-4 border rounded-full text-green-400 border-green-400 hover:bg-green-400 hover:text-white">&#9776;</button>
            </div>
        </div>
    `;


    navBar.innerHTML = navBarContent;
}