const Player = {
    strength: 6,
    cunning: 6,
    speed: 6,
    fatigue: 30,
    attackValue: 0,
    defendValue: 0,
    win: false,

    addStrength(num) {
        this.strength += num;
    },

    addCunning(num) {
        this.cunning += num
    },
    addSpeed(num) {
        this.speed += num
    },
    addFatigue(num) {
        this.fatigue += num
    },
    subtractStrength(num) {
        this.strength -= num;
    },
    subtractCunning(num) {
        this.cunning -= num;
    },
    subtractSpeed(num) {
        this.speed -= num;
    },
    subtractFatigue(num) {
        this.fatigue -= num;
    },
    getStrength() {
        return this.strength;
    },
    getCunning() {
        return this.cunning
    },
    getSpeed() {
        return this.speed
    },
    getFatigue() {
        return this.fatigue
    },
    changeWin() {
        this.win = true;
    },
    getWin() {
        return this.win;
    },
    setAttackValue(num) {
        this.attackValue = num;
    },
    setDefendValue(num) {
        this.defendValue = num;
    },
    getAttackValue() {
        return this.attackValue;
    },
    getDefendValue() {
        return this.defendValue
    }
};
const Player1 = Object.create(Player);
const computer = Object.create(Player);
var number = 0;
var selected = [];
playerEvents = document.getElementById("playerLog");
computerEvents = document.getElementById("computerLog");
function initialize() {
    ogPSpeed = document.getElementById("originalPlayerSpeed");
    ogPCunning = document.getElementById("originalPlayerCunning");
    ogPStrength = document.getElementById("originalPlayerStrength");
    ogPFatigue = document.getElementById("originalPlayerFatigue");
    ogCSpeed = document.getElementById("originalComputerSpeed");
    ogCCunning = document.getElementById("originalComputerCunning");
    ogCStrength = document.getElementById("originalComputerStrength");
    ogCFatigue = document.getElementById("originalComputerFatigue");
    currentPStrength = document.getElementById("currentPlayerStrength");
    currentPCunning = document.getElementById("currentPlayerCunning");
    currentPSpeed = document.getElementById("currentPlayerSpeed");
    currentPFatigue = document.getElementById("currentPlayerFatigue");
    currentCStrength = document.getElementById("currentComputerStrength");
    currentCCunning = document.getElementById("currentComputerCunning");
    currentCSpeed = document.getElementById("currentComputerSpeed");
    currentCFatigue = document.getElementById("currentComputerFatigue");
    round = document.getElementById("round#");
    document.getElementById("finishingMove").style.visibility = "hidden";
    const values = ["strength", "cunning", "speed", "fatigue"]
    var increase = [values.splice(parseInt(Math.random() * 4), 1), values.splice(parseInt(Math.random() * 3), 1)]
    var decrease = values;
    for (value of increase) {
        var playerRandom = parseInt(Math.random() * 2);
        var playerRandomFatigue = parseInt(Math.random() * 7);
        var computerRandom = parseInt(Math.random() * 2);
        var computerRandomFatigue = parseInt(Math.random() * 7);
        if (value.toString() === "strength") (Player1.addStrength(playerRandom), computer.addStrength(computerRandom));
        if (value.toString() === "cunning") (Player1.addCunning(playerRandom), computer.addCunning(computerRandom));
        if (value.toString() === "speed") (Player1.addSpeed(playerRandom), computer.addSpeed(computerRandom));
        if (value.toString() === "fatigue") (Player1.addFatigue(playerRandomFatigue), computer.addFatigue(computerRandomFatigue));
    }
    for (value of decrease) {
        var playerRandom = parseInt(Math.random() * 2);
        var playerRandomFatigue = parseInt(Math.random() * 7);
        var computerRandom = parseInt(Math.random() * 2);
        var computerRandomFatigue = parseInt(Math.random() * 7);
        if (value.toString() === "strength") (Player1.subtractStrength(playerRandom), computer.subtractStrength(computerRandom));
        if (value.toString() === "cunning") (Player1.subtractCunning(playerRandom), computer.subtractCunning(computerRandom));
        if (value.toString() === "speed") (Player1.subtractSpeed(playerRandom), computer.subtractSpeed(computerRandom));
        if (value.toString() === "fatigue") (Player1.subtractFatigue(playerRandomFatigue), computer.subtractFatigue(computerRandomFatigue));
    }
    ogPlayerFatigue = Player1.getFatigue();
    ogComputerFatigue = computer.getFatigue();
    ogPlayerStrength = Player1.getStrength();
    ogPlayerCunning = Player1.getCunning();
    ogPlayerSpeed = Player1.getSpeed();
    ogComputerStrength = computer.getStrength();
    ogComputerCunning = computer.getCunning();
    ogComputerSpeed = computer.getSpeed();
    display()
}
function attack(Player) {
    Player.setAttackValue(parseInt((Player.getStrength() + Player.getSpeed() + Player.getCunning()) / (parseInt(Math.random() * 3) + 1) * 100) / 100)
    Player.setDefendValue(Player.getSpeed() + (parseInt(Math.random() * 5) + 1))
    if (Player === Player1) {
        attackOrDefend = parseInt((Math.random() * 2))
        document.getElementById("finishingMove").style.visibility = "hidden";
        document.getElementById("attack").style.visibility = "hidden";
        document.getElementById("defend").style.visibility = "hidden";
        if (checkFinishingMove(computer)) {
            finishingMove
        }
        else if (attackOrDefend === 1) {
            attack(computer);
        }
        else {
            defend(computer)
        }
    }
    if (Player === Player1) {
        playerEvents.innerHTML += "<br />Your attack value is: " + Player.getAttackValue() + "<br />Your defend value is: " + Player.getDefendValue() + "<br />";
    }
    else {
        computerEvents.innerHTML += "<br />Your attack value is: " + Player.getAttackValue() + "<br />Your defend value is: " + Player.getDefendValue() + "<br />";
    }
    calculateResult();
    display();
}


