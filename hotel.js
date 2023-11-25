const prompt=require("prompt-sync")({sigint:true}); 
const readline = require('readline-sync');
// rooms details 

let chambres =[
    {nmrchambre: 1 , type : 'simple' ,prix : 50 ,disponible : true},
    {nmrchambre: 2 , type : 'double' ,prix : 150 ,disponible : true},
    {nmrchambre: 3 , type : 'suite' ,prix : 500 ,disponible : true},
    {nmrchambre: 4 , type : 'double' ,prix : 500 ,disponible : true},
    {nmrchambre: 5 , type : 'suite' ,prix : 500 ,disponible : true},
    {nmrchambre: 6 , type : 'simple' ,prix : 500 ,disponible : true},
    {nmrchambre: 7 , type : 'simple' ,prix : 500 ,disponible : true},

]
// client data
let clientinfo=[]


// catalog des chambres

function afficher_chambres_disponibles() {
    console.log("Chambres disponibles :");
    for (const nmrchambre in chambres) {
      const chambre = chambres[nmrchambre];
      if (chambre.disponible) {
        console.log(`Chambre ${chambre.nmrchambre} - Type: ${chambre.type} - Prix: ${chambre.prix} dh par nuit`);
      }
    }
   
  }



function effectuer_reservation(){
    let choix = readline.keyInYNStrict("\nest-ce-que vous etes intersse lun de cette chambre?")

if(choix){
    let nmrch = parseInt (prompt("numero de chambres? "))

    const chambre = chambres.find(room => room.nmrchambre === nmrch);

    if (chambre) {
      if (chambre.disponible) {
        chambre.disponible = false;
        let nomclient = prompt("votre nom et prenom? ")

        clientinfo.push(nmrch, nomclient)
        console.log(`\nreservation effectuer , tarif ${chambre.prix} dh par nuit\n`)
  
    }else{console.log("chambre its not available")}

   
}else{
    console.log("merci")
}
 
}


}

function afficher_reservation(){
    console.log("chambre reservee:\n")
    for (const nmrchambre in chambres) {
            const chambre = chambres[nmrchambre];
            if (!chambre.disponible ) {

              console.log(`client : ${clientinfo[1]} - Chambre ${chambre.nmrchambre} - Type: ${chambre.type} - Prix: ${chambre.prix} dh par nuit \n`);
            }
          }

}

// console.log(clientinfo)
afficher_chambres_disponibles();
effectuer_reservation();
afficher_reservation();