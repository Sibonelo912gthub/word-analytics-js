const textereaEl = document.querySelector(".text-area");
const characterEl = document.querySelector(".stat_number--characters");
const wordsEl = document.querySelector(".stat_number--words");
const twitterEl = document.querySelector(".stat_number--twitter");
const facebookEl = document.querySelector(".stat_number--facebook");

textereaEl.addEventListener("input", function () {
  let numberOfWords = textereaEl.value.split(" ").length;
  if (textereaEl.value.length == 0) {
    numberOfWords = 0;
  }

  const numberOfCharacters = textereaEl.value.length;
  const twitterCharactersLeft = 280 - numberOfCharacters;
  const facebookCharactersLeft = 2200 - numberOfCharacters;

  if (twitterCharactersLeft < 0) {
    twitterEl.classList.add("stat_number--limit");
  } else {
    twitterEl.classList.remove("stat_number--limit");
  }

  if (facebookCharactersLeft < 0) {
    facebookEl.classList.add("stat_number--limit");
  } else {
    facebookEl.classList.remove("stat_number--limit");
  }

  characterEl.textContent = numberOfCharacters;
  twitterEl.textContent = twitterCharactersLeft;
  facebookEl.textContent = facebookCharactersLeft;
  wordsEl.textContent = numberOfWords;
});
