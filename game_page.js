Player1_name= localStorage.getItem("player1_name");
Player2_name=localStorage.getItem("player2_name");
Player1_score=0;
Player2_score=0;

document.getElementById("player1_name").innerHTML=Player1_name+ ":";
document.getElementById("player2_name").innerHTML=Player2_name+ ":";

document.getElementById("player1_score").innerHTML=Player1_score;
document.getElementById("player2_score").innerHTML=Player2_score;

document.getElementById("player_question").innerHTML="question turn - " + Player1_name;
document.getElementById("player_answer").innerHTML="answer turn - " + Player2_name;

question_turn="player1";
answer_turn="player2";
