// inicializando arrays
var daysOfWeek = new Array(7);
var diasDaSemana = new Array('Segunda','Terça','Quarta','Quinta','Sexta','Sabádo','Domingo');
var finaisDeSemana = ['sexta','sabádo','domingo'];
var arrayVazio = [];

//Contagem de Elementos
console.log(finaisDeSemana.length);

//Exibindo Itens
console.log(finaisDeSemana[0]);

for(var i = 0; i < finaisDeSemana.length;i++){
    console.log(finaisDeSemana[i]);
}

//adicionando elementos
var numeros = [1,2,3,4,5,6,7,8,9];
numeros[numeros.length] = 10;
numeros.push(11);
numeros.push(12,13);
console.log(numeros);

//adicionando na primeira posição
numeros = [2,3,4,5,6,7];

for(i=numeros.length;i>=0;i--){
    numeros[i] = numeros[i-1];
}
numeros[0] = 1;
numeros.unshift(0);
numeros.unshift(-1,-2);
console.log(numeros);

//removendo elemntos
numeros =[1,2,3,4,5];
numeros.pop();
console.log(numeros);

//removendo na primeira opção
numeros = [1, 2, 3, 4, 5];
for(i=0;i<numeros.length;i++){
    numeros[i] = numeros[i + 1];
}

numeros = [1, 2, 3, 4, 5];
numeros.shift();
console.log(numeros);

//adicionando e removendo de qualquer posição
numeros = [1, 2, 3, 4, 5];
numeros.splice(1,2);
console.log(numeros);
//Inserindo
numeros.splice(1,0,2,3);
//Atenção, splice para inserir
//splice([indice a partir do qual será deletado ou inserido o elemento],[quantidade de elementos a ser removido -> no caso o ],[todo o restante são numeros a ser adicionado a partir do indice]);
console.log(numeros);

//Arrays Bidimensionais e Multidimensionais
var temperatura = [];
temperatura[0] =[10,20,70,80];
temperatura[1] =[15,30,45,92];
console.log(temperatura[0][1]);

//interando pela matriz bidimensional
function imprimeMatriz(matriz){
    for(var i=0;i<matriz.length;i++){
        for(var j=0;j<matriz[i].length;j++){
            console.log(matriz[i][j]);
        }
    }
}
imprimeMatriz(temperatura);

//Arrays Multidimencionais
var matriz3x3x3 = [];
for (var i=0;i<3;i++){
    matriz3x3x3[i] = [];
    for (var j=0;j<3;j++){
        matriz3x3x3[i][j] = [];
        for(var z=0;z<3;z++){
            matriz3x3x3[i][j][z] = Math.floor((Math.random() * 10) + 1);;
        }
    }

}

//exibindo matriz Multidimencional
for (var i=0;i<matriz3x3x3.length;i++){
    for(var j=0;j<matriz3x3x3[i].length;j++){
        for(var z=0;z<matriz3x3x3[i][j].length;z++){
            console.log(matriz3x3x3[i][j][z]);
        }
    }
}

//Juntando Arrays
var zero = 0;
var positivos = [1,2,3];
var negativos = [-1,-2,-3];
var numeros = negativos.concat(zero,positivos);

console.log(numeros);

//Funções de Interação
function ePar(x){
    return x % 2 == 0 ? true : false;
}
numeros = [1,2,3,4,5,6,7,8,9,10];

//retorna até que tenha encontrado false
console.log(numeros.every(ePar));

//retorna até que encontre true
console.log(numeros.some(ePar));

numeros.forEach(function(x) {
    console.log((x % 2 == 0));
});

//devolve um array um novo array com resultados booleanos na função passada
var myMap = numeros.map(ePar);
console.log(myMap);

//devolve um novo array com os elementos aonde o resultado avaliado (com base na função) seja true
myFilter = numeros.filter(ePar);
console.log(myFilter);

//Recebe uma função com os seguintes parametros (valorAnterior,ValorAtual,Index,Array)
//Somando todos os numeros do array
var soma = numeros.reduce(function(previous,current,index) {
    return previous + current;
});
console.log(soma);

//ECMAScript6

//ForEach com função de Seta

numeros.forEach(x => {
    console.log(x % 2 == 0);
})

