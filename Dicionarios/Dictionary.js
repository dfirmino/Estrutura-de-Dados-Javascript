function Dictionary() {
    var items = {}

    this.has = function(key) {
        return key in items
    }

    this.set = function(key,value) {
        items[key] = value
    }

    this.delete = function(key,value) {
        if(this.has(key)) {
            delete items[key]
            return true
        }
        return false
    }

    this.get = function(key) {
        return this.has(key) ? items[key] : undefined
    }

    this.values = function() {
        var values = []
        for(k in items) {
            if(this.has(k)){
                values.push(items[k])
            }
        }
        return values
    }

    this.clear = function() {
        items = {}
    }

    this.size = function() {
        return Object.keys(items).length
    }

    this.keys = function() {
        return Object.keys(items)
    }

    this.getItems = function() {
        return items
    }
}

let dic = new Dictionary()
dic.set('Gandalf','gandalf@email.com')
dic.set('Tyrion','tyrion@email.com')
dic.set('Goku','goku@email.com')

console.log(dic.has('Gandalf'))
console.log(dic.keys())
console.log(dic.values())
console.log(dic.get('Tyrion'))

console.log(dic.delete('Tyrion'))

console.log(dic.keys())
console.log(dic.values())
console.log(dic.get('Tyrion'))