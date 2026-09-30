let image1 = document.getElementById("image1");
let image2 = document.getElementById("image2");
let image3 = document.getElementById("image3");

let storyTitle = document.getElementById("title");
let storyText = document.getElementById("text");

let bakingButton = document.getElementById("bakingButton");
let cleanupButton = document.getElementById("cleanupButton");

function showBakingStory() {
    image1.src = "images/ingredients.jpg";
    image2.src = "images/kitchen.jpg";
    image3.src = "images/cake.jpg";
    title.innerHTML = "Baking the Cake";
    text.innerHTML = "Ingredients become a messy kitchen, and finally a finished cake.";
}

function showCleanupStory() {
    image1.src = "images/cake.jpg";
    image2.src = "images/kitchen.jpg";
    image3.src = "images/ingredients.jpg";
    storyTitle.innerHTML = "Cleaning Up After Baking";
    storyText.innerHTML = "The cake is finished, the kitchen is messy, and the ingredients are put away.";
}

bakingButton.addEventListener("click", showBakingStory);
cleanupButton.addEventListener("click", showCleanupStory);