const sequence = [
  {
    name: "cb-decimal",
    aniType: "animation-one",
    sectionChange: 0
  },
  {
    name: "cb-hexadecimal",
    aniType: "animation-three",
    sectionChange: 0
  },
  {
    name: "cb-binary",
    aniType: "animation-two",
    sectionChange: 0
  },
  {
    name: "binary-header",
    aniType: "animation-three",
    sectionChange: 640
  },
  {
    name: "binary",
    aniType: "animation-three",
    sectionChange: 0
  },
  {
    name: "binary-2",
    aniType: "animation-three",
    sectionChange: 0
  },
  {
    name: "binary-3",
    aniType: "animation-one",
    sectionChange: 1400
  },
  {
    name: "bi3-1",
    aniType: "animation-one",
    sectionChange: 0
  },
  {
    name: "end",
    aniType: "animation-three",
    sectionChange: 0
  }
]

let currentAnimation = sequence[0];

window.addEventListener('keydown', (event) => {
  if (currentAnimation.name === "end" || event.key !== "ArrowRight" && event.key !== "e" && event.key !== "Enter") return;

  const elementToAnimate = document.querySelector(`.${currentAnimation.name}`);

  if (currentAnimation.sectionChange !== 0) {
    window.scrollTo({
      top: currentAnimation.sectionChange,
      behavior: 'smooth'
    });
  }

  elementToAnimate.classList.add(currentAnimation.aniType);
  currentAnimation = sequence[sequence.indexOf(currentAnimation) + 1]
});