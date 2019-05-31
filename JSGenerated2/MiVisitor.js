

//Tabla de Simbolos
var Token = require('antlr4/Token');

var dentroMetodo = null;
var dentroMetodoParams = 0;
var tablaRespaldo = null;
var valorMetodo = null;
params =[];
cantParamentros= null;
nivelActual = -1;
class TablaSimbolos{
  tabla;
  
  constructor(){
      
      this.tabla = [];
     
  }



  inTable(ident){
    var inTable = null;
    for (let i = 0; i <this.tabla.length; i++) {
    
      if (this.tabla[i].token.text == ident.token.text && ident.nivel >= this.tabla[i].nivel ) {
        this.tabla[i].value = ident.value;
        inTable = this.tabla[i].token;
      }
    }
    return inTable;
  }
  insertar(id,tipo,cantParam, value){
    var ident = new Ident(id,tipo,cantParam,value);
    
    if (this.inTable(ident)== null) {
      this.tabla.push(ident);
    }
    console.log(this.tabla);
  
  }


  insertarMetodo(metodo){
    var method = metodo;

    for (let i = 0; i < method.parametros.length; i++) {
        var token = method.parametros[i];
        var valor = "undefined";
        var tipo = "undefined"
        var ident = new Ident(token,tipo,null,valor);
        method.insertar(ident);
    
    }
    
    //method.insertar()
    miTabla.insertar(method,"metodo",method.parametros.length,null);
   

  }
  buscarMetodo(nombre,cantParams){
    var temp = null;
    //console.log(this.tabla);
     
      var length = this.tabla.length;
    for (let i = 0; i <length; i++) {
  
      //console.log("Nombre: "+this.tabla[i].token.text+ " nivel: "+ this.tabla[i].nivel);
      
      if (this.tabla[i].token.nombre == nombre ){
        
        if (this.tabla[i].cantParametros != null) {
          
          if (this.tabla[i].cantParametros != cantParams) {
            return "ErrorP";
          }
          
          
        }
        
        
        temp = this.tabla[i];
  
        
      }
      
    }
  return temp;
  }
  buscar(nombre,cantParams,nivel){

    
  var temp = null;
  //console.log(this.tabla);
   
    var length = this.tabla.length;
  for (let i = 0; i <length; i++) {

    //console.log("Nombre: "+this.tabla[i].token.text+ " nivel: "+ this.tabla[i].nivel);
    
    if (this.tabla[i].token.text == nombre &&  this.tabla[i].nivel <= nivel){
      
      if (this.tabla[i].cantParametros != null) {
        
        if (this.tabla[i].cantParametros != cantParams) {
          return "ErrorP";
        }
        
        
      }
      
      
      temp = this.tabla[i];

      
    }
    
  }

    return temp;
  }

  openScope(){
    nivelActual++;
  }
  closeScope(){
    nivelActual --;
  }

 
}



Ident = class{

  constructor(theToken, type,cantParam,value){
      this.token = theToken;
      this.type = type;
      this.nivel = nivelActual;
      this.cantParametros = cantParam;
      this.value = value;
  }
    setValue(valor){
        self.value = valor;
    }
  
 }





TablaSimbolos.prototype.imprimir = function(){
    for (let i = 0; i < this.tabla.length; i++) {
        var token;
        token = this.tabla[i].token;
        console.log("Nombre " + token.getText() + "-" + this.tabla[i].nivel + "-"+this.tabla[i].type);

        
    }
}

//FIN DE TABLA DE SIMBOLOS


//almacen 
function inAlmacen(almacen,ident){
  var inTable = null;
  for (let i = 0; i <almacen.length; i++) {
    //console.log("nivel: "+ ident.nivel);
    if (almacen[i].token.text == ident.token.text && ident.nivel >= this.almacen[i].nivel ) {
      this.tabla[i].value = ident.value;
      inTable = this.tabla[i].token;
    }
  }
  return inTable;
}
class Metodo{
  nombre;
  parametros;
  token;
  ctx;
  almacen;
  constructor(nombre, parametros, token, ctx ){
    this.nombre = nombre;
    this.parametros = parametros;
    this.token = token;
    this.ctx = ctx ;
    this.almacen =[];
  }

  
  insertar(ident){

     this.almacen.push(ident);
    
      /*if ( inAlmacen(this.almacen,ident != null) ) {
        this.almacen.push(ident);
      }
     */




     
  }
  buscar(nombre){
 
    var encontrado= null;
      for (let i = 0; i < this.almacen.length; i++) {
    
        if (this.almacen[i].token.text == nombre.toString()) {
          encontrado = this.almacen[i];
        }
        
      }

      return encontrado;
  }
 


}





