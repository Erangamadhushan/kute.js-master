window.addEventListener("DOMContentLoaded", () => {
    renderNavBar();
})
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
        <div class="flex flex-row space-x-3 justify-center items-center hidden custom:block">
            <a href="./index.html" class="text-lg border-green-400 text-green-400 hover:border-b-4">Home</a>
            <a href="./aboutUs.html" class="text-lg border-green-400 hover:text-green-400 hover:border-b-4">About Us</a>
            <a href="./services.html" class="text-lg border-green-400 hover:text-green-400 hover:border-b-4">Services</a>
            <a href="./products.html" class="text-lg border-green-400 hover:text-green-400 hover:border-b-4">Categories</a>
            <a href="./contact.html" class="text-lg border-green-400 hover:text-green-400 hover:border-b-4">Contact</a>
        </div>
    `;
    navBarContent += `
        <div class="flex flex-row space-x-5 px-5">
            <a href="#" class="hidden sm:block"><img src="./icons/navbar/add-to-cart.png" alt="add to card images"/></a>
            <button type="button" onclick="signin()" class="p-2 px-4 border rounded-full text-green-400 border-green-400 hover:bg-green-400 hover:text-white hidden md:block">Sign In</button>
            <button type="button" class="p-2 px-4 border rounded-full text-green-400 border-green-400 hover:bg-green-400 hover:text-white block custom:hidden" id="navbar-icon">&#9776;</button>
        </div>
    `;
    
    navBar.innerHTML = navBarContent;
}

function signin() {
    window.location.replace("./signin.html");
}

// Load nav bar into the main html files

document.querySelector('#panel').innerHTML = `
    <nav class="justify-center items-center grid grid-cols-1 block  px-3 custom:hidden">
        <a href="./index.html" class="text-xl font-semibold hover:font-bold text-center py-3" >Home</a>
        <a href="./aboutUs.html" class="text-xl font-semibold hover:font-bold text-center py-3">About Us</a>
        <a href="./services.html" class="text-xl font-semibold hover:font-bold text-center py-3">Services</a>
        <a href="./products.html" class="text-xl font-semibold hover:font-bold text-center py-3">Products</a>
        <a href="./contact.html" class="text-xl font-semibold hover:font-bold text-center py-3">FAQ</a>
    </nav>
`;
