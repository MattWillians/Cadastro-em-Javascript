 //MENSAGEM DE BOAS VINDAS BONITINHA :D
function entrarNoSistema(){
    console.log('*-------------------------------------------*')
    console.log('Bem vindo ao cadastro de usuario do Matt!')
    console.log('*-------------------------------------------*');
  }
  
  //INICIA O CADASTRO E RECEBE A MENSAGEM FINAL
function perguntas_e_respostas_DeCadastro(){
    
    let nomeUsuario = prompt("Qual seu nome?");
    let idadeUsuario = prompt("Qual Sua Idade?");
    let linguagemEstudando = prompt("Qual a Linguagem de Programação você esta estudando?");  
  
    let respostaDoSistema =  `Bem vindo ${nomeUsuario}, Segundo seu cadastro, você tem ${idadeUsuario} e esta estudando ${linguagemEstudando}`;
    alert(respostaDoSistema)
        
    let gostaDeEstudar = prompt(`Você gosta de estudar ${linguagemEstudando}? 1 - SIM, 2 - NÃO`)
    
    if (gostaDeEstudar == 1){
        alert("Muito bom! Continue seus estudos")
    } 
    if (gostaDeEstudar == 2){
        alert("Poxa... ja tentou aprender outras linguagens? :D")
    }
  }

  // CARREGAR FUNÇÕES
  entrarNoSistema();
  perguntas_e_respostas_DeCadastro();
