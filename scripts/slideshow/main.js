const sequence = [
  {
    name: "cb-decimal",
    aniType: "animation-one"
  },
  {
    name: "cb-hexadecimal",
    aniType: "animation-three"
  },
  {
    name: "cb-binary",
    aniType: "animation-two"
  }
]

let currentAnimation = sequence[0];

window.addEventListener('keydown', (event) => {
  if (event.key !== "ArrowRight" && event.key !== "e" && event.key !== "Enter") return;

  const elementToAnimate = document.querySelector(`.${currentAnimation.name}`);

  console.log(`working, ${elementToAnimate.aniType}`)

  elementToAnimate.classList.add(currentAnimation.aniType);
  currentAnimation = sequence[sequence.indexOf(currentAnimation) + 1]
});