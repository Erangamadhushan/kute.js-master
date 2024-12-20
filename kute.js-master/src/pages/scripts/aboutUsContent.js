let aboutUsContainer = document.querySelector('.AboutUsContent');
let aboutUsContent = `
    <div class=" text-center py-5 my-5 border border-green-400">
        <h1 class="text-3xl text-green-400 py-10">Welcome to Geocery.com</h1>
        <p>At Geocery.com, we're passionate about bringing the freshest food straight to your table. Founded in 2024, we've made it our mission to revolutionize the way you shop for groceries by combining the convenience of online shopping with the quality you'd expect from your local market.</p>
    </div>
    <div class=" text-center py-5 my-5 border border-green-400">
        <h1 class="text-3xl text-green-400 py-10">Our Story</h1>
        <p>What started as a simple idea to make grocery shopping more convenient has grown into a trusted online destination for thousands of food lovers. We understand that in today's fast-paced world, quality shouldn't be compromised for convenience. That's why we've built a platform that delivers both.</p>
    </div>
    
`;

aboutUsContainer.innerHTML = aboutUsContent;

let aboutUsSubContainer = document.querySelector('.AboutUsSubcontent');
aboutUsSubContainer.innerHTML = `
    <div class="W-[900PX] text-center p-10 my-5 grid grid-cols-1 gap-[30px]">
        <div class="border border-green-400 p-5">
            <h1 class="text-3xl text-green-400 py-10">Our Promise</h1>
            <p>We carefully select each product in our inventory, partnering with local farmers, artisanal producers, and trusted brands to ensure that only the finest ingredients make it to your kitchen. From farm-fresh produce to pantry staples, every item is chosen with your satisfaction in mind.</p>
        </div>
        <div class="border border-green-400 p-5">
            <h1 class="text-3xl text-green-400 py-10">Our Vision</h1>
            <p>We envision a world where everyone has access to quality food products without the hassle of traditional grocery shopping. Through technology and innovation, we're making this vision a reality, one delivery at a time.</p>
        </div>
        <div class="border border-green-400 p-5">
            <h1 class="text-3xl text-green-400 py-10">Join Our Food Journey</h1>
            <p>When you shop with Geocery.com, you're not just buying groceries – you're joining a community of food enthusiasts who value quality, convenience, and sustainability. We invite you to experience the future of grocery shopping with us.</p>
        </div>
    </div>
`