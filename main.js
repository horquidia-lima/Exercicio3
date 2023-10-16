// 1 - Crie um script que exiba a mensagem "Hello World!" em um alerta no navegador.
console.log("Hello World!")

// 2 - Crie um script que declare duas variáveis e exiba o resultado da soma entre elas.
let numberOne = 10
let numberTwo = 20
let sum = numberOne + numberTwo
console.log(sum)

/* 3 - Crie um script que declare uma variável e verifique se o seu valor é um número. Se for, exiba a mensagem "É um número", caso contrário, exiba a mensagem "Não é um número".
💡 Para saber o tipo de dado você pode usar o operador `typeof`*/

let verificarValor = 3
let verificador = "hello world"
console.log(typeof(verificarValor))
if(typeof(verificarValor) == typeof(verificador)){
  console.log("Não é um número")
}else{
  console.log("É um número")
}

// 4 - Crie um script que declare uma variável e verifique se o seu valor é uma string. Se for, exiba a mensagem "É uma string", caso contrário, exiba a mensagem "Não é uma string".

let verificarValorTwo = "quida"
let verificadorTwo = "hello world"
console.log(typeof(verificarValorTwo))
if(typeof(verificarValorTwo) == typeof(verificadorTwo)){
  console.log("É uma string")
}else{
  console.log("Não é uma string")
}

// 5 - Crie um script que declare uma variável e verifique se o seu valor é um booleano. Se for, exiba a mensagem "É um booleano", caso contrário, exiba a mensagem "Não é um booleano".
let verificarValorThree = false
let verificadorThree = true
console.log(typeof(verificarValorThree))
if(typeof(verificarValorThree) == typeof(verificadorThree)){
  console.log("É um booleano")
}else{
  console.log("Não é um booleano")
}

// 6 - Crie um script que declare duas variáveis e exiba o resultado da subtração entre elas.
let numberOneA = 30
let numberTwoA = 25
let sub = numberOneA - numberTwoA
console.log(sub)

// 7 - Crie um script que declare duas variáveis e exiba o resultado da multiplicação entre elas.
let numberOneB = 3
let numberTwoB = 2
let mult = numberOneB * numberTwoB
console.log(mult)

// 8 - Crie um script que declare duas variáveis e exiba o resultado da divisão entre elas.

let numberOneC = 6
let numberTwoC = 2
let div = numberOneC / numberTwoC
console.log(div)

// 9 - Crie um script que declare uma variável e verifique se o seu valor é um número par. Se for, exiba a mensagem "É um número par", caso contrário, exiba a mensagem "Não é um número par".

let valorParOimpar = 5

if(valorParOimpar % 2 == 0){
  console.log("É um número par")
}else{
  console.log("É um número ímpar")
}