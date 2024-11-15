function getLatinCharacterList(texte) {
  return texte.split("");
}

const mot = "hello,world";
const array = getLatinCharacterList(mot);
console.log(array);

const latinToMorse = {
  A: ".-",
  B: "-...",
  C: "-.-.",
  D: "-..",
  E: ".",
  F: "..-.",
  G: "--.",
  H: "....",
  I: "..",
  J: ".---",
  K: "-.-",
  L: ".-..",
  M: "--",
  N: "-.",
  O: "---",
  P: ".--.",
  Q: "--.-",
  R: ".-.",
  S: "...",
  T: "-",
  U: "..-",
  V: "...-",
  W: ".--",
  X: "-..-",
  Y: "-.--",
  Z: "--..",
};

function translateLatinCharacter(character) {
  for (const [key, value] of Object.entries(latinToMorse)) {
    console.log(`${key}: ${value}`);
    if (character === key) {
      return value;
    }
  }
}
console.log(translateLatinCharacter("A"));

function encode(text) {
  /* le but de l'étape 3 sera de rentrer un mot qui se transformera en tableau avec chaque caractère en utilisant la fonction 1
  puis d'afficher son morse en utilisant la fonction 2, ne pas oublier de convertir le miniscule du texte en majuscule pour avoir accès au morse  */
}
