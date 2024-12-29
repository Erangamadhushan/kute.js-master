window.addEventListener("DOMContentLoaded", () => {
    renderSignUpForm();
});

function renderSignUpForm() {
    document.querySelector('.signinContainer').innerHTML = `
        <div>
            <h1 class="text-center text-green-400 text-4xl font-extrabold">Geocery.com</h1>
        </div>
        <div class="w-[700px] mx-auto mt-4 border border-[3px] rounded-xl border-green-400  grid justify-center items-center min-h-60 userSigninPage">
            <div>
                <h2 class="text-center text-green-400 text-3xl mt-4 font-bold">Sign In</h2>
            </div>
            <form action="" autocomplete="on" class="min-h-90">
                <div class="grid w-[390px] gap-5 my-10">
                    <input type="text" class="w-full p-3 rounded text-lg border border-lg border-gray-400 hover:outline-none focus:border-green-400" id="username" name="username" placeholder="User Name..." required/>
                </div>
                <div class="grid w-[390px] gap-5 my-10">
                    <input type="password" class="w-full rounded p-3 text-lg border border-lg border-gray-400 hover:outline-none focus:border-green-400" id="userpassword" name="userpassword" placeholder="Password.." required/>
                </div>
                <div class="grid w-[390px] my-10">
                    <input type="submit" value="Sign In" class="p-3 text-lg rounded-lg cursor-pointer text-white bg-green-400 hover:bg-green-500"/>
                </div>
                
            </form>
        </div>
    `;
};