const texto = document.querySelector('#input-texto')
const mensagem = document.querySelector('#mensagem')

let letrasMatriz = [
  ['e', 'enter'],
  ['i', 'imes'],
  ['a', 'ai'],
  ['o', 'ober'],
  ['u', 'ufat']
]
// console.table(letrasMatriz)

window.onload = function () {
  document.querySelector('#input-texto').focus()
  document.querySelector(".caixa-botao-copiar").style.display = "none";
}

function btnencriptar() {
  let textoEncriptado = encriptar(texto.value)
  mensagem.value = textoEncriptado
  document.querySelector(".caixa-imagem").style.display = "none";
  document.querySelector("#mensagem").style.display = "block";
  document.querySelector(".caixa-botao-copiar").style.display = "block";  
}

function encriptar(stringEncriptada) {
  stringEncriptada = stringEncriptada.toLowerCase()

  for (let i = 0; i < letrasMatriz.length; i++) {
    if (stringEncriptada.includes(letrasMatriz[i][0])) {
      stringEncriptada = stringEncriptada.replaceAll(letrasMatriz[i][0], letrasMatriz[i][1])
    }
  }
  return stringEncriptada
}

function btndesencriptar() {
  let textoDesencriptar = desencriptar(texto.value)
  mensagem.value = textoDesencriptar
  document.querySelector(".caixa-imagem").style.display = "none";
  document.querySelector("#mensagem").style.display = "block"; 
  document.querySelector(".caixa-botao-copiar").style.display = "block"; 
}

function desencriptar(stringDesencriptada) {
  stringDesencriptada = stringDesencriptada.toLowerCase()

  for (let i = 0; i < letrasMatriz.length; i++) {
    if (stringDesencriptada.includes(letrasMatriz[i][1])) {
      stringDesencriptada = stringDesencriptada.replaceAll(letrasMatriz[i][1], letrasMatriz[i][0])
    }
  }
  return stringDesencriptada
}

function copiar() {
  mensagem.value

  mensagem.select()
  mensagem.setSelectionRange(0, 99999)
 
   navigator.clipboard.writeText(mensagem.value)
 
   alert(`O Texto - ${mensagem.value} - foi copiado`)

   limpar()
}

function limpar() {
  let imagem = document.querySelector(".caixa-imagem") 
  mensagem.value = ""
  document.querySelector(".caixa-imagem").style.display = "block";
  document.querySelector("#mensagem").style.display = "none"; 
  document.querySelector(".caixa-botao-copiar").style.display = "none";

  if(innerWidth < 700) {
    imagem.style.display = "none";
  }
}