



        

      //comprovem que mitja, no és un mètode ja definit per la classe Array
      if (!Array.prototype.mitja) {
        //definim el nom del nostre mètode  
        Array.prototype.mitja = function() {
            //acumulador: Acumula el valor que ens torna la funció calllback en l'última invocació.
            //valorActual: És l'element que s'està processant de l'array.
            //sumValors: És el nom de la funció fletxa, per a després ser invocada. 
            var sumValors = (acumulador, valorActual) => acumulador + valorActual ;
            //apliquem el mètode reduce al array i dáquesta manera el recorrem 
            this.reduce(sumValors);
            //finalment retornem el resultat dividint-lo per la quantitat de números que conté el array 
          return this.reduce(sumValors)/this.length;
        }
     }
     //Test (resultat per consola)
     //----------------------
     //definim un array amb números
     const nums=new Array(2,4,6,8);
     //cridem el mètode mitja i ho mostrem per consola
     console.log(nums.mitja());