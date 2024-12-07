window.addEventListener("DOMContentLoaded", () => {
    renderNavBar();
    renderLandingSectionContent();
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
        <div class="flex flex-row space-x-3 justify-center items-center hidden custom:block">
            <a href="#" class="text-lg border-green-400 text-green-400 hover:border-b-4">Home</a>
            <a href="#" class="text-lg border-green-400 hover:text-green-400 hover:border-b-4">About Us</a>
            <a href="#" class="text-lg border-green-400 hover:text-green-400 hover:border-b-4">Services</a>
            <a href="#" class="text-lg border-green-400 hover:text-green-400 hover:border-b-4">Categories</a>
            <a href="#" class="text-lg border-green-400 hover:text-green-400 hover:border-b-4">Contact</a>
        </div>
    `;
    navBarContent += `
        <div class="flex flex-row space-x-5 px-5 ">
            <a href="#" class="hidden sm:block"><img src="./icons/navbar/add-to-cart.png" alt="add to card images"/></a>
            <button type="button" class="p-2 px-4 border rounded-full text-green-400 border-green-400 hover:bg-green-400 hover:text-white hidden sm:block">Sign In</button>
            <button type="button" class="p-2 px-4 border rounded-full text-green-400 border-green-400 hover:bg-green-400 hover:text-white block custom:hidden">&#9776;</button>
        </div>
    `;
    
    navBar.innerHTML = navBarContent;
}


function renderLandingSectionContent(){
    let landSectionContainer = document.querySelector('.landingSection');
    landSectionContainer.innerHTML = " ";
    let landSectionContent = `
        <div class="grid items-start p-10 gap-4">
            <h1 class="text-6xl text-white"><span class="font-bold">Fresh and Healthy Veggies</span> Organic Market </h1>
            <p class="text-xl text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit saepe repudiandae totam molestiae est, praesentium eveniet sequi quasi esse eum repellendus nisi quis ipsam cupiditate neque consectetur beatae qui non perspiciatis eos, voluptates quibusdam voluptatibus. Veniam tenetur facilis quos nulla</p>
            <button type="button" class="p-3 px-5 bg-transparent border w-[300px] border-white text-white rounded-full hover:bg-white hover:text-black transition-1000">Explorer More..</button>
        </div>
    `;
    

    
    landSectionContainer.innerHTML = landSectionContent;
}