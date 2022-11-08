document.addEventListener("DOMContentLoaded", ()=>{
    let quadrados = document.querySelectorAll(".quadrado");
    quadrados.forEach((quadrado)=>{
        quadrado.addEventListener("click", tratarClick);
    });       
});

function tratarClick(event){
    let quadrado = event.target;
    let pos = quadrado.id;
    if(tratarMovimento(pos)){
        setTimeout(()=>{
            alert("Fim de jogo - O vencedor foi o jogador " + vencedor);
        }, 20);        
    };
    atualizarQuadrado(pos);
};

function atualizarQuadrado(pos){
    let quadrado = document.getElementById(pos.toString());
    let simbolo = quadro[pos];
    quadrado.innerHTML = `<div class='${simbolo}'></div>`;
};

function limparQuadrado(){
    let quadrados = document.querySelectorAll(".quadrado");
    quadrados.forEach((quadrado)=>{
        let pos = quadrado.id;
        let simbolo = quadro[pos];
        if(simbolo != ''){
            quadrado.innerHTML = '';
            quadro[pos] = '';
            vezJogador = 0;
            fimDeJogo = false;
        };
    });
};

document.getElementById('btn').addEventListener('click', limparQuadrado);