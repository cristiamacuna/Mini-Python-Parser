

//Tabla de Simbolos
var Token = require('antlr4/Token');
params =[];
cantParamentros= null;
nivelActual = -1;
class TablaSimbolos{
  tabla;
  
  constructor(){
      
      this.tabla = [];
     
  }

  inTable(ident){
    for (let i = 0; i < this.tabla.length-1; i++) {
      if (this.tabla[i].token.text == ident.token.text) {
        return true;
      }
    }
    return false;
  }
  insertar(id,tipo,cantParam){
    var ident = new Ident(id,tipo,cantParam);
    if (this.inTable(ident)==false) {
      this.tabla.push(ident);
    }
    console.log(this.tabla);
  }
  buscar(nombre,cantParams,nivel){
  var temp = null;
  //console.log(this.tabla);
    console.log(nombre);
    var length = this.tabla.length;
  for (let i = length-1; i >= 0; i--) {

    console.log("Nombre: "+this.tabla[i].token.text+ " nivel: "+ this.tabla[i].nivel);
    
    if (this.tabla[i].token.text == nombre ) {
      
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

  constructor(theToken, type,cantParam){
      this.token = theToken;
      this.type = type;
      this.nivel = nivelActual;
      this.cantParametros = cantParam;

  }
 }





TablaSimbolos.prototype.imprimir = function(){
    for (let i = 0; i < this.tabla.length; i++) {
        var token;
        token = this.tabla[i].token;
        console.log("Nombre " + token.getText() + "-" + this.tabla[i].nive);

        
    }
}



//import { Parser2Visitor } from './Parser2Visitor';

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
  // Visit a parse tree produced by Parser2#Statement_defStatementAST.
  MiVisitor.prototype.visitStatement_defStatementAST = function(ctx) {

     // this.visitArgListAST(ctx);
      //this.visitSequenceAST(ctx);
      console.log("Estoy en def");
   
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
    //console.log("Estoy en def statement");

    let token = ctx.IDENTIFIER().getSymbol();
    console.log(token);
   miTabla.insertar(token,-1,params.length);
    
    MiVisitor.prototype.visit(ctx.argList());
    MiVisitor.prototype.visit(ctx.sequence());
    
    return null;
  };
  
  
  // Visit a parse tree produced by Parser2#ArgListAST.
  MiVisitor.prototype.visitArgListAST = function(ctx) {
    //console.log("Estoy en arglist");

    return null;
  };
  
  
  // Visit a parse tree produced by Parser2#MoreArgsAST.
  MiVisitor.prototype.visitMoreArgsAST = function(ctx) {

    return null;
  };
  
  
  // Visit a parse tree produced by Parser2#IfStatementAST.
  MiVisitor.prototype.visitIfStatementAST = function(ctx) {
    //console.log("Estoy en if");
   
    MiVisitor.prototype.visit(ctx.expression());
    MiVisitor.prototype.visit(ctx.sequence(0));
    MiVisitor.prototype.visit(ctx.sequence(1));
      //this.visitExpressionAST(ctx);
      //console.log(ctx.children);
      //this.visitSequenceAST(ctx);
      
      
      //this.visit(ctx.children[0].children[3]);
      //this.visit(ctx.children[0].children[6]);
    return null;
  };
  
  
  // Visit a parse tree produced by Parser2#WhileStatementAST.
  MiVisitor.prototype.visitWhileStatementAST = function(ctx) {
    MiVisitor.prototype.visit(ctx.expression());
    MiVisitor.prototype.visit(ctx.sequence());
      //this.visitExpressionAST(ctx);
      //this.visitSequenceAST(ctx);
    return null;
  };
  
  
  // Visit a parse tree produced by Parser2#ForStatementAST.
  MiVisitor.prototype.visitForStatementAST = function(ctx) {
      //console.log("estoy en for");
      MiVisitor.prototype.visit(ctx.expression());
      MiVisitor.prototype.visit(ctx.expressionList());
      MiVisitor.prototype.visit(ctx.sequence());

      //this.visitExpressionAST(ctx);
      //this.visitExpressionListAST(ctx);
      //this.visitSequenceAST(ctx);

    return null;
  };
  
  
  // Visit a parse tree produced by Parser2#ReturnStatementAST.
  MiVisitor.prototype.visitReturnStatementAST = function(ctx) {
      //this.visitExpressionAST(ctx);
      MiVisitor.prototype.visit(ctx.expression());
    return null;
  };
  
  
  // Visit a parse tree produced by Parser2#PrintStatementAST.
  MiVisitor.prototype.visitPrintStatementAST = function(ctx) {
    MiVisitor.prototype.visit(ctx.expression());
      //console.log("print");
     return null;
  };
  
  
  // Visit a parse tree produced by Parser2#AssignStatementAST.
  MiVisitor.prototype.visitAssignStatementAST = function(ctx) {
     
      //exists = miTabla.buscar(ctx.IDENTIFIER().getText());
      //if (exists == null) {
     //     console.log("undefined identifier " + ctx.IDENTIFIER().getText())
      //}

    miTabla.insertar(ctx.IDENTIFIER().getSymbol(),-1,null);

    //console.log("estoy en assign");
    MiVisitor.prototype.visit(ctx.expression());

    
    return null;
  };
  
  
  // Visit a parse tree produced by Parser2#FunctionCallStatementAST.
  MiVisitor.prototype.visitFunctionCallStatementAST = function(ctx) {
   
    MiVisitor.prototype.visit(ctx.primitiveExpression());
    MiVisitor.prototype.visit(ctx.expressionList());
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
      //this.visitMultiplicationExpressionAST(ctx);
      //this.visitAdditionFactorAST(ctx);
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
     // this.visitExpressionAST(ctx);
    return null;
  };
  
  
  // Visit a parse tree produced by Parser2#FunctionCallExpressionAST.
  MiVisitor.prototype.visitFunctionCallExpressionAST = function(ctx) {
    console.log("estoy en funct ca");
   
    var params = ctx.expressionList().getText();
    var cantparams = params.split(",").length;
    

    exists = miTabla.buscar(ctx.IDENTIFIER().getText(),cantparams,nivelActual);
    if (exists == null) {
      document.getElementById("messages").value += 
        ("Error: Método " + ctx.IDENTIFIER().getText() + " desconocido en linea: "
        +ctx.IDENTIFIER().getSymbol().line + " columna: "+ ctx.IDENTIFIER().getSymbol().column );
      
      console.log("undefined identifier " + ctx.IDENTIFIER().getText());
     
    }else if(exists == "ErrorP"){
      document.getElementById("messages").value += 
        ("Error: Cantidad de parametros " + ctx.IDENTIFIER().getText()  );
    }

    MiVisitor.prototype.visit(ctx.expressionList());

    
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
    exists = miTabla.buscar(ctx.IDENTIFIER().getText(),null);
    if (exists == null) {
        var msg = document.getElementById("messages");
        console.log(ctx.IDENTIFIER().getSymbol());
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
    // this.visitFunctionCallExpressionAST(ctx);
    return null;
  };
  
  
  // Visit a parse tree produced by Parser2#ListExpressionAST.
  MiVisitor.prototype.visitListExpressionAST = function(ctx) {
      
    MiVisitor.prototype.visit(ctx.expressionList());
    //this.visitExpressionListAST(ctx);
    return null;
  };
  
  
exports.MiVisitor = MiVisitor;


