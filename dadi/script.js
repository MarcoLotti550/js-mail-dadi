const risultato = document.getElementById("risultato");//const dei risultati

let dice = document.querySelectorAll("img");//tutti i tag img ora vengono visti come dice

function gioca() {
    let dice1 = Math.floor(Math.random(0)*6 + 1);
    let dice2 = Math.floor(Math.random(0)*6 + 1);
    let playerWin = document.getElementById(playerPoints);
    let cpuWin = document.getElementById(cpuPoints);
    
    if (dice1 > dice2){
        risultato.innerHTML = '<div class="risultati">' + "HAI " + "VINTO" +'</div>';
    }else if (dice1 < dice2){
        risultato.innerHTML = '<div class="risultati">' + "HAI " + "PERSO" +'</div>';

    }else if (dice1 == dice2){
        risultato.innerHTML = '<div class="risultati">' + "PAREGGIO" +'</div>';

    };//gen numeri dei dadi

    console.log(dice1 , dice2);

    document.getElementById("dado1").src = 'img/dice-'+dice1+'.svg';
    //cambio immagini del primo dado

    document.getElementById("dado2").src = 'img/dice-'+dice2+'.svg';
    //cambio immagini del secondo dado

};



