//if current question index isnt at the top --- error 'cannot initialize before...'
let currentQuestionIndex =0;
const questions = [
    {
        title: "Which of the following is not a data type in JavaScript? ",
        answers: ["Boolean", "String", "Number", "Spongebob"],

        correctAnswer: "Spongebob",
    },
    {
        title: "What planet was Javascript invented on?",
        answers: ["Earth", "Venus", "Pluto", "Mars"],

        correctAnswer: "Earth",
    },
    {
        title: "Javascript can be used on which of the following ends?",
        answers: ["Front-End", "Back-End", "Database", "All"],

        correctAnswer: "All",
    }
]

var scoreBoard = document.getElementById('userScore');
var label = document.createElement("label");
var score = 0;
var q = 0;
let pEl = document.getElementById("question");
var quest = document.getElementById('question-holder');
// let thisBtn = document.getElementById("button-holder").innerHTML = "";

let questionBox = document.getElementById('questionsBox');
let ulQ = document.createElement("ul");


let displayTimer = document.getElementById('timer');
// let displayTimers = document.getElementById('timetime');
let timeGiven = 30;
let timer = 30;
let penaltyTime = 5;



let startBtn = document.getElementById('start');
startBtn.addEventListener('click', startQuiz);



//start timer function
//main function
//
function startTimer(duration, display) {
    timer  = duration;
    let remainingTime = duration;
    let seconds;
    // let seconds= parseInt(timer);

     // displayTime = displayTimer;
     let interval = setInterval(function () {
        seconds = parseInt(timer);
        seconds = seconds < 10 ? "0" + seconds : seconds;
    // displayTime.textContent= seconds;
        // window.onload = function() {
        //     //The countdown timer display
        //
        //     displayTimer.textContent="oks";
        // }




        if (timer > 0) {
            displayTimer.textContent = timer + " Seconds Remain";
            timer.innerHTML = timer;
        }
        if (timer < 0) {
            clearInterval(interval);
            displayTimer.textContent = "TIME UP!";
            displayScoringScreen();
        }
        remainingTime -= 1;
        // if (quest === ""){
        //     clearInterval(timer);
        //     document.getElementById("textandquestion").innerHTML = "";
        // }





    }, 1000);
}
//time penalty for the user selecting an incorrect answer
function timePenalty(){
    timer -= penaltyTime;
    if(timer<0){
        timer=0;
    }
}




// window.onload = function () {
//     startTimer(timeGiven, displayTimer)
// };


function startQuiz() {
    displayTimer.textContent = "Good Luck!";
    //document.getElementById('start-container').style.display = 'none'; // these 2 lines broke
    document.getElementById('question-holder').style.display = 'block';
    // document.getElementById("count").style = "color:green;";

    // displayTimer.style.innerHTML = "";

    displayQuestion();

    // newQuestion();
    // startTimer(timeGiven, displayTimer);
    //
    // timer = duration;
    // let seconds;
    // let seconds= parseInt(timer);

}
    // displayTime = displayTimer;
    let interval = setInterval(function () {
        displayTimer.textContent = "";
        // seconds = parseInt(timer);
        // seconds = seconds < 10 ? "0" + seconds : seconds;
        // displayTime.textContent= seconds;
        // window.onload = function() {
        //     //The countdown timer display
        //
        //     displayTimer.textContent="oks";
        // }
        timer--;
        // document.getElementById('timer').textContent = timer + ' seconds remaining';
        displayTimer.textContent = timer + ' seconds remaining';
        if (timer <= 0) {
            clearInterval(interval);
            // document.getElementById('timer').textContent = 'Time is up!';
            displayTimer.textContent = "TIME UP!";
            displayScoringScreen();


            // if (timer > 0) {
            //     displayTimer.textContent = timer + " Seconds Remain";     MAY NEED TO ADD THIS BACK
            //     timer.innerHTML = timer;
            // }
            // if (timer < 0) {
            //     clearInterval(interval);
            //     displayTimer.textContent = "TIME UP!";
            //     displayScoringScreen();
            // } else  timer--;


            // if (quest === ""){
            //     clearInterval(timer);
            //     document.getElementById("textandquestion").innerHTML = "";
            // }


        }
    }, 1000);


// let userQ=questions[currentQuestionIndex].title;
// let userC = questions[currentQuestionIndex].answers;
// let currentQ = 0;
function newQuestion(){

    // ulQ = document.getElementById()
    questionBox.innerHTML="";
    ulQ.innerHTML="";

    // let userQ=questions[currentQuestionIndex].title;
    // let userC = questions[currentQuestionIndex].answers;
    questionBox.textContent = userQ;
    // questionBox.classList.add("")

    userC.forEach(function (newItem, index) {
        let listItem = document.createElement("li");
        listItem.textContent = newItem;
        listItem.classList.add("choice", "btn", "btn-danger", "btn-group-vertical"); // class styling + bootstrap

        listItem.addEventListener("click", function (event) {// event listener for selection
            checkAnswer(event, index);
        });
        ulCreate.appendChild(listItem); // Append choice to list
    });

    questionBox.appendChild(ulCreate);

    if(currentQuestionIndex >= questions.length){
        console.log('You have finished the quiz!');
        return;
    }

    const question = questions[currentQuestionIndex];
    document.getElementById('question-title').textContent=question.title;

    const buttonsContainer = document.getElementById(answerbuttons);
    buttonsContainer.textContent="";

    questions.answers.forEach(answer => {
        const button = document.createElement('button');
        button.textContent=answer;
        button.classList.add('answer-button');
        button.addEventListener('click', checkAnswer);
        buttonsContainer.appendChild(button);
    })
}



