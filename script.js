const Player = {
    strength: 6,
    cunning: 6,
    speed: 6,
    fatigue: 30,
    attackValue: 0,
    defendValue: 0,
    finishingMove: false,
    attemptFinishMove: false,

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
        this.fatigue = parseInt(this.fatigue * 100) / 100
        return this.fatigue
    },
    setFinishingMove(boolean) {
        this.finishingMove = boolean;
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
        return this.attackValue
    },
    getDefendValue() {
        return this.defendValue
    },
    getFinishMove() {
        return this.finishingMove;
    },
    changeAttemptFinishMove(boolean) {
        this.attemptFinishMove = boolean
    },
    getAttemptFinishMove() {
        return this.attemptFinishMove
    }
};
const Player1 = Object.create(Player);
const computer = Object.create(Player);
var number = 0;
playerEvents = document.getElementById("playerLog");
computerEvents = document.getElementById("computerLog");
var attemptFinishMove = false;
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
    document.getElementById("winPage").style.visibility = "hidden";
    winner = document.getElementById("winPage");
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
    if (Player === Player1) {
        number++;
        attackOrDefend = parseInt((Math.random() * 2))
        document.getElementById("attack").style.visibility = "hidden";
        document.getElementById("defend").style.visibility = "hidden";
        if (computer.getFinishMove()) {
            finishingMove(computer)
        }
        else if (attackOrDefend === 1) {
            attack(computer);
        }
        else {
            defend(computer)
        }
    }
    Player.setAttackValue(parseInt((Player.getStrength() + Player.getSpeed() + Player.getCunning()) / (parseInt(Math.random() * 3) + 1) * 100) / 100)
    console.log(Player.getAttackValue())
    Player.setDefendValue(Player.getSpeed() + (parseInt(Math.random() * 6) + 1))
    console.log(Player.getDefendValue())
    setTimeout(reappear, 500)
    calculateResult(Player);
    display();
}


function defend(Player) {
    if (Player === Player1) {
        number++;
        attackOrDefend = parseInt((Math.random() * 2))
        document.getElementById("attack").style.visibility = "hidden";
        document.getElementById("defend").style.visibility = "hidden";
        if (computer.getFinishMove()) {
            finishingMove(computer);
        }
        else if (attackOrDefend === 1) {
            attack(computer);
        }
        else {
            defend(computer)
        }
    }
    Player.setDefendValue(Player.getCunning() + Player.getSpeed());
    Player.setAttackValue(0);
    setTimeout(reappear, 750)
    calculateResult(Player)
    display();
}