/*function infereType(expression){
  var type = null;

  if(expression.includes("+") && expression.includes("-")){//Debe ser int
   
    var terms = expression.split("+");
    terms.forEach(element => {
      if(type != "error"){
      if (element != "-" ) {
        if (element.includes('"')) {
          //console.log("error de tipos");
          document.getElementById("messages").value += "> Ha ocurrido un error de tipos";
          type = "error";
        }else{
          //console.log("ENTRO AL ELSE");
          var id = miTabla.buscar(element,null,nivelActual);
          //console.log(id);
          if (id != null) {
           type = "idInt"
          }else{
          type = "int";
        }
        }
      }

    }
    });
    return type;
    
  }
  else if(expression.includes("+")){//Puede ser int o string
    var currentElementType = null;
    
    var terms = expression.split("+");

    terms.forEach(element => {
      
        
      
      if (element.includes('"')) {
        if(currentElementType == null){
          currentElementType = "string";
        }else{
          if (currentElementType != "string") {
            console.log("error de tipos");
            document.getElementById("messages").value += "> Ha ocurrido un error de tipos";
            type = "error";
          }else{
            type = "string";
          }
        }

      
      }else if(miTabla.buscar(element,null,nivelActual != null)){



      }
      else{
        if (currentElementType == null) {
          currentElementType = "int";

        }
        else{
          if (currentElementType != "int") {
            console.log("error de tipos");
            document.getElementById("messages").value += "> Ha ocurrido un error de tipos";
            type = "error";
          }else{
            type = "int";
          }
        }
        
      }
    
    });


    return type;
  }
  else if(expression.includes("-") || expression.includes("*") || expression.includes("/")){//Debe ser integer
      
      console.log("entro a la tercera");
      var terms = expression.split("-");
     
      terms.forEach(element => {
        if (type != "error") {
          if (element.includes('"')) {
            console.log("error de tipos");
            document.getElementById("messages").value += "> Ha ocurrido un error de tipos";
            type = "error";
          }
          else{
            type = "int";
          }
        }
      });
     
     return type;
  }
  else{
    if (expression.includes('"')) {
      type = "string";
    }else{
      if (parseInt(expression)) {
        
        type="int";
      }else{
        type = "identifier";
      }
      
    }
    return type;
  }

  
}*/