function defend(Player) {
    Player.setDefendValue(Player.getCunning() + Player.getSpeed());
    Player.setAttackValue(0);
    if (Player === Player1) {
        attackOrDefend = parseInt((Math.random() * 2))
        document.getElementById("finishingMove").style.visibility = "hidden";
        document.getElementById("attack").style.visibility = "hidden";
        document.getElementById("defend").style.visibility = "hidden";
        console.log(checkFinishingMove(computer))
        if (checkFinishingMove(computer)) {
            finishingMove
        }
        else if (attackOrDefend === 1) {
            attack(computer);
        }
        else {
            defend(computer)
        }
    }
    if (Player === Player1) {
        playerEvents.innerHTML += "<br />Your attack value is: " + Player.getAttackValue() + "<br />Your defend value is: " + Player.getDefendValue() + "<br />";
    }
    else {
        computerEvents.innerHTML += "<br />Your attack value is: " + Player.getAttackValue() + "<br />Your defend value is: " + Player.getDefendValue() + "<br />";
    }
    calculateResult();
    display();
}

function finishingMove(Player) {
    if (Player === Player1) {
        opponent = computer;
    }
    else {
        opponent = Player1;
    }
    Player.setAttackValue(parseInt((Player.getStrength() + Player.getSpeed()) / (parseInt(Math.random() * 3) + 1) * 100) / 100)
    calculateResult();
    display()
    if (finishingMove > 1) {
        Player.changeWin();
    }
}
function calculateResult(Player) {
    number++;
    if (Player === Player1) {
        opponent = computer;
        playerFatigue = ogPlayerFatigue;
        opponentFatigue = ogComputerFatigue;
    }
    else {
        opponent = Player1;
        playerFatigue = ogComputerFatigue;
        opponentFatigue = ogPlayerFatigue;
    }
    if (Player.getAttackValue() > opponent.getDefendValue()) {
        opponent.subtractFatigue(Player.getAttackValue() - opponent.getDefendValue())
        if (Player === Player1) {
            playerEvents.innerHTML += "<br />You have successfully reduced your opponent's fatigue by " + (Player.getAttackValue() - opponent.getDefendValue()) + "<br />"
        }
        else {
            computerEvents.innerHTML += "<br />You have successfully reduced your opponent's fatigue by " + (Player.getAttackValue() - opponent.getDefendValue()) + "<br />"
        }
    }
    else if (opponent.getAttackValue() > Player.getDefendValue()) {
        Player.subtractFatigue(opponent.getAttackValue() - Player.getDefendValue())
        if (opponent === Player1) {
            playerEvents.innerHTML += "<br />You have successfully reduced your opponent's fatigue by " + (opponent.getAttackValue() - Player.getDefendValue()) + "<br />"
        }
        else {
            computerEvents.innerHTML += "<br />You have successfully reduced your opponent's fatigue by " + (opponent.getAttackValue() - Player.getDefendValue()) + "<br />"
        }
    }
    else if (Player.getDefendValue() > opponent.getAttackValue()) {
        random = parseInt(Math.random() * 5) + 1
        if (Player.getFatigue() + 6 >= playerFatigue) {
            random = parseInt(Math.random() * (playerFatigue - Player.getFatigue() + 1))
            Player.addFatigue(random)
        }
        else {
            Player.addFatigue(random)
        }
        if (Player === Player1) {
            playerEvents.innerHTML += "<br />You have successfully blocked an attack and " + random + " fatigue is added<br />"
            computerEvents.innerHTML += "<br /Your attacked was blocked by your opponent><br />"
        }
        else {
            computerEvents.innerHTML += "<br />You have successfully blocked an attack and " + random + " fatigue is added<br />"
            playerEvents.innerHTML += "<br /Your attacked was blocked by your opponent><br />"
        }
    }
    else if (opponent.getDefendValue() > Player.getAttackValue()) {
        random = parseInt(Math.random() * 5) + 1
        if (opponent.getFatigue() + 6 >= playerFatigue) {
            random = parseInt(Math.random() * (playerFatigue - Player.getFatigue() + 1))
            opponent.addFatigue(random)
        }
        else {
            opponent.addFatigue(random)
        }
        if (opponent === Player1) {
            playerEvents.innerHTML += "<br />You have successfully blocked an attack and " + random + " fatigue is added<br />"
            computerEvents.innerHTML += "<br /Your attacked was blocked by your opponent><br />"
        }
        else {
            computerEvents.innerHTML += "<br />You have successfully blocked an attack and " + random + " fatigue is added<br />"
            playerEvents.innerHTML += "<br /Your attacked was blocked by your opponent><br />"
        }
    }
    document.getElementById("finishingMove").style.visibility = "visible";
    document.getElementById("attack").style.visibility = "visible";
    document.getElementById("defend").style.visibility = "visible";
    checkFinishingMove(Player);
}
function display() {
    ogPStrength.innerHTML = ogPlayerStrength
    ogPCunning.innerHTML = ogPlayerCunning
    ogPSpeed.innerHTML = ogPlayerSpeed
    ogPFatigue.innerHTML = ogPlayerFatigue
    ogCStrength.innerHTML = ogComputerStrength
    ogCCunning.innerHTML = ogComputerCunning
    ogCSpeed.innerHTML = ogComputerSpeed;
    ogCFatigue.innerHTML = ogComputerFatigue;
    currentPStrength.innerHTML = Player1.getStrength();
    currentPCunning.innerHTML = Player1.getCunning();
    currentPSpeed.innerHTML = Player1.getSpeed();
    currentPFatigue.innerHTML = Player1.getFatigue();
    currentCStrength.innerHTML = computer.getStrength();
    currentCCunning.innerHTML = computer.getCunning();
    currentCSpeed.innerHTML = computer.getSpeed();
    currentCFatigue.innerHTML = computer.getFatigue();
    round.innerHTML = number;
}
function checkFinishingMove(Player) {
    if (Player === Player1) {
        opponent = computer;
    }
    else {
        opponent = Player1;
    }
    if (opponent.getFatigue() * 2 < Player.getFatigue() || opponent.getFatigue() < 0) {
        if (Player === Player1) {
            document.getElementById("finishingMove").style.visibility = "visible";
        }
        else {
            return true;
        }
        finishingMove(Player);
    }
    else {
        document.getElementById("finishingMove").style.visibility = "hidden";
        return false;
    }
}
