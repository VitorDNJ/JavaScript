// Variáveis, tipos de dados e operadores

// Exercício 1:
let idade = 25;
let peso = 70;
console.log("Idade: ", idade);
console.log("Peso: ", peso);

// Exercício 2:          
const PI = 3.14159;
console.log("O valor de PI é: ", PI);

// Exercício 3:
let númeroMáximo = Number.MAX_VALUE;
console.log("Número Máximo: ", númeroMáximo);

// Exercício 4:
let nome = "Vitor";
let sobrenome = "Justino";
let nomeSobrenome = nome + " " + sobrenome;
console.log("Seu nome é: ", nomeSobrenome);

// Exercício 5:
let num1 = 50;
let num2 = 30;
let soma = num1 + num2;
console.log("A soma é: ", soma);

// Exercício 6:
let bool1 = true;
let bool2 = false;
console.log("AND: ", bool1 && bool2);  // E lógico: retorna verdadeiro se ambas as expressões são verdadeiras e falso nos demais casos.
console.log("OR: ", bool1 || bool2);   // OU lógico: retorna verdadeiro se pelo menos uma das expressões é verdadeira e falso se todas são falsas.
console.log("NOT: ", !bool1);          // NÃO lógico: retorna verdadeiro se o operador é falso e vice-versa.

// Exercício 7:
let n1 = 10;
let n2 = 20;
let n3 = 30;
console.log("n1 < n2: ", n1 < n2);   // Compara se o valor n1 é menor que o n2.
console.log("n2 > n3: ", n2 > n3);   // Compara se o n2 é maior que o n3.
console.log("n1 == n3: ", n1 == n3); // Compara se o n1 é igual ao n3.

// Exercício 8:
let num = 10;
num++;
console.log("Número incrementado: ", num);

// Operadores Condicionais
// Exercício 9:
function verificarNumero(num){
    if(num >0) {
        console.log("O número é positivo"); } 
    else if (num <0) {
        console.log("O número é negativo"); }
    else{
        console.log("O número é zero");}
}
verificarNumero(10); // Imprime o número é positivo
verificarNumero(-5); // Imprime o número é negativo
verificarNumero(0);  // Imprime o número é zero
verificarNumero(25); // Imprime o número é positivo

// Exercício 10:
function calcularMedia(nota1, nota2){
    var media = (nota1 + nota2) / 2 ;
    if(media>= 7){
    console.log("Aluno aprovado com a média: " + media);
    } else { 
    console.log("Aluno reprovado com a média: " + media);
    }
}
calcularMedia(8, 6); // Imprime: Aluno aprovado com a média: 7
calcularMedia(5, 6); // Imprime: Aluno reprovado com a média: 5.5

// Exercício 11:
function podeVotar(idade){
    if (idade >=18 && idade <70){
        console.log("Voto obrigatório.");
    } else if( (idade>=16 && idade <18) || idade >= 70 ){
        console.log("Voto facultativo.");
    } else {
        console.log("Não vota.");
    }
}
podeVotar(15); // Imprime: Não vota.
podeVotar(16); // Imprime: Voto facultativo.
podeVotar(18); // Imprime: Voto obrigatório.
podeVotar(70); // Imprime: Voto facultativo.

// Exercício 12:
function situacaoEstudante(mediaFinal){
if(mediaFinal >= 7){
    console.log("Aprovado.");
} else if (mediaFinal >=5 && mediaFinal < 7){
    console.log("Em recuperação.")
} else {
    console.log("Reprovado.")
}
}
situacaoEstudante(7); // Imprime: Aprovado.
situacaoEstudante(6); // Imprime: Em recuperação.
situacaoEstudante(4); // Imprime: Reprovado.

// Exercício 13:
function calcularIMC(peso, altura){
    var imc = peso / (altura * altura);
    if(imc <18.5){
        console,log("Abaixo do peso");
    } else if(imc >= 18.5 && imc <25){
        console.log("Peso normal.");
    } else if(imc >=25 && imc <30){
        console.log("Sobrepeso");
    } else{
        console.log("Obesidade.")
    }
}
calcularIMC(60 , 1.7); // Imprime: Peso normal
calcularIMC(80 , 1.7); // Imprime: Sobrepeso
calcularIMC(90 , 1.7); // Imprime: Obesidade

// Exercício 14: 
function verificarBissexto(ano){
    if ((ano % 4 == 0 && ano % 100 !=0 ) || (ano % 400 == 0)){
        console.log(ano + " é um ano bissexto");
    } else {
        console.log(ano + " não é um ano bissexto");
    }
}
verificarBissexto(2000); // Imprime: 2000 é um ano bissexto
verificarBissexto(2001); // Imprime: 2001 não é um ano bissexto
verificarBissexto(2028); // Imprime: 2028 é um ano bissexto