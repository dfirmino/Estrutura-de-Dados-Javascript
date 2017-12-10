let Stack = (function(){
    let itens = new WeakMap();
    class Stack{
        constructor (){itens.set(this,[]); }
        push(element){
            let s = itens.get(this);
            s.push(element);
        }
        pop(){
            let s = itens.get(this);
            let r = s.pop();
            return r;
        }
        peek(){
            let s = itens.get(this);
            let r = s[s.length - 1];
            return r
        }
        empty(){
            let s = itens.get(this);
            return s.length == 0;
        }
        size(){
            let s = itens.get(this);
            return s.length;
        }
        clear(){
            itens.set(this, []);
        }
        print(){
            let s = itens.get(this);
            console.log(s.toString());
        }
    }
    return Stack;
})();

let stack = new Stack();
stack.push(5);
stack.push(6);
console.log(stack.empty());
console.log(stack.peek());
console.log(stack.pop());
console.log(stack.peek());
stack.push(20);
stack.print();
console.log(stack.size());
stack.clear();
console.log(stack.empty());