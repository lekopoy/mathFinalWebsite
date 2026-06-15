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
    sectionChange: false
  },
  {
    name: "binary-3",
    aniType: "animation-one",
    sectionChange: true
  },
  {
    name: "bi3-1",
    aniType: "animation-one",
    sectionChange: false
  },
  {
    name: "hexa-header",
    aniType: "animation-three",
    sectionChange: true
  },
  {
    name: "hexa",
    aniType: "animation-three",
    sectionChange: false
  },
  {
    name: "hexa-2",
    aniType: "animation-three",
    sectionChange: false
  },
  {
    name: "decimal-header",
    aniType: "animation-three",
    sectionChange: true
  },
  {
    name: "decimal",
    aniType: "animation-three",
    sectionChange: false
  },
  {
    name: "decimal-2",
    aniType: "animation-three",
    sectionChange: false
  },
  {
    name: "citation-header",
    aniType: "animation-three",
    sectionChange: true
  },
  {
    name: "citation",
    aniType: "animation-one",
    sectionChange: false
  },
  {
    name: "end",
    aniType: "animation-three",
    sectionChange: false
  }
]

function arrowR() {
  const elementToAnimate = document.querySelector(`.${currentAnimation.name}`);

  if (currentAnimation.sectionChange === true) {
    elementToAnimate.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }

  elementToAnimate.classList.add(currentAnimation.aniType);
  currentAnimation = sequence[sequence.indexOf(currentAnimation) + 1];
}

function arrowL(secondAnimation) {
  secondAnimation = sequence[sequence.indexOf(secondAnimation) - 1];
  const elementToAnimate = document.querySelector(`.${secondAnimation.name}`);

  elementToAnimate.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });

  return secondAnimation;
}

let currentAnimation = sequence[0];
let secondAnimation = sequence[0];

window.addEventListener('keydown', (event) => {
  if (currentAnimation.name === "end" || event.key !== "ArrowRight" && event.key !== "e" && event.key !== "Enter" && event.key !== "ArrowLeft") return;

  if (event.key === "ArrowRight" || event.key === "e" || event.key === "Enter") {
    currentAnimation, secondAnimation = arrowR();
  } else if (event.key === "ArrowLeft") {
    secondAnimation = arrowL(secondAnimation);
  };
});