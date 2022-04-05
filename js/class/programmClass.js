 // dans le constructor:
    // créer les propriétés des personnages avec des valeurs par defauts (instanciation)
    // appel d'une méthode affichage
    //gestionnaire d'événements (...)
import {randomInteger} from '../utilities.js';
const Div = document.getElementById("description")
const bossSprite = document.getElementById("boss")
const playerSprite = document.getElementById("player")

export class Character {
    constructor() {
    this.HP = 100;
    this.Atk = 10;
    this.Def = 2;
    this.Mag = 15;
    };

    affichage(Div, Boss) {
        if (this.HP > 0 && Boss.HP > 0)
            Div.innerHTML = `HP joueur : <progress value=${this.HP} max=100></progress> <br>
            Stats joueur : Atk = ${this.Atk} Def = ${this.Def} Mag = ${this.Mag}<br>
            HP boss : <progress value=${Boss.HP} max=100></progress><br>
            Stats joueur : Atk = ${Boss.Atk} Def = ${Boss.Def} Mag = ${Boss.Mag}`
        else if(Boss.HP <= 0) {
            Div.textContent = 'You Won !';
            playerSprite.src="img/hazama-crouch.png"
        } else if(this.HP <= 0) {
            Div.textContent = 'You Loose.';
            playerSprite.src="img/hazama-clap.gif" 
        }
    }

    onClickAttack(Boss) {
        playerSprite.src="img/hazama-slash.gif";
        setTimeout(attackSpritePlayer, 2000);
        Boss.HP = Boss.HP - this.Atk + Boss.Def;
        this.counter(Boss)
        this.affichage(Div, Boss);
        return Boss;
    }

    onClickDefense(Boss) {
        this.Def = this.Def + 5;
        this.counter(Boss);
        this.affichage(Div, Boss);
        this.Def = this.Def - 5;
        return this.Def;
    }

    onClickSpell(Boss) {
        playerSprite.src="img/hazama-slash.gif";
        setTimeout(attackSpritePlayer, 2000);
        Boss.HP = Boss.HP - this.Mag;
        this.counter(Boss);
        this.affichage(Div, Boss);
        return Boss;
    }

    counter(Boss) {
        switch (randomInteger(2)) {
            case 0 : 
                bossSprite.src="img/yu-spinslash.gif";
                setTimeout(attackSpriteBoss, 2000);
                this.HP -= Boss.Atk + this.Def
                break;
            case 1 :
                Boss.HP += 10;
                break;
            case 2 :
                bossSprite.src="img/yu-spinslash.gif";
                setTimeout(attackSpriteBoss, 2000);
                this.HP -= Boss.Mag
        }
    }
}

function attackSpriteBoss() {
    bossSprite.src="img/yu.gif"
}

function attackSpritePlayer() {
    playerSprite.src="img/hazama.gif"
}

// méthode :
    // affichage
    // onClickAttack
    // onClickDefense
    // onClickSpell
    // counter --> lié au dragon


// Pour la méthode affichage:
    // verifier les point de vie, injecter en fonction soit le message de combat soit la victoire ou la défaite

// Pour la méthode attack:
    // c'est un button attention au comportement par défaut
    // faire attaquer le perso
    // le dragon counter
    // mise à jour de l'affichage