$(document).ready(function() {
    //quiz question array
    var questions = [{
        question: "How many presidents have there been?",
        choices: ["44", "40", "41", "43"],
        qNum : 0,
        correct : 3,
        fact: "43. Barack Obama is the 44th president, but Cleveland served two nonconsecutive terms."
        },
        {
        question: "Which president was the shortest?",
        choices: ["Abraham Lincoln", "James Madison", "George W. Bush", "Howard Taft"],
        qNum : 1,
        correct : 1,
        fact: "James Madison, who was a little over 5 feet"
        },
        {
        question: "Which of these presidents was not assassinated?",
        choices: ["Lincoln", "Reagan", "Garfield", "Kennedy"],
        qNum : 2,
        correct : 1,
        fact: "Reagan, who was shot but not killed."
        },
        {
        question: "Which president was never elected?",
        choices: ["Ford", "McKinley", "T. Roosevelt", "Grant"],
        qNum : 3,
        correct : 0,
        fact: "Ford, who was appointed as Nixon's VP before Nixon resigned, making him president."
        },
        {
        question: "Which president did not die on the 4th of July?",
        choices: ["J. Adams", "Jefferson", "Monroe", "Washington"],
        qNum : 4,
        correct : 3,
        fact: "Washington. All the others died that day."
    }]
    
    
    var numberCorrect = 0;
    var currentQuestion = 0;
    
    $(".question_wrapper").on("click", ".submit", function () {
        updateScore();
        currentQuestion++;
        nextQuestion();
    });
    
    $(".question_wrapper").on("click", ".retry_button", function () {
        numberCorrect = 0;
        currentQuestion = 0;
        $(".score").css("display", "none");
        $(".score").css("display", "inline");
        var newQuestion = '<span class="question">'+questions[currentQuestion].question+'</span><br><div class="answer_holder"><input type="radio" name="option" class="option" value="0"><span class="answer">'+questions[currentQuestion].choices[0]+'</span><br><input type="radio" name="option" class="option" value="1"><span class="answer">'+questions[currentQuestion].choices[1]+'</span><br><input type="radio" name="option" class="option" value="2"><span class="answer">'+questions[currentQuestion].choices[2]+'</span><br><input type="radio" name="option" class="option" value="3"><span class="answer">'+questions[currentQuestion].choices[3]+'</span><br></div><div class="button_holder"><input type="button" class="submit" value="Submit Answer"><span class="hint"></span><input type="button" class="retry_button" value="Try Again!"></div>';
        $(".question_wrapper").html(newQuestion);
        $(".last_question_fact").html("");
    });

    function updateScore() {
        var answer = $("input[type='radio']:checked").val();
        if (answer == questions[currentQuestion].correct) {
            numberCorrect++;    
        }
        if (numberCorrect == 1) {
            $(".score").css("display", "none")
            $(".score").fadeIn();
        }
        else if (numberCorrect == 2) {
            $(".score").css("display", "none")
            $(".score").fadeIn();
        }
        else if (numberCorrect == 3) {
            $(".score").css("display", "none")
            $(".score").fadeIn();
        }
        else if (numberCorrect == 4) {
            $(".score").css("display", "none")
            $(".score").fadeIn();
        }
        else if (numberCorrect == 5) {
            $(".score").css("display", "none")
            $(".score").fadeIn();
        }
    }


    function nextQuestion() {
        if (currentQuestion < 5) {
            $(".question").remove();
            $(".answer_holder input").remove();
            $(".answer_holder span").remove();
			$(".last_question_fact").hide();
            var newQuestion = '<span class="question">'+questions[currentQuestion].question+'</span><br><div class="answer_holder"><input type="radio" name="option" class="option" value="0"><span class="answer">'+questions[currentQuestion].choices[0]+'</span><br><input type="radio" name="option" class="option" value="1"><span class="answer">'+questions[currentQuestion].choices[1]+'</span><br><input type="radio" name="option" class="option" value="2"><span class="answer">'+questions[currentQuestion].choices[2]+'</span><br><input type="radio" name="option" class="option" value="3"><span class="answer">'+questions[currentQuestion].choices[3]+'</span><br></div><div class="button_holder"><input type="button" class="submit" value="Submit Answer"><span class="hint"></span><input type="button" class="retry_button" value="Try Again!"></div>';
            $(".question_wrapper").html(newQuestion);
            var lastFact= questions[currentQuestion-1].fact;
            $(".last_question_fact").html(lastFact).fadeIn();
        }
        else {
            $(".question").remove();
            $(".answer_holder input").remove();
            $(".answer_holder span").remove();
			$(".last_question_fact").fadeOut();
            $(".submit").css("display", "none");
            $(".retry_button").css("display", "inline");
            var lastFact= questions[currentQuestion-1].fact;
            $(".last_question_fact").html(lastFact);
            if (numberCorrect == 1) {
                var finalScore = '<span class="final">Congratulations on finishing the quiz!  You correctly answered '+numberCorrect+' question.'
                $(".answer_holder").html(finalScore);
            }
            else {
                var finalScore = '<span class="final">Congratulations on finishing the quiz!  You correctly answered '+numberCorrect+' questions.'
                $(".answer_holder").html(finalScore);
            }
        }
    }
});
