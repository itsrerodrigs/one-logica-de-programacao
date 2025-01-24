/* 
aqui usamos o 'let titulo' para criar uma variável para 
que vai guardar a informação de uma tag, neste caso, o 'h1'
*/

// let titulo = document.querySelector('h1');
// titulo.innerHTML = 'Jogo do Número Secreto';

// let paragrafo = document.querySelector('p');
// paragrafo.innerHTML = 'Tente adivinhar o número secreto entre 1 e 10.';

let numeroSecreto = gerarNumeroAleatorio();

/*
aqui, vamos adaptar o código para uma função que vai verificar exatamente 
o que foi feito nas linhas acima, apenas para diminuir e otimizar o 
código
*/

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirTextoNaTela('h1', 'Jogo do Número Secreto');
exibirTextoNaTela('p', 'Tente adivinhar o número secreto entre 1 e 10.');

function verificarChute() {
    let chute = document.querySelector('input').value;
    console.log(chute == numeroSecreto);
}

function gerarNumeroAleatorio(){
    return parseInt(Math.random() * 10 + 1);
}

/* 
acima temos três tipos de funções: 
1) verificaChute: não contém parâmetro e retorno, porém tem retorno 
apenas no console;
2) exibirTextoNaTela: já essa função, executa um comando porém não
retorna nenhuma informação também. mas essa tem parâmetro definido
3) gerarNumeroAleatorio: não temos parâmetro mas temos um retorno na tela
com a função do 'return'
*/
