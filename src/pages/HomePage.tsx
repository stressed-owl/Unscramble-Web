import React, { useEffect, useState, useMemo } from "react";
import CustomButton from "../components/UI/buttons/CustomButton";
import CustomTextField from "../components/UI/textFields/CustomTextField";
import { shuffleWord } from "../logic";
import { useFetchWordsQuery } from "../services/unscramble";
import { Word } from "../interfaces";

const HomePage = () => {
  const { data, refetch } = useFetchWordsQuery("");

  const [userInput, setUserInput] = useState("");
  const [wordToGuess, setWordToGuess] = useState<Word>();

  const handleUserInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
  };

  const handleGuessClick = async () => {
    if (userInput === wordToGuess?.word) {
      await refetch();
      setUserInput("");
    } else {
      alert("Incorrect!");
      setUserInput('');
    }
  };

  useEffect(() => {
    if (data && data.length > 0) {
      const randomIndex = Math.floor(Math.random() * data.length);
      setWordToGuess(data[randomIndex]);
    }
  }, [data]);

  const shuffledWord = useMemo(() => {
    return wordToGuess ? shuffleWord(wordToGuess) : "";
  }, [wordToGuess]);

  return (
    <div className="grid h-screen w-full place-items-center">
      <div className="flex flex-col items-center justify-center gap-10">
        <p className="text-white text-[84px]">{shuffledWord}</p>
        <CustomTextField value={userInput} onChange={handleUserInput} />
        <CustomButton onClick={() => handleGuessClick()}>Guess</CustomButton>
      </div>
    </div>
  );
};

export default HomePage;
