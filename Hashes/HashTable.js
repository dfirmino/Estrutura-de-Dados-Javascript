function HashTable() {
    let table = []

    let loseloseHashCode = function(key) {
        let hash = 0
        for(let i=0; i < key.length; i++) {
            hash += key.charCodeAt(i)
        }
        return hash % 37
    }

    this.put = function(key,value) {
        let position = loseloseHashCode(key)
        table[position] = value
    }

    this.get = function(key) {
        return table[loseloseHashCode(key)]
    }

    this.remove = function(key) {
        table[loseloseHashCode(key)] = undefined
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