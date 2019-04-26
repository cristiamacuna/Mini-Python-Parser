class TablaSimbolos{
    nivelActual;
    tabla;
    
    constructor(){
        
        this.tabla = ["foo","fee"];
        this.nivelActual = -1;
    }
    insertar(id,tipo){
      var ident = new Ident(id,tipo);
      this.tabla.push(ident);
    }
    buscar(nombre){
    var temp = null;
    //console.log(this.tabla);
    for (var ident in this.tabla) {
      console.log(ident);
      if (ident.getText() == nombre) {
        temp = id;
      }

    }
      return temp;
    }
   
    Ident = class{
        token;
        type;
        nivel;
      
        constructor(theToken, type){
            this.token = theToken;
            this.type = type;
            this.nivel = nivelActual;
      
        }
       }
   

}