function finishingMove(Player) {
    Player.changeAttemptFinishMove(true);
    document.getElementById("attack").style.visibility = "hidden";
    document.getElementById("defend").style.visibility = "hidden";
    document.getElementById("finishingMove").style.visibility = "hidden";
    if (Player === Player1) {
        opponent = computer;
        number++;
    }
    else {
        opponent = Player1;
    }
    Player.setAttackValue(parseInt(((Player.getStrength() + Player.getSpeed()) / (parseInt(Math.random() * 3) + 1) * 100)) / 100)
    if (Player.getAttackValue() - opponent.getDefendValue() > 1) {
        if (Player === Player1) {
            winner.innerHTML += " Win";
            displays = document.getElementsByClassName("display")
            for (element of displays) {
                element.style.display = "none";
            }
            document.getElementsByTagName("body")[0].style.backgroundColor = "white";
            document.getElementById("winPage").style.visibility = "visible"
            document.getElementById("winPage").style.fontSize = "300px"
            return true;
        }
        else if (Player === computer) {
            winner.innerHTML += " Lose";
            displays = document.getElementsByClassName("display")
            for (element of displays) {
                element.style.display = "none";
            }
            document.getElementsByTagName("body")[0].style.backgroundColor = "white";
            document.getElementById("winPage").style.visibility = "visible"
            document.getElementById("winPage").style.fontSize = "300px"
            return true;
        }
    }
    setTimeout(reappear, 750)
    calculateResult(Player);
    display()
}
function calculateResult(Player) {
    if (Player === Player1) {
        opponent = computer;
        playerEvents.innerHTML += "<br />Round " + number + " result:<br />"
        playerEvents.innerHTML += "<br />Your attack value is: " + Player.getAttackValue() + "<br />Your defend value is: " + Player.getDefendValue() + "<br />";
        computerEvents.innerHTML += "<br />Round " + number + " result:<br />"
        computerEvents.innerHTML += "<br />Your attack value is: " + opponent.getAttackValue() + "<br />Your defend value is: " + opponent.getDefendValue() + "<br />";
    }
    else {
        opponent = Player1
    }
    if (Player.getAttemptFinishMove()) {
        if (Player === Player1) {
            playerEvents.innerHTML += "<br />You have attempted a finishing move but it was blocked by your opponent<br />"
        }
        else {
            computerEvents.innerHTML += "<br />You have attempted a finishing move but it was blocked by your opponent<br />"
        }
    }
    if (Player === Player1) {
        opponent = computer;
        playerFatigue = ogPlayerFatigue;
        opponentFatigue = ogComputerFatigue;
        if (Player.getAttackValue() > opponent.getDefendValue()) {
            opponent.subtractFatigue(Player.getAttackValue() - opponent.getDefendValue())
            playerEvents.innerHTML += "<br />You have reduced your opponent's fatigue by " + parseInt((Player.getAttackValue() - opponent.getDefendValue()) * 100) / 100 + "<br />"
            computerEvents.innerHTML += "<br />Your fatigue is reduced by " + parseInt((Player.getAttackValue() - opponent.getDefendValue()) * 100) / 100 + "<br />"
            if (opponentFatigue - opponent.getFatigue() >= 5) {
                opponent.subtractFatigue(1)
                computerEvents.innerHTML += "<br />You lost an extra fatigue because you lost 5 or more fatigue<br />"
            }
        }
        if (opponent.getAttackValue() > Player.getDefendValue()) {
            Player.subtractFatigue(opponent.getAttackValue() - Player.getDefendValue())
            computerEvents.innerHTML += "<br />You have reduced your opponent's fatigue by " + parseInt((opponent.getAttackValue() - Player.getDefendValue()) * 100) / 100 + "<br />"
            playerEvents.innerHTML += "<br />Your fatigue is reduced by " + parseInt((opponent.getAttackValue() - Player.getDefendValue()) * 100) / 100 + "<br />"
            if (playerFatigue - Player.getFatigue() >= 5) {
                Player.subtractFatigue(1)
                playerEvents.innerHTML += "<br />You lost an extra fatigue because you lost 5 or more fatigue<br />"
            }
        }
        if (Player.getDefendValue() > opponent.getAttackValue() && opponent.getAttackValue() > 0) {
            var random = parseInt(Math.random() * 6) + 1
            if (Player.getFatigue() + 6 > playerFatigue) {
                random = parseInt(Math.random() * (playerFatigue - Player.getFatigue() + 1))
                Player.addFatigue(random)
            }
            else {
                Player.addFatigue(random)
            }
            playerEvents.innerHTML += "<br />You have successfully blocked an attack and " + random + " fatigue is added<br />"
            computerEvents.innerHTML += "<br />Your attack was blocked by your opponent<br />"
            if (random > 5) {
                Player.addFatigue(1)
                playerEvents.innerHTML += "<br />You gained an extra fatigue because you regain 5 or more fatigue<br />"
            }
        }
        if (opponent.getDefendValue() > Player.getAttackValue() && Player.getAttackValue() > 0) {
            var random = parseInt(Math.random() * 6) + 1
            if (opponent.getFatigue() + 6 > opponentFatigue) {
                random = parseInt(Math.random() * (opponentFatigue - opponent.getFatigue() + 1))
                opponent.addFatigue(random)
            }
            else {
                opponent.addFatigue(random)
            }
            computerEvents.innerHTML += "<br />You have successfully blocked an attack and " + random + " fatigue is added<br />"
            playerEvents.innerHTML += "<br />Your attack was blocked by your opponent<br />"
            if (random > 5) {
                opponent.addFatigue(1)
                computerEvents.innerHTML += "<br />You gained an extra fatigue because you regain 5 or more fatigue<br />"
            }
        }
        computerEvents.innerHTML += "---------------------------------"
        playerEvents.innerHTML += "---------------------------------"
    }
    computerEvents.scrollTop = computerEvents.scrollHeight;
    playerEvents.scrollTop = playerEvents.scrollHeight;
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
    if (Player.getFatigue() > (opponent.getFatigue() * 2) || opponent.getFatigue() < 0) {
        if (Player === Player1) {
            Player1.setFinishingMove(true);
        }
        else {
            computer.setFinishingMove(true);
        }
    }
    else {
        document.getElementById("finishingMove").style.visibility = "hidden";
        Player.setFinishingMove(false);
    }
    Player.changeAttemptFinishMove(false);
}

function reappear() {
    document.getElementById("attack").style.visibility = "visible";
    document.getElementById("defend").style.visibility = "visible";
    if (Player1.getFinishMove()) {
        document.getElementById("finishingMove").style.visibility = "visible";
    }
    else {
        document.getElementById("finishingMove").style.visibility = "hidden";
    }
}
