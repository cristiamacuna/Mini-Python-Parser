parser grammar Parser2;

//tokens { INDENT, DEDENT}
options
{
    tokenVocab = Scanner2;
}

program : statements EOF;
statements : statement statement*;
statement : defStatement | ifStatement | returnStatement | printStatement | whileStatement | forStatement | assignStatement | functionCallStatement | expressionStatement ;
defStatement : DEF IDENTIFIER PIZQ argList PDER DOSPUN sequence ;
argList : IDENTIFIER*;
moreArgs : (COMA IDENTIFIER)*;
ifStatement : IF expression DOSPUN sequence ELSE DOSPUN sequence ;
whileStatement : WHILE expression DOSPUN sequence ;
forStatement : FOR expression IN expressionList DOSPUN sequence ;
returnStatement : RETURN expression NEWLINE ;
printStatement : PRINT expression NEWLINE ;
assignStatement : IDENTIFIER ASSIGN expression NEWLINE ;
functionCallStatement : primitiveExpression PIZQ expressionList PDER NEWLINE ;
expressionStatement : expressionList NEWLINE ;
//Sequence : NEWLINE INDENT moreStatements DEDENT ;
sequence : INDENT moreStatements DEDENT ;
moreStatements : statement statement* ;
expression : additionExpression comparison ;
comparison : ((MENOR|MAYOR| MENORIGUAL| MAYORIGUAL|COMP) additionExpression)*;
additionExpression : multiplicationExpression additionFactor ;
additionFactor : ((SUMA|SUB) multiplicationExpression)*;
multiplicationExpression : elementExpression multiplicationFactor ;
multiplicationFactor : ((MUL|DIV) elementExpression)*;
elementExpression : primitiveExpression elementAccess ;
elementAccess : (CIZQ expression CDER)*;
//functionCallExpression : primitiveExpression LEFTPARENT expressionList RIGTHPARENT ;
functionCallExpression : IDENTIFIER PIZQ expressionList PDER ;
expressionList : expression | (expression moreExpressions)*; //expression moreExpressions |  ;
moreExpressions : (COMA expression)*;
primitiveExpression : NUM | STRING | IDENTIFIER | PIZQ expression PDER | listExpression | LEN PIZQ expression PDER | functionCallExpression ;
listExpression : CIZQ expressionList CDER ;