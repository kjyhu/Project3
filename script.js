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
var ogPSpeed = document.getElementById("originalPlayerSpeed");
var ogPCunning = document.getElementById("originalPlayerCunning");
var ogPStrength = document.getElementById("originalPlayerStrength");
var ogPFatigue = document.getElementById("originalPlayerFatigue");
var ogCSpeed = document.getElementById("originalComputerSpeed");
var ogCCunning = document.getElementById("originalComputerCunning");
var ogCStrength = document.getElementById("originalComputerStrength");
var ogCFatigue = document.getElementById("originalComputerFatigue");
const Player1 = Object.create(Player);
const computer = Object.create(Player);
function initialize() {
    const values = ["strength", "cunning", "speed", "fatigue"]
    var increase = [values.splice(parseInt(Math.random() * 4), 1), values.splice(parseInt(Math.random() * 3), 1)]
    var decrease = values;
    var random = parseInt(Math.random() * 2);
    var randomFatigue = parseInt(Math.random() * 7);
    for (value of increase) {
        if (value.toString() === "strength") (Player1.addStrength(random), computer.addStrength(random));
        if (value.toString() === "cunning") (Player1.addCunning(random), computer.addCunning(random));
        if (value.toString() === "speed") (Player1.addSpeed(random), computer.addSpeed(random));
        if (value.toString() === "fatigue") (Player1.addFatigue(randomFatigue), computer.addFatigue(randomFatigue));
    }
    for (value of decrease) {
        if (value.toString() === "strength") (Player1.subtractStrength(random), computer.subtractStrength(random));
        if (value.toString() === "cunning") (Player1.subtractCunning(random), computer.subtractCunning(random));
        if (value.toString() === "speed") (Player1.subtractSpeed(random), computer.subtractSpeed(random));
        if (value.toString() === "fatigue") (Player1.subtractFatigue(randomFatigue), computer.subtractFatigue(randomFatigue));
    }
    ogPStrength.innerHTML = Player1.getStrength();
    ogPCunning.innerHTML = Player1.getCunning();
    ogPSpeed.innerHTML = Player1.getSpeed();
    ogPFatigue.innerHTML = Player1.getFatigue();
    ogCStrength.innerHTML = computer.getStrength();
    ogCCunning.innerHTML = computer.getCunning();
    ogCSpeed.innerHTML = computer.getCunning();
    ogCFatigue.innerHTML = computer.getFatigue();
    while (Player1.getWin() != true || computer.getWin() != true) {

    }
}
function attack(Player) {
    Player.setAttackValue((Player.getStrength() + Player.getSpeed() + Player.getCunning()) / (parseInt(Math.random() * 3) + 1))
    Player.setDefendValue(Player.getSpeed() + (parseInt(Math.random() * 5) + 1))
    console.log(attackValue);
    console.log(defendValue)
}

function defend(Player) {
    Player.setDefendValue(Player.getCunning() + Player.getSpeed());
    console.log(defendValue);
}

function finishingMove(Player) {
    finishingMove = attackValue - Player.getCunning
    if (finishingMove > 1) {
        Player.changeWin();
    }
}
function calculateResult(Player) {
    if (attackValue > defendValue) {
        Player.subtractFatigue(attackValue - defendValue)
    }
    else {
      Player.addFatigue(parseInt(Math.random() * 5) + 1)  
    }
}