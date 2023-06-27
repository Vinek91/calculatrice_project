import { Component, OnInit } from "@angular/core";

@Component({
  selector: 'app-calculatrice',
  templateUrl: './calculatrice.component.html',
  styleUrls: ['./calculatrice.component.scss']
})
export class CalculatriceComponent {

  nb: string = '';
  parenthesegauche: string = '(';
  parenthesedroite: string = ')';
  numberValue: number = 0;
  resultat: number = 0;
  messageErr : string = "Erreur sur le calcul";
  errCache : boolean = true;
  resultCache : boolean = true;
  ansCache : boolean = true;
  nbSaisie : boolean = false;
  ans : number = 0;
  resultOld : string = '';
  activeAns : boolean = false;
  
  
  
  

  // Définissez une méthode qui sera appelée lorsqu'un bouton est cliqué
  updateNb(value: number) {
    this.nbSaisie=false;
    this.resultCache=true;
    this.errCache=true;
    this.ansCache=true;
    
    this.nb += value.toString();
    console.log(this.numberValue); // Affiche la valeur mise à jour

    if(this.activeAns == true){
      this.nbSaisie=true;
      this.ansCache=false;
      
    }

  }



  soustraire(){

    this.nb += "-";

    if(this.activeAns == true){
      this.ansCache=false;
    }
  }

  addition(){

    this.nb += "+";
    if(this.activeAns == true){
      this.ansCache=false;
    }
  }
  multiplier(){
    
    this.nb += "*";
    if(this.activeAns == true){
      this.ansCache=false;
    }

  }

  diviser(){
    this.nb += "/";
    if(this.activeAns == true){
      this.ansCache=false;
    }
  }


  exposant(){
    this.nb += "**";
    if(this.activeAns == true){
      this.ansCache=false;
    }
  }

  parenthese(value:any){

    if(value == this.parenthesegauche ){
      this.nb += "(";

    }else{
      this.nb += ")";

    }
    if(this.activeAns == true){
      this.ansCache=false;
    }

  }

  virgule(){
    this.nb += ".";
    if(this.activeAns == true){
      this.ansCache=false;
    }
  }

  racine(){
    this.nb += "Math.sqrt(";
    if(this.activeAns == true){
      this.ansCache=false;
    }
    
  }
  pi() {
    this.nb += `${Math.PI}`;
    if (this.activeAns) {
      this.ansCache = false;
    }
  }
  
  methodAns(){
    this.activeAns = true;
    this.nbSaisie=true;
    this.ansCache=false;
    this.errCache=true;
    this.resultCache=true;
    this.nb=this.ans.toString();
    
  }

  supprimer(){
    this.nbSaisie=false;
    this.errCache=true;
    this.resultCache=true;
    console.log("del")
    this.nb = this.nb.substring(0, this.nb.length - 1);
  }

  supprimerTout(){
    this.nbSaisie=false;
    this.activeAns = false;
    this.resultOld='';
    this.errCache=true;
    this.resultCache=true;
    this.ansCache=true;
    this.nb="";
    this.resultat = 0;
  }

  egale(){

    this.ansCache=true;
    this.nbSaisie=true;
    console.log("Le nombre : "+this.nb)
    this.resultOld= this.nb;
    this.resultCache=false;
    this.resultat = eval(this.nb);
    this.ans = this.resultat;
    if(isNaN(this.resultat)){
      this.resultat= 0;
      this.resultCache=true;
      this.errCache=false;
    }else{
      this.resultCache=false;
    }


    this.nb='';
    this.activeAns=false;
    this.ansCache=true;
    
  }


  constructor() {} 



  
  
}
