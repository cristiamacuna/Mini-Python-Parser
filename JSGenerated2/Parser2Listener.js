// Generated from /Users/cristiamacuna/Documents/IIS-2019/Compiladores/Proyecto/G4/Parser2.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by Parser2.
function Parser2Listener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

Parser2Listener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
Parser2Listener.prototype.constructor = Parser2Listener;

// Enter a parse tree produced by Parser2#program.
Parser2Listener.prototype.enterProgram = function(ctx) {
};

// Exit a parse tree produced by Parser2#program.
Parser2Listener.prototype.exitProgram = function(ctx) {
};


// Enter a parse tree produced by Parser2#statements.
Parser2Listener.prototype.enterStatements = function(ctx) {
};

// Exit a parse tree produced by Parser2#statements.
Parser2Listener.prototype.exitStatements = function(ctx) {
};


// Enter a parse tree produced by Parser2#statement.
Parser2Listener.prototype.enterStatement = function(ctx) {
};

// Exit a parse tree produced by Parser2#statement.
Parser2Listener.prototype.exitStatement = function(ctx) {
};


// Enter a parse tree produced by Parser2#defStatement.
Parser2Listener.prototype.enterDefStatement = function(ctx) {
};

// Exit a parse tree produced by Parser2#defStatement.
Parser2Listener.prototype.exitDefStatement = function(ctx) {
};


// Enter a parse tree produced by Parser2#argList.
Parser2Listener.prototype.enterArgList = function(ctx) {
};

// Exit a parse tree produced by Parser2#argList.
Parser2Listener.prototype.exitArgList = function(ctx) {
};


// Enter a parse tree produced by Parser2#moreArgs.
Parser2Listener.prototype.enterMoreArgs = function(ctx) {
};

// Exit a parse tree produced by Parser2#moreArgs.
Parser2Listener.prototype.exitMoreArgs = function(ctx) {
};


// Enter a parse tree produced by Parser2#ifStatement.
Parser2Listener.prototype.enterIfStatement = function(ctx) {
};

// Exit a parse tree produced by Parser2#ifStatement.
Parser2Listener.prototype.exitIfStatement = function(ctx) {
};


// Enter a parse tree produced by Parser2#whileStatement.
Parser2Listener.prototype.enterWhileStatement = function(ctx) {
};

// Exit a parse tree produced by Parser2#whileStatement.
Parser2Listener.prototype.exitWhileStatement = function(ctx) {
};


// Enter a parse tree produced by Parser2#forStatement.
Parser2Listener.prototype.enterForStatement = function(ctx) {
};

// Exit a parse tree produced by Parser2#forStatement.
Parser2Listener.prototype.exitForStatement = function(ctx) {
};


// Enter a parse tree produced by Parser2#returnStatement.
Parser2Listener.prototype.enterReturnStatement = function(ctx) {
};

// Exit a parse tree produced by Parser2#returnStatement.
Parser2Listener.prototype.exitReturnStatement = function(ctx) {
};


// Enter a parse tree produced by Parser2#printStatement.
Parser2Listener.prototype.enterPrintStatement = function(ctx) {
};

// Exit a parse tree produced by Parser2#printStatement.
Parser2Listener.prototype.exitPrintStatement = function(ctx) {
};


// Enter a parse tree produced by Parser2#assignStatement.
Parser2Listener.prototype.enterAssignStatement = function(ctx) {
};

// Exit a parse tree produced by Parser2#assignStatement.
Parser2Listener.prototype.exitAssignStatement = function(ctx) {
};


// Enter a parse tree produced by Parser2#functionCallStatement.
Parser2Listener.prototype.enterFunctionCallStatement = function(ctx) {
};

// Exit a parse tree produced by Parser2#functionCallStatement.
Parser2Listener.prototype.exitFunctionCallStatement = function(ctx) {
};


// Enter a parse tree produced by Parser2#expressionStatement.
Parser2Listener.prototype.enterExpressionStatement = function(ctx) {
};

// Exit a parse tree produced by Parser2#expressionStatement.
Parser2Listener.prototype.exitExpressionStatement = function(ctx) {
};


