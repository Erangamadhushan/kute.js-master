import {items} from './itemsDetails/allItems.js';

window.addEventListener("DOMContentLoaded", () => {
    renderNavBar();
    renderLandingSectionContent();
    
});



function renderLandingSectionContent(){
    let landSectionContainer = document.querySelector('.landingSection');
    landSectionContainer.innerHTML = " ";
    let landSectionContent = `
        <div class="grid items-start p-10 gap-4">
            <h1 class="text-6xl text-white"><span class="font-bold">Fresh and Healthy Veggies</span> Organic Market </h1>
            <p class="text-xl text-white hidden md:block">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit saepe repudiandae totam molestiae est, praesentium eveniet sequi quasi esse eum repellendus nisi quis ipsam cupiditate neque consectetur beatae qui non perspiciatis eos, voluptates quibusdam voluptatibus. Veniam tenetur facilis quos nulla</p>
            <button type="button" class="p-3 px-5 bg-transparent border w-[300px] border-white text-white rounded-full hover:bg-white hover:text-black transition-1000">Explorer More..</button>
        </div>
    `;
    

    
    landSectionContainer.innerHTML = landSectionContent;
}


let itemCategoryList = [];
items.forEach((ele) => {
    if(!itemCategoryList.includes(ele.category)) {
        itemCategoryList.push(ele.category);
    }
})
let itemCategoryListContainer = document.querySelector('.itemCategoryList');
function loadItemCategory() {
    itemCategoryListContainer.innerHTML = " ";
    let itemCategoryListContent = " ";
    itemCategoryList.forEach((ele) => {
        itemCategoryListContent += `
            <button type="button" class="p-5 px-10 bg-transparent rounded-full border border-green-400 text-green-400 hover:bg-green-400 hover:text-white categoryBtn" data-type="${ele}">${ele}</button>
        `
    });
    itemCategoryListContainer.innerHTML = itemCategoryListContent;
}
loadItemCategory();

let categoryBtn = document.querySelectorAll('.categoryBtn')
categoryBtn.forEach(ele => {
    ele.addEventListener("click",() => {
        let data = ele.getAttribute("data-type");
        renderItemCategoryList(data);
    })
})
let itemCategoryItemContainer = document.querySelector('.itemCateProducts');
function renderItemCategoryList(data) {
    console.log(data);
    itemCategoryItemContainer.innerHTML = " ";
    let itemCategoryItemContent = " ";
    items.forEach((ele) => {
        if(ele.category == data) {
            itemCategoryItemContent += `
                <div class="w-[350px] mx-auto p-4 border border-green-400 rounded-lg" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="200" data-aos-placement="bottom-center">
                    <img src="${ele.img}" class="w-full bg-cover"/>
                    <h1 class="text-3xl font-bold text-center">${ele.title}</h1>
                    <h2>${ele.category}</h2>
                </div>
            `
        }
    })
    itemCategoryItemContainer.innerHTML = itemCategoryItemContent;
}

console.log(itemCategoryList[0]);
renderItemCategoryList(itemCategoryList[0]);
