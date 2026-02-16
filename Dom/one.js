function createCard() {
  const captainName = document.getElementById("captain").value;
  const keeperName = document.getElementById("keeper").value;
  if (captainName === "" || keeperName === "") {
    alert("Please enter both names");
    return;
  }
  // create card
  const card = document.createElement("div");
  card.className = "player-card";
  // captain div
  const captainDiv = document.createElement("div");
  captainDiv.className = "captain";
  captainDiv.textContent = captainName;
  // keeper div
  const keeperDiv = document.createElement("div");
  keeperDiv.className = "keeper";
  keeperDiv.textContent = keeperName;
  // append to card
  card.appendChild(captainDiv);
  card.appendChild(keeperDiv);
  // append card to container
  document.getElementById("card-container").appendChild(card);
}








