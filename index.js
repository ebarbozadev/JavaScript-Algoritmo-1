const livros = require('./listaLivros')

// Vamos criar a condição para organizarmos qual é mais barato
// Vamos dar o valor inicial do livro mais barato de 0
let maisBarato = 0;

// Criar um laço para percorrer o array
for(let atual = 0; atual < livros.length; atual++){
    // Criar uma condição    Colocamos assim pois estamos pegando a posição
    if(livros[atual].preco < livros[maisBarato].preco){
        // Armazenando a posição
        maisBarato = atual;
    }
}

console.log(`O livro mais barato custa ${livros[maisBarato].preco}, do título ${livros[maisBarato].titulo}`);