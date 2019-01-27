var trivia = [{
    triviaQuestion: "What is the Capital of Iceland?",
    correctAnswer: "Reykjavik",
    options: ["Ottawa", "Tokyo", "Reykjavik", "Oslo"]
},
{
    triviaQuestion: "In what continent is Mali located?",
    correctAnswer: "Africa",
    options: ["South America", "Africa", "Asia", "Europe"]
},
{
    triviaQuestion: "What is the name of the longest river in Asia?",
    correctAnswer: "Blue River",
    options: ["Rine", "Nile", "Blue River", "Euphrates"]
},
{
    triviaQuestion: "What is the name of the smallest country in the World",
    correctAnswer: "Vatican City",
    options: ["Liechteinstein", "Vatican City", "Marshall Islands", "Monaco"]
}
];

var results = {}
var correct = 0;
var incorrect = 0;
var timer = 30;
var timeInterval;

$("#submit").on("click", function () {
    for (var i = 0; i < trivia.length; i++) {
        if (results[i] == trivia[i].correctAnswer) {
            correct++
        } else {
            incorrect++
        }
    }
    $("#questionsDisplay").css({
        "visibility": "hidden"
    });
    clearInterval(timeInterval);
    displayResults();
});

$("#startBtn").on("click", function () {
    displayQuestions();
    startGame();
});

function displayQuestions() {
    for (var i = 0; i < trivia.length; i++) {
        var currentQuestion = trivia[i];
        $("#questionsDisplay").append(`<div>${currentQuestion.triviaQuestion}</div>`);
        for (var j = 0; j < currentQuestion.options.length; j++) {
            var currentOption = trivia[i].options[j];
            //$("#questionsDisplay").append(`<input question-number="${i}" name="triviaOption" type="radio" data-value="${currentOption}" class="option">${currentOption}<br>`);
            $("#questionsDisplay").append(`<input question-number="${i}" type="radio" data-value="${currentOption}" class="option">${currentOption}<br>`);
        }
        // $(this.currentOption).each(function checkRadio() {
        //     var radioOption = document.getElementsByName("triviaOpition");
        //     for (var i=0; i < radioOption.length; i++) {
        //         if (radioOption[i].checked) {
        //             break;
        //         }
        //     }
        //     checkRadio();
        //     alert("This function works!");
        // });
        
    }
    
    $("#submit").css({
        "visibility": "visible"
    });

    $(".option").on("click", function () {
        var value = $(this).attr("data-value");
        var number = $(this).attr("question-number");
        results[number] = value;    
    });

    
}

function displayResults() {
    $("#results").append(`<p id="correctAns">The number of correct answers is ${correct}</p>`);
    $("#results").append(`<p id="incorrectAns">The number of incorrect answers is ${incorrect}</p>`);
    $("#resetBtn").css({
        "visibility": "visible"
    });
    resetGame();
}

function startGame() {
    timeInterval = setInterval(function () {
        if (timer > 0) {
            timer--
            $("#timer").html(`<div>Time left: ${timer} seconds</div>`);
            if (timer === 1) {
                $("#timer").html(`<div>Time left: ${timer} second</div>`); 
            }
        } else {
            clearInterval(timeInterval)
            $("#timer").html("<div>Time is up!</div>");
            $("#submit").css({
                "visibility": "hidden"
            });
            $("#questionsDisplay").css({
                "visibility": "hidden"
            });
            $("#resetBtn").css({
                "visibility": "visible"
            });

            resetGame();
        }
    }, 1000);
}

function resetGame() {
    $("#resetBtn").on("click", function(){
        window.location.reload();
    });    
}


