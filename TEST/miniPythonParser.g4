parser grammar miniPythonParser;

//tokens { INDENT, DEDENT}
options
{
    tokenVocab = miniPythonLexer;
}


program : statements EOF;
statements : statement | statement program  ;
statement : defStatement | ifStatement | returnStatement | printStatement | whileStatement | forStatement | assignStatement | functionCallStatement | expressionStatement ;
defStatement : DEF IDENTIFIER PIZQ argList PDER DOSPUNTOS sequence ;
argList : IDENTIFIER argList |  ;
moreArgs : COMA IDENTIFIER moreArgs |  ;
ifStatement : IF expression DOSPUNTOS sequence ELSE DOSPUNTOS sequence ;
whileStatement : WHILE expression DOSPUNTOS sequence ;
forStatement : FOR expression IF expressionList DOSPUNTOS sequence ;
returnStatement : RETURN expression NEWLINE ;
printStatement : PRINT expression NEWLINE ;
assignStatement : IDENTIFIER IGUAL expression NEWLINE ;
functionCallStatement : primitiveExpression PIZQ expressionList PDER NEWLINE ;
expressionStatement : expressionList NEWLINE ;
//Sequence : NEWLINE INDENT moreStatements DEDENT ;
sequence : INDENT moreStatements DEDENT ;
moreStatements : statement moreStatements | statement ;
expression : additionExpression comparison ;
comparison : (MENOR|MAYOR|MENORIGUAL|MAYORIGUAL|COMP) additionExpression comparison |  ;
additionExpression : multiplicationExpression additionFactor ;
additionFactor : (SUMA|RESTA) multiplicationExpression additionFactor |  ;
multiplicationExpression : elementExpression multiplicationFactor ;
multiplicationFactor : (MUL|DIV) elementExpression multiplicationFactor |  ;
elementExpression : primitiveExpression elementAccess ;
elementAccess : PCABRIR expression PCCERRAR elementAccess |  ;
//functionCallExpression : primitiveExpression PIZQ expressionList PDER ;
functionCallExpression : IDENTIFIER PIZQ expressionList PDER ;
expressionList : expression moreExpressions |  ;
moreExpressions : COMA expression moreExpressions |  ;
primitiveExpression : NUM | STRING | IDENTIFIER | PIZQ expression PDER | listExpression | LEN PIZQ expression PDER | functionCallExpression ;
listExpression : PCABRIR expressionList PCCERRAR ;

