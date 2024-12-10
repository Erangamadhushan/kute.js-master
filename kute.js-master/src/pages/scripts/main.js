import {items, topItems} from './itemsDetails/allItems.js';

window.addEventListener("DOMContentLoaded", () => {
    renderNavBar();
    renderLandingSectionContent();
    loadTopSellingItemContent();
    loadSubDetails1Content();
    loadSubDetails2Content();
});



function renderLandingSectionContent(){
    let landSectionContainer = document.querySelector('.landingSection');
    landSectionContainer.innerHTML = " ";
    let landSectionContent = `
        <div class="grid items-start p-10 gap-4">
            <h1 class="text-6xl text-white"><span class="font-bold">Fresh and Healthy Veggies</span> Organic Market </h1>
            <p class="text-xl  text-white hidden md:block">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit saepe repudiandae totam molestiae est, praesentium eveniet sequi quasi esse eum repellendus nisi quis ipsam cupiditate neque consectetur beatae qui non perspiciatis eos, voluptates quibusdam voluptatibus. Veniam tenetur facilis quos nulla</p>
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
                    <button type="button" class=" mt-5 p-2 bg-transparent rounded-full border border-green-400 text-green-400 hover:bg-green-400 hover:text-white categoryBtn" >Purchase Item</button>
                </div>
            `;
        }
    })
    itemCategoryItemContainer.innerHTML = itemCategoryItemContent;
}

console.log(itemCategoryList[0]);
renderItemCategoryList(itemCategoryList[0]);

//load offers section
let offerContainer = document.querySelector('.offers');
function loadOffers() {
    offerContainer.innerHTML = " ";
    let offerContent = " ";
    offerContent += `
        <div class="w-[350px] h-[70vh] group border border-green-400 p-1 rounded-lg overflow-hidden relative">
            <img src="./images/pageImages/itemImg1.jpg" alt="" class="w-full h-full object-cover group-hover:opacity-10"/>
            <div class="hidden group-hover:block absolute top-0 left-0 w-full h-full flex justify-center items-center">
                <div class="w-full h-full flex justify-center items-center flex-col duration-1000">
                    <h1 class="text-green-400 text-center text-3xl">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h1>
                    <h1 class="text-green-400 text-center text-5xl">50%</h1>
                </div>
            </div>
        </div>
        <div class="w-[350px] h-[70vh] group border border-green-400 p-1 rounded-lg overflow-hidden relative">
            <img src="./images/pageImages/pageImg1.jpg" alt="" class="w-full h-full object-cover group-hover:opacity-10""/>
            <div class="hidden group-hover:block absolute top-0 left-0 w-full h-full flex justify-center items-center">
                <div class="w-full h-full flex justify-center items-center flex-col">
                    <h1 class="text-green-400 text-center text-3xl">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h1>
                    <h1 class="text-green-400 text-center text-5xl">25%</h1>
                </div>
            </div>
        </div>
        <div class="w-[350px] h-[70vh] group border border-green-400 p-1 rounded-lg overflow-hidden relative">
            <img src="./images/pageImages/itemImg3.jpg" alt="" class="w-full h-full object-cover group-hover:opacity-10""/>
            <div class="hidden group-hover:block absolute top-0 left-0 w-full h-full flex justify-center items-center">
                <div class="w-full h-full flex justify-center items-center flex-col">
                    <h1 class="text-green-400 text-center text-3xl">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h1>
                    <h1 class="text-green-400 text-center text-5xl">15%</h1>
                </div>
            </div>
        </div>
    `;


    offerContainer.innerHTML = offerContent;
}
loadOffers();


//load topsellingProducts
let topItemsContainer = document.querySelector('.topsaverProducts');
function loadTopSellingItemContent() {
    topItemsContainer.innerHTML = " ";
    let topItemsContent = " ";
    topItems.forEach((item) => {
        topItemsContent += `
            <div class="w-[350px] mx-auto p-4 border border-green-400 rounded-lg" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="200" data-aos-placement="bottom-center">
                <img src="${item.img}" class="w-full bg-cover"/>
                <h1 class="text-3xl font-bold text-center">${item.title}</h1>
                <h2 class="text-green-400">${item.category}</h2>
                <p>${item.subDesc}</p>
            </div>
        `
    });
    topItemsContainer.innerHTML = topItemsContent;
}

//load subDetails1Content
let subDetails1Container = document.querySelector('.subDetails1');
function loadSubDetails1Content() {
    subDetails1Container.innerHTML = " ";
    let subDetails1Content = `
        <div class="mx-auto">
            <img src="./images/pageImages/subImg1.jpg" alt="subContent 1 Image here"  class=""/>
        </div>
        <div class="p-5">
            <h1 class="text-3xl font-bold">A Shop for good people by good people</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis amet suscipit architecto cumque dignissimos. Quasi provident, officia aspernatur eaque eveniet a quaerat itaque illo odio, hic voluptatem earum saepe, est ipsa accusamus? Iste exercitationem animi aperiam assumenda nulla pariatur nam, expedita vel vero ex commodi dignissimos iure earum dolor. Aut reprehenderit soluta sequi illum aliquam fugiat voluptatum eveniet ipsam officia.</p>
            <button type="button" class="my-10 bg-green-400 rounded-full border text-white p-5 hover:outline-none hover:bg-transparent hover:text-green-400 hover:border-green-400">Explorer More..</button>
        </div>
    `;

    subDetails1Container.innerHTML = subDetails1Content;
}


//load subDetails2Content
let subDetails2Container = document.querySelector('.subDetails2');
function loadSubDetails2Content() {
    subDetails2Container.innerHTML = " ";
    let subDetails2Content = `
        <div class="p-5">
            <h1 class="text-3xl font-bold">A Shop for good people by good people</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis amet suscipit architecto cumque dignissimos. Quasi provident, officia aspernatur eaque eveniet a quaerat itaque illo odio, hic voluptatem earum saepe, est ipsa accusamus? Iste exercitationem animi aperiam assumenda nulla pariatur nam, expedita vel vero ex commodi dignissimos iure earum dolor. Aut reprehenderit soluta sequi illum aliquam fugiat voluptatum eveniet ipsam officia.</p>
            <button type="button" class="my-10 bg-green-400 rounded-full border text-white p-5 hover:outline-none hover:bg-transparent hover:text-green-400 hover:border-green-400">Explorer More..</button>
        </div>
        <div class="mx-auto">
            <img src="./images/pageImages/subImg2.jpg" alt="subContent 1 Image here"  class=""/>
        </div>
    `;

    subDetails2Container.innerHTML = subDetails2Content;
}

// load endContent
let endContentContainer = document.querySelector('.endContent');
function loadEndContent() {
    endContentContainer.innerHTML = " ";
    let endContent = `
        <div class="mx-auto">
            <img src="./images/pageImages/vegetables.jpg" alt="subContent 1 Image here"  class=""/>
        </div>
    `;
    endContent += `
        <div class="mx-auto px-10 ">
            <h1 class="text-6xl text-center mb-4 font-extrabold">Healthy life, Happy Perfect Life</h1>
            <p class="mt-10">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia autem quam fugiat dolorem ab dolor accusantium quibusdam incidunt, perspiciatis iure praesentium sequi omnis illo consectetur.</p>
            <button type="button" class="my-10 bg-green-400 rounded-full border text-white p-5 hover:outline-none hover:bg-transparent hover:text-green-400 hover:border-green-400 text-lg">Explorer More..</button>
        </div>
    `;

    endContentContainer.innerHTML = endContent;
}
loadEndContent();