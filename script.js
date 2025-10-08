const characters = ["images/char1.png", "images/char2.png", "images/char3.png"];
const characterNames = ["Aria", "Miriam", "Zara"]; // Noms correspondants
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
    const selectedChar = characterNames[currentIndex];
    
    // Redirection selon le personnage sélectionné
    switch(selectedChar) {
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