// Enter a parse tree produced by Parser2#sequence.
Parser2Listener.prototype.enterSequence = function(ctx) {
};

// Exit a parse tree produced by Parser2#sequence.
Parser2Listener.prototype.exitSequence = function(ctx) {
};


// Enter a parse tree produced by Parser2#moreStatements.
Parser2Listener.prototype.enterMoreStatements = function(ctx) {
};

// Exit a parse tree produced by Parser2#moreStatements.
Parser2Listener.prototype.exitMoreStatements = function(ctx) {
};


// Enter a parse tree produced by Parser2#expression.
Parser2Listener.prototype.enterExpression = function(ctx) {
};

// Exit a parse tree produced by Parser2#expression.
Parser2Listener.prototype.exitExpression = function(ctx) {
};


// Enter a parse tree produced by Parser2#comparison.
Parser2Listener.prototype.enterComparison = function(ctx) {
};

// Exit a parse tree produced by Parser2#comparison.
Parser2Listener.prototype.exitComparison = function(ctx) {
};


// Enter a parse tree produced by Parser2#additionExpression.
Parser2Listener.prototype.enterAdditionExpression = function(ctx) {
};

// Exit a parse tree produced by Parser2#additionExpression.
Parser2Listener.prototype.exitAdditionExpression = function(ctx) {
};


// Enter a parse tree produced by Parser2#additionFactor.
Parser2Listener.prototype.enterAdditionFactor = function(ctx) {
};

// Exit a parse tree produced by Parser2#additionFactor.
Parser2Listener.prototype.exitAdditionFactor = function(ctx) {
};


// Enter a parse tree produced by Parser2#multiplicationExpression.
Parser2Listener.prototype.enterMultiplicationExpression = function(ctx) {
};

// Exit a parse tree produced by Parser2#multiplicationExpression.
Parser2Listener.prototype.exitMultiplicationExpression = function(ctx) {
};


// Enter a parse tree produced by Parser2#multiplicationFactor.
Parser2Listener.prototype.enterMultiplicationFactor = function(ctx) {
};

// Exit a parse tree produced by Parser2#multiplicationFactor.
Parser2Listener.prototype.exitMultiplicationFactor = function(ctx) {
};


// Enter a parse tree produced by Parser2#elementExpression.
Parser2Listener.prototype.enterElementExpression = function(ctx) {
};

// Exit a parse tree produced by Parser2#elementExpression.
Parser2Listener.prototype.exitElementExpression = function(ctx) {
};


// Enter a parse tree produced by Parser2#elementAccess.
Parser2Listener.prototype.enterElementAccess = function(ctx) {
};

// Exit a parse tree produced by Parser2#elementAccess.
Parser2Listener.prototype.exitElementAccess = function(ctx) {
};


// Enter a parse tree produced by Parser2#functionCallExpression.
Parser2Listener.prototype.enterFunctionCallExpression = function(ctx) {
};

// Exit a parse tree produced by Parser2#functionCallExpression.
Parser2Listener.prototype.exitFunctionCallExpression = function(ctx) {
};


// Enter a parse tree produced by Parser2#expressionList.
Parser2Listener.prototype.enterExpressionList = function(ctx) {
};

// Exit a parse tree produced by Parser2#expressionList.
Parser2Listener.prototype.exitExpressionList = function(ctx) {
};


// Enter a parse tree produced by Parser2#moreExpressions.
Parser2Listener.prototype.enterMoreExpressions = function(ctx) {
};

// Exit a parse tree produced by Parser2#moreExpressions.
Parser2Listener.prototype.exitMoreExpressions = function(ctx) {
};


// Enter a parse tree produced by Parser2#primitiveExpression.
Parser2Listener.prototype.enterPrimitiveExpression = function(ctx) {
};

// Exit a parse tree produced by Parser2#primitiveExpression.
Parser2Listener.prototype.exitPrimitiveExpression = function(ctx) {
};


// Enter a parse tree produced by Parser2#listExpression.
Parser2Listener.prototype.enterListExpression = function(ctx) {
};

// Exit a parse tree produced by Parser2#listExpression.
Parser2Listener.prototype.exitListExpression = function(ctx) {
};



exports.Parser2Listener = Parser2Listener;