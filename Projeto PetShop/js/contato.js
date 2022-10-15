//  js/contato.js    

function validaForm (){
    var nome = document.querySelectorAll('#nome')[0];
    var email = document.querySelectorAll('#email')[0];
    var msg = document.querySelectorAll('#mensagem')[0];
    var msg_erro = document.querySelectorAll('#msgErro');

    //REMOVE BORDA VERMELHA DO ERRO
    nome.classList.remove('erro');
    email.classList.remove('erro');
    mensagem.classList.remove('erro');

    //VALIDA NOME
    if(nome.value === ''){
        msgErro.innerHTML = 'Preencha o nome';
        nome.classList.add('erro');
        nome.focus();
        return false;
    }

    //VALIDA EMAIL
    if(email.value === ''){
        msgErro.innerHTML = "Preencha o email";
        email.classList.add('erro');
        email.focus();
        return false;
    }

    //VALIDA MENSAGEM
    if (msg.value === ''){
        msgErro.innerHTML = 'Digite sua mensagem';
        msg.classList.add('erro');
        msg.focus();
        return false;
    }


    return true;
}

var formContato = document.querySelectorAll('#contato')[0];
formContato.onsubmit = validaForm;