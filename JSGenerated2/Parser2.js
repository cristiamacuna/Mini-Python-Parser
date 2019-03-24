// Generated from /Users/cristiamacuna/Documents/IIS-2019/Compiladores/Proyecto/G4/Parser2.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');
var Parser2Listener = require('./Parser2Listener').Parser2Listener;
var grammarFileName = "Parser2.g4";


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\'\u00ec\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010\u0004",
    "\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014\t",
    "\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017\t\u0017\u0004",
    "\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a\u0004\u001b\t",
    "\u001b\u0004\u001c\t\u001c\u0004\u001d\t\u001d\u0004\u001e\t\u001e\u0003",
    "\u0002\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0007\u0003B",
    "\n\u0003\f\u0003\u000e\u0003E\u000b\u0003\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0005\u0004P\n\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0003",
    "\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0006\u0007",
    "\u0006[\n\u0006\f\u0006\u000e\u0006^\u000b\u0006\u0003\u0007\u0003\u0007",
    "\u0007\u0007b\n\u0007\f\u0007\u000e\u0007e\u000b\u0007\u0003\b\u0003",
    "\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\t\u0003\t\u0003",
    "\t\u0003\t\u0003\t\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003",
    "\n\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\f\u0003\f\u0003",
    "\f\u0003\f\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\u000e\u0003",
    "\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000f\u0003",
    "\u000f\u0003\u000f\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003",
    "\u0011\u0003\u0011\u0007\u0011\u0097\n\u0011\f\u0011\u000e\u0011\u009a",
    "\u000b\u0011\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0013\u0003\u0013",
    "\u0007\u0013\u00a1\n\u0013\f\u0013\u000e\u0013\u00a4\u000b\u0013\u0003",
    "\u0014\u0003\u0014\u0003\u0014\u0003\u0015\u0003\u0015\u0007\u0015\u00ab",
    "\n\u0015\f\u0015\u000e\u0015\u00ae\u000b\u0015\u0003\u0016\u0003\u0016",
    "\u0003\u0016\u0003\u0017\u0003\u0017\u0007\u0017\u00b5\n\u0017\f\u0017",
    "\u000e\u0017\u00b8\u000b\u0017\u0003\u0018\u0003\u0018\u0003\u0018\u0003",
    "\u0019\u0003\u0019\u0003\u0019\u0003\u0019\u0007\u0019\u00c1\n\u0019",
    "\f\u0019\u000e\u0019\u00c4\u000b\u0019\u0003\u001a\u0003\u001a\u0003",
    "\u001a\u0003\u001a\u0003\u001a\u0003\u001b\u0003\u001b\u0003\u001b\u0003",
    "\u001b\u0005\u001b\u00cf\n\u001b\u0003\u001c\u0003\u001c\u0007\u001c",
    "\u00d3\n\u001c\f\u001c\u000e\u001c\u00d6\u000b\u001c\u0003\u001d\u0003",
    "\u001d\u0003\u001d\u0003\u001d\u0003\u001d\u0003\u001d\u0003\u001d\u0003",
    "\u001d\u0003\u001d\u0003\u001d\u0003\u001d\u0003\u001d\u0003\u001d\u0003",
    "\u001d\u0005\u001d\u00e6\n\u001d\u0003\u001e\u0003\u001e\u0003\u001e",
    "\u0003\u001e\u0003\u001e\u0002\u0002\u001f\u0002\u0004\u0006\b\n\f\u000e",
    "\u0010\u0012\u0014\u0016\u0018\u001a\u001c\u001e \"$&(*,.02468:\u0002",
    "\u0005\u0005\u0002\u0011\u0011\u0017\u0018\u001d\u001e\u0004\u0002\u001a",
    "\u001a&&\u0004\u0002\u0016\u0016\'\'\u0002\u00e6\u0002<\u0003\u0002",
    "\u0002\u0002\u0004?\u0003\u0002\u0002\u0002\u0006O\u0003\u0002\u0002",
    "\u0002\bQ\u0003\u0002\u0002\u0002\n\\\u0003\u0002\u0002\u0002\fc\u0003",
    "\u0002\u0002\u0002\u000ef\u0003\u0002\u0002\u0002\u0010n\u0003\u0002",
    "\u0002\u0002\u0012s\u0003\u0002\u0002\u0002\u0014z\u0003\u0002\u0002",
    "\u0002\u0016~\u0003\u0002\u0002\u0002\u0018\u0082\u0003\u0002\u0002",
    "\u0002\u001a\u0087\u0003\u0002\u0002\u0002\u001c\u008d\u0003\u0002\u0002",
    "\u0002\u001e\u0090\u0003\u0002\u0002\u0002 \u0094\u0003\u0002\u0002",
    "\u0002\"\u009b\u0003\u0002\u0002\u0002$\u00a2\u0003\u0002\u0002\u0002",
    "&\u00a5\u0003\u0002\u0002\u0002(\u00ac\u0003\u0002\u0002\u0002*\u00af",
    "\u0003\u0002\u0002\u0002,\u00b6\u0003\u0002\u0002\u0002.\u00b9\u0003",
    "\u0002\u0002\u00020\u00c2\u0003\u0002\u0002\u00022\u00c5\u0003\u0002",
    "\u0002\u00024\u00ce\u0003\u0002\u0002\u00026\u00d4\u0003\u0002\u0002",
    "\u00028\u00e5\u0003\u0002\u0002\u0002:\u00e7\u0003\u0002\u0002\u0002",
    "<=\u0005\u0004\u0003\u0002=>\u0007\u0002\u0002\u0003>\u0003\u0003\u0002",
    "\u0002\u0002?C\u0005\u0006\u0004\u0002@B\u0005\u0006\u0004\u0002A@\u0003",
    "\u0002\u0002\u0002BE\u0003\u0002\u0002\u0002CA\u0003\u0002\u0002\u0002",
    "CD\u0003\u0002\u0002\u0002D\u0005\u0003\u0002\u0002\u0002EC\u0003\u0002",
    "\u0002\u0002FP\u0005\b\u0005\u0002GP\u0005\u000e\b\u0002HP\u0005\u0014",
    "\u000b\u0002IP\u0005\u0016\f\u0002JP\u0005\u0010\t\u0002KP\u0005\u0012",
    "\n\u0002LP\u0005\u0018\r\u0002MP\u0005\u001a\u000e\u0002NP\u0005\u001c",
    "\u000f\u0002OF\u0003\u0002\u0002\u0002OG\u0003\u0002\u0002\u0002OH\u0003",
    "\u0002\u0002\u0002OI\u0003\u0002\u0002\u0002OJ\u0003\u0002\u0002\u0002",
    "OK\u0003\u0002\u0002\u0002OL\u0003\u0002\u0002\u0002OM\u0003\u0002\u0002",
    "\u0002ON\u0003\u0002\u0002\u0002P\u0007\u0003\u0002\u0002\u0002QR\u0007",
    "\u0003\u0002\u0002RS\u0007!\u0002\u0002ST\u0007\u0012\u0002\u0002TU",
    "\u0005\n\u0006\u0002UV\u0007\u0013\u0002\u0002VW\u0007\u0019\u0002\u0002",
    "WX\u0005\u001e\u0010\u0002X\t\u0003\u0002\u0002\u0002Y[\u0007!\u0002",
    "\u0002ZY\u0003\u0002\u0002\u0002[^\u0003\u0002\u0002\u0002\\Z\u0003",
    "\u0002\u0002\u0002\\]\u0003\u0002\u0002\u0002]\u000b\u0003\u0002\u0002",
    "\u0002^\\\u0003\u0002\u0002\u0002_`\u0007\u0010\u0002\u0002`b\u0007",
    "!\u0002\u0002a_\u0003\u0002\u0002\u0002be\u0003\u0002\u0002\u0002ca",
    "\u0003\u0002\u0002\u0002cd\u0003\u0002\u0002\u0002d\r\u0003\u0002\u0002",
    "\u0002ec\u0003\u0002\u0002\u0002fg\u0007\u0005\u0002\u0002gh\u0005\"",
    "\u0012\u0002hi\u0007\u0019\u0002\u0002ij\u0005\u001e\u0010\u0002jk\u0007",
    "\b\u0002\u0002kl\u0007\u0019\u0002\u0002lm\u0005\u001e\u0010\u0002m",
    "\u000f\u0003\u0002\u0002\u0002no\u0007\t\u0002\u0002op\u0005\"\u0012",
    "\u0002pq\u0007\u0019\u0002\u0002qr\u0005\u001e\u0010\u0002r\u0011\u0003",
    "\u0002\u0002\u0002st\u0007\u0006\u0002\u0002tu\u0005\"\u0012\u0002u",
    "v\u0007\u0005\u0002\u0002vw\u00054\u001b\u0002wx\u0007\u0019\u0002\u0002",
    "xy\u0005\u001e\u0010\u0002y\u0013\u0003\u0002\u0002\u0002z{\u0007\n",
    "\u0002\u0002{|\u0005\"\u0012\u0002|}\u0007\u000b\u0002\u0002}\u0015",
    "\u0003\u0002\u0002\u0002~\u007f\u0007\f\u0002\u0002\u007f\u0080\u0005",
    "\"\u0012\u0002\u0080\u0081\u0007\u000b\u0002\u0002\u0081\u0017\u0003",
    "\u0002\u0002\u0002\u0082\u0083\u0007!\u0002\u0002\u0083\u0084\u0007",
    "\r\u0002\u0002\u0084\u0085\u0005\"\u0012\u0002\u0085\u0086\u0007\u000b",
    "\u0002\u0002\u0086\u0019\u0003\u0002\u0002\u0002\u0087\u0088\u00058",
    "\u001d\u0002\u0088\u0089\u0007\u0012\u0002\u0002\u0089\u008a\u00054",
    "\u001b\u0002\u008a\u008b\u0007\u0013\u0002\u0002\u008b\u008c\u0007\u000b",
    "\u0002\u0002\u008c\u001b\u0003\u0002\u0002\u0002\u008d\u008e\u00054",
    "\u001b\u0002\u008e\u008f\u0007\u000b\u0002\u0002\u008f\u001d\u0003\u0002",
    "\u0002\u0002\u0090\u0091\u0007\u000e\u0002\u0002\u0091\u0092\u0005 ",
    "\u0011\u0002\u0092\u0093\u0007\u000f\u0002\u0002\u0093\u001f\u0003\u0002",
    "\u0002\u0002\u0094\u0098\u0005\u0006\u0004\u0002\u0095\u0097\u0005\u0006",
    "\u0004\u0002\u0096\u0095\u0003\u0002\u0002\u0002\u0097\u009a\u0003\u0002",
    "\u0002\u0002\u0098\u0096\u0003\u0002\u0002\u0002\u0098\u0099\u0003\u0002",
    "\u0002\u0002\u0099!\u0003\u0002\u0002\u0002\u009a\u0098\u0003\u0002",
    "\u0002\u0002\u009b\u009c\u0005&\u0014\u0002\u009c\u009d\u0005$\u0013",
    "\u0002\u009d#\u0003\u0002\u0002\u0002\u009e\u009f\t\u0002\u0002\u0002",
    "\u009f\u00a1\u0005&\u0014\u0002\u00a0\u009e\u0003\u0002\u0002\u0002",
    "\u00a1\u00a4\u0003\u0002\u0002\u0002\u00a2\u00a0\u0003\u0002\u0002\u0002",
    "\u00a2\u00a3\u0003\u0002\u0002\u0002\u00a3%\u0003\u0002\u0002\u0002",
    "\u00a4\u00a2\u0003\u0002\u0002\u0002\u00a5\u00a6\u0005*\u0016\u0002",
    "\u00a6\u00a7\u0005(\u0015\u0002\u00a7\'\u0003\u0002\u0002\u0002\u00a8",
    "\u00a9\t\u0003\u0002\u0002\u00a9\u00ab\u0005*\u0016\u0002\u00aa\u00a8",
    "\u0003\u0002\u0002\u0002\u00ab\u00ae\u0003\u0002\u0002\u0002\u00ac\u00aa",
    "\u0003\u0002\u0002\u0002\u00ac\u00ad\u0003\u0002\u0002\u0002\u00ad)",
    "\u0003\u0002\u0002\u0002\u00ae\u00ac\u0003\u0002\u0002\u0002\u00af\u00b0",
    "\u0005.\u0018\u0002\u00b0\u00b1\u0005,\u0017\u0002\u00b1+\u0003\u0002",
    "\u0002\u0002\u00b2\u00b3\t\u0004\u0002\u0002\u00b3\u00b5\u0005.\u0018",
    "\u0002\u00b4\u00b2\u0003\u0002\u0002\u0002\u00b5\u00b8\u0003\u0002\u0002",
    "\u0002\u00b6\u00b4\u0003\u0002\u0002\u0002\u00b6\u00b7\u0003\u0002\u0002",
    "\u0002\u00b7-\u0003\u0002\u0002\u0002\u00b8\u00b6\u0003\u0002\u0002",
    "\u0002\u00b9\u00ba\u00058\u001d\u0002\u00ba\u00bb\u00050\u0019\u0002",
    "\u00bb/\u0003\u0002\u0002\u0002\u00bc\u00bd\u0007\u001b\u0002\u0002",
    "\u00bd\u00be\u0005\"\u0012\u0002\u00be\u00bf\u0007\u001c\u0002\u0002",
    "\u00bf\u00c1\u0003\u0002\u0002\u0002\u00c0\u00bc\u0003\u0002\u0002\u0002",
    "\u00c1\u00c4\u0003\u0002\u0002\u0002\u00c2\u00c0\u0003\u0002\u0002\u0002",
    "\u00c2\u00c3\u0003\u0002\u0002\u0002\u00c31\u0003\u0002\u0002\u0002",
    "\u00c4\u00c2\u0003\u0002\u0002\u0002\u00c5\u00c6\u0007!\u0002\u0002",
    "\u00c6\u00c7\u0007\u0012\u0002\u0002\u00c7\u00c8\u00054\u001b\u0002",
    "\u00c8\u00c9\u0007\u0013\u0002\u0002\u00c93\u0003\u0002\u0002\u0002",
    "\u00ca\u00cb\u0005\"\u0012\u0002\u00cb\u00cc\u00056\u001c\u0002\u00cc",
    "\u00cf\u0003\u0002\u0002\u0002\u00cd\u00cf\u0003\u0002\u0002\u0002\u00ce",
    "\u00ca\u0003\u0002\u0002\u0002\u00ce\u00cd\u0003\u0002\u0002\u0002\u00cf",
    "5\u0003\u0002\u0002\u0002\u00d0\u00d1\u0007\u0010\u0002\u0002\u00d1",
    "\u00d3\u0005\"\u0012\u0002\u00d2\u00d0\u0003\u0002\u0002\u0002\u00d3",
    "\u00d6\u0003\u0002\u0002\u0002\u00d4\u00d2\u0003\u0002\u0002\u0002\u00d4",
    "\u00d5\u0003\u0002\u0002\u0002\u00d57\u0003\u0002\u0002\u0002\u00d6",
    "\u00d4\u0003\u0002\u0002\u0002\u00d7\u00e6\u0007 \u0002\u0002\u00d8",
    "\u00e6\u0007\"\u0002\u0002\u00d9\u00e6\u0007!\u0002\u0002\u00da\u00db",
    "\u0007\u0012\u0002\u0002\u00db\u00dc\u0005\"\u0012\u0002\u00dc\u00dd",
    "\u0007\u0013\u0002\u0002\u00dd\u00e6\u0003\u0002\u0002\u0002\u00de\u00e6",
    "\u0005:\u001e\u0002\u00df\u00e0\u0007\u0004\u0002\u0002\u00e0\u00e1",
    "\u0007\u0012\u0002\u0002\u00e1\u00e2\u0005\"\u0012\u0002\u00e2\u00e3",
    "\u0007\u0013\u0002\u0002\u00e3\u00e6\u0003\u0002\u0002\u0002\u00e4\u00e6",
    "\u00052\u001a\u0002\u00e5\u00d7\u0003\u0002\u0002\u0002\u00e5\u00d8",
    "\u0003\u0002\u0002\u0002\u00e5\u00d9\u0003\u0002\u0002\u0002\u00e5\u00da",
    "\u0003\u0002\u0002\u0002\u00e5\u00de\u0003\u0002\u0002\u0002\u00e5\u00df",
    "\u0003\u0002\u0002\u0002\u00e5\u00e4\u0003\u0002\u0002\u0002\u00e69",
    "\u0003\u0002\u0002\u0002\u00e7\u00e8\u0007\u001b\u0002\u0002\u00e8\u00e9",
    "\u00054\u001b\u0002\u00e9\u00ea\u0007\u001c\u0002\u0002\u00ea;\u0003",
    "\u0002\u0002\u0002\u000eCO\\c\u0098\u00a2\u00ac\u00b6\u00c2\u00ce\u00d4",
    "\u00e5"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'def'", "'len'", "'if'", "'for'", "'in'", "'else'", 
                     "'while'", "'return'", "'nl'", "'print'", "'='", "'{'", 
                     "'}'", "','", "'=='", "'('", "')'", "'+'", "'*'", "'/'", 
                     "'>'", "'<'", "':'", "'-'", "'['", "']'", "'<='", "'>='" ];

