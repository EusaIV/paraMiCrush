function moverPoaicionRandom(elm){
    elm.style.position = 'absolute';
    elm.style.top = Math.random() * (window.innerHeight - elm.offsetHeight) + 'px';
    elm.style.left = Math.random() * (window.innerWidth - elm.offsetWidth) + 'px';

}

let btn_si = document.getElementById('boton_si');
let btn_no = document.getElementById('boton_no');
let modo_sexo = document.getElementsByClassName('modo_sexo')[0]

btn_no.addEventListener('mouseenter', function(e) {
    moverPoaicionRandom(e.target);
})

btn_si.addEventListener('click', function(e){
    alert('sabia de que dirias que si :3 TE AMO !!!!!')
    modo_sexo.style.display = 'block'
    const cancion = new Audio('img\\modo_hot.mp3');
    cancion.play();
})