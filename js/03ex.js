var coses=["cadira","taula","got"];
//cridem a la funció filtro amb el pràmetres: array coses i la funció callback
filtro(coses,callback);
// creem la funció filtro que rebrà un array i una funció
 function filtro(array,funcion) {
     count=0;
for (var element of array){
  // el mètode splice ens permet borrar desde la possicio (primer paràmetre (count)) el primer element (segon pàrametre(1)) i afegir 
  // el resultat de la funció callback
   array.splice(count,1,funcion(element));

   //augmentem el contador
   count++;

}
//MOSTREM EL RESULTAT PER Consola
   console.log(coses.toString());	
 }
 //la funció callback rep un paramtre(en este cas la parula del array)
 function callback(x){
//li afegim callback a la paraula abans de guardar
  x+="->Callbback";
  //retornem el resultat
  return x;
 }
