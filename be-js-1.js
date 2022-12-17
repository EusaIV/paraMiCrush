const parrafoInicial = document.getElementById('parrafoInicial');

parrafoInicial.onclick = function(){
    cambiaColorAleatorio();
}
 console.log(parrafoInicial)

function cambiaColorAleatorio(){
    const colores = [
        'red',
        'black',
        'pink',
        'cyan'
    ] ;

    parrafoInicial.style.color = colores[Math.floor(Math.random() * colores.length)];
}

