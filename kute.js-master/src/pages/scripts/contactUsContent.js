// window.addEventListener('DOMContnentLoaded', () => {
//     alert('Contact Us Content');
//     contactUsContent();
// });

let contactUsContainer = document.querySelector('.contactUsContainer');
function contactUsContent() {
    contactUsContent = `
        <div class=" p-5 shadow-xl rounded-lg bg-white my-10">
            <h1 class="font-bold pb-10 text-3xl ">Contact Us</h1>
            <p class="text-md pb-10 font-normal">We're here to help! Have questions about our products, devivery service, or need assistance with your order? We'd love to hear from you!</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="shadow-xl rounded-lg bg-white p-5 py-10">
                <h2 class="font-bold text-2xl pb-5">Customer Service</h2>
                <p>Call us at 1-800-555-5555</p>
                <p>Email us at <a href="mailto:supportgeocery@gmail.com">support@geocery.com</a></p>
                <p>Monday - Friday 9am - 5px EST</p>
                <p>Available 24/7</p>
            </div>
            <div class="shadow-xl rounded-lg bg-white p-5 py-10">
                <h2 class="font-bold text-2xl pb-5">Business Inquiries</h2>
                <p>Call us at 1-800-554-5545</p>
                <p>Mon-Fri 9am - 10pm EST</p>
            </div>
        </div>
        <div>
        </div>
    `;

    console.log(contactUsContent);
    contactUsContainer.innerHTML = contactUsContent;
    console.log('Contact Us Content');
}


window.addEventListener('DOMContentLoaded', () => {
    contactUsContent();
})