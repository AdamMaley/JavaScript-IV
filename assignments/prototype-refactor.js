1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/
class GameObject {
    constructor(attributes) {
        this.createdAt = attributes.createdAt;
        this.name = attributes.name;
        this.dimensions = attributes.dimensions;
        this.destroy = function () {
            return `${this.name}` + " was removed from the game";
        };
    }
}


class CharacterStats {
    constructor(attributes) {
        this.healthPoints = attributes.healthPoints;
        this.takeDamage = function () {
            return `${this.name.toString}` + "took damage.";
        };
    }
}

class Humanoid {
    constructor(attributes) {
        this.team = attributes.team;
        this.weapons = attributes.weapons;
        this.language = attributes.language;
        this.greet = function () {
            return `${GameObject.name}` + `${this.language}`;
        };
    }
}