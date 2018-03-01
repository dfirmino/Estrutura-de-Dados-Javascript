function HashTable() {
    let table = []

    let loseloseHashCode = function(key) {
        let hash = 0
        for(let i=0; i < key.length; i++) {
            hash += key.charCodeAt(i)
        }
        return hash % 37
    }

    let ValuePair = function(key,value) {
        this.key = key
        this.value = value
        this.toString = function() {
            return `[${this.key} - ${this.value}]`
        }
    }

    this.put = function(key,value) {
        let position = loseloseHashCode(key)
        if(table[position] == undefined) {
            table[position] = new ValuePair(key,value)
        }else {
            let index = ++position
            while(table[index] != undefined) {
                index++
            }
            table[index] = new ValuePair(key,value)
        }
    }

    this.get = function(key) {
        let position = loseloseHashCode(key)
        if(table[position] !== undefined) {
            if(table[position].key === key){
                return table[position].value
            }else{
                let index = ++position
                while (table[index] !== undefined && (table[index] && table[index].key !== key)) {
                    index++
                }
                if(table[index] && table[index].key === key) {
                    return table[index].value
                }
            }
        }
        return undefined
    }

    this.remove = function(key) {
        let position = loseloseHashCode(key)
        if(table[position] !== undefined) {
            if(table[position].key === key){
                    table[position] = undefined
            }else{
                let index = ++position
                while (table[index] !== undefined && (table[index] && table[index].key !== key)) {
                    index++
                }
                if(table[index] && table[index].key === key) {
                     table[index].value == undefined
                }
            }
        }
        return undefined
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