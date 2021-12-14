let UserEmail = ['marco@gmail.com', 'luca@gmail.com' , 'mattia@gmail.com']
let mailCorretta = false;

let accedi = prompt("Digita la tu mail");

for (let index = 0; index < UserEmail.length; index++) {
    
    if(accedi == UserEmail[index]){
        mailCorretta = true;
        alert("l'" + "email " + accedi + " è " + "corretta");
        console.log("benvenuto");

    }else{
        alert("L'utente non è autorizzato");
        console.log("utente non autorizzato, si prega di riprovare");
        
    }
    
}