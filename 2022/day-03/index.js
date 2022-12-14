// Put favorite foods into faveFoods object
const faveFoods = {
    breakfast: 'eggs',
    lunch: 'salad',
    supper: 'chicken'
}

// Destructure the faveFoods object into three consts
const { breakfast, lunch, supper } = faveFoods;

// Fetch the meals <section> from the DOM
const meals = document.getElementById('meals');

// Set innerHTML to a paragraph
meals.innerHTML = `
<p>
    For breakfast, I only like ${breakfast} 🍳. For lunch, I love ${lunch} 🥗, and for supper I usually want ${supper} 🐓.
</p>
`;
