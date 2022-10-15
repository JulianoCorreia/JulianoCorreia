// js/galeria.js

function atualizaDog() {  
    var cachorrao = document.querySelectorAll('#cachorrao')[0];
    cachorrao.src = this.src;

    var raca = document.querySelectorAll('#raca')[0];
    raca.innerHTML = this.alt;
    
    var ativoAtual = document.querySelectorAll('.ativo')[0];
    ativoAtual.classList.remove('ativo');

    this.classList.add('ativo');
}
var minis = document.querySelectorAll('.miniaturas img');
for (var i = 0; i < minis.length; i++) {
    minis[i].onclick = atualizaDog;
}