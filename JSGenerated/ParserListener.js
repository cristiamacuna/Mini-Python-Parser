// Generated from /Users/cristiamacuna/Documents/IIS-2019/Compiladores/Proyecto/G4/Parser.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by Parser.
function ParserListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

ParserListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
ParserListener.prototype.constructor = ParserListener;

// Enter a parse tree produced by Parser#program.
ParserListener.prototype.enterProgram = function(ctx) {
};

// Exit a parse tree produced by Parser#program.
ParserListener.prototype.exitProgram = function(ctx) {
};


// Enter a parse tree produced by Parser#statement.
ParserListener.prototype.enterStatement = function(ctx) {
};

// Exit a parse tree produced by Parser#statement.
ParserListener.prototype.exitStatement = function(ctx) {
};


// Enter a parse tree produced by Parser#defStatement.
ParserListener.prototype.enterDefStatement = function(ctx) {
};

// Exit a parse tree produced by Parser#defStatement.
ParserListener.prototype.exitDefStatement = function(ctx) {
};


// Enter a parse tree produced by Parser#argList.
ParserListener.prototype.enterArgList = function(ctx) {
};

// Exit a parse tree produced by Parser#argList.
ParserListener.prototype.exitArgList = function(ctx) {
};


// Enter a parse tree produced by Parser#moreArgs.
ParserListener.prototype.enterMoreArgs = function(ctx) {
};

// Exit a parse tree produced by Parser#moreArgs.
ParserListener.prototype.exitMoreArgs = function(ctx) {
};


// Enter a parse tree produced by Parser#ifStatement.
ParserListener.prototype.enterIfStatement = function(ctx) {
};

// Exit a parse tree produced by Parser#ifStatement.
ParserListener.prototype.exitIfStatement = function(ctx) {
};


// Enter a parse tree produced by Parser#whileStatement.
ParserListener.prototype.enterWhileStatement = function(ctx) {
};

// Exit a parse tree produced by Parser#whileStatement.
ParserListener.prototype.exitWhileStatement = function(ctx) {
};


// Enter a parse tree produced by Parser#forStatement.
ParserListener.prototype.enterForStatement = function(ctx) {
};

// Exit a parse tree produced by Parser#forStatement.
ParserListener.prototype.exitForStatement = function(ctx) {
};


// Enter a parse tree produced by Parser#returnStatement.
ParserListener.prototype.enterReturnStatement = function(ctx) {
};

// Exit a parse tree produced by Parser#returnStatement.
ParserListener.prototype.exitReturnStatement = function(ctx) {
};


// Enter a parse tree produced by Parser#printStatement.
ParserListener.prototype.enterPrintStatement = function(ctx) {
};

// Exit a parse tree produced by Parser#printStatement.
ParserListener.prototype.exitPrintStatement = function(ctx) {
};


// Enter a parse tree produced by Parser#assignStatement.
ParserListener.prototype.enterAssignStatement = function(ctx) {
};

// Exit a parse tree produced by Parser#assignStatement.
ParserListener.prototype.exitAssignStatement = function(ctx) {
};


// Enter a parse tree produced by Parser#functionCallStatement.
ParserListener.prototype.enterFunctionCallStatement = function(ctx) {
};

// Exit a parse tree produced by Parser#functionCallStatement.
ParserListener.prototype.exitFunctionCallStatement = function(ctx) {
};


// Enter a parse tree produced by Parser#expressionStatement.
ParserListener.prototype.enterExpressionStatement = function(ctx) {
};

// Exit a parse tree produced by Parser#expressionStatement.
ParserListener.prototype.exitExpressionStatement = function(ctx) {
};


// Enter a parse tree produced by Parser#sequence.
ParserListener.prototype.enterSequence = function(ctx) {
};

// Exit a parse tree produced by Parser#sequence.
ParserListener.prototype.exitSequence = function(ctx) {
};


// Enter a parse tree produced by Parser#moreStatements.
ParserListener.prototype.enterMoreStatements = function(ctx) {
};

// Exit a parse tree produced by Parser#moreStatements.
ParserListener.prototype.exitMoreStatements = function(ctx) {
};


// Enter a parse tree produced by Parser#expression.
ParserListener.prototype.enterExpression = function(ctx) {
};

// Exit a parse tree produced by Parser#expression.
ParserListener.prototype.exitExpression = function(ctx) {
};


// Enter a parse tree produced by Parser#comparison.
ParserListener.prototype.enterComparison = function(ctx) {
};

// Exit a parse tree produced by Parser#comparison.
ParserListener.prototype.exitComparison = function(ctx) {
};


// Enter a parse tree produced by Parser#additionExpression.
ParserListener.prototype.enterAdditionExpression = function(ctx) {
};

// Exit a parse tree produced by Parser#additionExpression.
ParserListener.prototype.exitAdditionExpression = function(ctx) {
};


// Enter a parse tree produced by Parser#additionFactor.
ParserListener.prototype.enterAdditionFactor = function(ctx) {
};

// Exit a parse tree produced by Parser#additionFactor.
ParserListener.prototype.exitAdditionFactor = function(ctx) {
};


// Enter a parse tree produced by Parser#multiplicationExpression.
ParserListener.prototype.enterMultiplicationExpression = function(ctx) {
};

// Exit a parse tree produced by Parser#multiplicationExpression.
ParserListener.prototype.exitMultiplicationExpression = function(ctx) {
};


// Enter a parse tree produced by Parser#multiplicationFactor.
ParserListener.prototype.enterMultiplicationFactor = function(ctx) {
};

// Exit a parse tree produced by Parser#multiplicationFactor.
ParserListener.prototype.exitMultiplicationFactor = function(ctx) {
};


// Enter a parse tree produced by Parser#elementExpression.
ParserListener.prototype.enterElementExpression = function(ctx) {
};

// Exit a parse tree produced by Parser#elementExpression.
ParserListener.prototype.exitElementExpression = function(ctx) {
};


// Enter a parse tree produced by Parser#elementAccess.
ParserListener.prototype.enterElementAccess = function(ctx) {
};

// Exit a parse tree produced by Parser#elementAccess.
ParserListener.prototype.exitElementAccess = function(ctx) {
};


// Enter a parse tree produced by Parser#functionCallExpression.
ParserListener.prototype.enterFunctionCallExpression = function(ctx) {
};

// Exit a parse tree produced by Parser#functionCallExpression.
ParserListener.prototype.exitFunctionCallExpression = function(ctx) {
};


// Enter a parse tree produced by Parser#expressionList.
ParserListener.prototype.enterExpressionList = function(ctx) {
};

// Exit a parse tree produced by Parser#expressionList.
ParserListener.prototype.exitExpressionList = function(ctx) {
};


// Enter a parse tree produced by Parser#moreExpressions.
ParserListener.prototype.enterMoreExpressions = function(ctx) {
};

// Exit a parse tree produced by Parser#moreExpressions.
ParserListener.prototype.exitMoreExpressions = function(ctx) {
};


// Enter a parse tree produced by Parser#primitiveExpression.
ParserListener.prototype.enterPrimitiveExpression = function(ctx) {
};

// Exit a parse tree produced by Parser#primitiveExpression.
ParserListener.prototype.exitPrimitiveExpression = function(ctx) {
};


// Enter a parse tree produced by Parser#listExpression.
ParserListener.prototype.enterListExpression = function(ctx) {
};

// Exit a parse tree produced by Parser#listExpression.
ParserListener.prototype.exitListExpression = function(ctx) {
};



exports.ParserListener = ParserListener;