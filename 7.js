// Задание 1
const userBohlen = {
  Name: 'Dieter',
  Surname: 'Bohlen',
  Age: '68'
 }

console.log(userBohlen)

// Задание 2
function showProps(obj, objKeyName) {
    return (objKeyName in obj);
}

const music = {
    name: "Dieter", 
    ownCity: "Hamburg",
    age: 68,
    profession: "Producer"
  };

  console.log(showProps(music, "same"));  // false
  console.log(showProps(music, "name"));  // true

// Задание 3
function createObject () {
  return Object.create(null);
}

const obj = createObject();
console.log(obj);
console.log(Object.getPrototypeOf(obj));

// Задание 4
function ElectricalAppliance(name, power) {
  this.name = name;
  this.power = power;
  this.isPlugged = false;
} // метод, определяет включенный прибор 

ElectricalAppliance.prototype.plugIn = function() {
  console.log(this.name + " is plugged!");
  this.isPlugged = true;
}

ElectricalAppliance.prototype.getPowerUsed = function() {
  return this.isPlugged ? this.power : 0;
}

const CD = new ElectricalAppliance('CD', 25);
const VHS = new ElectricalAppliance('VHS', 250);

console.log(CD.getPowerUsed() + VHS.getPowerUsed());

lamp.plugIn();
console.log(CD.getPowerUsed() + VHS.getPowerUsed());

VHS.plugIn();
console.log(CD.getPowerUsed() + VHS.getPowerUsed());

// Задание 5
class ElectricalAppliance
{
  constructor(name, power)
  {
    this.name = name;
    this.power = power;
    this.isPlugged = false;
  }
  
  plugIn()
  {
    console.log(this.name + " is plugged!");
    this.isPlugged = true;
  }
  
  getPowerUsed()
  {
    return this.isPlugged ? this.power : 0;
  }
}

const CD = new ElectricalAppliance('CD', 25);
const VHS = new ElectricalAppliance('VHS', 250);

console.log(CD.getPowerUsed() + VHS.getPowerUsed());

CD.plugIn();
console.log(CD.getPowerUsed() + VHS.getPowerUsed());

VHS.plugIn();
console.log(CD.getPowerUsed() + VHS.getPowerUsed())




