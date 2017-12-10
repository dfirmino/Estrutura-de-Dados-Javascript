let Stack = (function () {
    let itens = new WeakMap();
    class Stack {
        constructor() { itens.set(this, []); }
        push(element) {
            let s = itens.get(this);
            s.push(element);
        }
        pop() {
            let s = itens.get(this);
            let r = s.pop();
            return r;
        }
        peek() {
            let s = itens.get(this);
            let r = s[s.length - 1];
            return r
        }
        empty() {
            let s = itens.get(this);
            return s.length == 0;
        }
        size() {
            let s = itens.get(this);
            return s.length;
        }
        clear() {
            itens.set(this, []);
        }
        print() {
            let s = itens.get(this);
            console.log(s.toString());
        }
    }
    return Stack;
})();

function divideBy2(decNumber) {
    var remStack = new Stack(),
    rem,
    binaryString = '';

    while (decNumber > 0){
        rem = Math.floor(decNumber % 2);
        remStack.push(rem);
        decNumber = Math.floor(decNumber / 2);
    }
    while (!remStack.empty()){
        binaryString += remStack.pop().toString();
    }
    return binaryString;
}

console.log(divideBy2(233));
console.log(divideBy2(10));