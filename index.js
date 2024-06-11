const imageArray = [
    {
        url: "./images/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2020__10__Chicken-Pot-Pie-LEAD-1-f01cc53ba4dc4b50b91de3aa1e2ef62c 1.png",
        name: "Chicken Pot Pie"
    },
    {
        url: "./images/beef-enchiladas_4004 1.png",
        name: "Beef Enchiladas"
    },
    {
        url: "./images/delish-200305-grilled-green-beans-0204-landscape-pf-1584045271 1.png",
        name: "Grilled Green Beans"
    },
    {
        url: "./images/gyro-sandwich1-1650490757 1.png",
        name: "Gyro Sandwich"
    },
    {
        url: "./images/thai-tossed-green-salad-recipe-3217707-hero-01-8782b0ef1cbd404680af8a51769140ba 1.png",
        name: "Thai Tossed Green Salad"
    },
    {
        url: "./images/top-view-pepperoni-pizza-with-mushroom-sausages-bell-pepper-olive-corn-black-wooden_141793-2158 1.png",
         name: "Pepperoni Pizza"
    },
];

function handleShowMoreProject() {
    const projectContainer = document.getElementById("grid-contain");

    for (const item of imageArray) {
        // Check if the image already exists
        const existingImage = Array.from(projectContainer.getElementsByTagName('img')).find(img => img.src.includes(item.url.split('/').pop()));
        if (!existingImage) {
            const projectDivImage = document.createElement("div");
            projectDivImage.classList.add("grid-item");
            projectDivImage.innerHTML = `
                <div class="image-wrapper">
                    <img src="${item.url}" alt="">
                </div>
                <div class="details">
                    <div>
                        <h5>${item.name}</h5>
                        <button type="button" style="background-color: #F48E28; padding: 10px 20px; border: none; color: white; border-radius: 50px;">Add to Cart</button>
                    </div>
                    <div class="star">
                        <i class="fa-solid fa-star"></i> 4.5
                        <div class="price">$20.00</div>
                    </div>
                </div>
            `;
            projectContainer.appendChild(projectDivImage);
        }
    }

    console.log("click", projectContainer);
}






function handleContact(event){
    event.preventDefault();

    const emailInput = document.getElementById("emailInput");
    const email = emailInput.value;

    if (!email) {
        console.log("No email entered");
        return;
    }
    console.log(email);



    const successContainer = document.getElementById("success_container");
    console.log(successContainer);

   

    const emailParagraph = document.createElement("p");
    emailParagraph.innerText = "Your subscription is successful";
    emailParagraph.style.color = "green";

   
    console.log(emailParagraph);

    successContainer.appendChild(emailParagraph);

}