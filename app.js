let listaDeTeclas = document.querySelectorAll(".tecla");

let midias = {

    som_brasil: "./assents/EfeitosSonoros/brasil.gif",
    som_impostor: "./assents/EfeitosSonoros/impostor.gif",
    som_fahh: "./assents/EfeitosSonoros/fahh.jpg",
    som_mibombo: "./assents/EfeitosSonoros/mibombo.jpg",
    som_porta: "./assents/EfeitosSonoros/porta.png",
    som_rapaz: "./assents/EfeitosSonoros/rapazjpg.jpg",

    som_barbie: "./assents/Memes/barbie.jpeg",
    som_berinjela: "./assents/Memes/berinjela.jpg",
    som_creu: "./assents/Memes/creu.gif",
    som_haramball: "./assents/Memes/haramball.gif",
    som_pegaramtelefone: "./assents/Memes/pegaramtelefone.mp4",
    som_vamoquerer: "./assents/Memes/vamoquerer.mp4",

    som_bemtivi: "./assents/Animais/bemtivi.jpg",
    som_elefante: "./assents/Animais/elefante.jpg",
    som_gato: "./assents/Animais/gato.jpg",
    som_leao: "./assents/Animais/leao.jpg",
    som_lobo: "./assents/Animais/lobo.jpg",
    som_macaco: "./assents/Animais/macaco.png"
};


function tocarSom(audio, midia){

    document.querySelectorAll("audio").forEach(function(som){
        som.pause();
        som.currentTime = 0;
    });

    document.querySelector(audio).play();

    let imagem = document.querySelector("#imagem");

    if(midia.endsWith(".mp4")){

        imagem.outerHTML = `<video id="imagem" src="${midia}" autoplay loop muted controls></video>`;

    }else{

        imagem.outerHTML = `<img id="imagem" src="${midia}" alt="">`;

    }
}


let contador = 0;

while(contador < listaDeTeclas.length){

    let tecla = listaDeTeclas[contador];

    let instrumento = tecla.classList[1];

    let audio = `#som_${instrumento}`;

    tecla.onclick = function(){

        tocarSom(audio, midias[instrumento]);

    };

    contador++;
}