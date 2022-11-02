//console.log('Vai dá tudo certo, Não temas!')
 

const  meuUsuario = document.querySelector('header .avatar-content div');
meuUsuario.innerHTML='<strong>Meu Usuário</strong>'

//acessando input selecionado pela propriedade name

// const primeiroNomeInput =document.getElementByName('name')[0];
//primeiroNomeInput.paceholder ='Digite o seu primeiro nome'

const primeiroNomeInput = document.querySelector('.form-auth input[type="text"]')
primeiroNomeInput.placeholder = 'Digite o seu primeiro nome'


//alterando as bordas os inputs do formulario
const arredondaInputs = document.querySelectorAll('.form-auth input')
arredondaInputs.forEach(input=>input.style.borderRadius = '.2rem')

const  button = document.querySelector('.form-auth button')
 button.style.width ='100%';

//const backgroudform = document.querySelector('.form-auth')
//backgroudform.style.backgroundColor='#E6E6FA';

 
//acessando o body diretamente para alterar a cor de fundo

const colorBody = document.body.style.backgroundColor='#fafafa'

const formAuth = document.querySelector('.form-auth')
formAuth.style.display='flex'
formAuth.style.flexDirection='column'






