const UserEmail = ['marco@gmail.com', 'luca@gmail.com' , 'mattia@gmail.com']
let mailCorretta = false;

let accedi = prompt("Digita la tu mail");

for (let i = 0; i < UserEmail.length; i++){
    
    if(accedi == UserEmail[i]){
        mailCorretta = true;

    }else{
        mailCorretta = false;
    };

};

if(mailCorretta = true){
    alert("l'" + "email " + accedi + " è " + "corretta");
    console.log("benvenuto");

}else if (mailCorretta = false){
    alert("L'utente non è autorizzato");
    console.log("utente non autorizzato, si prega di riprovare");
    
};

