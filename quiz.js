var quizQuestions = ["How old is Luka Doncic?",
"What game series came out in 1985?",
"Who sings the song, Blinding Lights?"];

var quizAnswers = ["22",
"Mario",
"The Weeknd"];

function quiz()
{
    var points = 0;
    //var finalScore = 0;
    var answerAttempts = 0;

        while(answerAttempts < 3)
        {
            for(quizIndex = 0; quizIndex <= 2; quizIndex++)
            {
            userAnswer = prompt(quizQuestions[quizIndex]);
                if(userAnswer == quizAnswers[quizIndex])
                {
                    alert('You got the answer correct!');
                    answerAttempts++;
                    points++;
                    console.log(points);
                }
                else
                {
                    alert('Incorrect!');
                    answerAttempts = answerAttempts--;
                }
        }
        return points;
    }
}
quiz();
//document.write(points);
