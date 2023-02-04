// Importando a lista de livros de outro arquivo
const livros = require('./listaLivros')

// Criando uma função para verificar o menor valor, com parâmetro de um array e uma posição inicial
function menorValor(arrProdutos, posicaoInicial) {
    // Vamos criar a condição para organizarmos qual é mais barato
    // Vamos dar o valor inicial do livro mais barato de posicaoInicial, pois a partir daquela posição o array vai rodar para achar o livro mais barato
    let maisBarato = posicaoInicial;

    // Criar um laço para percorrer o array
    for (let atual = posicaoInicial; atual < arrProdutos.length; atual++) {
        if (arrProdutos[atual].preco < arrProdutos[maisBarato].preco) {
            maisBarato = atual
        }
    }
    return maisBarato;
}

// Exportando a função para outro arquivo
module.exports = menorValor;