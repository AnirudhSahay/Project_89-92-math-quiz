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

function send(){
number1=document.getElementById("number1").value;
console.log(number1);
number2=document.getElementById("number2").value;
console.log(number2);
actual_answer=parseInt(number1) * parseInt(number2)
console.log(actual_answer);

question_number = "<h4>" + number1 + " X " + number2 + "</h4>";
input_box= "<br> Answer: <input type='text' id='input-check-box'>";
check_buttton= "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
row= question_number + input_box + check_buttton;

document.getElementById("output").innerHTML=row;

document.getElementById("number1").value="";
document.getElementById("number2").value="";
}
