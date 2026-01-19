class Hero {
    constructor(n){
        this.name = n;
        this.health = 100;
    }
    setWeapon(weapon) {
        this.weapon = weapons[weapon];
        this.weaponName = weapon;
        messagelog(`${this.name} has equipped a ${this.weaponName}.`);
    }
    attack(opponent) {
        log(`{this.name} is attacking {opponent.name}`);
        opponent.takeDamage(damage);
        if (Math.random() < this.weapon.hitChance) {
            const damage = Math.floor(Math.random() * 
            (this.weapon.maxDamage - this.weapon.minDamage + 1)) 
            + this.weapon.minDamage;
            messagelog(`${this.name} attacks ${opponent.name} 
                with a ${this.weaponName} for ${damage} damage!`);
            opponent.takeDamage(damage);
        } else {
            messagelog(`${this.name} missed the attack with their 
                ${this.weaponName}!`);
        }
    }
}//end class Hero

const weapons = {
    Sword: { minDamage: 1, maxDamage: 30, hitChance: 0.5 },
    Bow: { minDamage: 8, maxDamage: 10, hitChance: 0.9 },
    Axe: { minDamage: 30, maxDamage: 50, hitChance: 0.3 }
};


let player1, player2;
let currentplayer;

function startGame() {
    player1 = new Hero(document.getElementById("player1-name").value.trim());
    player2 = new Hero(document.getElementById("player2-name").value.trim());
    document.getElementById("player1-title").innerHTML = player1.name;
    document.getElementById("player2-title").innerHTML = player2.name;
    document.getElementById("player1-health").innerHTML = "Health: " + player1.health;
    document.getElementById("player2-health").innerHTML = "Health: " + player2.health;
    document.getElementById("player-input").style.display = "none";
}

function messagelog(msg) {
    const gamelog = document.getElementById("game-log");
    gamelog.innerHTML += `<p>${msg}</p>`;
    gamelog.scrollTop = gamelog.scrollHeight;
}

function selectWeapon(player, weapon, imgElem) {
    var inputId = 'player' + player + '-weapon';
    var hidden = document.getElementById(inputId);
    if (!hidden) return;
    hidden.value = weapon;
    // highlight selection
    var container = document.getElementById('player' + player + '-weapon-choices');
    if (!container) return;
    var imgs = container.getElementsByClassName('weapon-img');
    for (var i = 0; i < imgs.length; i++) {
        imgs[i].classList.remove('weapon-selected');
    }
    imgElem.classList.add('weapon-selected');
    messagelog(`${player === 1 ? player1.name : player2.name} 
        selected ${weapon} as his/her weapon.`);
}

let attacker = playerNum === 1 ? player1 : player2;
    let defender = playerNum === 1 ? player2 : player1;
    let selectedWeapon = document.getElementById
    (`player${playerNum}-weapon`).value;
    attacker.setWeapon(selectedWeapon);
    log(attacker.name + " using " + attacker.selectedWeapon 
        + " as attacker !! " + defender.name + " defender");
    attacker.attack(defender);