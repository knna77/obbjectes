




//Creem un constructor de punts que rep dos coordenades
 function Punt(x,y) {
   //si el valor passat no és un número la coordenada x valdrà 0, el mateix passa en la coordenada y
    if(isNaN(x)){
        x=0;
      }
       this.coordX=x;
       
      if(isNaN(y)){
        y=0;
      }
      this.coordY=y; 
      function cambiar(x) {
        this.coordX=x;
       }      
	}

  
Punt.prototype={
cambiar(x,y){
  this.coordX=x;
  this.coordY=y;
},
copia(){
    
  return this;
  },
  suma(punt2){
    
     var x1= parseInt(this.coordX);
     var y1= parseInt(this.coordY);
    
     var x2= punt2.coordX;
     var y2= punt2.coordY
   
     var x3=x1+x2;
     var y3=y1+y2;
   
     console.log("valorx",x3);
   punt3=new Punt(x3,y3);
   return punt3;
   }

}

 


     
  punt=new Punt("hola",3);
  puntet=new Punt(1,1);
  console.log("x=",punt.coordX," y=",punt.coordY);

	 punt.cambiar(5,1);
  console.log("cambiar--->x=",punt.coordX," y=",punt.coordY);

puntCop=punt.copia();
console.log("copia--->x=",puntCop.coordX," y=",puntCop.coordY);
var puntSum=punt.suma(puntet);
console.log("suma--->x=",puntSum.coordX," y=",puntSum.coordY);