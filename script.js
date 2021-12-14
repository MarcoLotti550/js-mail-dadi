const risultato = document.getElementById("risultato");

let imgdice = ["dice-1.svg", "dice-2.svg", "dice-3.svg", "dice-4.svg", "dice-5.svg", "dice-6.svg"]; //impostiamo le immagini dei dadi come variabili

let dice = document.querySelectorAll("img");//tutti i tag img ora vengono visti come dice

function gioca() {
    let dice1 = Math.floor(Math.random(0)*6 + 1);
    let dice2 = Math.floor(Math.random(0)*6 + 1);

    if (dice1 > dice2){
        risultato.innerHTML = '<div class="risultati">' + "HAI " + "VINTO" +'</div>';
        
    }else if (dice1 < dice2){
        risultato.innerHTML = '<div class="risultati">' + "HAI " + "PERSO" +'</div>';

    }else if (dice1 == dice2){
        risultato.innerHTML = '<div class="risultati">' + "PAREGGIO" +'</div>';

    }

    console.log(dice1 , dice2);
}




