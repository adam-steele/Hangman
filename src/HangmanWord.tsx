export function HangmanWord() {
    const word = "test";
    const guessedLetters = ["t"]
    return(
    <div style = {{
        display:"flex", 
        /* gap scales off font size */
         gap:".25em", 
         fontSize:"6rem",
          fontWeight:"bold", 
          textTransform:"uppercase",
          fontFamily:"monospace"
           }}>
            {/* render each char indivdually */}
           {word.split("").map((letter,index)=>(
            <span style={{borderBottom: ".1em solid black"}} >
                <span style = {{
                    //if guessed letters array has the current letter in the map set letter to be visible otherwise hide it
                    visibility: guessedLetters.includes(letter) 
                    ? "visible"
                    : "hidden",
                }}
                >
                {letter}
                </span>
                
                
            
            </span>
           ))}
    </div>
    )
}