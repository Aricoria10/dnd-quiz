var timetxt = document.querySelector("#timetxt");
var qtxt = document.querySelector("#qtxt");
var atxt = document.querySelector("#atxt");
var score = document.querySelector("#score");
let questionIndex = 0;
let highscore = 0;
let timeleft= 80;

const questions = [
    {
        q:"What is the most popular dice used in Dungeons and Dragons?",
        a:["d10","d100","d6", "d20"],
        c:"d20"
    },
    {
        q:"What is the name of the world for the Forgotten Realms?",
        a:["Toril", "Oerth", "Fentir", "Gallaron"],
        c:"Toril"
    },
    {
        q:"Which of the options below is not a class offered in the fifth edition Player's Handbook?",
        a:["Warlock", "Barbarian", "Warrior", "Monk"],
        c:"Warrior"
    },
    {
        q:"Which of these is not one of the elven subrace?",
        a:["Ar-Tel-Quessir", "Ur-Tel-Quessir", "Teu-Tel-Quessir", "Ssri-Tel-Quessir"],
        c:"Ur-Tel-Quessir"
    },
    {
        q:"Which of these is not a method that has been used to determine if a character hits or misses with an attack?",
        a:["Accuracy Rating", "THAC0", "Base attack Bonus", "Proficiency Bonus"],
        c:"Accuracy Rating"
    },
    {
        q:"How many schools of Magic are there?",
        a:["4", "6", "8", "10"],
        c:"8"
    },
    {
        q:"During the times of trouble, which god was not exiled to the material plane?",
        a:["Tyr", "Bane", "Helm", "Lathandar"],
        c:"Helm"   
    },
    {
        q:"The Mulhorandi are a group of humans that were taken from earth. What culture of the ancienty world were they taken from?",
        a:["Ancient Romans", "Ancient Chinese", "Ancient Persians", "Ancient Egyptians"],
        c:"Ancient Egyptians"
    }
];    

function timer() {
    var timerInterval = setInterval(function() {
        timeleft--;
        timetxt.textContent = timeleft;

        if (timeleft <= 0) {
            clearInterval(timerInterval);
            window.location.href = "../html/scoreboard.html"; 
        }
    }, 1000)

}

function disquestion() {
    var qout = questions[Math.floor(Math.random()*questions.length)];
    qtxt.textContent = qout.q;
    for (var i = 0; i < qout.a.length; i++) {
        var poss = document.createElement('button');
        poss.innerText = qout.a[i];
        atxt.appendChild(poss);
            if (qout.a[i] == qout.c) {
                poss.addEventListener("click", pass)
            } else {
                poss.addEventListener("click", fail)
            }         
    }
}

function pass() {
    highscore = highscore + 2;
    score.textContent = highscore;
    newques();
    }
function fail() {
    timeleft = timeleft - 10
    newques();
}

function initfunction() {
    timer();
    disquestion();
}

function newques() {
    while (atxt.firstChild) {
        atxt.removeChild(atxt.firstChild)   
    }
    disquestion (); 
}
//    // Current Question is
// questions[questionIndex].q
// Current answers 

// const element = questions[questionIndex].q[index];  


// Current Question is
questions[questionIndex].q
// Current answers 
for (let index = 0; index < questions[questionIndex].a.length; index++) {
    // be each answer
    const element = questions[questionIndex].a[index];
    
}

window.onload = initfunction;

