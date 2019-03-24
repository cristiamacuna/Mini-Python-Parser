lexer grammar Scanner;

//simbolos
PyCOMA : ';';
COMA : ',';
ASSIGN: '=';
PIZQ: '(';
PDER: ')';
CIZQ:   '[';
CDER:   ']';
MULT: '*';
SUM: '+';
RESTA : '-';
DOSPUN : ':';
MAYOR   : '>';
MENOR   : '<';
MAYORIGUAL  : '>=';
MENORIGUAL  : '<=';
COMP    :'==';
DIV : '/';
//palabras reservadas
INT : 'INT';
STRING : 'STRING';
IF      : 'if' ;
WHILE   : 'while' ;
LET     : 'let';
THEN    : 'then';
ELSE    : 'else';
IN      : 'in';
DO      : 'do';
BEGIN   : 'begin';
END     : 'end';
CONST   : 'const';
VAR     : 'var';
DEF     : 'def';
RETURN  : 'return';
NEWLINE : '\n';
PRINT   : 'print';
INDENT  : '{';
DEDENT  : '}';
LEN     : 'len';

fragment DIGIT : '0'..'9';

fragment LETTER : 'a'..'z' |'A'..'Z';

//expresiones complejas
NUM : DIGIT DIGIT*;
ID : LETTER (LETTER | DIGIT)*;
STR : '"' (DIGIT | LETTER | ' ')* '"';





WS : [ \t\n\r]+ -> skip ;


COMMENT : '//' (DIGIT|LETTER)*;