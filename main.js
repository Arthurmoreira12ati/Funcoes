//bloco de código que desempenha um papel especifico que só será executado quando for chamado

/*
EXEMPLO 1

function somar() {
    alert("Seja muito bem-vinda(a)!")
    console.log("Mais uma vez, seja bem-vindo(a)")
}

*/

/*
EXEMPLO 2

function somar(valor1, valor2) {
    alert(valor1 + valor2)
}

somar(30,40)
*/

/*
EXEMPLO 3

function mensagemPessoal(nome, cargo, anosTrabalhados) {
    alert('Seja bem-vindo(a) ${cargo} ${nome}. Estamos felizes por ter você trabalhando conosco há ${anosTrabalhados} anos.')
}

mensagemPessoal ("Lucas", "Gerente", 10)
mensagemPessoal ("Irineu", "Você não sabe, nem eu", 50)
*/

/*
EXEMPLO 4

function somarEDevolver(numero1, numero2, numero3) {
    let resultado = numero1 + numero2 + numero3
    return resultado
}

// guardar numa variavel ou guardar em qualquer lugar no codigo
let soma1 = somarEDevolver(10, 11, 12)
let soma2 = somarEDevolver(30, 40, 50)

alert(soma1)
alert(soma2)
*/

/*
EXEMPLO 5
function parOuImpar(numero) {
    if (numero % 2 === 0) {
        return "PAR"
    } else {
        return "IMPAR"
    }    
}

let resultado1 = parOuImpar(10)
let resultado2 = parOuImpar(15)

alert('O número 10 é ${resultado1}')
alert('O número 15 é ${resultado2}')
*/

/* 
EXEMPLO 6 - funções anônimas 

document.querySelector("button").addEventListener("click", function() { 
    alert("Clicou no botão") 
}) 
*/

/* 
EXEMPLO 7-arrow functions 

document.querySelector("button").addEventListener("click", () => { 
    alert("Clicou no botão") 
}) 
*/

/*
EXEMPO - arrow functions com variaveis

let somar = (valor1, valor2) => {
    return valor1 + valor2
}

let resultadoSoma = somar(20, 30)

alert(resultadoSoma)
*/
