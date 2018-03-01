// O ecma2015 implementou a classe Map como parte de sua api para a criação de dicionarios
// Junto com a classe Map tambem foi criado as Classes WeakMap e WeakSet Ambas as classes possuem Tipo Fraco
// E apenas Objetos podem ser usados como chave
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/WeakMap
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/WeakSet
var map = new Map()
map.set('gandalf','gandalf@terrordasnovinhas.com')
map.set('batman','batman@marta.com')
map.set('goku','goku@maisdeoitomil.com')

console.log(map.has('gandalf'))
console.log(map.size)
console.log(map.keys())
console.log(map.values())
console.log(map.get('goku'))