    function populate(){
        if(quiz.isEnded()){
        showScore();
        }else{
        //populate questions
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;
        }

        //show choices;
        var choices = quiz.getQuestionIndex().choices;
        for(var i =0 ; i < choices.length; i++){
        var element=document.getElementById("choices" + i);
        element.innerHTML = choices[i];
        guess("btn"+i,choices[i]);

        }
    }

    function guess(id, guess){

    var button = document.getElementById(id);
    button.onclick = function() {
    quiz.guess(guess);
    populate();
    }
showProgress();
    }

    function showScore(){
    //show header
        var header = "<h1>Result</h1>";
        header += "<h2 id ='scores'>your score is:" +quiz.score +"</h2>";
        var element = document.getElementById("quiz");
        element.innerHTML=header;
    }

function showProgress(){
    var currentQuestionNum = quiz.questionIndex+1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNum + " of " + quiz.questions.length;
}
    var questions = [
    new Question("what is not a color1?",["red","blue","green","banana"],"banana"),
    new Question("what is not a color2?",["red","blue","green","banana"],"banana"),
    new Question("what is not a color3?",["red","blue","green","banana"],"banana"),
    new Question("what is not a color4?",["red","blue","green","banana"],"banana")
    ];

    var quiz = new Quiz(questions);

    populate();