function getOperators(expression){
var operators = [];

  for (let i = 0; i < expression.length; i++) {
    var operador = expression[i];
    if (operador == "+" || operador == "-" || operador == "*" || operador == "/") {
      operators.push(operador);
    }
  }

return operators;

}
function completeExpression(expression){
  var operandos =  expression.split(/\+|\-|\*|\//);
  var operadores = getOperators(expression);//expression.includes("+").length;

  var cleanExpression = "";
 


  for (let i = 0; i < operandos.length; i++) {
    var element = operandos[i];

    var exists;
   
    if (dentroMetodo != null) {
      var metodo = miTabla.buscarMetodo(dentroMetodo,dentroMetodoParams);
     console.log("el metodo");
     console.log(metodo);
      if (metodo != null) {
        exists = metodo.token.buscar(element);
      }
            
   
      
///este exists sale nulo, aqui esta el problema
     
    }else{
      exists  = miTabla.buscar(element,null,nivelActual);
    }
  
   
    if (exists != null) {
      cleanExpression +=  exists.value;

      if (operadores != null && operadores[i] != null) {
        cleanExpression += (operadores[i]).toString();
      }
      
    }else{
      cleanExpression += element.toString();
      if (operadores != null && operadores[i] != null) {
        cleanExpression += (operadores[i]).toString();
      }
    }
    
  }
  //console.log(cleanExpression);

  return cleanExpression;

}
function inferirIndividual(element){
 // console.log("element: "+ element);
var tipo= null;


var id;
if (dentroMetodo != null) {
  var metodo = miTabla.buscarMetodo(dentroMetodo,dentroMetodoParams);

  id = metodo.token.buscar(element);
}else{
  id  = miTabla.buscar(element,null,nivelActual);
}

//= miTabla.buscar(element.toString(),null,nivelActual);

  if (id != null) {
    
    tipo ="identifier";
    
  }else{
    if(element.toString().match(/\[/)){
      tipo = "lista";
    }else if(element.toString().match(/\(/) &&element.toString().match(/\)/)){
      tipo = "metodo";
    }

    else if (element.toString().match(/"/)  ) {
      tipo = "string";
    }else{
      tipo = "int";
    }
  }
  return tipo;

}
function inferirTipoExpression(expression){

  var tipo = null;
//console.log(expression.split(/\+|\-|\*|\//));

  var expresiones = expression.split(/\+|\-|\*|\//);
  // console.log("expresiones: "+expresiones);
        for (let i = 0; i < expresiones.length; i++) {
        
          var element = expresiones[i];
        
          //if (element != "+" && element != "-" && element != "*" && element != "/") {

          if (tipo == null) {

            if(inferirIndividual(element) == "identifier"){
              var elemento = miTabla.buscar(element,null,nivelActual).value;
                tipo = inferirIndividual(elemento);
            }else{
              tipo = inferirIndividual( element );
            }
            
        
          }else{

              if (inferirIndividual(element) == "identifier") {
                //console.log("ENTRO AL TRANSFORM");
              element = miTabla.buscar(element,null,nivelActual).value;

              }
              if ( inferirIndividual(element) != tipo ) {
              // console.log(inferirIndividual(element));
              // console.log("HAY ERROR PERRO");
                tipo = "error";
              }else{
                tipo = inferirIndividual(element);
              }


            
          }
          

          
          
        }

  

return tipo;


}
//import { Parser2Visitor } from './Parser2Visitor';

var math = require('./math');
var Parser2Visitor = require('./Parser2Visitor').Parser2Visitor;
var Parser2 = require('./Parser2').Parser2;
var miTabla = new TablaSimbolos();

function MiVisitor(){
  
    Parser2Visitor.call(this);
    this.miTabla = new TablaSimbolos();
    return this;
}


MiVisitor.prototype = Object.create(Parser2Visitor.prototype);
MiVisitor.prototype.constructor = MiVisitor;


MiVisitor.prototype.printError = function(error){
  alert(error);
  document.getElementById("messages").value += error;
  
}








  // Visit a parse tree produced by Parser2#StatementsAST.
MiVisitor.prototype.visitProgramAST = function(ctx){
    miTabla.tabla = [];
  
   MiVisitor.prototype.visit(ctx.statement(0));
   for (let i = 1; i < ctx.statement().length; i++) {
      MiVisitor.prototype.visit(ctx.statement(i));
     
   }
  // console.log(ctx.IDENTIFIER().getText());
    //this.visitStatementsAST(ctx);
    

    return null;
}


  
  

  MiVisitor.prototype.visitStatementsAST = function(ctx) {




    MiVisitor.prototype.visit(ctx.statement(0));

       //this.visit(ctx.children[0]);
       //console.log(ctx.children.length);
       for (let i = 1; i < ctx.statement().length; i++){
        MiVisitor.prototype.visit(ctx.statement(i));
        
       }
       return null;
  };
  
  function splitParams(text){
    listaP = []
    //Separo el def
    var def = text.split(":")[0];
    //Separo por coma
    var primerSplit= def.split(",")[0];
    //inserto luego de parentesis
    listaP.push(primerSplit.split("(")[1])

    for (let index = 1; index < def.split(",").length; index++) {
      listaP.push(def.split(",")[index])
    
    }
    return listaP;
  }

  function getListItems(expression){
    var list = [];

    var elements = expression.split(",");
      for (let i = 0; i < elements.length; i++) {
        var element = elements[i];
        if(i == 0){
          var elementCI = element.split("[")[1];
          list.push(elementCI);
        }else if(i == elements.length -1){
          var elementCI = element.split("]")[0];
          list.push(elementCI);
        }else{
           list.push(element);
        }
         
 
       
      
    }
    console.log("lista: " +list);
    return list;
  }

  // Visit a parse tree produced by Parser2#Statement_defStatementAST.
  MiVisitor.prototype.visitStatement_defStatementAST = function(ctx) {

     // this.visitArgListAST(ctx);
      //this.visitSequenceAST(ctx);
      //console.log("Estoy en def");
   
      var str = ctx.defStatement().getText()
     
      params = splitParams(str);
      MiVisitor.prototype.visit(ctx.defStatement());
    return null;
  };
  
  
  // Visit a parse tree produced by Parser2#Statement_ifStatementAST.
  MiVisitor.prototype.visitStatement_ifStatementAST = function(ctx) {
    
    
    //this.visitIfStatementAST(ctx);
    MiVisitor.prototype.visit(ctx.ifStatement());

    return null;
  };
  
  
  // Visit a parse tree produced by Parser2#Statement_returnStatementAST.
  MiVisitor.prototype.visitStatement_returnStatementAST = function(ctx) {

    //this.visitReturnStatementAST();
    MiVisitor.prototype.visit(ctx.returnStatement());

     

    return null;
  };
  
  
  // Visit a parse tree produced by Parser2#Statement_printStatementAST.
  MiVisitor.prototype.visitStatement_printStatementAST = function(ctx) {


    MiVisitor.prototype.visit(ctx.printStatement());
    //this.visitPrintStatementAST(ctx);
    return null;
  };
  
  
  // Visit a parse tree produced by Parser2#Statement_whileStatementAST.
  MiVisitor.prototype.visitStatement_whileStatementAST = function(ctx) {
    MiVisitor.prototype.visit(ctx.whileStatement());  
    //this.visitWhileStatementAST(ctx);
     
    return null;
  };
  
  
  // Visit a parse tree produced by Parser2#Statement_forStatementAST.
  MiVisitor.prototype.visitStatement_forStatementAST = function(ctx) {
    MiVisitor.prototype.visit(ctx.forStatement());
    //this.visitForStatementAST(ctx);
    return null;
  };
  
  
// Visit a parse tree produced by Parser2#Statement_assignStatementAST.
MiVisitor.prototype.visitStatement_assignStatementAST = function(ctx) {
  MiVisitor.prototype.visit(ctx.assignStatement());  
  
 
    
    return null;
  };
  
  
  // Visit a parse tree produced by Parser2#Statement_functionCallStatementAST.
  MiVisitor.prototype.visitStatement_functionCallStatementAST = function(ctx) {
    
    MiVisitor.prototype.visit(ctx.functionCallStatement());  
    
     
    return null;
  };
  
  
  // Visit a parse tree produced by Parser2#Statement_expressionStatementAST.
  MiVisitor.prototype.visitStatement_expressionStatementAST = function(ctx) {
    MiVisitor.prototype.visit(ctx.expressionStatement());
   
    return null;
  };
  
  
  // Visit a parse tree produced by Parser2#DefStatementAST.
  MiVisitor.prototype.visitDefStatementAST = function(ctx) {


        var params = [];
    MiVisitor.prototype.visit(ctx.argList());
    var nombre = ctx.IDENTIFIER().getText();
    if (ctx.argList().IDENTIFIER().getSymbol() != null) {
      
   
    params.push(ctx.argList().IDENTIFIER().getSymbol());
   
  
  }
  if (ctx.argList().moreArgs().IDENTIFIER().length > 0) {
    for (let i = 0; i < ctx.argList().moreArgs().IDENTIFIER().length; i++) {
      params.push(ctx.argList().moreArgs().IDENTIFIER(i).getSymbol());
     
      
    }
  }
 

    //var parametros = ctx.argList().getText().split(",");
    
    var contexto = ctx.sequence();
    let token = ctx.IDENTIFIER().getSymbol();
    var identMetodo = new Metodo(nombre,params, token,contexto);
    miTabla.insertarMetodo(identMetodo);

  


    //miTabla.insertar(token,-1,params.length,null);
    
    
  //console.log("DEF : " +ctx.argList().IDENTIFIER().getText());
   // MiVisitor.prototype.visit(ctx.sequence());
    


    return null;
  };
  
  
  // Visit a parse tree produced by Parser2#ArgListAST.
  MiVisitor.prototype.visitArgListAST = function(ctx) {
    //console.log("Estoy en arglist");
    MiVisitor.prototype.visit(ctx.moreArgs());
    return null;
  };
  
  
  // Visit a parse tree produced by Parser2#MoreArgsAST.
  MiVisitor.prototype.visitMoreArgsAST = function(ctx) {

    return ctx.IDENTIFIER();
  };
  
  
  // Visit a parse tree produced by Parser2#IfStatementAST.
  MiVisitor.prototype.visitIfStatementAST = function(ctx) {
    //console.log("Estoy en if");
    MiVisitor.prototype.visit(ctx.expression());
    var expression = ctx.expression().getText();


   var operandos = expression.split(/\<=|\<|\==|\>=|\>/);
    var operador = expression.match(/\<=|\<|\==|\>=|\>/).toString();
    //console.log(operador);
    var v1;
    var v2;
    
    if (operador === "<") {
    //console.log(operador);
     
  //console.log(inferirIndividual(operandos[0]));
      if ( inferirIndividual(operandos[0]) == "identifier" ) {
       
        v1 = miTabla.buscar(operandos[0],null,nivelActual).value;

      }else{
        v1 = operandos[0];
      }
      if ( inferirIndividual(operandos[1]) == "identifier" ) {
        
        v2 = miTabla.buscar(operandos[1],null,nivelActual).value;

      }else{
        v2 = operandos[0];
      }
   
      if (v1 < v2) {
        MiVisitor.prototype.visit(ctx.sequence(0));
       // console.log(ctx.sequence(0).getText());
      }else{
        MiVisitor.prototype.visit(ctx.sequence(1));
        //console.log(ctx.sequence(1).getText());
      }


    }else if (operador === "<=") {
     // console.log(inferirIndividual("operandos: " +operandos[0]));
     // console.log("operandos: "+operandos);
      if ( inferirIndividual(operandos[0]) == "identifier" ) {
        v1 = miTabla.buscar(operandos[0],null,nivelActual).value;
      }else{
        v1 = operandos[0];
      }

      if ( inferirIndividual(operandos[1]) == "identifier" ) {
        v2 = miTabla.buscar(operandos[1],null,nivelActual).value;
      }else{
        v2 = operandos[1];
      }
      //console.log("v1 es: " + v1 + "v2 es: " + v2);
        if (v1 <= v2) {
          MiVisitor.prototype.visit(ctx.sequence(0));
        }else{
          MiVisitor.prototype.visit(ctx.sequence(1));
        }


    }else if (operador == "==") {
      //console.log(inferirIndividual(operandos[0]));
      if ( inferirIndividual(operandos[0]) == "identifier" ) {
        v1 = miTabla.buscar(operandos[0],null,nivelActual).value;
      }else{
        v1 = operandos[0];
      }
      if ( inferirIndividual(operandos[1]) == "identifier" ) {
        v2 = miTabla.buscar(operandos[1],null,nivelActual).value;
      }else{
        v2 = operandos[1];
      }

        if (v1 == v2) {
          MiVisitor.prototype.visit(ctx.sequence(0));
        }else{
          MiVisitor.prototype.visit(ctx.sequence(1));
        }


   
    }else if(operador == ">"){
      //console.log(inferirIndividual(operandos[0]));
      if ( inferirIndividual(operandos[0]) == "identifier" ) {
        v1 = miTabla.buscar(operandos[0],null,nivelActual).value;
      }else{
        v1 = operandos[0];
      }
      if ( inferirIndividual(operandos[1]) == "identifier" ) {
        v2 = miTabla.buscar(operandos[1],null,nivelActual).value;
      }else{
        v2 = operandos[1];
      }

        if (v1 > v2) {
          MiVisitor.prototype.visit(ctx.sequence(0));
        }else{
          MiVisitor.prototype.visit(ctx.sequence(1));
        }


    }else if(operador == ">="){

      //console.log(inferirIndividual(operandos[0]));
      if ( inferirIndividual(operandos[0]) == "identifier" ) {
        v1 = miTabla.buscar(operandos[0],null,nivelActual).value;
      }else{
        v1 = operandos[0];
      }
      if ( inferirIndividual(operandos[1]) == "identifier" ) {
        v2 = miTabla.buscar(operandos[1],null,nivelActual).value;
      }else{
        v2 = operandos[1];
      }

        if (v1 >= v2) {
          MiVisitor.prototype.visit(ctx.sequence(0));
        }else{
          MiVisitor.prototype.visit(ctx.sequence(1));
        }


    }else{
      document.getElementById("messages").value += "> Operador desconocido";
    }







    
  
      //this.visitExpressionAST(ctx);
      //console.log(ctx.children);
      //this.visitSequenceAST(ctx);
      
      
      //this.visit(ctx.children[0].children[3]);
      //this.visit(ctx.children[0].children[6]);
    return null;
  };
  

  
  // Visit a parse tree produced by Parser2#WhileStatementAST.
  MiVisitor.prototype.visitWhileStatementAST = function(ctx) {
    
    var expression = ctx.expression().getText();
    console.log(expression);
    var operador;
    var split;
    var v1;
    var v2;

    //var exists = miTabla.buscar();
   
    if ( expression.includes("<=")) {
      
      operador = "<=";

      split = expression.split(operador);
      console.log(split[0]);
      // validar que exista para sacar el value;
      if (miTabla.buscar(split[0],null,nivelActual) != null) {
        v1 = miTabla.buscar(split[0],null,nivelActual).value;
      }else{
        document.getElementById("messages").value +=
        (
          "Error: Identificador " + split[0]+ " indefinido " + "\n");
      }
     
      if (miTabla.buscar(split[1],null,nivelActual) != null) {
       v2 = miTabla.buscar(split[1],null,nivelActual).value;
      }else{
        v2 = split[1];
      }
      
      
        console.log(v1);
      while(v1 <= v2){

        MiVisitor.prototype.visit(ctx.sequence());
        v1 = miTabla.buscar(split[0],null,nivelActual).value;
      }


    }else if ( expression.includes("<")) {
      console.log("entra al inc");
      operador = "<";
      split = expression.split(operador);
      console.log(split[0]);
      if (miTabla.buscar(split[0],null,nivelActual) != null) {
        v1 = miTabla.buscar(split[0],null,nivelActual).value;
      }else{
        document.getElementById("messages").value +=
        (
          "Error: Identificador " + split[0]+ " indefinido " + "\n");
      }
      if (miTabla.buscar(split[1],null,nivelActual) != null) {
       v2 = miTabla.buscar(split[1],null,nivelActual).value;
      }else{
        v2 = split[1];
      }
      
      
        console.log(v1);
      while(v1 < v2){

        MiVisitor.prototype.visit(ctx.sequence());
        v1 = miTabla.buscar(split[0],null,nivelActual).value;
      }

    }else if ( expression.includes(">=")) {
      operador = ">=";
      split = expression.split(operador);
      console.log(split[0]);
      if (miTabla.buscar(split[0],null,nivelActual) != null) {
        v1 = miTabla.buscar(split[0],null,nivelActual).value;
      }else{
        document.getElementById("messages").value +=
        (
          "Error: Identificador " + split[0]+ " indefinido, linea: " + ctx.IDENTIFIER().getSymbol().line +
          " columna: "+ctx.IDENTIFIER().getSymbol().column +  ".\n");
      }
      if (miTabla.buscar(split[1],null,nivelActual) != null) {
       v2 = miTabla.buscar(split[1],null,nivelActual).value;
      }else{
        v2 = split[1];
      }
      
      
        console.log(v1);
      while(v1 >= v2){

        MiVisitor.prototype.visit(ctx.sequence());
        v1 = miTabla.buscar(split[0],null,nivelActual).value;
      }


    }else if ( expression.includes(">")) {
      operador = ">";
      split = expression.split(operador);
      console.log(split[0]);
      if (miTabla.buscar(split[0],null,nivelActual) != null) {
        v1 = miTabla.buscar(split[0],null,nivelActual).value;
      }else{
        document.getElementById("messages").value +=
        (
          "Error: Identificador " + split[0]+ " indefinido, linea: " + ctx.IDENTIFIER().getSymbol().line +
          " columna: "+ctx.IDENTIFIER().getSymbol().column +  ".\n");
      }
      if (miTabla.buscar(split[1],null,nivelActual) != null) {
       v2 = miTabla.buscar(split[1],null,nivelActual).value;
      }else{
        v2 = split[1];
      }
      
      
        console.log(v1);
      while(v1 > v2){

        MiVisitor.prototype.visit(ctx.sequence());
        v1 = miTabla.buscar(split[0],null,nivelActual).value;
      }


    }else if ( expression.includes("==")) {
      operador = "==";
      split = expression.split(operador);
      console.log(split[0]);
      if (miTabla.buscar(split[0],null,nivelActual) != null) {
        v1 = miTabla.buscar(split[0],null,nivelActual).value;
      }else{
        document.getElementById("messages").value +=
        (
          "Error: Identificador " + split[0]+ " indefinido, linea: " + ctx.IDENTIFIER().getSymbol().line +
          " columna: "+ctx.IDENTIFIER().getSymbol().column +  ".\n");
      }
      if (miTabla.buscar(split[1],null,nivelActual) != null) {
       v2 = miTabla.buscar(split[1],null,nivelActual).value;
      }else{
        v2 = split[1];
      }
      
      
        console.log(v1);
      while(v1 == v2){

        MiVisitor.prototype.visit(ctx.sequence());
        v1 = miTabla.buscar(split[0],null,nivelActual).value;
      }


    }
  
   // MiVisitor.prototype.visit(ctx.expression());
    
      //this.visitExpressionAST(ctx);
      //this.visitSequenceAST(ctx);
    return null;
  };
  
  
  // Visit a parse tree produced by Parser2#ForStatementAST.
  MiVisitor.prototype.visitForStatementAST = function(ctx) {
      //console.log("estoy en for");
     
     
    
      
    var TipoLista = ctx.expressionList().getText();
    
    console.log(ctx.expressionList().getText());

    var lista;
    if(inferirIndividual(ctx.expressionList().getText()) == "identifier"){
        var exists =  miTabla.buscar(ctx.expressionList().getText(),null,nivelActual);
       
        if(exists != null){
          
            lista = exists.value;

        }
    }
  
    var token = miTabla.buscar(ctx.expression().getText(),null,nivelActual).token;

  var tipo;
  var value;
    lista.forEach(elem => {
      tipo = inferirIndividual(elem);
     
      if ( tipo == "identifier" ) {
        var existe = miTabla.buscar(elem,null, nivelActual);
        if (existe != null) {
          value = existe.value;
        }
      }else{
        
        value = elem;
        miTabla.buscar(token.text,null,nivelActual).value = value;
      }
      //miTabla.insertar(,tipo,null,value);

      MiVisitor.prototype.visit(ctx.sequence());
    });




    MiVisitor.prototype.visit(ctx.expressionList());

    MiVisitor.prototype.visit(ctx.expression());
      

      //this.visitExpressionAST(ctx);
      //this.visitExpressionListAST(ctx);
      //this.visitSequenceAST(ctx);

    return null;
  };
  function isIdentifier(metodo, id){
    var exists=null;

    var almacen = metodo.token.almacen;
    var tablaGlobal = miTabla.tabla;
    for (let i = 0; i < tablaGlobal.length; i++) {
      if (tablaGlobal[i].token.text == id) {
        exists = tablaGlobal[i];
      }
      
    }


    for (let i = 0; i < almacen.length; i++) {
     if (almacen[i].token.text == id) {
       exists = almacen[i];
     }
      
    }

  return exists;
  }
  
  // Visit a parse tree produced by Parser2#ReturnStatementAST.
  MiVisitor.prototype.visitReturnStatementAST = function(ctx) {
      //this.visitExpressionAST(ctx);
     
    


     
      var metodo = miTabla.buscarMetodo(dentroMetodo,dentroMetodoParams);
  
      //MiVisitor.prototype.visit(metodo.token.ctx.children[2]);
     
      var valor = null;
      var expression = ctx.expression().getText();

      if (metodo.type == "metodo") {
        
     
      if(isIdentifier(metodo,expression) != null){ // aqui esta el error
        var exists = metodo.token.buscar(expression);
     
        if (exists != null) {
          valor = exists.value;
        }
      }else{
        valor = expression;
      }
      //metodo.value = valor;
      //miTabla.buscarMetodo(dentroMetodo,dentroMetodoParams).setValue = valor;
      //el ident
      //metodo.value = 
      miTabla.buscarMetodo(dentroMetodo,dentroMetodoParams).value = valor;
    }

      //var metodo = miTabla.buscar()
    
      MiVisitor.prototype.visit(ctx.expression());
      


    return null;
  };
  
  


  // Visit a parse tree produced by Parser2#PrintStatementAST.
  MiVisitor.prototype.visitPrintStatementAST = function(ctx) {

    MiVisitor.prototype.visit(ctx.expression());
    //console.log("teston: " + ctx.expression().getText());



      var value;

      var expression = ctx.expression().getText();

  
        
     
      expression = completeExpression(expression);
      //inferirTipoExpression(expression)


      if(inferirTipoExpression(expression) != "error" && inferirTipoExpression(expression) != "string" && inferirIndividual(expression)!= "identifier" ){
       // console.log(completeExpression(expression));
      
      
        
      
       value= math.eval( completeExpression(expression) );
      document.getElementById("messages").value += "\n" + value;
     
      }else if(inferirTipoExpression(expression) == "string"){
        value = operar(expression);
        document.getElementById("messages").value += "\n" + value;
      }else{

        document.getElementById("messages").value += "> Ha ocurrido un error de tipos";
        
      }
    
      
      //console.log(ctx.expression().additionExpression(0));
      
     
    
     return null;
  };
  function operar(expression){//opera y retorna un valor
    var tipo = inferirTipoExpression(expression);
    var resultado = null;
    if (tipo == "string") {

      resultado = "";
      var operandos = expression.split("+");
      operandos.forEach(element => {
        var cleanElement = element.split('"');
        
        resultado += cleanElement[1];
      });

    }else if(tipo == "int"){
      resultado = 0;
      var operandos = expression.split("+");
      operandos.forEach(element => {
        resultado += parseInt(element);
      });    
    }
        
    return resultado;
  }
  function opera(operador, v1,v2){
   
    switch (operador) {
      case "+": 
      return v1 + v2;
      case "-":
      return v1 - v2;
      case "*":
      return v1 * v2;
      case "/":
      return v1 / v2;
      default:
        return 0;
    }
  }
  
  // Visit a parse tree produced by Parser2#AssignStatementAST.
  MiVisitor.prototype.visitAssignStatementAST = function(ctx) {
    



    MiVisitor.prototype.visit(ctx.expression());
    var value;
    var type;

      


      var expression = ctx.expression().getText();
      
      if (inferirIndividual(expression) != "metodo") {
       
        
     

      expression = completeExpression(expression);
      
      if(inferirTipoExpression(expression) != "error" && inferirTipoExpression(expression) != "string" && inferirIndividual(expression) != "lista" && inferirIndividual(expression) != "metodo"){
    
      
    
      value= math.eval( completeExpression(expression) );
      type = inferirTipoExpression(expression);
     
      }else if(inferirTipoExpression(expression) == "string"){
        value = operar(expression);

      }else if(inferirIndividual(expression) == "lista"){
        value = getListItems(expression);
        type = "list";
        
      }
      else{
        document.getElementById("messages").value += "> Ha ocurrido un error de tipos";
        return;
      }
      
    }else{
      var split = expression.split("(");
      var nombreMetodo = split[0];
      var cantParams = split[1].split(",").length;
      var metodo = miTabla.buscarMetodo(nombreMetodo,cantParams);

      
      dentroMetodo = nombreMetodo;
      dentroMetodoParams = cantParams;
      MiVisitor.prototype.visit(metodo.token.ctx);
      dentroMetodo = null;
      dentroMetodoParams = 0;

      value = metodo.value;
      type = inferirIndividual(value);

      valorMetodo = null;

    }
      miTabla.insertar(ctx.IDENTIFIER().getSymbol(),type,null, value );

    return null;
  };
  
  
  // Visit a parse tree produced by Parser2#FunctionCallStatementAST.
  MiVisitor.prototype.visitFunctionCallStatementAST = function(ctx) {
    
    var params = ctx.expressionList().getText().split(",");
    var metodo = ctx.primitiveExpression().getText();
    var method = miTabla.buscarMetodo(metodo,params.length);

    //MiVisitor.prototype.visit(ctx.primitiveExpression());
    MiVisitor.prototype.visit(ctx.expressionList());
   
    for (let i = 0; i < params.length; i++) {
        var valor;
      if (inferirIndividual(params[i]) == "identifier") {
          exists = miTabla.buscar(params[i],null,nivelActual);
          if (exists != null) {
            valor = exists.value;
          }
      }else{
        valor = params[i];
      }



      method.token.almacen[i].value = valor;
    }
 
   //console.log(ctx.primitiveExpression().getText());
   
   // console.log("lista de exp: "+ctx.expressionList().getText().split(","));

      
   dentroMetodo = metodo;
   dentroMetodoParams = params.length;
    MiVisitor.prototype.visit(method.token.ctx);
    dentroMetodo = null;
    dentroMetodoParams = 0;
   
   
    
    return null;
  };
  
  
  // Visit a parse tree produced by Parser2#ExpressionStatementAST.
  MiVisitor.prototype.visitExpressionStatementAST = function(ctx) {
    MiVisitor.prototype.visit(ctx.expressionList());
    return null;
  };
  
  
  // Visit a parse tree produced by Parser2#SequenceAST.
  MiVisitor.prototype.visitSequenceAST = function(ctx) {
      //this.visitStatement(ctx);
        //console.log(ctx);
       //this.visit(ctx.children[2].children[0]);

       miTabla.openScope();
       
       MiVisitor.prototype.visit(ctx.statement(0));
        for (let i = 1; i < ctx.statement().length; i++) {
          MiVisitor.prototype.visit(ctx.statement(i));
            
        }
        miTabla.closeScope();
    return null;
  };
  
  
 
  
  
  // Visit a parse tree produced by Parser2#ExpressionAST.
  MiVisitor.prototype.visitExpressionAST = function(ctx) {
    MiVisitor.prototype.visit(ctx.additionExpression());
    MiVisitor.prototype.visit(ctx.comparison());
      //this.visitAdditionExpressionAST(ctx);
      //this.visitComparisonAST(ctx);
    return null;
  };
  
  
  // Visit a parse tree produced by Parser2#ComparisonAST.
  MiVisitor.prototype.visitComparisonAST = function(ctx) {
    MiVisitor.prototype.visit(ctx.additionExpression());
    //this.visitAdditionExpressionAST(ctx);
    return null;
  };
  
  
  // Visit a parse tree produced by Parser2#AdditionExpressionAST.
  MiVisitor.prototype.visitAdditionExpressionAST = function(ctx) {


    MiVisitor.prototype.visit(ctx.multiplicationExpression());
    MiVisitor.prototype.visit(ctx.additionFactor());

    return null;
  };
  
  
  // Visit a parse tree produced by Parser2#AdditionFactorAST.
  MiVisitor.prototype.visitAdditionFactorAST = function(ctx) {
    MiVisitor.prototype.visit(ctx.multiplicationExpression());
      //this.visitMultiplicationExpressionAST(ctx);
    return null;
  };
  
  
  // Visit a parse tree produced by Parser2#MultiplicationExpressionAST.
  MiVisitor.prototype.visitMultiplicationExpressionAST = function(ctx) {
    MiVisitor.prototype.visit(ctx.elementExpression());
    MiVisitor.prototype.visit(ctx.multiplicationFactor());
      //this.visitElementExpressionAST(ctx);
      //this.visitMultiplicationFactorAST(ctx);
    return null;
  };
  
  
  // Visit a parse tree produced by Parser2#MultiplicationFactorAST.
  MiVisitor.prototype.visitMultiplicationFactorAST = function(ctx) {
    MiVisitor.prototype.visit(ctx.elementExpression());  
    
    //this.visitElementExpressionAST(ctx);
    return null;
  };
  
  
  // Visit a parse tree produced by Parser2#ElementExpressionAST.
  MiVisitor.prototype.visitElementExpressionAST = function(ctx) {
      //duda con primitiveExpression
     // this.visitElementAccessAST(ctx);
    
     MiVisitor.prototype.visit(ctx.primitiveExpression());
     MiVisitor.prototype.visit(ctx.elementAccess());
    
   

    return null;
  };
  
  
  // Visit a parse tree produced by Parser2#ElementAccessAST.
  MiVisitor.prototype.visitElementAccessAST = function(ctx) {
    MiVisitor.prototype.visit(ctx.expression());
  
   if (dentroMetodo != null) {
     var metodo = miTabla.buscarMetodo(dentroMetodo,dentroMetodoParams);
     //metodo.token.buscar()
   }else{

   }
     // this.visitExpressionAST(ctx);
    return null;
  };
  
  
  // Visit a parse tree produced by Parser2#FunctionCallExpressionAST.
  MiVisitor.prototype.visitFunctionCallExpressionAST = function(ctx) {



    var params = ctx.expressionList().getText();
    var cantparams = params.split(",").length;
    dentroMetodo = ctx.IDENTIFIER().getText();
    dentroMetodoParams =cantparams;

   

    var parametros = ctx.expressionList().getText().split(",");
  

    //AQUI DEBO ASIGNAR EL VALOR DE LOS PARAMETROS AL ALMACEN

    var metodo = miTabla.buscarMetodo(dentroMetodo,dentroMetodoParams);
var almacen = metodo.token.almacen;
    for (let i = 0; i < almacen.length; i++) {
     metodo.token.almacen[i].value = parametros[i];
     metodo.token.almacen[i].type = inferirIndividual(parametros[i]);
      
    }
   
   
  
    

    var exists = miTabla.buscarMetodo(ctx.IDENTIFIER().getText(),cantparams);
   
    console.log(exists);
    if (exists == null) {
      document.getElementById("messages").value += 
        ("Error: Método " + ctx.IDENTIFIER().getText() + " desconocido en linea: "
        +ctx.IDENTIFIER().getSymbol().line + " columna: "+ ctx.IDENTIFIER().getSymbol().column );
      
      
     
    }else if(exists == "ErrorP"){
      document.getElementById("messages").value += 
        ("Error: Cantidad de parametros " + ctx.IDENTIFIER().getText()  );
    }else{
      MiVisitor.prototype.visit(exists.token.ctx);
    }

    MiVisitor.prototype.visit(ctx.expressionList());
   



    dentroMetodo = null;
    dentroMetodoParams = 0;
    //this.visitExpressionListAST(ctx);
    return null;
  };
  
  
  // Visit a parse tree produced by Parser2#ExpressionListAST.
  MiVisitor.prototype.visitExpressionListAST = function(ctx) {
      
    MiVisitor.prototype.visit(ctx.expression());
    MiVisitor.prototype.visit(ctx.moreExpressions());
    
    //this.visitExpressionAST(ctx);
      //this.visitMoreExpressionsAST(ctx);
    return null;
  };
  
  
  // Visit a parse tree produced by Parser2#ExpressionListEPSILONAST.
  MiVisitor.prototype.visitExpressionListEPSILONAST = function(ctx) {

    return null;
  };
  
  
  // Visit a parse tree produced by Parser2#MoreExpressionsAST.
  MiVisitor.prototype.visitMoreExpressionsAST = function(ctx) {
    
    for (let i = 0; i < ctx.expression().length; i++) {
      MiVisitor.prototype.visit(ctx.expression(i));

    }
    

    //this.visitExpressionAST(ctx);
    return null;
  };
  
  
  // Visit a parse tree produced by Parser2#PrimitiveExpression_numAST.
  MiVisitor.prototype.visitPrimitiveExpression_numAST = function(ctx) {
      
    return null;
  };
  
  
  // Visit a parse tree produced by Parser2#PrimitiveExpression_stringAST.
  MiVisitor.prototype.visitPrimitiveExpression_stringAST = function(ctx) {

    return null;
  };
  
  
  // Visit a parse tree produced by Parser2#PrimitiveExpression_identifierAST.
  MiVisitor.prototype.visitPrimitiveExpression_identifierAST = function(ctx) {
    var exists = null;
    console.log("dentro metodo: " +dentroMetodo);
    if (dentroMetodo != null) {
      var metodo = miTabla.buscarMetodo(dentroMetodo,dentroMetodoParams);
      
      exists = metodo.token.buscar(ctx.IDENTIFIER().getText());
      if (exists == null) {
        exists  = miTabla.buscar(dentroMetodo,null,nivelActual);
      }
      //console.log("IDE DEL METODO: " + ctx.IDENTIFIER().getText())
      
    }else{

      exists  = miTabla.buscar(ctx.IDENTIFIER().getText(),null,nivelActual);
    }

    //exists = miTabla.buscar(ctx.IDENTIFIER().getText(),null,nivelActual);
   
    if (exists == null) {

        var msg = document.getElementById("messages");
        
        msg.value += (
        "Error: Identificador " + ctx.IDENTIFIER().getText() + " indefinido, linea: " + ctx.IDENTIFIER().getSymbol().line +
        " columna: "+ctx.IDENTIFIER().getSymbol().column +  ".\n");
        console.log("undefined identifier " + ctx.IDENTIFIER().getText())
    }
    return null;
  };
  
  
  // Visit a parse tree produced by Parser2#PrimitiveExpression_expressionAST.
  MiVisitor.prototype.visitPrimitiveExpression_expressionAST = function(ctx) {
    MiVisitor.prototype.visit(ctx.expression());
      //this.visitExpressionAST(ctx);
    return null;
  };
  
  
  // Visit a parse tree produced by Parser2#PrimitiveExpression_listExpressionAST.
  MiVisitor.prototype.visitPrimitiveExpression_listExpressionAST = function(ctx) {
    MiVisitor.prototype.visit(ctx.listExpression());

    
    //this.visitListExpressionAST(ctx);
    return null;
  };
  
  
  // Visit a parse tree produced by Parser2#PrimitiveExpression_lenExpressionAST.
  MiVisitor.prototype.visitPrimitiveExpression_lenExpressionAST = function(ctx) {
      
    MiVisitor.prototype.visit(ctx.expression());
    //this.visitExpressionAST(ctx);
    return null;
  };
  
  
  // Visit a parse tree produced by Parser2#PrimitiveExpression_functionCallExpressionAST.
  MiVisitor.prototype.visitPrimitiveExpression_functionCallExpressionAST = function(ctx) {
   
    MiVisitor.prototype.visit(ctx.functionCallExpression());
    
    return null;
  };
  
  
  // Visit a parse tree produced by Parser2#ListExpressionAST.
  MiVisitor.prototype.visitListExpressionAST = function(ctx) {
      
    MiVisitor.prototype.visit(ctx.expressionList());
    //this.visitExpressionListAST(ctx);
    
    getListItems(ctx.expressionList().getText());


    return null;
  };
  
  
exports.MiVisitor = MiVisitor;


