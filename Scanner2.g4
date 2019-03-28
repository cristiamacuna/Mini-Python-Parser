lexer grammar Scanner2;

@lexer::header {
//  import com.yuvalshavit.antlr4.DenterHelper;
//  var denterHelper = require('antlr4/index');
}

@lexer::members {
/*  private final DenterHelper denter = DenterHelper.builder()
    .nl(NEWLINE)
    .indent(miniPythonParser.INDENT)
    .dedent(miniPythonParser.DEDENT)
    .pullToken(miniPythonLexer.super::nextToken);

  @Override
  public Token nextToken() {
    return denter.nextToken();
  }*/
}

DEF     : 'def';
LEN     : 'len';
IF      : 'if';
FOR      : 'for';
IN      : 'in';
ELSE    : 'else';
WHILE   : 'while';
RETURN  : 'return';
//NEWLINE : ('\r'? '\n' (' ' | '\t')* );
NEWLINE : 'nl';
PRINT   : 'print';
ASSIGN  : '=';
INDENT : '{';
DEDENT : '}';


COMA      : ',';
COMP      : '==';
PIZQ      : '(';
PDER      : ')';
SUMA      : '+';
MUL       : '*';
DIV       : '/';
MAYOR     : '>';
MENOR     : '<';
DOSPUN : ':';
SUB     : '-';
CIZQ   : '[';
CDER  : ']';
MENORIGUAL : '<=';
MAYORIGUAL : '>=';

fragment L : [a-zA-Z_];
fragment N : [0-9] ;

CHAR         : '\'' (L|[0-9]|' ')? '\'';
NUM          :'0' | ('-'?[1-9] N* ) | ('-'?[0-9]+)?(('.'[0-9]+));
IDENTIFIER : L(L|N)*;

STRING : '"' ('""'|~'"')* '"' ;

//elementos omitidos
COMMENT:   '//'.*?'\r'?'\n' -> skip ;

COMENTARIO
 : '/*'( COMENTARIO | . )*?'*/' -> skip
 ;

WS : [ +\r\n\t] -> skip ;