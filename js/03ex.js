
 function Ordinador(ram,cap,polz,marca,model) {
    //tipeof.marca!="string"
   
    if (ram==null||isNaN(ram)){
      ram=4;
    }
    if (polz==null||isNaN(ram)){
      polz=17;
    }
    if(cap==null||isNaN(ram)){
      cap=512;
    }
    
    this.ram=ram;
    this.polz=polz;
    this.cap=cap;
    

console.log(model);

  marca=finestraRequerit(marca,"marca");  

   this.marca=marca;
  
    model=finestraRequerit(model,"model");  
  
     this.model=model;  
console.log(model);

}
Ordinador.prototype={

toString(){

var detalls;
detalls="<h1>Detalls de l'ordinador</h1>";
detalls+="<h2>Marca: "+this.marca+"</h2>";
detalls+="<h2>Model: "+this.model+"</h2>";
detalls+="<h2>Memòria Ram: "+this.ram+" GB</h2>";
detalls+="<h2>Capacitat del Disc Dur:"+this.cap+" GB</h2>";
detalls+="<h2>Polzades:"+this.polz+ "polzades</h2>";
if(this.autonomia!=undefined){
  detalls+="<h2>Autonomia:"+this.autonomia+ "Hores</h2>";
}
return detalls;
},
portatil(autonomia){
this.ram=4;
this.cap=256;
this.polz=12;
if(autonomia==undefined||autonomia==null||autonomia==""){
  this.autonomia=4;}else {this.autonomia=autonomia;}


}
}
function finestraRequerit(camp,text){
  while (camp==undefined||camp==null||camp==""){
    camp = prompt("El camp "+text+" és requrit");
  }
  return camp;
  }

var ord1=new Ordinador();
document.write(ord1.toString());
ord1.portatil()
///document.write(ord1.toString());
