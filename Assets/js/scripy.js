//getElementById= pege o elemento pelo id
let nome = window.document.getElementById("nome")
let email = document.querySelector("#email")
let assunto = document.querySelector("#assunto")
let nomeOK = false 
let emailOK = false 
let assuntoOK = false

nome.style.width = "30%"
email.style.width = "30%"

//function = função
function ValidaNome() {
let txtNome = document.querySelector("#txtNome")

if (nome.value.length <3) {
txtNome.innerHTML = "Nome Inválido"
txtNome.style.color = "red"
} 
else {
   txtNome.innerHTML = "Nome Válido"
   txtNome.style.color = "green" 
   nomeOK = true
     }
}

function ValidaEmail() {
let txtEmail = document.querySelector("#txtEmail")
    
   if (email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1) {
      txtEmail.innerHTML = "E-mail Inválido"
      txtEmail.style.color = "red"
}
   else {
     txtEmail.innerHTML = "E-mail Inválido"
      txtEmail.style.color = "green"
      emailOK = true
        }
} 

function ValidaAssunto() {
let txtAssunto = document.querySelector("#txtAssunto")

   if (assunto.value.length >=50) {
   txtAssunto.innerHTML = "Texto inválido, digite no máximo até 100 caracteres"
   txtAssunto.style.color = "red"
   txtAssunto.style.display = "block"
   assuntoOK = false
}
   
   else {
    txtAssunto.style.display = "none"
    assuntoOK = true 
}

}

function enviar() {
   if (nomeOK == true && emailOK == true && assuntoOK == true) {
      alert ("Formulário enviado com sucesso")
   }
   else {
  alert ("preencha o formulário corretamente antes de enviar...")

   }
} 

