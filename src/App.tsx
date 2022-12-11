import { useState } from "react"
import words from "./wordList.json";
import { HangmanDrawing } from "./HangmanDrawing";
import { HangmanWord } from "./HangmanWord";
import { Keyboard } from "./Keyboard";

function App() {
  //state for word that will be used in each game for guessing
  const [word2Guess,setWord2Guess] = useState(()=>{
    //gets random number between 0-1 then multiply by words.length and round it down
    return words[Math.floor(Math.random() * words.length)]
  //state for guessed letters 
  const [guessedLetters,setGuessedLetters] = useState<string[]>([])
})
console.log(word2Guess)
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
        Lose 
        Win
      </div>
      <HangmanDrawing/>
      <HangmanWord/>
      <Keyboard/>
     </div>
      
  )
}

export default App
