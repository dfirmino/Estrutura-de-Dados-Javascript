//O ecma2015 implementou a classe Map como parte de sua api para a criação de dicionarios
var map = new Map()
map.set('gandalf','gandalf@terrordasnovinhas.com')
map.set('batman','batman@marta.com')
map.set('goku','goku@maisdeoitomil.com')

console.log(map.has('gandalf'))
console.log(map.size)
console.log(map.keys())
console.log(map.values())
console.log(map.get('goku'))