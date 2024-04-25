let textPDiv = document.querySelectorAll(".text p"),
  titleDiv = document.querySelectorAll(".landing .text .title"),
  imageDiv = document.querySelectorAll(".landing .photo .pic"),
  nextButton = document.getElementById("next"),
  prevButton = document.getElementById("prev"),
  counter = 0,
  size = imageDiv.length;
textPDiv[counter + 1].remove();
titleDiv[counter + 1].remove();
imageDiv[counter + 1].remove();

nextButton.addEventListener("click", function goRight() {
  deleteTheOld();
  counter++;
  setTimeout(() => {
    putImage();
  }, 3000);
});
prevButton.addEventListener("click", function goLeft() {
  deleteTheOld();
  counter--;
  setTimeout(() => {
    putImage();
  }, 3000);
});

function deleteTheOld() {
  textPDiv[counter].style.transition = "3s";
  titleDiv[counter].style.transition = "3s";
  imageDiv[counter].style.transition = "3s";
  imageDiv[counter].style.opacity = "0";
  textPDiv[counter].style.opacity = "0";
  titleDiv[counter].style.opacity = "0";
  imageDiv[counter].style.transform =
    "translate(400px ,-400px) rotate(45deg) scale(0.5)";
  let countDelete = counter;
  setTimeout(function deleteImage() {
    imageDiv[countDelete].attributes.style.value = " ";
    textPDiv[countDelete].attributes.style.value = " ";
    titleDiv[countDelete].attributes.style.value = " ";

    imageDiv[countDelete].remove();
    textPDiv[countDelete].remove();
    titleDiv[countDelete].remove();
  }, 3000);
}

function putImage() {
  if (counter === size) {
    counter = 0;
  }
  if (counter < 0) {
    counter = size - 1;
  }
  let textDiv = document.querySelector(".landing .text"),
    photoPicDiv = document.querySelector(".landing .photo ");
  let countAdd = counter;
  textPDiv[countAdd].style.opacity = "0";
  titleDiv[countAdd].style.opacity = "0";
  imageDiv[countAdd].style.opacity = "0";
  imageDiv[countAdd].style.transform =
    "translate(400px ,-400px) rotate(45deg) scale(0.5)";

  setTimeout(() => {
    imageDiv[countAdd].style.transition = "3000ms";
    textPDiv[countAdd].style.transition = "3000ms";
    titleDiv[countAdd].style.transition = "3000ms";

    textPDiv[countAdd].style.opacity = "1";
    titleDiv[countAdd].style.opacity = "1";
    imageDiv[countAdd].style.opacity = "1";
    imageDiv[
      countAdd
    ].style.transform = `translate(${0}px ,-${0}px) rotate(${0}deg) scale(${1})`;
  }, 300);
  textDiv.append(textPDiv[countAdd]);
  textDiv.append(titleDiv[countAdd]);
  photoPicDiv.childNodes[1].after(imageDiv[countAdd]);
}
