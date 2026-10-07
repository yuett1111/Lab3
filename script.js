let image1 = document.getElementById("image1");
let image2 = document.getElementById("image2");
let image3 = document.getElementById("image3");

let title = document.getElementById("title");
let text1 = document.getElementById("text1");
let text2 = document.getElementById("text2");
let text3 = document.getElementById("text3");

let bakingButton = document.getElementById("bakingButton");
let cleanupButton = document.getElementById("cleanupButton");

function showBakingStory() {
    image1.src = "images/ingredients.jpg";
    image2.src = "images/kitchen.jpg";
    image3.src = "images/cake.jpg";
    title.innerHTML = "Baking the Cake";
    text1.innerHTML = "You gather all the ingredients and get ready to bake your cake.";
    text2.innerHTML = "As you mix and bake, the kitchen starts to get a little messy.";
    text3.innerHTML = "After all your work, your cake is finally finished and ready to enjoy!";
}

function showCleanupStory() {
    image1.src = "images/cake.jpg";
    image2.src = "images/kitchen.jpg";
    image3.src = "images/ingredients.jpg";
    title.innerHTML = "Cleaning Up After Baking";
    text1.innerHTML = "Your cake is finished, but now you notice the mess left behind.";
    text2.innerHTML = "You start cleaning the kitchen and putting everything back in place.";
    text3.innerHTML = "Once everything is cleaned up, the ingredients are put away and the kitchen is tidy again.";
}

bakingButton.addEventListener("click", showBakingStory);
cleanupButton.addEventListener("click", showCleanupStory);