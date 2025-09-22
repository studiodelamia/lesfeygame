const characters = ["images/char1.png", "images/char2.png", "images/char3.png"];
let currentIndex = 0;

const mainChar = document.getElementById("main-char");
const leftChar = document.getElementById("left-char");
const rightChar = document.getElementById("right-char");

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
    const name = document.getElementById("char-name").value || "Player";
    alert(`You chose ${name}! Let's start the game! ✨`);
});
