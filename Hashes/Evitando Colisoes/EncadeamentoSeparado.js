LinkedList = require('../../Lista Ligada/LinkedList.js').LinkedList

function HashTable() {
    let table = []

    let loseloseHashCode = function(key) {
        let hash = 0
        for(let i=0; i < key.length; i++) {
            hash += key.charCodeAt(i)
        }
        return hash % 37
    }

    //Simulando classe auxiliar para representar o elemento a ser adicionado na instancia de LinkedList
    let ValuePair = function(key,value) {
        this.key = key
        this.value = value
        this.toString = function() {
            return `[${this.key} - ${this.value}]`
        }
    }

    this.put = function(key,value) {
        let position = loseloseHashCode(key)
        if (table[position] == undefined ) {
            table[position] = new LinkedList()
        }
        table[position].append(new ValuePair(key,value))
    }

    this.get = function(key) {
        let position = loseloseHashCode(key)
        
        if(table[position] !== undefined) {
            //Itera pela LinkedList para encontrar chave/valor
            let current = table[position].getHead()
            while(current.next) {
                
                if(curret.element.key == key) {
                    return current.element.value
                }
                current = current.next
            }
            //verifica se é o primeiro ou ultimo elemento da lista
            if(current.element.key === key) {
                return current.element.value
            }
        }
        return undefined
    }

    this.remove = function(key) {
        let position = loseloseHashCode(key)

        if(table[position] !== undefined) {
            let current = table[position].getHead()
            while(current.next) {
                if(current.element.key === key) {
                    table[position].remove(current.element)
                    if(table[position].empty()){
                        table[position] = undefined
                    }
                    return true
                }
                current = current.next
            }
            // verifica se é o primeiro ou ultimo elemento
            if(current.element.key === key) {
                table[position].remove(current.element)
                if(table[position].empty()) {
                    table[position] = undefined
                }
                return true
            }
        }
        return false
    }

    this.print = function() {
        for(let i=0; i<table.length; i++) {
            if(table[i] !== undefined) {
                console.log(`${i} : ${table[i]}`)
            }
        }
    }

}

ht = new HashTable()
ht.put('Gandalf','gandalf@email.com')
ht.put('Batman','batman@email.com')
ht.put('Goku','goku@email.com')

console.log(ht.get('Gandalf'))
ht.remove('Gandalf')
console.log(ht.get('Gandalf'))
ht.print()