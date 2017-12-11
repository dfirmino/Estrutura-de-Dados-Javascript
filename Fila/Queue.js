function Queue() {
    let itens = [];

    this.enqueue = function(element) {
        itens.push(element);
    };

    this.dequeue = function() {
        return itens.shift();
    };

    this.front = function() {
        return itens[0];
    };

    this.empty = function() {
        return itens.length == 0;
    };

    this.size = function() {
        return itens.length;
    };

    this.print = function() {
        console.log(itens.toString());   
    };
}

let queue = new Queue();
console.log(queue.empty());
queue.enqueue('John');
queue.enqueue('Jack');
queue.enqueue('Dennis');
queue.print();
console.log(queue.size());
console.log(queue.empty());
queue.dequeue();
queue.print();