var symbolicNames = [ null, "DEF", "LEN", "IF", "FOR", "IN", "ELSE", "WHILE", 
                      "RETURN", "NEWLINE", "PRINT", "ASSIGN", "INDENT", 
                      "DEDENT", "COMA", "COMP", "PIZQ", "PDER", "SUMA", 
                      "MUL", "DIV", "MAYOR", "MENOR", "DOSPUN", "SUB", "CIZQ", 
                      "CDER", "MENORIGUAL", "MAYORIGUAL", "CHAR", "NUM", 
                      "IDENTIFIER", "STRING", "COMMENT", "COMENTARIO", "WS", 
                      "SUM", "MULT" ];

var ruleNames =  [ "program", "statements", "statement", "defStatement", 
                   "argList", "moreArgs", "ifStatement", "whileStatement", 
                   "forStatement", "returnStatement", "printStatement", 
                   "assignStatement", "functionCallStatement", "expressionStatement", 
                   "sequence", "moreStatements", "expression", "comparison", 
                   "additionExpression", "additionFactor", "multiplicationExpression", 
                   "multiplicationFactor", "elementExpression", "elementAccess", 
                   "functionCallExpression", "expressionList", "moreExpressions", 
                   "primitiveExpression", "listExpression" ];

function Parser2 (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

Parser2.prototype = Object.create(antlr4.Parser.prototype);
Parser2.prototype.constructor = Parser2;

Object.defineProperty(Parser2.prototype, "atn", {
	get : function() {
		return atn;
	}
});

Parser2.EOF = antlr4.Token.EOF;
Parser2.DEF = 1;
Parser2.LEN = 2;
Parser2.IF = 3;
Parser2.FOR = 4;
Parser2.IN = 5;
Parser2.ELSE = 6;
Parser2.WHILE = 7;
Parser2.RETURN = 8;
Parser2.NEWLINE = 9;
Parser2.PRINT = 10;
Parser2.ASSIGN = 11;
Parser2.INDENT = 12;
Parser2.DEDENT = 13;
Parser2.COMA = 14;
Parser2.COMP = 15;
Parser2.PIZQ = 16;
Parser2.PDER = 17;
Parser2.SUMA = 18;
Parser2.MUL = 19;
Parser2.DIV = 20;
Parser2.MAYOR = 21;
Parser2.MENOR = 22;
Parser2.DOSPUN = 23;
Parser2.SUB = 24;
Parser2.CIZQ = 25;
Parser2.CDER = 26;
Parser2.MENORIGUAL = 27;
Parser2.MAYORIGUAL = 28;
Parser2.CHAR = 29;
Parser2.NUM = 30;
Parser2.IDENTIFIER = 31;
Parser2.STRING = 32;
Parser2.COMMENT = 33;
Parser2.COMENTARIO = 34;
Parser2.WS = 35;
Parser2.SUM = 36;
Parser2.MULT = 37;

Parser2.RULE_program = 0;
Parser2.RULE_statements = 1;
Parser2.RULE_statement = 2;
Parser2.RULE_defStatement = 3;
Parser2.RULE_argList = 4;
Parser2.RULE_moreArgs = 5;
Parser2.RULE_ifStatement = 6;
Parser2.RULE_whileStatement = 7;
Parser2.RULE_forStatement = 8;
Parser2.RULE_returnStatement = 9;
Parser2.RULE_printStatement = 10;
Parser2.RULE_assignStatement = 11;
Parser2.RULE_functionCallStatement = 12;
Parser2.RULE_expressionStatement = 13;
Parser2.RULE_sequence = 14;
Parser2.RULE_moreStatements = 15;
Parser2.RULE_expression = 16;
Parser2.RULE_comparison = 17;
Parser2.RULE_additionExpression = 18;
Parser2.RULE_additionFactor = 19;
Parser2.RULE_multiplicationExpression = 20;
Parser2.RULE_multiplicationFactor = 21;
Parser2.RULE_elementExpression = 22;
Parser2.RULE_elementAccess = 23;
Parser2.RULE_functionCallExpression = 24;
Parser2.RULE_expressionList = 25;
Parser2.RULE_moreExpressions = 26;
Parser2.RULE_primitiveExpression = 27;
Parser2.RULE_listExpression = 28;


function ProgramContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = Parser2.RULE_program;
    return this;
}

ProgramContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ProgramContext.prototype.constructor = ProgramContext;

ProgramContext.prototype.statements = function() {
    return this.getTypedRuleContext(StatementsContext,0);
};

ProgramContext.prototype.EOF = function() {
    return this.getToken(Parser2.EOF, 0);
};

ProgramContext.prototype.enterRule = function(listener) {
    if(listener instanceof Parser2Listener ) {
        listener.enterProgram(this);
	}
};

ProgramContext.prototype.exitRule = function(listener) {
    if(listener instanceof Parser2Listener ) {
        listener.exitProgram(this);
	}
};




Parser2.ProgramContext = ProgramContext;

Parser2.prototype.program = function() {

    var localctx = new ProgramContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, Parser2.RULE_program);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 58;
        this.statements();
        this.state = 59;
        this.match(Parser2.EOF);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function StatementsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = Parser2.RULE_statements;
    return this;
}

StatementsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StatementsContext.prototype.constructor = StatementsContext;

StatementsContext.prototype.statement = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(StatementContext);
    } else {
        return this.getTypedRuleContext(StatementContext,i);
    }
};

StatementsContext.prototype.enterRule = function(listener) {
    if(listener instanceof Parser2Listener ) {
        listener.enterStatements(this);
	}
};

StatementsContext.prototype.exitRule = function(listener) {
    if(listener instanceof Parser2Listener ) {
        listener.exitStatements(this);
	}
};




