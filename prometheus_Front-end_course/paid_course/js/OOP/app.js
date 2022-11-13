String.prototype.yell = () => {alert('AAAAA!!!')}
'hi'.yell() // Визивається з допомогою чимоось

String.prototype.yell = function () {return this}
'hi'.yell() // this це 'hi'

String.prototype.yell = function () {return this.toUpperCase()}
'hi'.yell() // HI буде великими буквами this.toUpperCase()

'hello world'.yell()

