class Player{
    _choose= -1;
    _isPlayer = false;
    
    constructor(isPlayer){
        this._isPlayer = isPlayer;
    }

    SetChoosePlayer(choosed){
        if(!this._isPlayer){
            this._choose = Math.floor(Math.random() * 3);
        }else{
            this._choose = choosed;
        }
    }

    GetChoosed(){
        return this._choose;
    }

    GetIsPlayer(){
        return this._isPlayer;
    }
}

const classActive = "square-active";
const classInactive = "square";
const winner = "winner";

const winnerPoint = [1, 2, 0];

let player = new Player(true);
let com = new Player(false);

function Choose(element, choosed){
    if(player.GetChoosed() === -1){
        player.SetChoosePlayer(choosed);
        com.SetChoosePlayer(choosed);

        document.getElementById("com-"+com.GetChoosed()).className = element.className = classActive;
        document.getElementById(winner).style.display = "none";

        let win = document.getElementsByClassName(winner);

        switch(CheckWin()){
            case -1:
                win[0].style.display = "block";
            break;
            case 0:
                win[1].style.display = "block";
            break;
            case 1:
                win[2].style.display = "block";
            break;
        }

        CheckWin();
    }
    return;
}

function restart(){
    let els = document.getElementsByClassName(classActive);
    let win = document.getElementsByClassName(winner);

    Array.from(els).forEach((el) => {
        el.className = classInactive;
    });

    Array.from(win).forEach((el) => {
        el.style.display = "none";
    });
    document.getElementById(winner).style.display = "block";

    player.SetChoosePlayer(-1);
}

function CheckWin(){
    //seri
    if(player.GetChoosed() === com.GetChoosed()){
        return 0;
    }
    //menang
    else if(winnerPoint[player.GetChoosed()] === com.GetChoosed()){
        return 1;
    }
    //kalah
    else{
        return -1;
    }
}

function PlayGame(isPlay){
    document.getElementById("home").style.display = isPlay ? "none" : "block";
    document.getElementById("game").style.display = isPlay ? "block" : "none";
}