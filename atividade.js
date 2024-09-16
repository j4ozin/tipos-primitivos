//OBS: alguns "console.log" estão como comentarios, para que os outros testes no console pudessem ser realizados sem aparecer varios resultados.

//Declaração de Variáveis
var nome = "João Basante"; //string
var idade = 24; //inteiro
var cidade = "Recife"; //string
var num1 = 7; //inteiro
var num2 = 3; //inteiro
var base = 12; //inteiro
var altura = 10; //inteiro
var nota1 = 8; //inteiro
var nota2 = 6; //inteiro
var nota3 = 7.5; //floats
var produto = 100; // inteiro
var salariobruto = 4300; //inteiro 
var reais = 1000; //inteiro
var taxacambio = 5.75; //floats
var celsius = 28; //inteiro
var peso = 60; //inteiro
var alturaPessoa = 1.60 //floats

//console.log("Olá, meu nome é " + [nome] + ", tenho " + [idade] + " anos, e sou de " + [cidade] + ".");


//Calculos com variáveis (num1 & num2)
result1 = (num1 + num2);
result2 = (num1 - num2);
result3 =(num1 * num2);
result4 =(num1 / num2);

//console.log(result1,result2,result3,result4);


//Calculo área do triângulo
areatriangulo = (base * altura)/2;

//console.log("A área do triângulo é: " + [areatriangulo]);

//Calculo média
media = (nota1 + nota2 + nota3)/3;

//if (media > 7) {
    //console.log("O resultado da média é: " + [media] + ", Aluno aprovado!");
//} else {
//  console.log("O resultado da média é: " + [media] + ",aluno reprovado!")
//} 


//Desconto

desconto = produto * (20/100);
precofinal = produto - desconto;

//console.log("Parabéns, você foi o cliente de número 10, seu produto terá um desconto de: " + [desconto] + "%. Assim seu preço final ficará: " + [precofinal] + " R$.");

//Imposto de renda

aliquota = 7/100;
deducao = Math.floor(salariobruto * aliquota);
resto = salariobruto - deducao;

//console.log("Sua dedução do imposto de renda foi de: " + [deducao] + " R$. e o resto do seu saldo será: " + [resto] + " R$.");


//Conversor de moedas

dolar = Math.floor(reais/taxacambio);

//console.log("A conversão da taxa de câmbio resulta em: " + [dolar] + " doláres.");

//Conversor celsius p/ fahrenheit

fahrenheit = Math.floor((celsius * 9/5) + 32);

//console.log("A conversão de celsius para fahrenheit resulta em: " + [fahrenheit] + "°");

//Calculadora IMC (índice de massa corporal)

imc = peso / (alturaPessoa * alturaPessoa).toFixed(2);

if (imc > 18.5 && imc < 24.9) {
    console.log(imc + " O seu IMC está classificado como: normal");
} else if (imc < 18.5) {
    console.log(imc + " O seu IMC está classificado como: magreza");    
} else {
    console.log(imc + " O seu IMC está classificado como: obeso");
}

