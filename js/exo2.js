/*function user(prenom,nom,paysResidence,age,mPayement){
  this.prenom = prenom;
  this.nom = nom;
  this.paysResidence = paysResidence;
  this.age = age;
  this.mPayement = mPayement.split(",");
  this.alertPrenom = function (prenom) {
        alert(this.prenom);
    };
  this.alertNom = function(nom){
        alert(this.nom);
  };
  this.anneeNaissance = function(mPayement){
    var date = new Date();
    console.log(date);
    var annee = date.getFullYear();
    var anneeNaissance = annee - age;
    alert(anneeNaissance);
  };
}

var baptiste = new user("baptiste","ventura","france","25","mastercard, visa");
/*
baptiste.alertPrenom();
baptiste.alertNom();
baptiste.anneeNaissance();*/

/*
var verificationUser ={
  paysAutorise : ["france","allemagne","Suede"],
  payementAutorise:["mastercard","CB","visa"],
  ageMinimum : 18,

  verificationAge : function(age){
    if (age > this.ageMinimum){
      alert("bienvenu "+baptiste.prenom);
    }
    else{
      alert("vous ne pouvez pas entrer");
    }
  },
  verificationPays : function(paysResidence){
    for (var i = 0; i < this.paysAutorise.length; i++) {
      if (this.paysAutorise[i] == paysResidence) {
        alert("vous êtes dans le bon pays");
        return "";
      }
      else{
        alert("perdu");
      }
    }
  },
  verificationPayement : function(mPayement){
    console.log(baptiste.mPayement);
    console.log(this.payementAutorise);
    for (var i = 0; i < this.payementAutorise.length; i++) {
      for (var j = 0; j < baptiste.mPayement.length; j++) {
        if (this.payementAutorise[i]==mPayement[j]) {
          alert("vous pouvez acheter");
          return "";
        }
        else{
          var erreur= 0;
          erreur++;
          if(erreur == this.payementAutorise.length){
            alert("vous pouvez pas acheter");
          }
        }
      }
    }
  },
  lancement : function(){
    verificationUser.verificationAge(baptiste.age);
    verificationUser.verificationPays(baptiste.paysResidence);
    verificationUser.verificationPayement(baptiste.mPayement);
  },
};
verificationUser.verificationPayement(baptiste.mPayement);
/*
verificationUser.verificationAge(baptiste.age);
verificationUser.verificationPays(baptiste.paysResidence);

verificationUser.lancement();*/
/*




/******************************************/
/******************************************/
/******************************************/
/**********************Exo 2***************/
/******************************************/
/******************************************/
/******************************************/
/******************************************/


/*

function guerrier(nom,attaque,defense,vie){
  this.nom = nom,
  this.attaque = attaque,
  this.defense = defense,
  this.vie = vie,

  this.attaqueGuerrier = function(ennemy){
    while(this.vie > 0 && ennemy.vie > 0){
      this.vie -= ennemy.attaque - this.defense;
      ennemy.vie -= this.attaque - ennemy.defense;
      console.log(this.nom+" "+this.vie +" "+ennemy.nom+" "+ ennemy.vie);
    }
    if (this.vie > 0) {
      alert(this.nom + " gagne!");
    }
    else {
      alert(ennemy.nom+ " gagne!");
    }
  }
}

function magicien(nom, attaque, defense, vie, mana){
  this.nom = nom,
  this.attaque = attaque,
  this.defense = defense,
  this.vie = vie,
  this.mana = mana,

  this.soin = function(){
    if(mana > 10){
      this.vie += 10;
      this.mana -= 10;
    }
    else {
      console.log("plus assez de mana");
    }
  }
  this.bouleDeFeu = function(guerrier1, guerrier2){
    guerrier1.vie -= this.attaque;
    guerrier2.vie -= this.attaque;
  }

  this.attaqueMage = function(guerrier1, guerrier2){

    while (this.vie > 0 && guerrier1.vie > 0 || guerrier2.vie > 0) {

      this.vie -= guerrier1.attaque - this.defense;
      this.vie -= guerrier2.attaque - this.defense;
      this.soin();
      this.bouleDeFeu(guerrier1, guerrier2);
      console.log(this.vie +" "+guerrier1.vie+" "+guerrier2.vie);
    }

    if (this.vie > 0) {
      alert(this.nom+ " gagne!");
    }
    else{
      alert(guerrier1.nom +" et "+guerrier2+" gagnent!");
    }
  }
}

var illidan = new guerrier("illidan","23","15","50");
var arthas = new guerrier("arthas","18","20","60");
var kadgar = new magicien("kadgar", "20", "10","40","60");
//arthas.attaqueGuerrier(illidan);
kadgar.attaqueMage(arthas, illidan);
*/



