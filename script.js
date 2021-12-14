const risultato = document.getElementById("risultato");//const dei risultati

let dice = document.querySelectorAll("img");//tutti i tag img ora vengono visti come dice

prompt

function gioca() {
    let dice1 = Math.floor(Math.random(0)*6 + 1);
    let dice2 = Math.floor(Math.random(0)*6 + 1);
    
    if (dice1 > dice2){
        risultato.innerHTML = '<div class="risultati">' + "HAI " + "VINTO" +'</div>';
        
    }else if (dice1 < dice2){
        risultato.innerHTML = '<div class="risultati">' + "HAI " + "PERSO" +'</div>';

    }else if (dice1 == dice2){
        risultato.innerHTML = '<div class="risultati">' + "PAREGGIO" +'</div>';

    };//gen numeri dei dadi

    console.log(dice1 , dice2);

    if (dice1 == 1){
        document.getElementById("dado1").src = "img/dice-1.svg";
        
    }else if (dice1 == 2){
        document.getElementById("dado1").src = "img/dice-2.svg";
        
    }else if (dice1 == 3){
        document.getElementById("dado1").src = "img/dice-3.svg";
        
    }else if (dice1 == 4){
        document.getElementById("dado1").src = "img/dice-4.svg";
        
    }else if (dice1 == 5){
        document.getElementById("dado1").src = "img/dice-5.svg";
        
    }else if (dice1 == 6){
        document.getElementById("dado1").src = "img/dice-6.svg";
        
    };//cambio immagini del primo dado

    if (dice2 == 1){
        document.getElementById("dado2").src = "img/dice-1.svg";
        
    }else if (dice2 == 2){
        document.getElementById("dado2").src = "img/dice-2.svg";
        
    }else if (dice2 == 3){
        document.getElementById("dado2").src = "img/dice-3.svg";
        
    }else if (dice2 == 4){
        document.getElementById("dado2").src = "img/dice-4.svg";
        
    }else if (dice2 == 5){
        document.getElementById("dado2").src = "img/dice-5.svg";
        
    }else if (dice2 == 6){
        document.getElementById("dado2").src = "img/dice-6.svg";
        
    };//cambio immagini del secondo dado

};






