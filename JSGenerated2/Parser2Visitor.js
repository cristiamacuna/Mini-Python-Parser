// Generated from /Users/cristiamacuna/Documents/IIS-2019/Compiladores/Proyecto/G4/Parser2.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by Parser2.

function Parser2Visitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

Parser2Visitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
Parser2Visitor.prototype.constructor = Parser2Visitor;

// Visit a parse tree produced by Parser2#ProgramAST.
Parser2Visitor.prototype.visitProgramAST = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by Parser2#StatementsAST.
Parser2Visitor.prototype.visitStatementsAST = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by Parser2#Statement_defStatementAST.
Parser2Visitor.prototype.visitStatement_defStatementAST = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by Parser2#Statement_ifStatementAST.
Parser2Visitor.prototype.visitStatement_ifStatementAST = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by Parser2#Statement_returnStatementAST.
Parser2Visitor.prototype.visitStatement_returnStatementAST = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by Parser2#Statement_printStatementAST.
Parser2Visitor.prototype.visitStatement_printStatementAST = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by Parser2#Statement_whileStatementAST.
Parser2Visitor.prototype.visitStatement_whileStatementAST = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by Parser2#Statement_forStatementAST.
Parser2Visitor.prototype.visitStatement_forStatementAST = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by Parser2#Statement_assignStatementAST.
Parser2Visitor.prototype.visitStatement_assignStatementAST = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by Parser2#Statement_functionCallStatementAST.
Parser2Visitor.prototype.visitStatement_functionCallStatementAST = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by Parser2#Statement_expressionStatementAST.
Parser2Visitor.prototype.visitStatement_expressionStatementAST = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by Parser2#DefStatementAST.
Parser2Visitor.prototype.visitDefStatementAST = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by Parser2#ArgListAST.
Parser2Visitor.prototype.visitArgListAST = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by Parser2#MoreArgsAST.
Parser2Visitor.prototype.visitMoreArgsAST = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by Parser2#IfStatementAST.
Parser2Visitor.prototype.visitIfStatementAST = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by Parser2#WhileStatementAST.
Parser2Visitor.prototype.visitWhileStatementAST = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by Parser2#ForStatementAST.
Parser2Visitor.prototype.visitForStatementAST = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by Parser2#ReturnStatementAST.
Parser2Visitor.prototype.visitReturnStatementAST = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by Parser2#PrintStatementAST.
Parser2Visitor.prototype.visitPrintStatementAST = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by Parser2#AssignStatementAST.
Parser2Visitor.prototype.visitAssignStatementAST = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by Parser2#FunctionCallStatementAST.
Parser2Visitor.prototype.visitFunctionCallStatementAST = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by Parser2#ExpressionStatementAST.
Parser2Visitor.prototype.visitExpressionStatementAST = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by Parser2#SequenceAST.
Parser2Visitor.prototype.visitSequenceAST = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by Parser2#MoreStatementsAST.
Parser2Visitor.prototype.visitMoreStatementsAST = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by Parser2#ExpressionAST.
Parser2Visitor.prototype.visitExpressionAST = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by Parser2#ComparisonAST.
Parser2Visitor.prototype.visitComparisonAST = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by Parser2#AdditionExpressionAST.
Parser2Visitor.prototype.visitAdditionExpressionAST = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by Parser2#AdditionFactorAST.
Parser2Visitor.prototype.visitAdditionFactorAST = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by Parser2#MultiplicationExpressionAST.
Parser2Visitor.prototype.visitMultiplicationExpressionAST = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by Parser2#MultiplicationFactorAST.
Parser2Visitor.prototype.visitMultiplicationFactorAST = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by Parser2#ElementExpressionAST.
Parser2Visitor.prototype.visitElementExpressionAST = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by Parser2#ElementAccessAST.
Parser2Visitor.prototype.visitElementAccessAST = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by Parser2#FunctionCallExpressionAST.
Parser2Visitor.prototype.visitFunctionCallExpressionAST = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by Parser2#ExpressionList_expressionAST.
Parser2Visitor.prototype.visitExpressionList_expressionAST = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by Parser2#ExpressionList_moreExpressionsAST.
Parser2Visitor.prototype.visitExpressionList_moreExpressionsAST = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by Parser2#MoreExpressionsAST.
Parser2Visitor.prototype.visitMoreExpressionsAST = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by Parser2#PrimitiveExpression_numAST.
Parser2Visitor.prototype.visitPrimitiveExpression_numAST = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by Parser2#PrimitiveExpression_stringAST.
Parser2Visitor.prototype.visitPrimitiveExpression_stringAST = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by Parser2#PrimitiveExpression_identifierAST.
Parser2Visitor.prototype.visitPrimitiveExpression_identifierAST = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by Parser2#PrimitiveExpression_expressionAST.
Parser2Visitor.prototype.visitPrimitiveExpression_expressionAST = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by Parser2#PrimitiveExpression_listExpressionAST.
Parser2Visitor.prototype.visitPrimitiveExpression_listExpressionAST = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by Parser2#PrimitiveExpression_lenExpressionAST.
Parser2Visitor.prototype.visitPrimitiveExpression_lenExpressionAST = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by Parser2#PrimitiveExpression_functionCallExpressionAST.
Parser2Visitor.prototype.visitPrimitiveExpression_functionCallExpressionAST = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by Parser2#ListExpressionAST.
Parser2Visitor.prototype.visitListExpressionAST = function(ctx) {
  return this.visitChildren(ctx);
};



exports.Parser2Visitor = Parser2Visitor;