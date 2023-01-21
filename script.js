class Player{
    _choose= -1;
    _isPlayer = false;
    
    constructor(isPlayer){
        this._isPlayer = isPlayer;
    }

    SetChoosePlayer(choosed){
        if(this._isPlayer){
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

let player = new Player(true);

let com = new Player(false);

function Choose(choosed){
    if(player.GetChoosed() === -1){
        player.SetChoosePlayer(choosed);
        com.SetChoosePlayer(choosed);

        switch(CheckWin()){
            case -1:
            break;
            case 0:
            break;
            case 1:
            break;
        }
    }
    return;
}

function CheckWin(){

}

function PlayGame(isPlay){
    document.getElementById("home").style.display = isPlay ? "none" : "block";
    document.getElementById("game").style.display = isPlay ? "block" : "none";
}