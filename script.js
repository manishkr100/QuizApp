const quizData = [{
    question: "Which of the following is the correct identifier?",
    a: "$var_name",
    b: "VAR_123",
    c: "varname@",
    d: "None of the above",
    correct: "b",
},
{
    question: "Which of the following is the address operator?",
    a: "@",
    b: "#",
    c: "&",
    d: "%",
    correct: "c",
},
{
    question: "The programming language that has the ability to create new data types is called___.",
    a: "Overloaded",
    b: "Encapsulated",
    c: "Reprehensible",
    d: "Extensible",
    correct: "d",
},
{
    question: "Which of the following is the original creator of the C++ language?",
    a: "Dennis Ritchie",
    b: "Ken Thompson",
    c: "Bjarne Stroustrup",
    d: "Brian Kernighan",
    correct: "c",
}
];
let index = 0;
let correct = 0,
incorrect = 0,
total = quizData.length;
let questionBox = document.getElementById("questionBox");
//containing the all inputs tag
let allInputs = document.querySelectorAll("input[type='radio']")
const loadQuestion = () => {
if (total === index) {
    return quizEnd()
}
reset()
const data = quizData[index]
questionBox.innerHTML = `${index + 1}) ${data.question}`
allInputs[0].nextElementSibling.innerText = data.a
allInputs[1].nextElementSibling.innerText = data.b
allInputs[2].nextElementSibling.innerText = data.c
allInputs[3].nextElementSibling.innerText = data.d
}

document.querySelector("#submit").addEventListener(
"click",
function() {
    const data = quizData[index]
    const ans = getAnswer()
    if (ans === data.correct) {
        correct++;
    } else {
        incorrect++;
    }
    index++;
    loadQuestion()
}
)

const getAnswer = () => {
let ans;
allInputs.forEach(
    (inputEl) => {
        if (inputEl.checked) {
            ans = inputEl.value;
        }
    }
)
return ans;
}

const reset = () => {
allInputs.forEach(
    (inputEl) => {
        inputEl.checked = false;
    }
)
}

const quizEnd = () => {
// console.log(document.getElementsByClassName("container"));
document.getElementsByClassName("container")[0].innerHTML = `
    <div class="col">
        <h3 class="w-100"> Hii, you've scored ${correct} / ${total} </h3>
    </div>
`
}
loadQuestion(index);