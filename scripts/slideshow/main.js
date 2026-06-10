const sequence = [
  {
    name: "cb-decimal",
    aniType: "animation-one",
    sectionChange: false
  },
  {
    name: "cb-hexadecimal",
    aniType: "animation-three",
    sectionChange: false
  },
  {
    name: "cb-binary",
    aniType: "animation-two",
    sectionChange: false
  },
  {
    name: "binary-header",
    aniType: "animation-three",
    sectionChange: true
  },
  {
    name: "binary",
    aniType: "animation-three",
    sectionChange: false
  },
  {
    name: "binary-2",
    aniType: "animation-three",
    sectionChange: true
  }
]

let currentAnimation = sequence[0];

window.addEventListener('keydown', (event) => {
  if (event.key !== "ArrowRight" && event.key !== "e" && event.key !== "Enter") return;

  const elementToAnimate = document.querySelector(`.${currentAnimation.name}`);

  if (currentAnimation.sectionChange === true) {
    window.scrollTo({
      top: 640,
      behavior: 'smooth'
    });
  }

  elementToAnimate.classList.add(currentAnimation.aniType);
  currentAnimation = sequence[sequence.indexOf(currentAnimation) + 1]
});