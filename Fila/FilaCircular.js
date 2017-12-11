function Queue() {
    let itens = [];

    this.enqueue = function (element) {
        itens.push(element);
    };

    this.dequeue = function () {
        return itens.shift();
    };

    this.front = function () {
        return itens[0];
    };

    this.empty = function () {
        return itens.length == 0;
    };

    this.size = function () {
        return itens.length;
    };

    this.print = function () {
        console.log(itens.toString());
    };
}

function hotPotato(nameList,num){
    let queue = new Queue();

    for(let i=0; i<nameList.length; i++){
        queue.enqueue(nameList[i]);
    }
    
    let eliminated = '';
    
    while(queue.size() > 1){
        for(let i = 0; i<num;i++){
            queue.enqueue(queue.dequeue());
        }
        eliminated = queue.dequeue();
        console.log(eliminated + ' was eliminated from the hot potato game.');
    }
    return queue.dequeue();
}

let names = ['davi','pedro','maria','thiago','marcia'];
let winner = hotPotato(names,9);
console.log('The winner is: ' + winner);