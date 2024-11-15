function getLatinCharacterList(texte) {
  return texte.split("");
}

const mot = "hello,world";
const array = getLatinCharacterList(mot);
console.log(array);
