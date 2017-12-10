function Stack() {
    let itens = [];

    this.push = function(element) {
        itens.push(element);
    };

    this.pop = function() {
        return itens.pop();
    };

    this.peek = function() {
        return itens[itens.length-1];
    };

    this.empty = function() {
        return itens.length == 0;
    };

    this.size = function() {
        return itens.length;
    };

    this.clear = function() {
        itens = [];
    };

    this.print = function() {
        console.log(itens.toString());
    };
}

let stack = new Stack();
console.log(stack.empty());
stack.push(5);
stack.push(8);
console.log(stack.empty());
console.log(stack.peek());
stack.push(11);
console.log(stack.size());
stack.push(15);
stack.pop();
stack.pop();
console.log(stack.size());
stack.print();