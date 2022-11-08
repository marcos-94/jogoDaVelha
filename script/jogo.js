let quadro = ['','','','','','','','',''];
let vezJogador = 0;
let simbolo = ['o', 'x'];
let fimDeJogo = false;
let jogadores = ["escudo", "espada"];
let vencedor = [];
let statusDeVitoria = [
    [ 0, 1, 2],
    [ 3, 4, 5],
    [ 6, 7, 8],
    [ 0, 3, 6],
    [ 1, 4, 7],
    [ 2, 5, 8],
    [ 0, 4, 8],
    [ 2, 4, 6],

];

function tratarMovimento(pos){
    if(fimDeJogo){
        return;
    };
    if(quadro[pos] == ''){
        quadro[pos] = simbolo[vezJogador];
        vencedor = jogadores[vezJogador];
        fimDeJogo = quemVenceu();
        if(fimDeJogo == false){
            if(vezJogador == 0){
                vezJogador = 1
            }else{
                vezJogador = 0
            };
        };
    };
    return fimDeJogo;
};

function quemVenceu(){
    for(let i = 0; i < statusDeVitoria.length; i++){
        let seq = statusDeVitoria[i];
        let pos1 = seq[0];
        let pos2 = seq[1];
        let pos3 = seq[2];
        if(quadro[pos1] == quadro[pos2] && 
            quadro[pos1] == quadro[pos3] &&
            quadro[pos1] != ''){    
            return true  
        };
    };
    return false;
};

