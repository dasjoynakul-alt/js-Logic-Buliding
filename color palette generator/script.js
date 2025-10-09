const generateBtn = document.getElementById("generate-btn");
const paletteContainer = document.querySelector(".palette-container");
<<<<<<< HEAD

=======
>>>>>>> 67a837933582a74f4c5cc0b9e30bb10d427bb2e8
const copyBtn = document.querySelector(".copy-btn");

generateBtn.addEventListener("click", generatePalette);

paletteContainer.addEventListener("click", function (e) {
  if (e.target.classList.contains("copy-btn")) {
    const hexValue = e.target.previousElementSibling.textContent;

    navigator.clipboard
      .writeText(hexValue)
      .then(() => showCopySuccess(e.target))
      .catch((err) => console.log(err));
  } else if (e.target.classList.contains("color")) {
    const hexValue =
      e.target.nextElementSibling.querySelector(".hex-value").textContent;
<<<<<<< HEAD

    navigator.clipboard
      .writeText(hexValue)
      .then(() =>
        showCopySuccess(e.target.nextElementSibling.querySelector(".copy-btn"))
      )
=======
    navigator.clipboard
      .writeText(hexValue)
      .then(() => showCopySuccess(e.target.nextElementSibling.querySelector(".copy-btn")))
>>>>>>> 67a837933582a74f4c5cc0b9e30bb10d427bb2e8
      .catch((err) => console.log(err));
  }
});

function showCopySuccess(element) {
  element.classList.remove("far", "fa-copy");
<<<<<<< HEAD
  element.classList.add("far", "fa-check-circle");

  element.style.color = "green";

  setTimeout(() => {
    element.classList.remove("fas", "fa-check-circle");
    element.classList.add("far", "fa-copy");

=======
  element.classList.add("fas", "fa-check");

  element.style.color = "#48bb78";

  setTimeout(() => {
    element.classList.remove("fas", "fa-check");
    element.classList.add("far", "fa-copy");
>>>>>>> 67a837933582a74f4c5cc0b9e30bb10d427bb2e8
    element.style.color = "";
  }, 1500);
}

function generatePalette() {
  const colors = [];

<<<<<<< HEAD
  for (let i = 0; i < 6; i++) {
    colors.push(generateRandomcolor());
  }
  updatePalateDisplay(colors);
}

function generateRandomcolor() {
  const latters = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += latters[Math.floor(Math.random() * 16)];
=======
  for (let i = 0; i < 16; i++) {
    colors.push(generateRandomColor());
  }
  updatePaletteDisplay(colors);
}

function generateRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
>>>>>>> 67a837933582a74f4c5cc0b9e30bb10d427bb2e8
  }
  return color;
}

<<<<<<< HEAD
function updatePalateDisplay(colors) {
=======
function updatePaletteDisplay(colors) {
>>>>>>> 67a837933582a74f4c5cc0b9e30bb10d427bb2e8
  const colorBoxes = document.querySelectorAll(".color-box");

  colorBoxes.forEach((box, index) => {
    const color = colors[index];
    const colorDiv = box.querySelector(".color");
    const hexValue = box.querySelector(".hex-value");

    colorDiv.style.backgroundColor = color;
    hexValue.textContent = color;
  });
}

generatePalette();
