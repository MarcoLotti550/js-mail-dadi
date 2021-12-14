const risultato = document.getElementById("risultato");//const dei risultati

let dice = document.querySelectorAll("img");//tutti i tag img ora vengono visti come dice
let playerPoints = (0);
let cpuPoints = (0);
document.getElementById("playerPoints").innerHTML = playerPoints;
document.getElementById("cpuPoints").innerHTML = cpuPoints;

function gioca() {
    let dice1 = Math.floor(Math.random(0)*6 + 1);
    let dice2 = Math.floor(Math.random(0)*6 + 1);
    
    if (dice1 > dice2){
        risultato.innerHTML = '<div class="risultati">' + "HAI " + "VINTO" +'</div>';
        playerPoints = (playerPoints + 1);
        document.getElementById("playerPoints").innerHTML = playerPoints;

    }else if (dice1 < dice2){
        risultato.innerHTML = '<div class="risultati">' + "HAI " + "PERSO" +'</div>';
        cpuPoints = (cpuPoints + 1);
        document.getElementById("cpuPoints").innerHTML = cpuPoints;

    }else if (dice1 == dice2){
        risultato.innerHTML = '<div class="risultati">' + "PAREGGIO" +'</div>';

    };//gen numeri dei dadi

    console.log(dice1 , dice2);

    document.getElementById("dado1").src = 'img/dice-'+dice1+'.svg';
    //cambio immagini del primo dado

    document.getElementById("dado2").src = 'img/dice-'+dice2+'.svg';
    //cambio immagini del secondo dado

};



