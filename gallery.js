let container;

function openImg(obj) {
  let imageID = obj.id;
  container = document.getElementById("main_modal");
  let sourceImg = document.getElementById(imageID);
  let destinationImg = document.getElementById("img_holder");
  let captionText = document.getElementById("caption");

  container.style.display = "block";
  destinationImg.style.height = "70%";
  destinationImg.style.width = "auto";
  destinationImg.src = sourceImg.src;
  captionText.style.fontSize = "45px";
  captionText.style.fontFamily = "cursive";
  captionText.innerHTML = obj.alt;
}

let closeModal = document.getElementById("close");

closeModal.onclick = function () {
  container.style.display = "none";
};

function goToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
