const slideshowButton = document.querySelector('.slideshow-button')
const gameButton = document.querySelector('.game-button')

slideshowButton.addEventListener('click', () => {
  window.location.href = "slideshow.html";
});

gameButton.addEventListener('click', () => {
  window.location.href = "game.html";
});