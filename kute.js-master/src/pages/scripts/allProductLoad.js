import {items} from './itemsDetails/allItems.js';

window.addEventListener("DOMContentLoaded", () => {
    renderAllItems(items);
})

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
    itemCategoryListContent +=`<button type="button" class="p-5 px-10 bg-transparent rounded-full border border-green-400 text-green-400 hover:bg-green-400 hover:text-white categoryBtn" data-type="All">All</button>`;
    itemCategoryList.forEach((ele) => {
        itemCategoryListContent += `
            <button type="button" class="p-5 px-10 bg-transparent rounded-full border border-green-400 text-green-400 hover:bg-green-400 hover:text-white categoryBtn" data-type="${ele}">${ele}</button>
        `
    });
    itemCategoryListContainer.innerHTML = itemCategoryListContent;
}
loadItemCategory();

let allItemProductLoadContainer = document.querySelector('.itemCateProducts');
function renderAllItems(items) {
    allItemProductLoadContainer.innerHTML = " ";
    let allItemProductLoadContent = " ";
    items.forEach((ele) => {
        allItemProductLoadContent += `
            <div class="w-[350px] mx-auto p-4 border border-green-400 rounded-lg group overflow-hidden relative" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="200" data-aos-placement="bottom-center ">
                <div class="">
                    <img src="${ele.img}" class="w-full bg-cover "/>
                    <h1 class="text-3xl font-bold text-center">${ele.title}</h1>
                    <h2 class="my-5">${ele.category} <span class="ml-5 text-2xl font-bold">$${ele.price}</span></h2>
                    <button type="button" class=" mt-5 p-2 bg-transparent rounded-full border border-green-400 text-green-400 hover:bg-green-400 hover:text-white categoryBtn" onclick="purchaseItem('${ele.img}','${ele.title}','${ele.desc}','${ele.price}','${ele.discount}','${ele.subDesc}')">Purchase Item</button>
                    <button type="button" class= "mt-5 p-2 bg-transparent rounded-full border border-red-400 text-red-400 hover:bg-red-400 hover:text-white categoryBtn" onclick="addtoCart('${ele.img}','${ele.title}','${ele.desc}','${ele.price}','${ele.discount}','${ele.subDesc}')">Add to Cart</button>
                </div>
            </div>
        `;
    });
    allItemProductLoadContainer.innerHTML = allItemProductLoadContent;
}

let categoryBtn = document.querySelectorAll('.categoryBtn');
categoryBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
        let data = btn.getAttribute("data-type");
        renderitems(data);
    })
});

function renderitems(data) {
    if(data != "All") {
        allItemProductLoadContainer.innerHTML = " ";
        let allItemProductLoadContent = " ";
        items.forEach((ele) => {
            if(ele.category == data) {
                allItemProductLoadContent += `
                <div class="w-[350px] mx-auto p-4 border border-green-400 rounded-lg group overflow-hidden relative" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="200" data-aos-placement="bottom-center ">
                    <div class="">
                        <img src="${ele.img}" class="w-full bg-cover "/>
                        <h1 class="text-3xl font-bold text-center">${ele.title}</h1>
                        <h2 class="my-5">${ele.category} <span class="ml-5 text-2xl font-bold">$${ele.price}</span></h2>
                        <button type="button" class=" mt-5 p-2 bg-transparent rounded-full border border-green-400 text-green-400 hover:bg-green-400 hover:text-white categoryBtn" onclick="purchaseItem('${ele.img}','${ele.title}','${ele.desc}','${ele.price}','${ele.discount}','${ele.subDesc}')">Purchase Item</button>
                        <button type="button" class= "mt-5 p-2 bg-transparent rounded-full border border-red-400 text-red-400 hover:bg-red-400 hover:text-white categoryBtn" onclick="addtoCart('${ele.img}','${ele.title}','${ele.desc}','${ele.price}','${ele.discount}','${ele.subDesc}')">Add to Cart</button>
                    </div>
                </div>
            `;
            }
        });
        allItemProductLoadContainer.innerHTML = allItemProductLoadContent;
    }
    else {
        renderAllItems(items);
    }
}