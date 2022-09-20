  const cat = {
    nickname: '',
    color: 'white',
    print() {
        console.log(`My cat ${this.nickname} is white`)
        console.log('THIS', this)
    }
 }

 function message() {
    console.log(this)
 }

const team = {
    teamName: 'Rockets',
    members: ['Svitlana', 'Olena', 'Marta'],
    getTeamMembers() {
        let that = this;
        this.members.forEach(function(member) {
            console.log(`${member} in ${this.teamName} team`)
        });
    },
    getTeamMembers2() {
        this.members.forEach ((member) => {
            console.log(`${member} in ${this.teamName} team`)
        });
    }
}
team.getTeamMembers();

/*  const btn = document.getElementById('press')
 btn.addEventListener('click', function() {
    message.call(cat)
 })
 */

/* const catBind = message.bind(cat,  'Hello from bind')
catBind()

message.call(cat,  'Hello from call')

message.apply(cat, ['hello from apply', `${cat.nickname}`]) */
/*  const print2 = cat.print
 print2();

 const print3 = print2.bind(cat)
 print3(); */

 /* const anotherCat = {
	nickname: 'Rebecca',
	color: 'black',
	random() {
		console.log('Hi!');
	}
}

 anotherCat.print = cat.print;
anotherCat.print();  

 function random(msg) {
 	console.log('from random', this);
    console.log(msg)
 }

const catRandom = random.bind(anotherCat, 
    'Hello from cat') // Створю нову функцію з додаванням значеь старої у this
catRandom()

const anotherCatRandom = random.bind(
    anotherCat,
    'Hello from anotherCat'
)
anotherCatRandom()

anotherCat.random() */
// random();

// cat.random = random;
// cat.random();

// anotherCat.random = random;
// anotherCat.random();

// const {color, print} = cat;
// console.log('color', color);
// print();

// const print2 = cat.print;
// print2();
//cat.print();