function displayQuestion() {
    document.getElementById('question-text').innerText = questions[currentQuestionIndex].title
    document.getElementById('btn1').innerText = questions[currentQuestionIndex].answers[0]
    document.getElementById('btn2').innerText = questions[currentQuestionIndex].answers[1]
    document.getElementById('btn3').innerText = questions[currentQuestionIndex].answers[2]
    document.getElementById('btn4').innerText = questions[currentQuestionIndex].answers[3]
}

//submit name form
document.getElementById('submit').addEventListener('click', handleFormSubmit);

document.getElementById('btn1').addEventListener('click', checkAnswer)
document.getElementById('btn2').addEventListener('click', checkAnswer)
document.getElementById('btn3').addEventListener('click', checkAnswer)
document.getElementById('btn4').addEventListener('click', checkAnswer)


const question = questions[currentQuestionIndex];
function checkAnswer(event) {
    console.log(event);

    // const question = questions[currentQuestionIndex];
    // let answerIndicatorBox = document.getElementById(answerStatus);
    let selectedAnswer = event.target.innerText;
    let correctAnswer = question.correctAnswer;
    if (selectedAnswer !== correctAnswer) {
        // let answerIndicatorBox = document.getElementById(answerStatus);
        // answerIndicatorBox.textContent = "WRONG";
        //add score
        timePenalty();
        timer -= 5;
        if (currentQuestionIndex === questions.length-1 ) {
            clearInterval(timer);
            displayScoringScreen();
        }
        currentQuestionIndex++;
        displayQuestion();
        // answerIndicatorBox.textContent="WRONG";
        // timePenalty();
    }
}

    // currentQuestionIndex++;
    // displayQuestion();


let status = document.getElementById(answerStatus);
let answer = "";
function Score() {

    let scoreString = "Score: ";
    let score = 0;
    scoreBoard.textContent = scoreString + score;

    for (let i = 0; i < questions.length; i++) {
        if (answer == questions[i].correctAnswer) {
            score += 1;
        }
        if (answer != questions[i].correctAnswer) {
            timer
        }
        return score;
    }


    if (answer === questions.correctAnswer) {
        score += 1; // increases scoreCounter by
        scoreBoard.textContent = scoreString + score;


    }
    console.log('Increase Score');
}

function displayHighScoreScreen() {
    document.getElementById('scoring-screen').style.display = 'none';
    document.getElementById('highscore-screen').style.display = 'block';
    let scores = JSON.parse(localStorage.getItem('highscore'))||[]
    scores.forEach(score => {
        let li = document.createElement('li');
        li.textContent = score.initials + ' - ' + score.score;
        document.getElementById('highscore-list').appendChild(li);
    })
}
function saveScore() {
    let initials = document.getElementById('initials').value;
    let scoreObj = {
        initials: initials,
        score: timer
    }
    let scores = JSON.parse(localStorage.getItem('highscore'))||[]
    scores.push(scoreObj);
    localStorage.setItem('highscore', JSON.stringify(scores));
}
function handleFormSubmit(event) {
    event.preventDefault();
    saveScore();
    displayHighScoreScreen();
}

function displayScoringScreen() {
    // document.getElementById('question-text).style.display = 'none';
    document.getElementById('scoring-screen').style.display = 'block';
    document.getElementById('finalscore').textContent = "You Scored" + " " + timer + " " + "points!";
}



// event listener for submit button




function submitName() {

}

function createDiv() {
    let div = document.createElement("div");
    div.append(questions[0]);
    console.log(questions[0])
}
function nextQuestion() {



    pEl.textContent = question[q].title;

    for (let index = 0; index < question[q].answers.length; index++) {

        let button = document.createElement("button");
        // button.textContent = "";
        button.textContent = question[q].answers[index];
        // console.log(document.getElementById("btnhlder2"));
        document.getElementById("btnhlder2").appendChild(button);
        button.addEventListener('click', function () {
            if (button.innerText == question[q].correctAnswer) {
                console.log(score);
                document.getElementById('btnhlder2').innerHTML = "";
                score += 1;
                console.log(score);
                scoreBoard.innerHTML = score;
                q += 1;
                nextQuestion();
            }
            else {
                console.log('incorrectAnswer')
                document.getElementById("btnhlder2").innerHTML = "";
                scoreBoard.innerHTML = score;
                console.log(score);
                scoreBoard.innerHTML = score;
                q += 1;
                nextQuestion();
            }
            if (question[3]){
                console.log(quizover);
            }
        })}};