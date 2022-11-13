/* const moveTo = function(x, y) {
    this.x = x, // Нові координати замість старих
        this.y = y
        console.log(`New coordinates for ${this.name} are: X: ${this.x} Y: ${this.y}`) // Координати змінились, ${this.name} - виведе ім’я танку
}

const fireTo = function(x, y) {
    this.ammunition = this.ammunition - 1; // Броня зменшилась, тому -1
    console.log(`Fire coordinates. X: ${x}, Y: ${y}`)
}

const moveAndFire = function(x1, y1, x2, y2) {
    this.moveTo(x1, y1) // Передають координати
    this.fireTo(x2, y2)
}

const getTank = function(name, x, y) { // Фабрична функція Скорочений запис. Обект описано один раз. Для створення нового танку не потрібно створювати новий обєект, ми просто присвоюємо
    const tank = {};
    tank.name = name;
    tank.x = x;
    tank.y = y;
    tank.ammunition = 3;
    tank.armor = 3;
    tank.moveTo = moveTo;
    tank.fireTo = fireTo;
    tank.moveAndFire = moveAndFire;

    return tank; // Щоб ним користуватись потрібно його повернути
} */
/* function Tank(name, x, y){
    this.name = name
    this.x = x
    this.y = y
    this.ammunition = 3
    this.armor = 3
    this.fireTo = function(x, y) {
        this.ammunition = this.ammunition - 1; // Броня зменшилась, тому -1
        console.log(`Fire coordinates. X: ${x}, Y: ${y}`)
    }
}

Tank.prototype.moveTo = function(x, y) {
    this.x = x
    this.y = y
    console.log(`New coordinater for ${this.name} are X: ${x}, Y: ${y}` )
}

Tank.prototype.moveAndFire = function(x1, y1, x2, y2) {
    this.moveTo(x1, y1) 
    this.fireTo(x2, y2)
} */

/* function TankDeprecated(name, x, y){
    this.name = name
    this.x = x
    this.y = y
    this.ammunition = 3
    this.armor = 3
    this.fireTo = function(x, y) {
        this.ammunition = this.ammunition - 1; // Броня зменшилась, тому -1
        console.log(`Fire coordinates. X: ${x}, Y: ${y}`)
    }
}

TankDeprecated.prototype.fireTo = function(x, y) {
    this.ammunition = this.ammunition - 1; // Броня зменшилась, тому -1
    console.log(`Fire coordinates. X: ${x}, Y: ${y}`)
}

TankDeprecated.prototype.moveTo = function(x, y) {
    this.x = x
    this.y = y
    console.log(`New coordinater for ${this.name} are X: ${x}, Y: ${y}` )
}

TankDeprecated.prototype.moveAndFire = function(x1, y1, x2, y2) {
    this.moveTo(x1, y1) 
    this.fireTo(x2, y2)
} */

class Vehicle {
	constructor(name, x, y) {
		this.name = name;
		this.x = x;
		this.y = y;
	}

    greeting(){
        console.log(`Hi Im ${this.name} and I am Vehile`) // функція для визову імя 
    }

	moveTo(x, y) {
		this.x = x;
		this.y = y;
		console.log(`New coordinates for ${this.name} are: X: ${this.x} Y: ${this.y}`);
	}
}

class Tank extends Vehicle { // насідувати батьківські Vehile  
    armor = 3;
	constructor(name, x, y, ammunition) {
		super(name, x, y);// виклкає constructor батьківського класу Vehile
		this.ammunition = ammunition;
	}

    greeting(){
        console.log(`Hi Im ${this.name} and I am Tank`) // функція для визову імя 
    }

    #_canFire() { // приватні  # - недоступні зовні властивості та методи
		return this.ammunition > 0;
	}

	fireTo(x, y) {
		if(this.#_canFire()) {
			this.ammunition = this.ammunition - 1;
			console.log(`Fire coordinates. X: ${x}, Y: ${y}`);
		} else {
			console.log('No ammunition to fire');
		}
	}

    moveAndFire(x1, y1, x2, y2) {
        this.moveTo(x1, y1) 
        this.fireTo(x2, y2)
        }
    }

    class Car extends Vehicle {
        static someVare = 'Some value' // Для того щоб зберігати данні на рівні класу
        static example() { // Статичний метод, але можна звернутись на пряму
            console.log('I am static')
        }
        greeting(){
            console.log(`Hi Im ${this.name} and I am Car`) // функція для визову імя 
        }

        moveTo(x, y) {
            this.x = x;
            this.y = y;
            console.log(`From Car ${this.name}: X: ${this.x} Y: ${this.y}`);
        }
    }

const vehicle = new Vehicle('V', 1, 1) // Задаємо данні для кожного елементу
const tank = new Tank('T', 2, 2)
const car = new Car('C', 1, 1)

vehicle.greeting() // Визов для кожного з зарання заданими данними const vehicle = new Vehicle('V', 1, 1); const tank = ...
tank.greeting()
car.greeting()

const arr = [vehicle, tank, car] // записуємо їх const 

function massGreeting(vehicles) { // Поліморфізм написать один класс, в которым будут все свойства, присущие всем трем типам публикаций
    vehicles.forEach(vehicle => {vehicle.greeting()}) // forEach - выполняет указанную функцию один раз для каждого элемента в МАССИВЕ.
}

massGreeting(arr)

if (tank instanceof Tank){ // Перевіряє чи воно належить цьому класу
    tank,fireTo(6,8)
}
/* function massGreeting([], [], []) { // Перший другий третій масив створений із Vehile, Tank, Car щоб визвати їх

} */