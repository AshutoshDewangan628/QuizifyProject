
let readlineSync=require("readline-sync");
let kuler=require("kuler");


let score=0;

let userName=readlineSync.question("What's you name?")
console.log(kuler(`Hello ${userName} welcome to Quizify`,"#f59e0b"));


/**creating data set */
const database={
  data:[
    {
      question:`let a={}, b={} console.log(a==b) console.log(a===b)`,
      options:{
        a:"fales false",
        b:"true false",
        c:"false true",
        d:"true true"
      },
      correctAnswer:"a"
    },
    {
      question:`Object.assign(target,source) creates    which type of copy?`,
      options: {
      a:"deep copy",
      b:"shallow copy",
      c:"nested copy",
      d:"creates a new reference"
    },
    correctAnswer:"b"
    },
    {
      question:`Is method chaining possible with forEach?`,
      options:{
        a:"yes",
        b:"no"
      },
      correctAnswer:"b"
    }
  ]
}

/**creating leader Board */
const leaderBoard={
  data:[
  {
    name:"Ashish",
    score:3
  },
  {
    name:"Rahul",
    score:2
  },  
    {
      name:"riya",
      score:3
    }
]
  
}

/**Main logic */
function playGame(userAnswer,correctAnswer){
   if(userAnswer===correctAnswer){
     console.log(kuler("Correct Answer","#3f6212"));
     score++;
   }
  else{
    console.log(kuler("Incorrect Answer","#dc2626"));
    console.log(kuler(`Correct Answer is ${correctAnswer}`,"#0ea5e9"));
  }
}

/** */
function showQuestionAndOptions(){
  for(let i=0;i<database.data.length;i++){
    console.log(`\nQ${i+1}-${database.data[i].question}\n`);
    for(let key in database.data[i].options){
  console.log(`${key}-${database.data[i].options[key]}\n`)
    }
    let userAnswer=readlineSync.question("Enter your answer(a/b/c/d)-").toLowerCase();
  
  playGame(userAnswer,database.data[i].correctAnswer)
  }
}

function highScore(leaderBoard){
  leaderBoard.data.push({name:userName,score:score})
  let sortedScoreList=leaderBoard.data.sort((a,b)=>b.score-a.score);
  console.log("\nCheck your Position on leader board");
  for(let leader of sortedScoreList){
    console.log(`${leader.name}-Score-${leader.score}`)
  }
  
}

showQuestionAndOptions();
console.log(`your score is ${score}`)
highScore(leaderBoard);