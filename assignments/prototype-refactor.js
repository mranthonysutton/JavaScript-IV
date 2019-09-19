/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/

function GameObject(attr) {
  this.createdAt = attr.createdAt;
  this.name = attr.name;
  this.dimensions = attr.dimensions;
}

GameObject.prototype.destroy = function() {
  return `${this.name} was removed from the game.`;
};

function CharacterStats(attr) {
  GameObject.call(this, attr);
  this.healthPoints = attr.healthPoints;
}

CharacterStats.prototype = Object.create(GameObject.prototype);
CharacterStats.prototype.takeDamage = function() {
  return `${this.name} took damage.`;
};

function Humanoid(attr) {
  GameObject.call(this, attr);
  CharacterStats.call(this, attr);
  this.team = attr.team;
  this.weapons = attr.weapons;
  this.language = attr.language;
}

Humanoid.prototype = Object.create(CharacterStats.prototype);

Humanoid.prototype.greet = function() {
  return `${this.name} offers a greeting in ${this.language}.`;
};

const mage = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 1,
    height: 1
  },
  healthPoints: 5,
  name: "Bruce",
  team: "Mage Guild",
  weapons: ["Staff of Shamalama"],
  language: "Common Tongue"
});

const swordsman = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 2,
    height: 2
  },
  healthPoints: 15,
  name: "Sir Mustachio",
  team: "The Round Table",
  weapons: ["Giant Sword", "Shield"],
  language: "Common Tongue"
});

const archer = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 2,
    height: 4
  },
  healthPoints: 10,
  name: "Lilith",
  team: "Forest Kingdom",
  weapons: ["Bow", "Dagger"],
  language: "Elvish"
});

console.log(mage.createdAt); // Today's date
console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
console.log(swordsman.healthPoints); // 15
console.log(mage.name); // Bruce
console.log(swordsman.team); // The Round Table
console.log(mage.weapons); // Staff of Shamalama
console.log(archer.language); // Elvish
console.log(archer.greet()); // Lilith offers a greeting in Elvish.
console.log(mage.takeDamage()); // Bruce took damage.
console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.

function Villain(attr) {
  GameObject.call(this, attr);
  CharacterStats.call(this, attr);
  Humanoid.call(this, attr);
}

Villain.prototype = Object.create(GameObject.prototype);
Villain.prototype = Object.create(CharacterStats.prototype);

Villain.prototype.riot = function(enemy) {
  return `${this.name} has caused a riot against ${enemy}. ${enemy} has taken damage.`;
};

function Hero(attr) {
  GameObject.call(this, attr);
  CharacterStats.call(this, attr);
  Humanoid.call(this, attr);
}

Hero.prototype = Object.create(GameObject.prototype);
Hero.prototype = Object.create(CharacterStats.prototype);

Hero.prototype.swiftStrick = function(enemy) {
  return `${this.name} used swift strike on ${enemy}. ${enemy} has taken damage.`;
};

const bacon = new Hero({
  createdAt: new Date(),
  dimensions: {
    length: 8,
    width: 3,
    height: 10
  },
  healthPoints: 15,
  name: "Best Breakfast Food",
  team: "Healthy Food",
  weapons: ["Fatty Oil", "Delicious Scent"],
  language: "Pig Latin"
});

const vegan = new Villain({
  createdAt: new Date(),
  dimensions: {
    length: 10,
    width: 2,
    height: 16
  },
  healthPoints: 12,
  name: "Activist",
  team: "No Meat",
  weapons: ["Campaigning", "Riots"],
  language: "Hipster Ipsum"
});

console.log("\n");
console.log(vegan.team);
console.log(bacon.team);
console.log(vegan.weapons);
console.log(bacon.weapons);
console.log(bacon.swiftStrick(vegan.name));
console.log(vegan.riot(bacon.name));
console.log(bacon.swiftStrick(vegan.name));
console.log(vegan.destroy());
