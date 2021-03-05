player_name_1 = localStorage.getItem("player_1_value")
player_name_2 = localStorage.getItem("player_2_value")

player_1_score = 0;
player_2_score = 0;


document.getElementById("player_1_name").innerHTML = player_name_1 + " : "
document.getElementById("player_2_name").innerHTML = player_name_2 + " : "


document.getElementById("player_1_score").innerHTML = 0;
document.getElementById("player_2_score").innerHTML = 0; 

document.getElementById("player_question").innerHTML = "Question turn -" + player_name_1;
document.getElementById("player_answer").innerHTML = "Answer turn -" + player_name_2;


function submit(){

    get_word = document.getElementById("Input_word").value
    word = get_word.toLowerCase()
    charAt1 = word.charAt(1)
    console.log(charAt1)

    length_divide_2 = Math.floor(word.length/2)
    charAt2 = word.charAt(length_divide_2)
    console.log(charAt2)

    length_minus_1 = word.length - 1;
    charAt3 = word.charAt(length_minus_1)
    console.log(charAt3)

    remove_charAt1 = word.replace(charAt1, "_")
    remove_charAt2 = remove_charAt1.replace(charAt2,"_")
    remove_charAt3 = remove_charAt2.replace(charAt3,"_")
    
    
    question_word = "<h4 id ='word_question '>Q."+remove_charAt3+" </h4>";
    input_box ="<br>Answer : <input type ='text' id ='input_check'> </br>"   
    check_button = "<br><button class = 'btn btn-primary' onclick ='check()'>Check</button>"
    row = question_word + input_box + check_button
    document.getElementById("output").innerHTML = row;
}
 var question_turn = "player_1"
var answer_turn = "player_2"

function check(){

    get_answer = document.getElementById("input_check").value;
    answer = get_answer.toLowerCase()
        console.log("answer in lower case -" + answer)
    
    if(answer_turn =='player_1'){

     player_1_score = player_1_score + 1
        document.getElementById("player_1_score").innerHTML = player_1_score;
    }
    else{

        player_2_score = player_2_score + 1;
        document.getElementById("player_2_score").innerHTML = player_2_score;
    }

    if(question_turn =='player_1'){

        question_turn = "player_2";
        document.getElementById("player_question").innerHTML = player_name_2;


    }
    else{

        question_turn = "player_1";
        document.getElementById("player_question").innerHTML = player_name_1;
    }
    if(answer_turn =='player_1'){

        answer_turn = "player_2"
        document.getElementById("player_answer").innerHTML = player_name_2;
    }
    else{

        answer_turn = "player_1"
        document.getElementById("player_answer").innerHTML = player_name_1
    }
}