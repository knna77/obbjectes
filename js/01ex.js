




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

//Sobrescrivim  els mètodes de Punt utilitzant prototype 
Punt.prototype={
//cambiar: rep dos cordenades que maxacarà les anterios que tenia el punt(this)
cambiar(x,y){
  this.coordX=x;
  this.coordY=y;
},
//copia: ens retorna un objecte igual (this)
copia(){
    
  return this;
  },
  //suma: rep un punt i suma les cordenades amb les de this
  //
  suma(punt2){
    //convertim els strings a ints
     var x1= parseInt(this.coordX);
     var y1= parseInt(this.coordY);
    //recollim el valor de les coordenades del punt passat com a paràmetre
     var x2= punt2.coordX;
     var y2= punt2.coordY
   //sumem
     var x3=x1+x2;
     var y3=y1+y2;
   //Creem un punt en les noves coordenades
   punt3=new Punt(x3,y3);
   //Retornem el punt
   return punt3;
   }

}

 
  //Test (resultats per consola)
  //---------------------------

  //Creem un punt al que li passem un string i un número   
    punt=new Punt("hola",3); 
  //altre punt per als tests  
    puntet=new Punt(1,1);
  //ens assegurem que el construtor de punts funciona bé
    console.log("x=",punt.coordX," y=",punt.coordY);
  //Comprovem el mètode cambiar  
    punt.cambiar(5,1);
    console.log("cambiar--->x=",punt.coordX," y=",punt.coordY);
  //Comprovem el mètode copia
    puntCop=punt.copia();
    console.log("copia--->x=",puntCop.coordX," y=",puntCop.coordY);
  //Comprovem el mètode suma  
    var puntSum=punt.suma(puntet);
    console.log("suma--->x=",puntSum.coordX," y=",puntSum.coordY);