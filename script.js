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
