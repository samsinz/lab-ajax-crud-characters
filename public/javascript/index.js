const charactersAPI = new APIHandler("http://localhost:8000");

window.addEventListener("load", () => {
  document.getElementById("fetch-all").addEventListener("click", async function (event) {
    const characters = await charactersAPI.getFullList();
    const characterContainer = document.querySelector(".characters-container");

    if (characters.length != 0) {
      characterContainer.textContent = "";
    }

    for (let i = 0; i < characters.length; i++) {
      const charBlock = document.createElement("div");
      charBlock.className = "character-info";
      const charId = document.createElement("div");
      charId.className = "id";
      charId.textContent = characters[i].id;
      charBlock.appendChild(charId);
      const charName = document.createElement("div");
      charName.className = "name";
      charName.textContent = characters[i].name;
      charBlock.appendChild(charName);
      const charOcc = document.createElement("div");
      charOcc.className = "occupation";
      charOcc.textContent = characters[i].occupation;
      charBlock.appendChild(charOcc);
      const charCart = document.createElement("div");
      charCart.className = "cartoon";
      charCart.textContent = `Cartoon: ${characters[i].cartoon}`;
      charBlock.appendChild(charCart);
      const charWeapon = document.createElement("div");
      charWeapon.className = "weapon";
      charWeapon.textContent = characters[i].weapon;
      charBlock.appendChild(charWeapon);
      characterContainer.appendChild(charBlock);
    }

    console.log(characters);
  });

  document.getElementById("fetch-one").addEventListener("click", function (event) {});

  document.getElementById("delete-one").addEventListener("click", function (event) {});

  document.getElementById("edit-character-form").addEventListener("submit", function (event) {});

  document.getElementById("new-character-form").addEventListener("submit", function (event) {});
});
