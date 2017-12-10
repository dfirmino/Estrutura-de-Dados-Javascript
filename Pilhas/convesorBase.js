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

function baseConverter(decNumber,base) {
    var remStack = new Stack(),
    rem,
    baseString = '',
    digits = '0123456789ABCDEF';

    while (decNumber > 0){
        rem = Math.floor(decNumber % base);
        remStack.push(rem);
        decNumber = Math.floor(decNumber / base);
    }

    while(!remStack.empty()){
        baseString += digits[remStack.pop()];
    }
    return baseString;
}
console.log(baseConverter(100345,2));
console.log(baseConverter(100345,10));
console.log(baseConverter(100345,16));
