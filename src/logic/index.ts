import { Word } from "../interfaces";

export const shuffleWord = (word?: Word) => {
  const shuffledWord = word?.word
    .split("")
    .sort(() => Math.random() - 0.5)
    .join("");
  const wordWithSpaces = shuffledWord?.split("").join(" ");
  return wordWithSpaces;
};
