const characters = ["images/char1.png", "images/char2.png", "images/char3.png"];
const characterNames = ["Aria", "Miriam", "Zara"]; // Noms correspondants
let currentIndex = 0;

const mainChar = document.getElementById("main-char");
const leftChar = document.getElementById("left-char");
const rightChar = document.getElementById("right-char");

// OPTIONNEL: champ prénom si présent dans votre HTML d'accueil
// <input id="player-name" placeholder="Ton prénom..." />
const nameInput = document.getElementById("player-name");

// Récupère prénom s'il existe déjà
let currentUserName = localStorage.getItem("currentUserName") || "";
if (nameInput) {
  nameInput.value = currentUserName;
}

document.getElementById("next").addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % characters.length;
    updateCharacters();
});

document.getElementById("prev").addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + characters.length) % characters.length;
    updateCharacters();
});

function updateCharacters() {
    mainChar.src = characters[currentIndex];
    leftChar.src = characters[(currentIndex - 1 + characters.length) % characters.length];
    rightChar.src = characters[(currentIndex + 1) % characters.length];
}

document.getElementById("start").addEventListener("click", () => {
    // 1) Sauvegarde du prénom (si champ présent)
    let inputName = currentUserName;
    if (nameInput) {
      inputName = (nameInput.value || "").trim();
      if (!inputName) {
        alert("Entre ton prénom pour entrer dans le monde ✨");
        return;
      }
      localStorage.setItem("currentUserName", inputName);
      currentUserName = inputName;
    }

    // 2) Redirection selon le personnage sélectionné
    const selectedChar = characterNames[currentIndex];
    switch (selectedChar) {
        case 'Aria':
            window.location.href = 'aria-world.html';
            break;
        case 'Miriam':
            window.location.href = 'Miriam-world.html';
            break;
        case 'Zara':
            window.location.href = 'zara-world.html';
            break;
        default:
            alert(`You chose ${selectedChar}! Let's start the game! ✨`);
    }
});
