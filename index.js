let selectedColor = "blue";

const painting = document.querySelector(".painting");
painting.addEventListener("click", function (e) {
  console.log(e.target);
  console.log(selectedColor);
  e.target.style.backgroundColor = selectedColor;
});

const colorChoice = document.querySelectorAll(".color-choice");
for (let i = 0; i < colorChoice.length; i++) {
  colorChoice[i].addEventListener("click", function () {
    selectedColor = colorChoice[i].id;
  });
}

const clearPixel = document.querySelector(".painting");
clearPixel.addEventListener("dblclick", function (e) {
  e.target.style.backgroundColor = "white";
});
