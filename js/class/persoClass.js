import {Character} from './programmClass.js';

const player = new Character;
const boss = new Character;
const atkButton = document.getElementById("Atk");
const defButton = document.getElementById("Def");
const magButton = document.getElementById("Mag");

atkButton.addEventListener("click", event => player.onClickAttack(boss), false);
defButton.addEventListener("click", event => player.onClickDefense(boss), false);
magButton.addEventListener("click", event => player.onClickSpell(boss), false);


// méthode:
    // attack
    // defense
    // spell