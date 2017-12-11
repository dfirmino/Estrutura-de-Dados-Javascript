let Queue = (function() {
    const itens = new WeakMap();

    class Queue{
        constructor(){
            itens.set(this,[]);
        }
        enqueue(element){
            let q = itens.get(this);
            q.push(element);
        }
        dequeue(){
            let q = itens.get(this);
            let r = q.shift();
            return r;
        }
        front(){
            let q = itens.get(this);
            let r = q[0];
            return r;
        }
        empty(){
            let q = itens.get(this);
            return q.length == 0;
        }
        size(){
            let q = itens.get(this);
            let r = q.length;
            return r;
        }
        print(){
            let q = itens.get(this);
             console.log(q.toString());
        }
    }
    return Queue;
})();

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