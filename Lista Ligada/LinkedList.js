function LinkedList(){
    
    let Node = function(element){
       
        this.element = element;
        this.next = null;
    };

    let length = 0;
    let head = null;

    this.append = function(element){
      
        let node = new Node(element),
            current;
        
        if(head === null){ //Primeiro nó da Lista
            head = node;
        }else{
            
            current = head;
            while(current.next){ //Percorre a lista com um laço até encontrar o último item
                current = current.next;
            }
            current.next = node; //Obtém o último iten e faz next receber o node para fazer a ligação
        }
        length++; //Atualiza o tamanho da lista
    };
    
    this.insert = function(position,element){
        //verifica valores fora do intervalo
        if(position >= 0 && position <= length){
            let node = new Node(element),
            current = head,
            previous,
            index = 0;
            
            if(position == 0){ //Adiciona na Primeira Posição
                node.next = current;
                head = node;
            }else{
                while (index++ < position ) {
                    previous = current;
                    current = current.next;
                }
                node.next = current;
                previous.next = node;
            }
            length++; //Atualiza o tamanho da Lista
            return true;
        } else {
            return false;
        }
    };
    
    this.removeAt = function(position){
        //verifica valores fora do intervalo
        if(position > -1 && position < length){
            let current = head,
            previous,
            index = 0;

            //Remove Primeiro Elemento
            if (position == 0){
                head = current.next;
            }else{
                while (index ++ < position){
                    previous = current;
                    current = current.next;
                }
                //Faz a Ligação de previous com o next de current: pula esse elemento para removê-lo
                previous.next = current.next;
            }
            length --;
            return current.element;
        }else{
            return null;
        }

    };
    
    this.remove = function(element){
        let index = this.indexOf(element);
        return this.removeAt(index);
    };
    
    this.indexOf = function(element){
        let current = head,
        index = 0;
        while (current) {
            if(element === current.element){
                return index;
            }
            index++;
            current = current.next;
        }
        return -1;
    };
    
    this.empty = function(){
        return length == 0;
    };
    
    this.size = function(){
        return length;
    };
    
    this.toString = function(){
        let current = head,
        string = '';
        while (current){
            string += current.element + (current.next ? '=>' : '');
            current = current.next;
        }
        return string;
    };
    
    this.getHead = function(params) {
        return head;
    };

}

lista = new LinkedList();
lista.append(10);
lista.append(12);
lista.insert(0,25);
console.log(lista.remove(25));
lista.insert(2,99);
lista.removeAt(1);
console.log(lista.toString());
console.log(lista.size());
console.log(lista.getHead());
console.log(lista.empty());