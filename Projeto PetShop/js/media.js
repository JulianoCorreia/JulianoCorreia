//  js/media.js


//Latido logo-pet
function late(){
    var som = new Audio('media/latido.mp3');
    som.play();

}
var logo = document.querySelectorAll('#logo-pet')[0];
logo.onmouseover = late;