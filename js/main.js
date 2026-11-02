// Menu mobile et confirmation locale du formulaire (aucun envoi de données).
const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.main-nav');

if (menuButton && navigation) {
  menuButton.addEventListener('click', () => {
    const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!isOpen));
    navigation.classList.toggle('is-open', !isOpen);
    menuButton.setAttribute('aria-label', isOpen ? 'Ouvrir le menu' : 'Fermer le menu');
    menuButton.textContent = isOpen ? '☰' : '×';
  });
}

document.querySelectorAll('[data-year]').forEach((element) => {
  element.textContent = new Date().getFullYear();
});

const contactForm = document.querySelector('#contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = document.querySelector('#name').value.trim();
    const status = document.querySelector('#form-status');
    status.textContent = `Merci ${name} ! Votre message est prêt. Cette démonstration ne l’envoie pas réellement.`;
    status.classList.add('is-visible');
    contactForm.reset();
  });
}

// Avis de démonstration : affiche une confirmation sans enregistrer de données.
const reviewForm = document.querySelector('#review-form');
if (reviewForm) {
  const ratingInputs = [...reviewForm.querySelectorAll('input[name="rating"]')];
  const updateStars = () => {
    const selected = Number(reviewForm.querySelector('input[name="rating"]:checked')?.value || 0);
    ratingInputs.forEach((input) => {
      const label = reviewForm.querySelector(`label[for="${input.id}"]`);
      label.classList.toggle('is-selected', Number(input.value) <= selected);
    });
  };
  ratingInputs.forEach((input) => input.addEventListener('change', updateStars));
  reviewForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const rating = reviewForm.querySelector('input[name="rating"]:checked').value;
    const status = document.querySelector('#review-status');
    status.textContent = `Merci pour votre avis et votre note de ${rating} étoile${rating > 1 ? 's' : ''} ! Cette démonstration ne l’enregistre pas.`;
    status.classList.add('is-visible');
    reviewForm.reset();
    updateStars();
  });
}
