/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
console.log("hi");

// global constants
const clueHoldTime = 1000; //how long to hold each clue's light/sound
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence

//Global Variables
var pattern = [1, 2, 4, 3, 2, 2, 1, 4];
var progress = 0; 
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5;  //must be between 0.0 and 1.0
var guessCounter = 0;
var numStrikes = 0;



/// GAME FUNCTIONS

function startGame(){
    //initialize game variables
    progress = 0;
    gamePlaying = true;
  // swap the Start and Stop buttons
document.getElementById("startBtn").classList.add("hidden");
document.getElementById("stopBtn").classList.remove("hidden");
playClueSequence();
}


//stopGame
function stopGame(){
    //initialize game variables
    gamePlaying = false;
  // swap the Start and Stop buttons
document.getElementById("startBtn").classList.remove("hidden");
document.getElementById("stopBtn").classList.add("hidden");
}


//lose game
function loseGame(){
  if(numStrikes == 3){
  stopGame();
  }
  alert("Game Over. You lost.");
}

//win game
function winGame(){
    stopGame();
  alert("Game Over, You Won!!!");
}


////light button
function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit")
}

//clear button
function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit")
}

//single cue
function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}

//playClue
function playClueSequence(){
  guessCounter = 0;
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime 
    delay += cluePauseTime;
  }
}

//guess function
function guess(btn){
  console.log("user guessed: " + btn);
  if(!gamePlaying){
    return;
  }
  
  if(pattern[guessCounter] == btn){
    //Guess correct
    if(guessCounter == progress){
      if(progress == pattern.length - 1){
        //WIN
        winGame();
      }else{
        //Pattern correct. Add next segment
        progress++;
        playClueSequence();
      }
    }else{
      //so far so good... check the next guess
      guessCounter++;
    }
  }else{
    //Guess was incorrect
    numStrikes ++;
    if(numStrikes == 3)
      {
        loseGame();
      }
    alert("incorrect guess");
  }
}



// Sound Synthesis Functions
const freqMap = {
  
  
  //int sound = Math.floor( (Math.random() * 10 ) * 100), //random pitch from 10 - 1000
  1: Math.floor( (Math.random() * 10 ) * 100),
  2: 329.6,
  3: 392,
  4: 466.2
}

// tones
function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}

//start tone
function startTone(btn){
  if(!tonePlaying){
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    tonePlaying = true
  }
}


//stop tone
function stopTone(){
    g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
    tonePlaying = false
}




//Page Initialization
// Init Sound Synthesizer
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)
