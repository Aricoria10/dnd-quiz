let questionIndex = 0;

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
        q: ""
    }
]
// Current Question is
questions[questionIndex].q
// Current answers 
for (let index = 0; index < questions[questionIndex].a.length; index++) {
    // be each answer
    const element = questions[questionIndex].a[index];
    
}