import { useCallback, useEffect, useState } from "react"
import words from "./wordList.json";
import { HangmanDrawing } from "./HangmanDrawing";
import { HangmanWord } from "./HangmanWord";
import { Keyboard } from "./Keyboard";

function getWord() {
   //gets random number between 0-1 then multiply by words.length and round it down
  return words[Math.floor(Math.random() * words.length)]
}

function App() {
  //state for word that will be used in each game for guessing
  const [wordToGuess,setWordToGuess] = useState(getWord)
  //state for guessed letters 
  const [guessedLetters,setGuessedLetters] = useState<string[]>([]);
  //all incorrect letters are ones not in word being guessed 
  const incorrectLetters = guessedLetters.filter(letter => !wordToGuess.includes(letter) )

  const isLoser= incorrectLetters.length >=6
  //every works if every iteration returns true every returns true
  const isWinner = wordToGuess
  .split("")
  .every(letter => guessedLetters.includes(letter))

    const addGuessedLetter = useCallback(
      (letter:string)=>{
      //if already gueesed the letter return
      if(guessedLetters.includes(letter)|| isLoser||isWinner) return

      setGuessedLetters(currentLetters=>[...currentLetters,letter])
    },
    [guessedLetters,isLoser,isWinner ])

  //checks for keys between a-z being pressed and if so adds key to guessed letters
  useEffect(()=>{
    //eventlistener
    const handler = (e: KeyboardEvent)=>{
      const key = e.key
      //if key is not a-z return 
      if(!key.match(/^[a-z]$/)) return
      e.preventDefault()
      setGuessedLetters([])
      addGuessedLetter(key)
    }
    //hooking up event listener 
    document.addEventListener("keypress",handler)

    //ensuring this removed appropriately 
    return ()=>{
      document.removeEventListener("keypress",handler)
    }
  },[guessedLetters])

  //checks if enter was pressed and if so refreshs game
  useEffect(()=>{
    //eventlistener
    const handler = (e: KeyboardEvent)=>{
      const key = e.key
      //if key is not enter return 
      if(key !=="Enter") return
      e.preventDefault()
      setGuessedLetters([])
      setWordToGuess(getWord())
    }
    //hooking up event listener 
    document.addEventListener("keypress",handler)

    //ensuring this removed appropriately 
    return ()=>{
      document.removeEventListener("keypress",handler)
    }
  },[])

  return (
     <div style={{
      maxWidth: '800px',
      display: "flex",
      //so everything stacks one on top of another using column 
      flexDirection: "column",
      gap: "2rem",
      margin: "0 auto",
      alignItems: "center",
    }}>
      <div style={{
      fontSize: "2rem",
      textAlign: "center",
    }} >
        {isWinner && "You Win press enter to Try again"}
        {isLoser && "Good Effort Refresh to Try again"}
      </div>
      {/*only thing to pass down is number of guesses to tell drawing what to show */}
      <HangmanDrawing numberOfGuesses={incorrectLetters.length} />
      <HangmanWord 
      reveal={isLoser} 
      guessedLetters={guessedLetters} 
      wordToGuess={wordToGuess}/>
      <div style ={{alignSelf:"stretch"}}>
      <Keyboard
      //disable keyboard if win or lost
      disabled={isLoser||isWinner}
      activeLetters = {guessedLetters.filter(letter=>wordToGuess.includes(letter))}
      inactiveLetters={incorrectLetters}
      addGuessedLetter ={addGuessedLetter}
      />
      </div>
     </div>
      
  )
}

export default App
