
var altura = 0;
var largura = 0;
var vidas = 1;
var tempo = 15;

var criaMosquitoTempo = 1500

var nivel = window.location.search
nivel = nivel.replace('?', '')

if(nivel === 'normal') {
    criaMosquitoTempo = 750
}

else if(nivel === 'dificil') {
    criaMosquitoTempo = 650
}

else if (nivel === 'darksouls') {
    criaMosquitoTempo = 550
}

function ajustaTamanhoPalcoJogo () {

     altura = window.innerHeight;
     largura = window.innerWidth;

    // 919 1920
}

ajustaTamanhoPalcoJogo()


var cronometro = setInterval(function() {
    tempo -= 1;
    document.getElementById('cronometro').innerHTML = tempo;
    if(tempo < 0) {
        clearInterval(cronometro);
        clearInterval(criaMosca);
        window.location.href = 'vitoria.html'
     alert('Vitoria');
    }
}, 1000);


function posicaoRandomica() {
    //remover o mosquito anterior
    if(document.getElementById('mosca')) {
    document.getElementById('mosca').remove()
    
    if(vidas >3){
        window.location.href = 'fim_de_jogo.html'
    }

    else {
    document.getElementById('v' + vidas).src="imagens/coracao_vazio.png"
    vidas++;
    }
}    

    var posicaoX = Math.floor(Math.random() * largura) - 90 ;
    var posicaoY = Math.floor(Math.random() * altura) - 90 ;
    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY

    console.log(posicaoX,posicaoY)

    //Criar o elemento html

    var mosca = document.createElement('img');
    mosca.src = 'imagens/mosca.png'
    mosca.className = tamanhoAleatorio() + ' '  + ladoAleatorio()
    mosca.style.left = posicaoX + 'px'
    mosca.style.top = posicaoY + 'px'
    mosca.style.position = 'absolute'
    mosca.id = 'mosca'
    mosca.onclick = function () {
        this.remove()
    }
    document.body.appendChild(mosca);


}


function tamanhoAleatorio() {
    var classe = Math.floor(Math.random() * 3) ;
    switch(classe) {
        case 0: {

            return 'mosquito1'            
        }

        case 1: {

            return 'mosquito2'
        }

        case 2: {

           return 'mosquito3'
        }
    }

}

function ladoAleatorio () {
    var classe = Math.floor(Math.random() * 2) ;
    switch(classe) {
        case 0: {

            return 'ladoA'            
        }

        case 1: {

            return 'ladoB'
        }

 
    }

}


