document.addEventListener('DOMContentLoaded', () => {
  // Hamburger menu 
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('show');
    });
  }

  // Recipe cards 
  const recipeCards = document.querySelectorAll('.recipe-card');
  recipeCards.forEach(card => {
    card.addEventListener('click', () => {
      if (card.classList.contains('active')) return;

      recipeCards.forEach(c => c.classList.remove('active'));
      card.classList.add('active');
    });
  });
});
