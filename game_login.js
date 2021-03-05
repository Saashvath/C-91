function login(){

    var  Player_1 = document.getElementById("Player_1").value;
    var Player_2 = document.getElementById("Player_2").value;
    localStorage.setItem("player_1_value",Player_1);
    localStorage.setItem("player_2_value", Player_2);
    window.location = "game_page.html" 

}