Parser2.StatementsContext = StatementsContext;

Parser2.prototype.statements = function() {

    var localctx = new StatementsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, Parser2.RULE_statements);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 61;
        this.statement();
        this.state = 65;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(((((_la - 1)) & ~0x1f) == 0 && ((1 << (_la - 1)) & ((1 << (Parser2.DEF - 1)) | (1 << (Parser2.LEN - 1)) | (1 << (Parser2.IF - 1)) | (1 << (Parser2.FOR - 1)) | (1 << (Parser2.WHILE - 1)) | (1 << (Parser2.RETURN - 1)) | (1 << (Parser2.NEWLINE - 1)) | (1 << (Parser2.PRINT - 1)) | (1 << (Parser2.PIZQ - 1)) | (1 << (Parser2.CIZQ - 1)) | (1 << (Parser2.NUM - 1)) | (1 << (Parser2.IDENTIFIER - 1)) | (1 << (Parser2.STRING - 1)))) !== 0)) {
            this.state = 62;
            this.statement();
            this.state = 67;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function StatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = Parser2.RULE_statement;
    return this;
}

StatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StatementContext.prototype.constructor = StatementContext;

StatementContext.prototype.defStatement = function() {
    return this.getTypedRuleContext(DefStatementContext,0);
};

StatementContext.prototype.ifStatement = function() {
    return this.getTypedRuleContext(IfStatementContext,0);
};

StatementContext.prototype.returnStatement = function() {
    return this.getTypedRuleContext(ReturnStatementContext,0);
};

StatementContext.prototype.printStatement = function() {
    return this.getTypedRuleContext(PrintStatementContext,0);
};

StatementContext.prototype.whileStatement = function() {
    return this.getTypedRuleContext(WhileStatementContext,0);
};

StatementContext.prototype.forStatement = function() {
    return this.getTypedRuleContext(ForStatementContext,0);
};

StatementContext.prototype.assignStatement = function() {
    return this.getTypedRuleContext(AssignStatementContext,0);
};

StatementContext.prototype.functionCallStatement = function() {
    return this.getTypedRuleContext(FunctionCallStatementContext,0);
};

StatementContext.prototype.expressionStatement = function() {
    return this.getTypedRuleContext(ExpressionStatementContext,0);
};

StatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof Parser2Listener ) {
        listener.enterStatement(this);
	}
};

StatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof Parser2Listener ) {
        listener.exitStatement(this);
	}
};




Parser2.StatementContext = StatementContext;

Parser2.prototype.statement = function() {

    var localctx = new StatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, Parser2.RULE_statement);
    try {
        this.state = 77;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 68;
            this.defStatement();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 69;
            this.ifStatement();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 70;
            this.returnStatement();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 71;
            this.printStatement();
            break;

        case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 72;
            this.whileStatement();
            break;

        case 6:
            this.enterOuterAlt(localctx, 6);
            this.state = 73;
            this.forStatement();
            break;

        case 7:
            this.enterOuterAlt(localctx, 7);
            this.state = 74;
            this.assignStatement();
            break;

        case 8:
            this.enterOuterAlt(localctx, 8);
            this.state = 75;
            this.functionCallStatement();
            break;

        case 9:
            this.enterOuterAlt(localctx, 9);
            this.state = 76;
            this.expressionStatement();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function DefStatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = Parser2.RULE_defStatement;
    return this;
}

DefStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DefStatementContext.prototype.constructor = DefStatementContext;

DefStatementContext.prototype.DEF = function() {
    return this.getToken(Parser2.DEF, 0);
};

DefStatementContext.prototype.IDENTIFIER = function() {
    return this.getToken(Parser2.IDENTIFIER, 0);
};

DefStatementContext.prototype.PIZQ = function() {
    return this.getToken(Parser2.PIZQ, 0);
};

DefStatementContext.prototype.argList = function() {
    return this.getTypedRuleContext(ArgListContext,0);
};

DefStatementContext.prototype.PDER = function() {
    return this.getToken(Parser2.PDER, 0);
};

DefStatementContext.prototype.DOSPUN = function() {
    return this.getToken(Parser2.DOSPUN, 0);
};

DefStatementContext.prototype.sequence = function() {
    return this.getTypedRuleContext(SequenceContext,0);
};

DefStatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof Parser2Listener ) {
        listener.enterDefStatement(this);
	}
};

DefStatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof Parser2Listener ) {
        listener.exitDefStatement(this);
	}
};




Parser2.DefStatementContext = DefStatementContext;

Parser2.prototype.defStatement = function() {

    var localctx = new DefStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, Parser2.RULE_defStatement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 79;
        this.match(Parser2.DEF);
        this.state = 80;
        this.match(Parser2.IDENTIFIER);
        this.state = 81;
        this.match(Parser2.PIZQ);
        this.state = 82;
        this.argList();
        this.state = 83;
        this.match(Parser2.PDER);
        this.state = 84;
        this.match(Parser2.DOSPUN);
        this.state = 85;
        this.sequence();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ArgListContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = Parser2.RULE_argList;
    return this;
}

ArgListContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ArgListContext.prototype.constructor = ArgListContext;

ArgListContext.prototype.IDENTIFIER = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(Parser2.IDENTIFIER);
    } else {
        return this.getToken(Parser2.IDENTIFIER, i);
    }
};


ArgListContext.prototype.enterRule = function(listener) {
    if(listener instanceof Parser2Listener ) {
        listener.enterArgList(this);
	}
};

ArgListContext.prototype.exitRule = function(listener) {
    if(listener instanceof Parser2Listener ) {
        listener.exitArgList(this);
	}
};




Parser2.ArgListContext = ArgListContext;

Parser2.prototype.argList = function() {

    var localctx = new ArgListContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, Parser2.RULE_argList);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 90;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===Parser2.IDENTIFIER) {
            this.state = 87;
            this.match(Parser2.IDENTIFIER);
            this.state = 92;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function MoreArgsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = Parser2.RULE_moreArgs;
    return this;
}

MoreArgsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MoreArgsContext.prototype.constructor = MoreArgsContext;

MoreArgsContext.prototype.COMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(Parser2.COMA);
    } else {
        return this.getToken(Parser2.COMA, i);
    }
};


MoreArgsContext.prototype.IDENTIFIER = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(Parser2.IDENTIFIER);
    } else {
        return this.getToken(Parser2.IDENTIFIER, i);
    }
};


MoreArgsContext.prototype.enterRule = function(listener) {
    if(listener instanceof Parser2Listener ) {
        listener.enterMoreArgs(this);
	}
};

MoreArgsContext.prototype.exitRule = function(listener) {
    if(listener instanceof Parser2Listener ) {
        listener.exitMoreArgs(this);
	}
};




Parser2.MoreArgsContext = MoreArgsContext;

Parser2.prototype.moreArgs = function() {

    var localctx = new MoreArgsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, Parser2.RULE_moreArgs);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 97;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===Parser2.COMA) {
            this.state = 93;
            this.match(Parser2.COMA);
            this.state = 94;
            this.match(Parser2.IDENTIFIER);
            this.state = 99;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function IfStatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = Parser2.RULE_ifStatement;
    return this;
}

IfStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
IfStatementContext.prototype.constructor = IfStatementContext;

IfStatementContext.prototype.IF = function() {
    return this.getToken(Parser2.IF, 0);
};

IfStatementContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

IfStatementContext.prototype.DOSPUN = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(Parser2.DOSPUN);
    } else {
        return this.getToken(Parser2.DOSPUN, i);
    }
};


IfStatementContext.prototype.sequence = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(SequenceContext);
    } else {
        return this.getTypedRuleContext(SequenceContext,i);
    }
};

IfStatementContext.prototype.ELSE = function() {
    return this.getToken(Parser2.ELSE, 0);
};

IfStatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof Parser2Listener ) {
        listener.enterIfStatement(this);
	}
};

IfStatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof Parser2Listener ) {
        listener.exitIfStatement(this);
	}
};




Parser2.IfStatementContext = IfStatementContext;

Parser2.prototype.ifStatement = function() {

    var localctx = new IfStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, Parser2.RULE_ifStatement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 100;
        this.match(Parser2.IF);
        this.state = 101;
        this.expression();
        this.state = 102;
        this.match(Parser2.DOSPUN);
        this.state = 103;
        this.sequence();
        this.state = 104;
        this.match(Parser2.ELSE);
        this.state = 105;
        this.match(Parser2.DOSPUN);
        this.state = 106;
        this.sequence();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function WhileStatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = Parser2.RULE_whileStatement;
    return this;
}

WhileStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
WhileStatementContext.prototype.constructor = WhileStatementContext;

WhileStatementContext.prototype.WHILE = function() {
    return this.getToken(Parser2.WHILE, 0);
};

WhileStatementContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

WhileStatementContext.prototype.DOSPUN = function() {
    return this.getToken(Parser2.DOSPUN, 0);
};

WhileStatementContext.prototype.sequence = function() {
    return this.getTypedRuleContext(SequenceContext,0);
};

WhileStatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof Parser2Listener ) {
        listener.enterWhileStatement(this);
	}
};

WhileStatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof Parser2Listener ) {
        listener.exitWhileStatement(this);
	}
};




Parser2.WhileStatementContext = WhileStatementContext;

Parser2.prototype.whileStatement = function() {

    var localctx = new WhileStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, Parser2.RULE_whileStatement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 108;
        this.match(Parser2.WHILE);
        this.state = 109;
        this.expression();
        this.state = 110;
        this.match(Parser2.DOSPUN);
        this.state = 111;
        this.sequence();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ForStatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = Parser2.RULE_forStatement;
    return this;
}

ForStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ForStatementContext.prototype.constructor = ForStatementContext;

ForStatementContext.prototype.FOR = function() {
    return this.getToken(Parser2.FOR, 0);
};

ForStatementContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

ForStatementContext.prototype.IF = function() {
    return this.getToken(Parser2.IF, 0);
};

ForStatementContext.prototype.expressionList = function() {
    return this.getTypedRuleContext(ExpressionListContext,0);
};

ForStatementContext.prototype.DOSPUN = function() {
    return this.getToken(Parser2.DOSPUN, 0);
};

ForStatementContext.prototype.sequence = function() {
    return this.getTypedRuleContext(SequenceContext,0);
};

ForStatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof Parser2Listener ) {
        listener.enterForStatement(this);
	}
};

ForStatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof Parser2Listener ) {
        listener.exitForStatement(this);
	}
};




Parser2.ForStatementContext = ForStatementContext;

Parser2.prototype.forStatement = function() {

    var localctx = new ForStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, Parser2.RULE_forStatement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 113;
        this.match(Parser2.FOR);
        this.state = 114;
        this.expression();
        this.state = 115;
        this.match(Parser2.IF);
        this.state = 116;
        this.expressionList();
        this.state = 117;
        this.match(Parser2.DOSPUN);
        this.state = 118;
        this.sequence();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ReturnStatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = Parser2.RULE_returnStatement;
    return this;
}

ReturnStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ReturnStatementContext.prototype.constructor = ReturnStatementContext;

ReturnStatementContext.prototype.RETURN = function() {
    return this.getToken(Parser2.RETURN, 0);
};

ReturnStatementContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

ReturnStatementContext.prototype.NEWLINE = function() {
    return this.getToken(Parser2.NEWLINE, 0);
};

ReturnStatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof Parser2Listener ) {
        listener.enterReturnStatement(this);
	}
};

ReturnStatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof Parser2Listener ) {
        listener.exitReturnStatement(this);
	}
};




Parser2.ReturnStatementContext = ReturnStatementContext;

Parser2.prototype.returnStatement = function() {

    var localctx = new ReturnStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, Parser2.RULE_returnStatement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 120;
        this.match(Parser2.RETURN);
        this.state = 121;
        this.expression();
        this.state = 122;
        this.match(Parser2.NEWLINE);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function PrintStatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = Parser2.RULE_printStatement;
    return this;
}

PrintStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PrintStatementContext.prototype.constructor = PrintStatementContext;

PrintStatementContext.prototype.PRINT = function() {
    return this.getToken(Parser2.PRINT, 0);
};

PrintStatementContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

PrintStatementContext.prototype.NEWLINE = function() {
    return this.getToken(Parser2.NEWLINE, 0);
};

PrintStatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof Parser2Listener ) {
        listener.enterPrintStatement(this);
	}
};

PrintStatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof Parser2Listener ) {
        listener.exitPrintStatement(this);
	}
};




Parser2.PrintStatementContext = PrintStatementContext;

Parser2.prototype.printStatement = function() {

    var localctx = new PrintStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, Parser2.RULE_printStatement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 124;
        this.match(Parser2.PRINT);
        this.state = 125;
        this.expression();
        this.state = 126;
        this.match(Parser2.NEWLINE);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function AssignStatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = Parser2.RULE_assignStatement;
    return this;
}

AssignStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AssignStatementContext.prototype.constructor = AssignStatementContext;

AssignStatementContext.prototype.IDENTIFIER = function() {
    return this.getToken(Parser2.IDENTIFIER, 0);
};

AssignStatementContext.prototype.ASSIGN = function() {
    return this.getToken(Parser2.ASSIGN, 0);
};

AssignStatementContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

AssignStatementContext.prototype.NEWLINE = function() {
    return this.getToken(Parser2.NEWLINE, 0);
};

AssignStatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof Parser2Listener ) {
        listener.enterAssignStatement(this);
	}
};

AssignStatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof Parser2Listener ) {
        listener.exitAssignStatement(this);
	}
};




Parser2.AssignStatementContext = AssignStatementContext;

Parser2.prototype.assignStatement = function() {

    var localctx = new AssignStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, Parser2.RULE_assignStatement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 128;
        this.match(Parser2.IDENTIFIER);
        this.state = 129;
        this.match(Parser2.ASSIGN);
        this.state = 130;
        this.expression();
        this.state = 131;
        this.match(Parser2.NEWLINE);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function FunctionCallStatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = Parser2.RULE_functionCallStatement;
    return this;
}

FunctionCallStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FunctionCallStatementContext.prototype.constructor = FunctionCallStatementContext;

FunctionCallStatementContext.prototype.primitiveExpression = function() {
    return this.getTypedRuleContext(PrimitiveExpressionContext,0);
};

FunctionCallStatementContext.prototype.PIZQ = function() {
    return this.getToken(Parser2.PIZQ, 0);
};

FunctionCallStatementContext.prototype.expressionList = function() {
    return this.getTypedRuleContext(ExpressionListContext,0);
};

FunctionCallStatementContext.prototype.PDER = function() {
    return this.getToken(Parser2.PDER, 0);
};

