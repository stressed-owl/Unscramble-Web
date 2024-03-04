import { Word } from "../interfaces";

export const shuffleWord = (word?: Word): string | undefined => {
  if (!word || !word.word) {
    console.error('Invalid input: word is undefined or empty.');
    return undefined;
  }

  const originalWord = word.word;
  let shuffledWord = originalWord.split("").sort(() => Math.random() - 0.5).join("");

  // Check if the shuffled word is the same as the original word
  while (shuffledWord === originalWord) {
    shuffledWord = originalWord.split("").sort(() => Math.random() - 0.5).join("");
  }

  const shuffledWordWithSpaces = shuffledWord.split("").join(" ");
  
  return shuffledWordWithSpaces;
}
