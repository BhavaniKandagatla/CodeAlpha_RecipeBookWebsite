// Sample recipes data
let recipes = [
    { title: "Pasta", ingredients: ["Pasta", "Tomato Sauce", "Cheese"], instructions: "Boil pasta, add sauce, sprinkle cheese." },
    { title: "Salad", ingredients: ["Lettuce", "Tomato", "Cucumber", "Dressing"], instructions: "Chop veggies, mix with dressing." }
];

// Function to display recipes
function displayRecipes() {
    const recipesSection = document.getElementById('recipes');
    recipesSection.innerHTML = '';

    recipes.forEach((recipe, index) => {
        const recipeCard = document.createElement('div');
        recipeCard.classList.add('recipe-card');
        recipeCard.innerHTML = `
            <h2>${recipe.title}</h2>
            <h4>Ingredients:</h4>
            <ul>
                ${recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
            </ul>
            <p><strong>Instructions:</strong> ${recipe.instructions}</p>
            <button onclick="deleteRecipe(${index})">Delete</button>
        `;
        recipesSection.appendChild(recipeCard);
    });
}

// Function to add a recipe
function addRecipe() {
    // You'd get form data and add it to the recipes array
    // For simplicity, I'll add a hardcoded recipe
    recipes.push({ title: "New Recipe", ingredients: ["Ingredient 1", "Ingredient 2"], instructions: "Step by step instructions." });
    displayRecipes();
}

// Function to delete a recipe
function deleteRecipe(index) {
    recipes.splice(index, 1);
    displayRecipes();
}

// Initially display recipes when the page loads
window.onload = displayRecipes;
