// Select all recipe cards
const recipeCards = document.querySelectorAll('.recipe-card');

recipeCards.forEach(card => {
  card.addEventListener('click', () => {
    // Toggle "active" class on the clicked card
    card.classList.toggle('active');

    // OPTIONAL: uncomment below if you want only one open at a time
    /*
    recipeCards.forEach(c => {
      if (c !== card) {
        c.classList.remove('active');
      }
    });
    */
  });
});
