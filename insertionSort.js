// Importando um arquivo
const livros = require('./listaLivros');

// Criando uma função com um parâmetro para que fique mais fácil
function insertionSort(lista){
    for (let atual = 0; atual < lista.length; atual++) {
        // Criando uma variável para armazenar o valor da variável atual
        let analise = atual;
        // While é um laço que significa "enquanto", ou seja, enquanto o parâmetro dele for verdadeiro, execute o que está entre "{"
        while (analise > 0 && lista[analise].preco < lista[analise - 1].preco) {
            let itemAnalise = lista[analise];
            let itemAnterior = lista[analise - 1];
            
            lista[analise] = itemAnterior;
            lista[analise - 1] = itemAnalise;
            
            /* Colocamos a parada do while, pois se não ele iria criar um loop infinito, sendo assim, "bugando" a segunda parte da condição, pois estaria correta, aí por fim, caso haja algo mais barato por último, ele continua o loop e faz com que esse preço barato chegue no local certo*/
            analise--
        }
    }

    console.log(lista);
}

insertionSort(livros);