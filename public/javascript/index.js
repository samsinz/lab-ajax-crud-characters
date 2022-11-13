const charactersAPI = new APIHandler("http://localhost:8000");

window.addEventListener("load", () => {
  document.getElementById("fetch-all").addEventListener("click", async function fetchAll(event) {
    const characters = await charactersAPI.getFullList();
    console.log(characters);
    const characterContainer = document.querySelector(".characters-container");

    if (characters.length != 0) {
      characterContainer.textContent = "";
    } else {
      return;
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

  document.getElementById("fetch-one").addEventListener("click", async function (event) {
    try {
      const singleCharacter = await charactersAPI.getOneRegister(document.querySelector('input[name="character-id"]').value);
      const characterContainer = document.querySelector(".characters-container");

      console.log(singleCharacter);
      console.log(singleCharacter.length);

      if (singleCharacter && singleCharacter.length === undefined) {
        characterContainer.textContent = "";
      } else {
        return;
      }

      const charBlock = document.createElement("div");
      charBlock.className = "character-info";
      const charId = document.createElement("div");
      charId.className = "id";
      charId.textContent = singleCharacter.id;
      charBlock.appendChild(charId);
      const charName = document.createElement("div");
      charName.className = "name";
      charName.textContent = singleCharacter.name;
      charBlock.appendChild(charName);
      const charOcc = document.createElement("div");
      charOcc.className = "occupation";
      charOcc.textContent = singleCharacter.occupation;
      charBlock.appendChild(charOcc);
      const charCart = document.createElement("div");
      charCart.className = "cartoon";
      charCart.textContent = `Cartoon: ${singleCharacter.cartoon}`;
      charBlock.appendChild(charCart);
      const charWeapon = document.createElement("div");
      charWeapon.className = "weapon";
      charWeapon.textContent = singleCharacter.weapon;
      charBlock.appendChild(charWeapon);
      characterContainer.appendChild(charBlock);
    } catch (error) {
      console.log(error);
    }
  });

  document.getElementById("delete-one").addEventListener("click", function (event) {
    charactersAPI.deleteOneRegister(document.querySelector('input[name="character-id-delete"]').value);
    // fetchAll(); // wanted to rerun Fetch All function so I gave it a name but i guess it doesn't work that way?
    // also it feels like this reloads the page anyway ?
  });

  document.getElementById("edit-character-form").addEventListener("submit", function (event) {
    const id = document.querySelector('#edit-character-form input[name="chr-id"]').value;
    const name = document.querySelector('#edit-character-form input[name="name"]').value;
    const occupation = document.querySelector('#edit-character-form input[name="occupation"]').value;
    const weapon = document.querySelector('#edit-character-form input[name="weapon"]').value;
    const cartoon = document.querySelector('#edit-character-form input[name="cartoon"]').checked;
    charactersAPI.updateOneRegister({ name, occupation, weapon, cartoon }, id);
    event.preventDefault();
  });

  document.getElementById("new-character-form").addEventListener("submit", function (event) {
    const name = document.querySelector('#new-character-form input[name="name"]').value;
    const occupation = document.querySelector('#new-character-form input[name="occupation"]').value;
    const weapon = document.querySelector('#new-character-form input[name="weapon"]').value;
    const cartoon = document.querySelector('#new-character-form input[name="cartoon"]').checked;
    charactersAPI.createOneRegister({ name, occupation, weapon, cartoon });
    event.preventDefault();
  });
});