//For of
for(let n of numeros){
    console.log((n % 2 == 0) ? 'par' : 'impar') ;
}

//Usando o novo iterator da ES6 @@iterator
var numeros = ['Primeiro','Segundo','Terceiro','Quarto','Quinto'];
let iterator = numeros[Symbol.iterator]();
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);

//Método Entries Devolve o @@iterator contendo pares chave/valor
let entries = numeros.entries();
console.log(entries.next().value);
console.log(entries.next().value);
console.log(entries.next().value);
console.log(entries.next().value);

//Método Keys Devolve o @@iterator contendo  a chave
let key = numeros.keys();
console.log(key.next());
console.log(key.next());
console.log(key.next());
console.log(key.next());
console.log(key.next());
// Note que quando não houver um próximo elemento o método key devolve done = true e value = undefined
console.log(key.next());

//Método values Devolve o @@iterator contendo  o valor


//Não funcionou por algum carai de motivo
// let teste = ['zica1','zica2'];
// let v = teste.values();
// console.log(v.next());
// console.log(v.next());
// console.log(v.next());
// console.log(v.next());
// console.log(v.next());


// Note que quando não houver um próximo elemento o método values devolve done = true e values = undefined
// console.log(v.next());

//From cria um array a partir de um array existente
var numeros = [1,2,3,4,5,6];
var numeros2 = Array.from(numeros);
console.log(numeros2);

//podemos passar uma função para determinar um filtro
numeros2 = Array.from(numeros,x => (x % 2 == 0));
console.log(numeros2);

// O método Fill preenche o array com um determinado valor
numeros2 = [1,2,4,5,6];
console.log(numeros2);
numeros2.fill(0);
console.log(numeros2);
//Também podemos passar o indice de incio do qual queremos preencher
numeros.fill(0,1);
console.log(numeros);
//Também podemos passar o indice de fim do qual queremos preencher
numeros = [1,2,3,4,5,6];
numeros.fill(0,1,3);
console.log(numeros);

//O método CopyWithin copia uma sequência de valores para a posição de um índice de inicio
numeros = [1,2,3,4,5,6];
//vamos supor que eu queira copiar os numeros 5,6 para as primeiras posições
numeros.copyWithin(0,4);
console.log(numeros);
//vamos supor que eu queria copiar os numeros 4,5 para a segunda posição
numeros = [1,2,3,4,5,6];
numeros.copyWithin(1,3,5);
console.log(numeros);

//ordenação

//traz->frente
numeros = [2,6,10,4,8];
console.log(numeros.reverse());

//frente->traz
console.log(numeros.sort());

//implementando comparação crescente
var crescente = numeros.sort(function(a,b) {
    return a-b;
});
console.log(crescente);

//implementando comparação decrescente
var decrescente = numeros.sort(function (a, b) {
    return b - a;
});
console.log(decrescente);

//Ordenando Strings
var nomes = ['davi','maria','ana','brenda','davi'];

ordenados = nomes.sort(function(a,b){
    return a.toLowerCase() < b.toLowerCase() ?  -1 :  1;
    return 0;
})
console.log(ordenados);
//Para caracteres com acento podemos usar localeCompare

//Pesquisa
console.log(numeros);
console.log(numeros.indexOf(8));

//ES6
//find recebe uma função de callback ao qual buscara um valor que satisfaça a condição da função devolvendo o primeiro valor que satisfaça a mesma.
console.log(numeros.find(ePar));

//findIndex recebe uma função de callback ao qual buscara um valor que satisfaça a condição da função devolvendo o primeiro indice que satisfaça a mesma.
console.log(numeros.findIndex(ePar));

//Em ambos os casos, caso nao seja encontrado valor, será devolvido undefined

//O método include devolve true caso o elemento seja encontrado no array
console.log(numeros.includes(8));
console.log(numeros.includes(99));
//também é possível passar o inicio de onde irá ser efetuado a busca
console.log(numeros.includes(8,2));

//Convertendo Array em String

//ToString devolve uma string com elementos do array
console.log(numeros.toString());

//join devolve uma string com elementos do array separados com o caracter delimitados
console.log(numeros.join('=>'));

//Arrays São permitidos Armazenar qualquer tipo de valor, para construir arrays 'tipados' consulte TypedArray in javascript