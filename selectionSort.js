const livros = require('./listaLivros');
const menorValor = require('./menorValor');

//Esse -1 é porque tudo já vai estar ordenado então, o último claro que vai ser o mais caro
for (let atual = 0; atual < livros.length - 1; atual++){
    let menor = menorValor(livros, atual);

    let livroAtual = livros[atual];
    console.log("Posição atual", atual);
    console.log("Livro atual", livros[atual]);
    let livroMenorPreco = livros[menor];
    console.log("Livro menor preço", livros[menor]);
    
    livros[atual] = livroMenorPreco;
    livros[menor] = livroAtual;
}

console.log(livros);