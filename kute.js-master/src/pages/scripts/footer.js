let footerContainer = document.querySelector('.footerContainer');
function loadFooterContent() {
    footerContainer.innerHTML = " ";
    let footerContent = `
        <div>
            <form class="flex flex-col gap-3 justify-start items-center">
                <div>
                    <label for="newsLater" class="text-2xl text-green-900 text-center pb-10 ">News Later</label><br/>
                    <input type="text" class="p-2 border border-gray-900 w-[300px] focus:outline-none focus:border-green-400 rounded-xl" name="newslater" id="newslater"/>
                </div>
                <div>
                    <input type="submit" value="Subscribe New Later " class=" border border-green-400 text-green-400 p-2 rounded-full cursor-pointer hover:bg-green-400 hover:text-white transition-1000"/>
                </div>
            </form>
        </div>
        <div class="flex flex-col justify-center">
            <h2 class="font-bold text-xl">Grocery.com Fresh and Healthy Veggies Organic Market</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat architecto asperiores, ducimus voluptas nostrum nam debitis quaerat obcaecati ex est non eum, reiciendis natus molestias.</p>
        </div>
        <div> 
            <div class="flex flex-col justify-center">
                <div class="flex justify-center">
                    <h2 class="font-bold text-xl">Contact Us</h2>
                </div>
                <div class="flex justify-center">
                    <a href="#" ><img src="./icons/social media/facebook.png" alt="facebook page link"/></a>
                    <a href="#" ><img src="./icons/social media/youtube.png" alt="facebook page link"/></a>
                    <a href="#" ><img src="./icons/social media/instagram.png" alt="facebook page link"/></a>
                    <a href="#" ><img src="./icons/social media/discord.png" alt="facebook page link"/></a>
                </div>
            </div>
        </div>
    `;

    footerContainer.innerHTML = footerContent;
}

loadFooterContent();