FunctionCallStatementContext.prototype.NEWLINE = function() {
    return this.getToken(Parser2.NEWLINE, 0);
};

FunctionCallStatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof Parser2Listener ) {
        listener.enterFunctionCallStatement(this);
	}
};

FunctionCallStatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof Parser2Listener ) {
        listener.exitFunctionCallStatement(this);
	}
};




Parser2.FunctionCallStatementContext = FunctionCallStatementContext;

Parser2.prototype.functionCallStatement = function() {

    var localctx = new FunctionCallStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, Parser2.RULE_functionCallStatement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 133;
        this.primitiveExpression();
        this.state = 134;
        this.match(Parser2.PIZQ);
        this.state = 135;
        this.expressionList();
        this.state = 136;
        this.match(Parser2.PDER);
        this.state = 137;
        this.match(Parser2.NEWLINE);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ExpressionStatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = Parser2.RULE_expressionStatement;
    return this;
}

ExpressionStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExpressionStatementContext.prototype.constructor = ExpressionStatementContext;

ExpressionStatementContext.prototype.expressionList = function() {
    return this.getTypedRuleContext(ExpressionListContext,0);
};

ExpressionStatementContext.prototype.NEWLINE = function() {
    return this.getToken(Parser2.NEWLINE, 0);
};

ExpressionStatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof Parser2Listener ) {
        listener.enterExpressionStatement(this);
	}
};

ExpressionStatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof Parser2Listener ) {
        listener.exitExpressionStatement(this);
	}
};




Parser2.ExpressionStatementContext = ExpressionStatementContext;

Parser2.prototype.expressionStatement = function() {

    var localctx = new ExpressionStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, Parser2.RULE_expressionStatement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 139;
        this.expressionList();
        this.state = 140;
        this.match(Parser2.NEWLINE);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function SequenceContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = Parser2.RULE_sequence;
    return this;
}

SequenceContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SequenceContext.prototype.constructor = SequenceContext;

SequenceContext.prototype.INDENT = function() {
    return this.getToken(Parser2.INDENT, 0);
};

SequenceContext.prototype.moreStatements = function() {
    return this.getTypedRuleContext(MoreStatementsContext,0);
};

SequenceContext.prototype.DEDENT = function() {
    return this.getToken(Parser2.DEDENT, 0);
};

SequenceContext.prototype.enterRule = function(listener) {
    if(listener instanceof Parser2Listener ) {
        listener.enterSequence(this);
	}
};

SequenceContext.prototype.exitRule = function(listener) {
    if(listener instanceof Parser2Listener ) {
        listener.exitSequence(this);
	}
};




Parser2.SequenceContext = SequenceContext;

Parser2.prototype.sequence = function() {

    var localctx = new SequenceContext(this, this._ctx, this.state);
    this.enterRule(localctx, 28, Parser2.RULE_sequence);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 142;
        this.match(Parser2.INDENT);
        this.state = 143;
        this.moreStatements();
        this.state = 144;
        this.match(Parser2.DEDENT);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function MoreStatementsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = Parser2.RULE_moreStatements;
    return this;
}

MoreStatementsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MoreStatementsContext.prototype.constructor = MoreStatementsContext;

MoreStatementsContext.prototype.statement = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(StatementContext);
    } else {
        return this.getTypedRuleContext(StatementContext,i);
    }
};

MoreStatementsContext.prototype.enterRule = function(listener) {
    if(listener instanceof Parser2Listener ) {
        listener.enterMoreStatements(this);
	}
};

MoreStatementsContext.prototype.exitRule = function(listener) {
    if(listener instanceof Parser2Listener ) {
        listener.exitMoreStatements(this);
	}
};




Parser2.MoreStatementsContext = MoreStatementsContext;

Parser2.prototype.moreStatements = function() {

    var localctx = new MoreStatementsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 30, Parser2.RULE_moreStatements);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 146;
        this.statement();
        this.state = 150;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(((((_la - 1)) & ~0x1f) == 0 && ((1 << (_la - 1)) & ((1 << (Parser2.DEF - 1)) | (1 << (Parser2.LEN - 1)) | (1 << (Parser2.IF - 1)) | (1 << (Parser2.FOR - 1)) | (1 << (Parser2.WHILE - 1)) | (1 << (Parser2.RETURN - 1)) | (1 << (Parser2.NEWLINE - 1)) | (1 << (Parser2.PRINT - 1)) | (1 << (Parser2.PIZQ - 1)) | (1 << (Parser2.CIZQ - 1)) | (1 << (Parser2.NUM - 1)) | (1 << (Parser2.IDENTIFIER - 1)) | (1 << (Parser2.STRING - 1)))) !== 0)) {
            this.state = 147;
            this.statement();
            this.state = 152;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ExpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = Parser2.RULE_expression;
    return this;
}

ExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExpressionContext.prototype.constructor = ExpressionContext;

ExpressionContext.prototype.additionExpression = function() {
    return this.getTypedRuleContext(AdditionExpressionContext,0);
};

ExpressionContext.prototype.comparison = function() {
    return this.getTypedRuleContext(ComparisonContext,0);
};

ExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof Parser2Listener ) {
        listener.enterExpression(this);
	}
};

ExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof Parser2Listener ) {
        listener.exitExpression(this);
	}
};




Parser2.ExpressionContext = ExpressionContext;

Parser2.prototype.expression = function() {

    var localctx = new ExpressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 32, Parser2.RULE_expression);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 153;
        this.additionExpression();
        this.state = 154;
        this.comparison();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ComparisonContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = Parser2.RULE_comparison;
    return this;
}

ComparisonContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ComparisonContext.prototype.constructor = ComparisonContext;

ComparisonContext.prototype.additionExpression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(AdditionExpressionContext);
    } else {
        return this.getTypedRuleContext(AdditionExpressionContext,i);
    }
};

ComparisonContext.prototype.MENOR = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(Parser2.MENOR);
    } else {
        return this.getToken(Parser2.MENOR, i);
    }
};


ComparisonContext.prototype.MAYOR = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(Parser2.MAYOR);
    } else {
        return this.getToken(Parser2.MAYOR, i);
    }
};


ComparisonContext.prototype.MENORIGUAL = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(Parser2.MENORIGUAL);
    } else {
        return this.getToken(Parser2.MENORIGUAL, i);
    }
};


ComparisonContext.prototype.MAYORIGUAL = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(Parser2.MAYORIGUAL);
    } else {
        return this.getToken(Parser2.MAYORIGUAL, i);
    }
};


ComparisonContext.prototype.COMP = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(Parser2.COMP);
    } else {
        return this.getToken(Parser2.COMP, i);
    }
};


ComparisonContext.prototype.enterRule = function(listener) {
    if(listener instanceof Parser2Listener ) {
        listener.enterComparison(this);
	}
};

ComparisonContext.prototype.exitRule = function(listener) {
    if(listener instanceof Parser2Listener ) {
        listener.exitComparison(this);
	}
};




Parser2.ComparisonContext = ComparisonContext;

Parser2.prototype.comparison = function() {

    var localctx = new ComparisonContext(this, this._ctx, this.state);
    this.enterRule(localctx, 34, Parser2.RULE_comparison);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 160;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << Parser2.COMP) | (1 << Parser2.MAYOR) | (1 << Parser2.MENOR) | (1 << Parser2.MENORIGUAL) | (1 << Parser2.MAYORIGUAL))) !== 0)) {
            this.state = 156;
            _la = this._input.LA(1);
            if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << Parser2.COMP) | (1 << Parser2.MAYOR) | (1 << Parser2.MENOR) | (1 << Parser2.MENORIGUAL) | (1 << Parser2.MAYORIGUAL))) !== 0))) {
            this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            this.state = 157;
            this.additionExpression();
            this.state = 162;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function AdditionExpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = Parser2.RULE_additionExpression;
    return this;
}

AdditionExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AdditionExpressionContext.prototype.constructor = AdditionExpressionContext;

AdditionExpressionContext.prototype.multiplicationExpression = function() {
    return this.getTypedRuleContext(MultiplicationExpressionContext,0);
};

AdditionExpressionContext.prototype.additionFactor = function() {
    return this.getTypedRuleContext(AdditionFactorContext,0);
};

AdditionExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof Parser2Listener ) {
        listener.enterAdditionExpression(this);
	}
};

AdditionExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof Parser2Listener ) {
        listener.exitAdditionExpression(this);
	}
};




Parser2.AdditionExpressionContext = AdditionExpressionContext;

Parser2.prototype.additionExpression = function() {

    var localctx = new AdditionExpressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 36, Parser2.RULE_additionExpression);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 163;
        this.multiplicationExpression();
        this.state = 164;
        this.additionFactor();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function AdditionFactorContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = Parser2.RULE_additionFactor;
    return this;
}

AdditionFactorContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AdditionFactorContext.prototype.constructor = AdditionFactorContext;

AdditionFactorContext.prototype.multiplicationExpression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(MultiplicationExpressionContext);
    } else {
        return this.getTypedRuleContext(MultiplicationExpressionContext,i);
    }
};

AdditionFactorContext.prototype.SUM = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(Parser2.SUM);
    } else {
        return this.getToken(Parser2.SUM, i);
    }
};


AdditionFactorContext.prototype.SUB = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(Parser2.SUB);
    } else {
        return this.getToken(Parser2.SUB, i);
    }
};


AdditionFactorContext.prototype.enterRule = function(listener) {
    if(listener instanceof Parser2Listener ) {
        listener.enterAdditionFactor(this);
	}
};

AdditionFactorContext.prototype.exitRule = function(listener) {
    if(listener instanceof Parser2Listener ) {
        listener.exitAdditionFactor(this);
	}
};




Parser2.AdditionFactorContext = AdditionFactorContext;

Parser2.prototype.additionFactor = function() {

    var localctx = new AdditionFactorContext(this, this._ctx, this.state);
    this.enterRule(localctx, 38, Parser2.RULE_additionFactor);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 170;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===Parser2.SUB || _la===Parser2.SUM) {
            this.state = 166;
            _la = this._input.LA(1);
            if(!(_la===Parser2.SUB || _la===Parser2.SUM)) {
            this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            this.state = 167;
            this.multiplicationExpression();
            this.state = 172;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function MultiplicationExpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = Parser2.RULE_multiplicationExpression;
    return this;
}

MultiplicationExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MultiplicationExpressionContext.prototype.constructor = MultiplicationExpressionContext;

MultiplicationExpressionContext.prototype.elementExpression = function() {
    return this.getTypedRuleContext(ElementExpressionContext,0);
};

MultiplicationExpressionContext.prototype.multiplicationFactor = function() {
    return this.getTypedRuleContext(MultiplicationFactorContext,0);
};

MultiplicationExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof Parser2Listener ) {
        listener.enterMultiplicationExpression(this);
	}
};

MultiplicationExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof Parser2Listener ) {
        listener.exitMultiplicationExpression(this);
	}
};




Parser2.MultiplicationExpressionContext = MultiplicationExpressionContext;

Parser2.prototype.multiplicationExpression = function() {

    var localctx = new MultiplicationExpressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 40, Parser2.RULE_multiplicationExpression);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 173;
        this.elementExpression();
        this.state = 174;
        this.multiplicationFactor();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function MultiplicationFactorContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = Parser2.RULE_multiplicationFactor;
    return this;
}

MultiplicationFactorContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MultiplicationFactorContext.prototype.constructor = MultiplicationFactorContext;

MultiplicationFactorContext.prototype.elementExpression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ElementExpressionContext);
    } else {
        return this.getTypedRuleContext(ElementExpressionContext,i);
    }
};

MultiplicationFactorContext.prototype.MULT = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(Parser2.MULT);
    } else {
        return this.getToken(Parser2.MULT, i);
    }
};


MultiplicationFactorContext.prototype.DIV = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(Parser2.DIV);
    } else {
        return this.getToken(Parser2.DIV, i);
    }
};


MultiplicationFactorContext.prototype.enterRule = function(listener) {
    if(listener instanceof Parser2Listener ) {
        listener.enterMultiplicationFactor(this);
	}
};

MultiplicationFactorContext.prototype.exitRule = function(listener) {
    if(listener instanceof Parser2Listener ) {
        listener.exitMultiplicationFactor(this);
	}
};




Parser2.MultiplicationFactorContext = MultiplicationFactorContext;

Parser2.prototype.multiplicationFactor = function() {

    var localctx = new MultiplicationFactorContext(this, this._ctx, this.state);
    this.enterRule(localctx, 42, Parser2.RULE_multiplicationFactor);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 180;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===Parser2.DIV || _la===Parser2.MULT) {
            this.state = 176;
            _la = this._input.LA(1);
            if(!(_la===Parser2.DIV || _la===Parser2.MULT)) {
            this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            this.state = 177;
            this.elementExpression();
            this.state = 182;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ElementExpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = Parser2.RULE_elementExpression;
    return this;
}

ElementExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ElementExpressionContext.prototype.constructor = ElementExpressionContext;

ElementExpressionContext.prototype.primitiveExpression = function() {
    return this.getTypedRuleContext(PrimitiveExpressionContext,0);
};

ElementExpressionContext.prototype.elementAccess = function() {
    return this.getTypedRuleContext(ElementAccessContext,0);
};

ElementExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof Parser2Listener ) {
        listener.enterElementExpression(this);
	}
};

ElementExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof Parser2Listener ) {
        listener.exitElementExpression(this);
	}
};




Parser2.ElementExpressionContext = ElementExpressionContext;

Parser2.prototype.elementExpression = function() {

    var localctx = new ElementExpressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 44, Parser2.RULE_elementExpression);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 183;
        this.primitiveExpression();
        this.state = 184;
        this.elementAccess();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ElementAccessContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = Parser2.RULE_elementAccess;
    return this;
}

ElementAccessContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ElementAccessContext.prototype.constructor = ElementAccessContext;

ElementAccessContext.prototype.CIZQ = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(Parser2.CIZQ);
    } else {
        return this.getToken(Parser2.CIZQ, i);
    }
};


ElementAccessContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

ElementAccessContext.prototype.CDER = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(Parser2.CDER);
    } else {
        return this.getToken(Parser2.CDER, i);
    }
};


ElementAccessContext.prototype.enterRule = function(listener) {
    if(listener instanceof Parser2Listener ) {
        listener.enterElementAccess(this);
	}
};

ElementAccessContext.prototype.exitRule = function(listener) {
    if(listener instanceof Parser2Listener ) {
        listener.exitElementAccess(this);
	}
};




Parser2.ElementAccessContext = ElementAccessContext;

Parser2.prototype.elementAccess = function() {

    var localctx = new ElementAccessContext(this, this._ctx, this.state);
    this.enterRule(localctx, 46, Parser2.RULE_elementAccess);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 192;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===Parser2.CIZQ) {
            this.state = 186;
            this.match(Parser2.CIZQ);
            this.state = 187;
            this.expression();
            this.state = 188;
            this.match(Parser2.CDER);
            this.state = 194;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function FunctionCallExpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = Parser2.RULE_functionCallExpression;
    return this;
}

FunctionCallExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FunctionCallExpressionContext.prototype.constructor = FunctionCallExpressionContext;

FunctionCallExpressionContext.prototype.IDENTIFIER = function() {
    return this.getToken(Parser2.IDENTIFIER, 0);
};

FunctionCallExpressionContext.prototype.PIZQ = function() {
    return this.getToken(Parser2.PIZQ, 0);
};

FunctionCallExpressionContext.prototype.expressionList = function() {
    return this.getTypedRuleContext(ExpressionListContext,0);
};

FunctionCallExpressionContext.prototype.PDER = function() {
    return this.getToken(Parser2.PDER, 0);
};

FunctionCallExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof Parser2Listener ) {
        listener.enterFunctionCallExpression(this);
	}
};

FunctionCallExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof Parser2Listener ) {
        listener.exitFunctionCallExpression(this);
	}
};




Parser2.FunctionCallExpressionContext = FunctionCallExpressionContext;

Parser2.prototype.functionCallExpression = function() {

    var localctx = new FunctionCallExpressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 48, Parser2.RULE_functionCallExpression);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 195;
        this.match(Parser2.IDENTIFIER);
        this.state = 196;
        this.match(Parser2.PIZQ);
        this.state = 197;
        this.expressionList();
        this.state = 198;
        this.match(Parser2.PDER);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ExpressionListContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = Parser2.RULE_expressionList;
    return this;
}

ExpressionListContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExpressionListContext.prototype.constructor = ExpressionListContext;

ExpressionListContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

ExpressionListContext.prototype.moreExpressions = function() {
    return this.getTypedRuleContext(MoreExpressionsContext,0);
};

ExpressionListContext.prototype.enterRule = function(listener) {
    if(listener instanceof Parser2Listener ) {
        listener.enterExpressionList(this);
	}
};

ExpressionListContext.prototype.exitRule = function(listener) {
    if(listener instanceof Parser2Listener ) {
        listener.exitExpressionList(this);
	}
};




Parser2.ExpressionListContext = ExpressionListContext;

Parser2.prototype.expressionList = function() {

    var localctx = new ExpressionListContext(this, this._ctx, this.state);
    this.enterRule(localctx, 50, Parser2.RULE_expressionList);
    try {
        this.state = 204;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case Parser2.LEN:
        case Parser2.PIZQ:
        case Parser2.CIZQ:
        case Parser2.NUM:
        case Parser2.IDENTIFIER:
        case Parser2.STRING:
            this.enterOuterAlt(localctx, 1);
            this.state = 200;
            this.expression();
            this.state = 201;
            this.moreExpressions();
            break;
        case Parser2.NEWLINE:
        case Parser2.PDER:
        case Parser2.DOSPUN:
        case Parser2.CDER:
            this.enterOuterAlt(localctx, 2);

            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function MoreExpressionsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = Parser2.RULE_moreExpressions;
    return this;
}

MoreExpressionsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MoreExpressionsContext.prototype.constructor = MoreExpressionsContext;

MoreExpressionsContext.prototype.COMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(Parser2.COMA);
    } else {
        return this.getToken(Parser2.COMA, i);
    }
};


MoreExpressionsContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

MoreExpressionsContext.prototype.enterRule = function(listener) {
    if(listener instanceof Parser2Listener ) {
        listener.enterMoreExpressions(this);
	}
};

MoreExpressionsContext.prototype.exitRule = function(listener) {
    if(listener instanceof Parser2Listener ) {
        listener.exitMoreExpressions(this);
	}
};




Parser2.MoreExpressionsContext = MoreExpressionsContext;

Parser2.prototype.moreExpressions = function() {

    var localctx = new MoreExpressionsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 52, Parser2.RULE_moreExpressions);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 210;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===Parser2.COMA) {
            this.state = 206;
            this.match(Parser2.COMA);
            this.state = 207;
            this.expression();
            this.state = 212;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function PrimitiveExpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = Parser2.RULE_primitiveExpression;
    return this;
}

PrimitiveExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PrimitiveExpressionContext.prototype.constructor = PrimitiveExpressionContext;

PrimitiveExpressionContext.prototype.NUM = function() {
    return this.getToken(Parser2.NUM, 0);
};

PrimitiveExpressionContext.prototype.STRING = function() {
    return this.getToken(Parser2.STRING, 0);
};

PrimitiveExpressionContext.prototype.IDENTIFIER = function() {
    return this.getToken(Parser2.IDENTIFIER, 0);
};

PrimitiveExpressionContext.prototype.PIZQ = function() {
    return this.getToken(Parser2.PIZQ, 0);
};

PrimitiveExpressionContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

PrimitiveExpressionContext.prototype.PDER = function() {
    return this.getToken(Parser2.PDER, 0);
};

PrimitiveExpressionContext.prototype.listExpression = function() {
    return this.getTypedRuleContext(ListExpressionContext,0);
};

PrimitiveExpressionContext.prototype.LEN = function() {
    return this.getToken(Parser2.LEN, 0);
};

PrimitiveExpressionContext.prototype.functionCallExpression = function() {
    return this.getTypedRuleContext(FunctionCallExpressionContext,0);
};

PrimitiveExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof Parser2Listener ) {
        listener.enterPrimitiveExpression(this);
	}
};

PrimitiveExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof Parser2Listener ) {
        listener.exitPrimitiveExpression(this);
	}
};




Parser2.PrimitiveExpressionContext = PrimitiveExpressionContext;

Parser2.prototype.primitiveExpression = function() {

    var localctx = new PrimitiveExpressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 54, Parser2.RULE_primitiveExpression);
    try {
        this.state = 227;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,11,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 213;
            this.match(Parser2.NUM);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 214;
            this.match(Parser2.STRING);
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 215;
            this.match(Parser2.IDENTIFIER);
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 216;
            this.match(Parser2.PIZQ);
            this.state = 217;
            this.expression();
            this.state = 218;
            this.match(Parser2.PDER);
            break;

        case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 220;
            this.listExpression();
            break;

        case 6:
            this.enterOuterAlt(localctx, 6);
            this.state = 221;
            this.match(Parser2.LEN);
            this.state = 222;
            this.match(Parser2.PIZQ);
            this.state = 223;
            this.expression();
            this.state = 224;
            this.match(Parser2.PDER);
            break;

        case 7:
            this.enterOuterAlt(localctx, 7);
            this.state = 226;
            this.functionCallExpression();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ListExpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = Parser2.RULE_listExpression;
    return this;
}

ListExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ListExpressionContext.prototype.constructor = ListExpressionContext;

ListExpressionContext.prototype.CIZQ = function() {
    return this.getToken(Parser2.CIZQ, 0);
};

ListExpressionContext.prototype.expressionList = function() {
    return this.getTypedRuleContext(ExpressionListContext,0);
};

ListExpressionContext.prototype.CDER = function() {
    return this.getToken(Parser2.CDER, 0);
};

ListExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof Parser2Listener ) {
        listener.enterListExpression(this);
	}
};

ListExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof Parser2Listener ) {
        listener.exitListExpression(this);
	}
};




Parser2.ListExpressionContext = ListExpressionContext;

Parser2.prototype.listExpression = function() {

    var localctx = new ListExpressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 56, Parser2.RULE_listExpression);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 229;
        this.match(Parser2.CIZQ);
        this.state = 230;
        this.expressionList();
        this.state = 231;
        this.match(Parser2.CDER);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


exports.Parser2 = Parser2;
