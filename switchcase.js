//algoritmo de atendimento na área da saúde

var nome = prompt("Olá, digite seu nome completo por favor.");

var resposta = prompt("Ok, te achamos no nosso sistema. Agora digite: [1] consulta, [2] pagamento, [3] remarcar, [4] duvidas");

switch (resposta) {
  case '1':
    console.log("Ok, retornaremos com data e horário para a marcação.");
    break;
  case '2':
    console.log("Certo! Iremos te encaminhar para o setor financeiro. Caso demore, você pode também entrar em contato pelo email: tesourariasaude@yopmail.com.");
    break;
  case '3':
    console.log("Essas são nossas datas disponíveis...");
    break;
  case '4':
    console.log("Entre no nosso site na aba de perguntas frequentes ou acesse nosso chatbot com IA para perguntas personalizadas.");
    break;
  default:
    console.log("Valor inválido, por favor escolha uma das opções fornecidas.");
}
