function PriorityQueue() {
    let itens = [];
    function QueueElement(element,priority) {
        this.element = element;
        this.priority = priority;
    }

    this.enqueue = function(element,priority){
        let queueElement = new QueueElement(element,priority);
        let added = false;
        for(let i = 0; i<itens.length; i++){
            if(queueElement.priority < itens[i].priority){
                itens.splice(i,0,queueElement);
                added = true;
                break;
            }
        }
        if(!added){
            itens.push(queueElement);
        }
    };
    this.print = function() {
      for(let i=0; i<itens.length; i++){
          console.log(`${itens[i].element} - ${itens[i].priority}`);
      }  
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
}

let priorityQueue = new PriorityQueue();
priorityQueue.enqueue('Davi',2);
priorityQueue.enqueue('Thiago',1);
priorityQueue.enqueue('Regina',1);
priorityQueue.print();