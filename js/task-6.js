function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  const boxesContainer = document.getElementById("boxes");
  const boxes = [];
  let size = 30;

  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.classList.add("box");
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxes.push(box);
    size += 10;
  }

  boxesContainer.append(...boxes);
}

function destroyBoxes() {
  const boxesContainer = document.getElementById("boxes");
  boxesContainer.innerHTML = "";
}

document.querySelector("[data-create]").addEventListener("click", () => {
  const input = document.querySelector("#controls input");
  const amount = Number(input.value);

  if (amount >= 1 && amount <= 100) {
    destroyBoxes();
    createBoxes(amount);
    input.value = "";
  } else {
    alert("Будь ласка, введіть число від 1 до 100.");
  }
});

document.querySelector("[data-destroy]").addEventListener("click", () => {
  destroyBoxes();
});

const createButton = document.querySelector("button[data-create]");
const destroyButton = document.querySelector("button[data-destroy]");

function styleButtonBackground(button, backgroundColor) {
  button.style.backgroundColor = backgroundColor;
}

styleButtonBackground(createButton, "#4E75FF");
styleButtonBackground(destroyButton, "#FF4E4E");

function styleButtonWidth(button, width) {
  button.style.width = width;
}

styleButtonWidth(createButton, "120px");
styleButtonWidth(destroyButton, "120px");
