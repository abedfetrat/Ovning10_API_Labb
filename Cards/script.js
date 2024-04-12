const drawBtn = document.getElementById("draw-btn");
drawBtn.addEventListener("click", drawCard);

async function drawCard() {
  const response = await fetch(
    "https://deckofcardsapi.com/api/deck/new/draw/?count=1"
  );
  const jsonResponse = await response.json();
  const card = jsonResponse.cards[0];
  displayCard(card);
}

function displayCard(card) {
  const oldImgElement = document.getElementById("card");
  if (oldImgElement) {
    oldImgElement.classList.add("card-out-anim");
    setTimeout(() => continueDisplayCard(card), 500);
  } else {
    continueDisplayCard(card);
  }
}

function continueDisplayCard(card) {
  const imgElement = document.createElement("img");
  imgElement.setAttribute("src", card.image);
  imgElement.id = "card";
  imgElement.onload = (ev) => {
    imgElement.classList.add("card-in-anim");
  };

  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = "";
  cardContainer.appendChild(imgElement);
}
