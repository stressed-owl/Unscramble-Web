import React, { useEffect, useMemo, useState } from "react";
import CustomButton from "../components/UI/buttons/CustomButton";
import CustomTextField from "../components/UI/textFields/CustomTextField";
import { Word } from "../interfaces";
import { shuffleWord } from "../logic";
import { useFetchWordsQuery } from "../services/unscramble";

const POINTS_PER_WORD: number = 10;

const HomePage = () => {
  const { data } = useFetchWordsQuery("");
  const [userInput, setUserInput] = useState<string>("");
  const [wordToGuess, setWordToGuess] = useState<Word>();
  const [points, setPoints] = useState<number>(0);
  const [guesses, setGuesses] = useState<number>(0);
  const [usedWords, setUsedWords] = useState<Set<string>>(new Set());
  const [remainingWords, setRemainingWords] = useState<number>(0);
  const [isGameOver, setIsGameOver] = useState<boolean>(false);

  const handleUserInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
  };

  const handleGuessClick = () => {
    if (userInput === wordToGuess?.word) {
      setUserInput("");
      setPoints((prevPoints) => prevPoints + POINTS_PER_WORD);
      fetchNewWord();
      setGuesses(0);
    } else {
      alert("Incorrect!");
      setGuesses((prevGuesses) => prevGuesses + 1);
      setUserInput("");
    }
  };

  const fetchNewWord = () => {
    if (data && data.length > 0) {
      const unusedWords = data.filter((word) => !usedWords.has(word.word));
      if (unusedWords.length > 0) {
        const randomIndex = Math.floor(Math.random() * unusedWords.length);
        const randomWord = unusedWords[randomIndex];
        setWordToGuess(randomWord);
        setUsedWords(
          (prevUsedWords) => new Set(prevUsedWords.add(randomWord.word))
        );
        setRemainingWords(unusedWords.length - 1);
      } else {
        setIsGameOver(true);
      }
    }
  };

  const handleResetClick = () => {
    fetchNewWord();
    setUserInput("");
    setPoints(0);
    setUsedWords(new Set());
    setIsGameOver(false);
  };

  useEffect(() => {
    fetchNewWord();
  }, [data]);

  const shuffledWord = useMemo(() => {
    return wordToGuess ? shuffleWord(wordToGuess) : "";
  }, [wordToGuess]);

  return (
    <div className="grid h-screen w-full place-items-center">
      <div className="flex flex-col items-center justify-center gap-10 max-w-full w-full">
        <p className="text-white font-bold text-[36px]">Points: {points}</p>
        {!isGameOver ? (
          <div className="flex flex-col items-center justify-center gap-10">
            <p className="text-white text-[84px]">{shuffledWord}</p>
            {guesses >= 3 ? (
              <p className="text-white text-[16px] max-w-full">
                Hint: {wordToGuess?.definition}
              </p>
            ) : (
              ""
            )}
            <CustomTextField value={userInput} onChange={handleUserInput} />
          </div>
        ) : (
          <p className="text-[36px] text-white tracking-[2px]">GAME OVER!</p>
        )}
        <div className="flex gap-x-4 items-center justify-center max-w-full w-full">
          <CustomButton onClick={handleGuessClick}>Guess</CustomButton>
          <CustomButton onClick={handleResetClick}>Reset</CustomButton>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