/******************************************/
/******************************************/
/******************************************/
/**********************Exo 3***************/
/******************************************/
/******************************************/
/******************************************/
/******************************************/




function recupDonnee(){
      var donnee = [];
      var recupTitre = $("#titre").val();
      donnee.push(recupTitre);
      var recupAccroche = $("#accroche").val();
      donnee.push(recupAccroche);
      var recupDescription = $("#description").val();
      donnee.push(recupDescription);
      console.log(donnee);
      var nouvelObjet = new ficheProduit(donnee[0],donnee[1],donnee[2]);
      nouvelObjet.creationFiche(titre, accroche, description);
}

function ficheProduit(titre, accroche, description){
  this.titre = titre,
  this.accroche = accroche,
  this.description = description,

  this.creationFiche = function(){
    console.log(this.titre);
    $("#resultat").append("<article class='"+this.titre+"  ficheProduit'></article>");
    $("."+this.titre).append("<h2>"+this.titre+"</h2>");
    $("."+this.titre).append("<h3>"+this.accroche+"</h3>");
    $("."+this.titre).append("<p>"+this.description+"</p>");
    $("#titre").val("");
    $("#accroche").val("");
    $("#description").val("");
    }
}


/************************************************/
/*******************************************************/
/******************************************************/
/**************************************************/
/****************************************************/
/*****************EXERCICE 4**************************/
/******************************************************/
/*****************************************************/
/********************************************************/
/**************************************************/
/*
  function recherche(value1, value2){
    console.log(value1,value2);
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var ordre = [];
      var myObj = JSON.parse(this.responseText);
      document.getElementById("tabJeu").innerHTML = "";
      if (value2 == "croissant") {
        for (var i = 0; i < myObj.game.length; i++) {
          var test = 0;
          if (myObj.game[i][value1] > test){
            ordre.push(myObj.game[i][value1]);
            test = myObj.game[i][value1];
          }
          else if (myObj.game[i][value1] < test) {
            for (var j = 0; j < ordre.length; j++) {
              if (ordre[j] > value1) {
                ordre.slice(j-1, 0, myObj.game[i][value1])
                test = myObj.game[i][value1];
              }
            }
          }
          document.getElementById("tabJeu").innerHTML += "<td>" + test[i] + "</td>"+" "+ "<td>" + myObj.game[i]["nom"]+ "</td>";
          console.log(ordre);
        }
      }
      else if (value2 == "decroissant") {

      }
  };
  xmlhttp.open("GET", "exo2.json?q="+value1+value2, true);
  xmlhttp.send();}
}*/
var trie = [];
function recherche(){
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var myObj = JSON.parse(this.responseText);
    console.log(jeux.value);
    if (jeux.value == "date") {
      myObj.game.sort(function (a,b){
        if (a["date"] < b["date"]) {
          return -1;
        }
        else if (a["date"] > b["date"]) {
          return 1;
        }
        else{
          return 0;
        }
      });
        document.getElementById("tabJeu").innerHTML = "";
        for( var i in myObj.game){
          console.log(myObj.game[i]["nom"]);
          document.getElementById("tabJeu").innerHTML+="<td>" + myObj.game[i]["nom"] + "</td>"+"<td>" + myObj.game[i]["date"] + "</td>" + "<td>" + myObj.game[i]["genre"] + "</td>" + "<td>" + myObj.game[i]["editeur"] + "</td>";
        }
        console.table(myObj.game);
      }
    else if (jeux.value == "alphabet") {
      myObj.game.sort(function (a,b){
        if (a["nom"] < b["nom"]) {
          return -1;
        }
        else if (a["nom"] > b["nom"]) {
          return 1;
        }
        else{
          return 0;
        }
      });
      document.getElementById("tabJeu").innerHTML = "";
      for( var i in myObj.game){
        console.log(myObj.game[i]["nom"]);
        document.getElementById("tabJeu").innerHTML+="<td>" + myObj.game[i]["nom"] + "</td>"+"<td>" + myObj.game[i]["date"] + "</td>" + "<td>" + myObj.game[i]["genre"] + "</td>" + "<td>" + myObj.game[i]["editeur"] + "</td>";
      }
      console.table(myObj.game);
    }

    }
  }
  xmlhttp.open("GET", "exo2.json", true);
  xmlhttp.send();}
