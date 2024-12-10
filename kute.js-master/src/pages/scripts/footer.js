let footerContainer = document.querySelector('.footerContainer');
function loadFooterContent() {
    footerContainer.innerHTML = " ";
    let footerContent = `
        <div>
            <form>
                <label for="newsLater" class="text-2xl text-green-400 text-center pb-10 ">News Later</label><br/>
                <input type="text" class="p-2 border border-gray-900 w-[300px] focus:outline-none focus:border-green-400 rounded-xl" name="newslater" id="newslater"/>
                <input type="submit" value="Subscribe New Later " class=" border border-green-400 text-green-400 p-2 rounded-full cursor-pointer hover:bg-green-400 hover:text-white transition-1000"/>
            </form>
        </div>
        <div >
            <h2 class="text-white font-bold text-2xl text-center">Connect with </h2><br/>
            <div class="flex justify-center">
                <a href="#" ><img src="./icons/social media/facebook.png" alt="facebook page link"/></a>
                <a href="#" ><img src="./icons/social media/youtube.png" alt="facebook page link"/></a>
                <a href="#" ><img src="./icons/social media/instagram.png" alt="facebook page link"/></a>
                <a href="#" ><img src="./icons/social media/discord.png" alt="facebook page link"/></a>
            </div>
        </div>
    `;

    footerContainer.innerHTML = footerContent;
}

loadFooterContent();