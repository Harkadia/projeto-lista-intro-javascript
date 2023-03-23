// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
const alt = Number (prompt ("altura"))
const lar = Number (prompt ("largura"))
const area = alt * lar
console.log (area)


}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  const atual = Number(prompt("Digita seu ano atual"))
  const nasci = Number(prompt("Digita seu ano de nascimento"))
  const idade = atual - nasci
  console.log (idade)


}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  const imc = peso/(altura*altura)
return imc



}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  const nomes = prompt("Digita sua idade")
  const idade = prompt("Digita sua idade")
  const email = prompt("Digita seu nome")
  return console.log (`Meu nome é ${nomes}, tenho ${idade} anos, e o meu email é ${email}.`)
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  const corprimeira = prompt ("qual sua primeira cor prferida")
  const corsegunda = prompt ("qual sua segunda cor prferida")
  const corterceira = prompt ("qual sua terceira cor prferida")
  const varias = [corprimeira, corsegunda,corterceira]
  console.log(varias)

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  const retornastringmaiuscula = string.toUpperCase()
  return retornastringmaiuscula

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
const teatro = custo/ valorIngresso
return teatro
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  return string1.length===string2.length

}
checaStringsMesmoTamanho("melao, abacate")


// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
return array [0]
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
return array  [array.length -1]
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  const troca = array [0]
  const troca1 = array [array.length-1]
  array [0] = troca1
  array [array.length-1] = troca
  return array

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
return string1.toLowerCase ()=== string2.toLowerCase()

}
checaIgualdadeDesconsiderandoCase()
// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
  const anoAtual = Number(prompt ( 'Digite o ano atual: '));   
  const anoNascimento = Number(prompt('Digite o ano em que você nasceu '));   
  const Rg = Number(prompt ('Digite ano de emissão do RG: '));    
  const idade = anoAtual - anoNascimento;   const idadeRg = anoAtual - Rg;   
  const renovaAte20Anos = (idade <= 20) && (idadeRg >= 5);   
  const renovaAte50Anos = (idade > 20) && (idade <= 50) && (idadeRg >= 10);   
  const renovaAcima50Anos = (idade >50) && (idadeRg >= 15);   
  console.log(renovaAte20Anos ||renovaAte50Anos || renovaAcima50Anos);

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
  return ((ano % 4 == 0) && (ano % 100 != 0)) || (ano % 400 == 0);
}
checaAnoBissexto()

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
const anos18 = prompt ("voce tem mais de 18 anos")
const medio = prompt ("voce possui ensino medeio completo")
const horario = prompt ("voce possui disponibilidade exclusiva durante os horarios do curso")
if(anos18==="sim"&& medio==="sim" && horario==="sim"){
  console.log (true)
  
} else{
  console.log (false)
}
}
