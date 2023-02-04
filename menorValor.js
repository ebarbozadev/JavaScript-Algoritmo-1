const livros = require('./listaLivros')

function menorValor(arrProdutos, posicaoInicial) {
    // Vamos criar a condição para organizarmos qual é mais barato
    // Vamos dar o valor inicial do livro mais barato de 0
    let maisBarato = posicaoInicial;

    // Criar um laço para percorrer o array
    for (let atual = posicaoInicial; atual < arrProdutos.length; atual++) {
        if (arrProdutos[atual].preco < arrProdutos[maisBarato].preco) {
            maisBarato = atual
        }
    }
    return maisBarato;
}

module.exports = menorValor;