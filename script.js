function PlayGame(isPlay){
    document.getElementById("home").style.display = isPlay ? "none" : "block";
    document.getElementById("game").style.display = isPlay ? "block" : "none";
}