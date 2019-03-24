parser grammar Parser;

options {
    tokenVocab = Scanner;
        }

program : statement | statement program;
statement : defStatement | ifStatement | returnStatement | printStatement
| whileStatement | forStatement | assignStatement | functionCallStatement | expressionStatement;

defStatement : DEF ID PIZQ argList PDER DOSPUN sequence;

argList: ID argList | ;

moreArgs: COMA ID moreArgs | ;

ifStatement: IF expression DOSPUN sequence ELSE DOSPUN sequence;

whileStatement: WHILE expression DOSPUN sequence;

forStatement:FOR expression IN expressionList DOSPUN sequence;

returnStatement: RETURN expression NEWLINE;

printStatement: PRINT expression NEWLINE;

assignStatement: ID ASSIGN expression NEWLINE;

functionCallStatement: primitiveExpression PIZQ expressionList PDER NEWLINE;

expressionStatement: expressionList NEWLINE;

sequence: NEWLINE INDENT moreStatements DEDENT;

moreStatements: statement moreStatements | statement;
//asi
expression: additionExpression comparison;

comparison: (MENOR | MAYOR | MENORIGUAL | MAYORIGUAL | COMP ) additionExpression comparison | ;

additionExpression: multiplicationExpression additionFactor;

additionFactor: ( SUM | RESTA ) multiplicationExpression additionFactor | ;

multiplicationExpression: elementExpression multiplicationFactor;

multiplicationFactor: ( MULT | DIV ) elementExpression multiplicationFactor | ;

elementExpression: primitiveExpression elementAccess;

elementAccess: CIZQ expression CDER elementAccess | ;

//functionCallExpression: primitiveExpression PIZQ expressionList PDER;
functionCallExpression: PIZQ expressionList PDER ;
expressionList: expression moreExpressions | ;

moreExpressions: COMA expression moreExpressions | ;

primitiveExpression: NUM | STR | ID | PIZQ expression PDER | listExpression | LEN PIZQ expression PDER | functionCallExpression;

listExpression: CIZQ expressionList CDER;




