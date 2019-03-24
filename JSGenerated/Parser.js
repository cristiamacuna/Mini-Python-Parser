// Generated from /Users/cristiamacuna/Documents/IIS-2019/Compiladores/Proyecto/G4/Parser.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');
var ParserListener = require('./ParserListener').ParserListener;
var grammarFileName = "Parser.g4";


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003-\u00e2\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010\u0004",
    "\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014\t",
    "\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017\t\u0017\u0004",
    "\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a\u0004\u001b\t",
    "\u001b\u0004\u001c\t\u001c\u0004\u001d\t\u001d\u0003\u0002\u0003\u0002",
    "\u0003\u0002\u0003\u0002\u0005\u0002?\n\u0002\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0005\u0003J\n\u0003\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0005",
    "\u0003\u0005\u0003\u0005\u0005\u0005W\n\u0005\u0003\u0006\u0003\u0006",
    "\u0003\u0006\u0003\u0006\u0005\u0006]\n\u0006\u0003\u0007\u0003\u0007",
    "\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007",
    "\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\t\u0003\t\u0003\t\u0003",
    "\t\u0003\t\u0003\t\u0003\t\u0003\n\u0003\n\u0003\n\u0003\n\u0003\u000b",
    "\u0003\u000b\u0003\u000b\u0003\u000b\u0003\f\u0003\f\u0003\f\u0003\f",
    "\u0003\f\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\u000e",
    "\u0003\u000e\u0003\u000e\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f",
    "\u0003\u000f\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0005\u0010",
    "\u0092\n\u0010\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0012\u0003",
    "\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0005\u0012\u009c\n\u0012",
    "\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0014\u0003\u0014\u0003\u0014",
    "\u0003\u0014\u0003\u0014\u0005\u0014\u00a6\n\u0014\u0003\u0015\u0003",
    "\u0015\u0003\u0015\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0003",
    "\u0016\u0005\u0016\u00b0\n\u0016\u0003\u0017\u0003\u0017\u0003\u0017",
    "\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0018",
    "\u0005\u0018\u00bb\n\u0018\u0003\u0019\u0003\u0019\u0003\u0019\u0003",
    "\u0019\u0003\u001a\u0003\u001a\u0003\u001a\u0003\u001a\u0005\u001a\u00c5",
    "\n\u001a\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001b",
    "\u0005\u001b\u00cc\n\u001b\u0003\u001c\u0003\u001c\u0003\u001c\u0003",
    "\u001c\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001c\u0003",
    "\u001c\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001c\u0005\u001c\u00dc",
    "\n\u001c\u0003\u001d\u0003\u001d\u0003\u001d\u0003\u001d\u0003\u001d",
    "\u0002\u0002\u001e\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016",
    "\u0018\u001a\u001c\u001e \"$&(*,.02468\u0002\u0005\u0003\u0002\u000e",
    "\u0012\u0003\u0002\u000b\f\u0004\u0002\n\n\u0013\u0013\u0002\u00dd\u0002",
    ">\u0003\u0002\u0002\u0002\u0004I\u0003\u0002\u0002\u0002\u0006K\u0003",
    "\u0002\u0002\u0002\bV\u0003\u0002\u0002\u0002\n\\\u0003\u0002\u0002",
    "\u0002\f^\u0003\u0002\u0002\u0002\u000ef\u0003\u0002\u0002\u0002\u0010",
    "k\u0003\u0002\u0002\u0002\u0012r\u0003\u0002\u0002\u0002\u0014v\u0003",
    "\u0002\u0002\u0002\u0016z\u0003\u0002\u0002\u0002\u0018\u007f\u0003",
    "\u0002\u0002\u0002\u001a\u0085\u0003\u0002\u0002\u0002\u001c\u0088\u0003",
    "\u0002\u0002\u0002\u001e\u0091\u0003\u0002\u0002\u0002 \u0093\u0003",
    "\u0002\u0002\u0002\"\u009b\u0003\u0002\u0002\u0002$\u009d\u0003\u0002",
    "\u0002\u0002&\u00a5\u0003\u0002\u0002\u0002(\u00a7\u0003\u0002\u0002",
    "\u0002*\u00af\u0003\u0002\u0002\u0002,\u00b1\u0003\u0002\u0002\u0002",
    ".\u00ba\u0003\u0002\u0002\u00020\u00bc\u0003\u0002\u0002\u00022\u00c4",
    "\u0003\u0002\u0002\u00024\u00cb\u0003\u0002\u0002\u00026\u00db\u0003",
    "\u0002\u0002\u00028\u00dd\u0003\u0002\u0002\u0002:?\u0005\u0004\u0003",
    "\u0002;<\u0005\u0004\u0003\u0002<=\u0005\u0002\u0002\u0002=?\u0003\u0002",
    "\u0002\u0002>:\u0003\u0002\u0002\u0002>;\u0003\u0002\u0002\u0002?\u0003",
    "\u0003\u0002\u0002\u0002@J\u0005\u0006\u0004\u0002AJ\u0005\f\u0007\u0002",
    "BJ\u0005\u0012\n\u0002CJ\u0005\u0014\u000b\u0002DJ\u0005\u000e\b\u0002",
    "EJ\u0005\u0010\t\u0002FJ\u0005\u0016\f\u0002GJ\u0005\u0018\r\u0002H",
    "J\u0005\u001a\u000e\u0002I@\u0003\u0002\u0002\u0002IA\u0003\u0002\u0002",
    "\u0002IB\u0003\u0002\u0002\u0002IC\u0003\u0002\u0002\u0002ID\u0003\u0002",
    "\u0002\u0002IE\u0003\u0002\u0002\u0002IF\u0003\u0002\u0002\u0002IG\u0003",
    "\u0002\u0002\u0002IH\u0003\u0002\u0002\u0002J\u0005\u0003\u0002\u0002",
    "\u0002KL\u0007!\u0002\u0002LM\u0007)\u0002\u0002MN\u0007\u0006\u0002",
    "\u0002NO\u0005\b\u0005\u0002OP\u0007\u0007\u0002\u0002PQ\u0007\r\u0002",
    "\u0002QR\u0005\u001c\u000f\u0002R\u0007\u0003\u0002\u0002\u0002ST\u0007",
    ")\u0002\u0002TW\u0005\b\u0005\u0002UW\u0003\u0002\u0002\u0002VS\u0003",
    "\u0002\u0002\u0002VU\u0003\u0002\u0002\u0002W\t\u0003\u0002\u0002\u0002",
    "XY\u0007\u0004\u0002\u0002YZ\u0007)\u0002\u0002Z]\u0005\n\u0006\u0002",
    "[]\u0003\u0002\u0002\u0002\\X\u0003\u0002\u0002\u0002\\[\u0003\u0002",
    "\u0002\u0002]\u000b\u0003\u0002\u0002\u0002^_\u0007\u0016\u0002\u0002",
    "_`\u0005 \u0011\u0002`a\u0007\r\u0002\u0002ab\u0005\u001c\u000f\u0002",
    "bc\u0007\u001a\u0002\u0002cd\u0007\r\u0002\u0002de\u0005\u001c\u000f",
    "\u0002e\r\u0003\u0002\u0002\u0002fg\u0007\u0017\u0002\u0002gh\u0005",
    " \u0011\u0002hi\u0007\r\u0002\u0002ij\u0005\u001c\u000f\u0002j\u000f",
    "\u0003\u0002\u0002\u0002kl\u0007-\u0002\u0002lm\u0005 \u0011\u0002m",
    "n\u0007\u001b\u0002\u0002no\u00052\u001a\u0002op\u0007\r\u0002\u0002",
    "pq\u0005\u001c\u000f\u0002q\u0011\u0003\u0002\u0002\u0002rs\u0007\"",
    "\u0002\u0002st\u0005 \u0011\u0002tu\u0007#\u0002\u0002u\u0013\u0003",
    "\u0002\u0002\u0002vw\u0007$\u0002\u0002wx\u0005 \u0011\u0002xy\u0007",
    "#\u0002\u0002y\u0015\u0003\u0002\u0002\u0002z{\u0007)\u0002\u0002{|",
    "\u0007\u0005\u0002\u0002|}\u0005 \u0011\u0002}~\u0007#\u0002\u0002~",
    "\u0017\u0003\u0002\u0002\u0002\u007f\u0080\u00056\u001c\u0002\u0080",
    "\u0081\u0007\u0006\u0002\u0002\u0081\u0082\u00052\u001a\u0002\u0082",
    "\u0083\u0007\u0007\u0002\u0002\u0083\u0084\u0007#\u0002\u0002\u0084",
    "\u0019\u0003\u0002\u0002\u0002\u0085\u0086\u00052\u001a\u0002\u0086",
    "\u0087\u0007#\u0002\u0002\u0087\u001b\u0003\u0002\u0002\u0002\u0088",
    "\u0089\u0007#\u0002\u0002\u0089\u008a\u0007%\u0002\u0002\u008a\u008b",
    "\u0005\u001e\u0010\u0002\u008b\u008c\u0007&\u0002\u0002\u008c\u001d",
    "\u0003\u0002\u0002\u0002\u008d\u008e\u0005\u0004\u0003\u0002\u008e\u008f",
    "\u0005\u001e\u0010\u0002\u008f\u0092\u0003\u0002\u0002\u0002\u0090\u0092",
    "\u0005\u0004\u0003\u0002\u0091\u008d\u0003\u0002\u0002\u0002\u0091\u0090",
    "\u0003\u0002\u0002\u0002\u0092\u001f\u0003\u0002\u0002\u0002\u0093\u0094",
    "\u0005$\u0013\u0002\u0094\u0095\u0005\"\u0012\u0002\u0095!\u0003\u0002",
    "\u0002\u0002\u0096\u0097\t\u0002\u0002\u0002\u0097\u0098\u0005$\u0013",
    "\u0002\u0098\u0099\u0005\"\u0012\u0002\u0099\u009c\u0003\u0002\u0002",
    "\u0002\u009a\u009c\u0003\u0002\u0002\u0002\u009b\u0096\u0003\u0002\u0002",
    "\u0002\u009b\u009a\u0003\u0002\u0002\u0002\u009c#\u0003\u0002\u0002",
    "\u0002\u009d\u009e\u0005(\u0015\u0002\u009e\u009f\u0005&\u0014\u0002",
    "\u009f%\u0003\u0002\u0002\u0002\u00a0\u00a1\t\u0003\u0002\u0002\u00a1",
    "\u00a2\u0005(\u0015\u0002\u00a2\u00a3\u0005&\u0014\u0002\u00a3\u00a6",
    "\u0003\u0002\u0002\u0002\u00a4\u00a6\u0003\u0002\u0002\u0002\u00a5\u00a0",
    "\u0003\u0002\u0002\u0002\u00a5\u00a4\u0003\u0002\u0002\u0002\u00a6\'",
    "\u0003\u0002\u0002\u0002\u00a7\u00a8\u0005,\u0017\u0002\u00a8\u00a9",
    "\u0005*\u0016\u0002\u00a9)\u0003\u0002\u0002\u0002\u00aa\u00ab\t\u0004",
    "\u0002\u0002\u00ab\u00ac\u0005,\u0017\u0002\u00ac\u00ad\u0005*\u0016",
    "\u0002\u00ad\u00b0\u0003\u0002\u0002\u0002\u00ae\u00b0\u0003\u0002\u0002",
    "\u0002\u00af\u00aa\u0003\u0002\u0002\u0002\u00af\u00ae\u0003\u0002\u0002",
    "\u0002\u00b0+\u0003\u0002\u0002\u0002\u00b1\u00b2\u00056\u001c\u0002",
    "\u00b2\u00b3\u0005.\u0018\u0002\u00b3-\u0003\u0002\u0002\u0002\u00b4",
    "\u00b5\u0007\b\u0002\u0002\u00b5\u00b6\u0005 \u0011\u0002\u00b6\u00b7",
    "\u0007\t\u0002\u0002\u00b7\u00b8\u0005.\u0018\u0002\u00b8\u00bb\u0003",
    "\u0002\u0002\u0002\u00b9\u00bb\u0003\u0002\u0002\u0002\u00ba\u00b4\u0003",
    "\u0002\u0002\u0002\u00ba\u00b9\u0003\u0002\u0002\u0002\u00bb/\u0003",
    "\u0002\u0002\u0002\u00bc\u00bd\u0007\u0006\u0002\u0002\u00bd\u00be\u0005",
    "2\u001a\u0002\u00be\u00bf\u0007\u0007\u0002\u0002\u00bf1\u0003\u0002",
    "\u0002\u0002\u00c0\u00c1\u0005 \u0011\u0002\u00c1\u00c2\u00054\u001b",
    "\u0002\u00c2\u00c5\u0003\u0002\u0002\u0002\u00c3\u00c5\u0003\u0002\u0002",
    "\u0002\u00c4\u00c0\u0003\u0002\u0002\u0002\u00c4\u00c3\u0003\u0002\u0002",
    "\u0002\u00c53\u0003\u0002\u0002\u0002\u00c6\u00c7\u0007\u0004\u0002",
    "\u0002\u00c7\u00c8\u0005 \u0011\u0002\u00c8\u00c9\u00054\u001b\u0002",
    "\u00c9\u00cc\u0003\u0002\u0002\u0002\u00ca\u00cc\u0003\u0002\u0002\u0002",
    "\u00cb\u00c6\u0003\u0002\u0002\u0002\u00cb\u00ca\u0003\u0002\u0002\u0002",
    "\u00cc5\u0003\u0002\u0002\u0002\u00cd\u00dc\u0007(\u0002\u0002\u00ce",
    "\u00dc\u0007*\u0002\u0002\u00cf\u00dc\u0007)\u0002\u0002\u00d0\u00d1",
    "\u0007\u0006\u0002\u0002\u00d1\u00d2\u0005 \u0011\u0002\u00d2\u00d3",
    "\u0007\u0007\u0002\u0002\u00d3\u00dc\u0003\u0002\u0002\u0002\u00d4\u00dc",
    "\u00058\u001d\u0002\u00d5\u00d6\u0007\'\u0002\u0002\u00d6\u00d7\u0007",
    "\u0006\u0002\u0002\u00d7\u00d8\u0005 \u0011\u0002\u00d8\u00d9\u0007",
    "\u0007\u0002\u0002\u00d9\u00dc\u0003\u0002\u0002\u0002\u00da\u00dc\u0005",
    "0\u0019\u0002\u00db\u00cd\u0003\u0002\u0002\u0002\u00db\u00ce\u0003",
    "\u0002\u0002\u0002\u00db\u00cf\u0003\u0002\u0002\u0002\u00db\u00d0\u0003",
    "\u0002\u0002\u0002\u00db\u00d4\u0003\u0002\u0002\u0002\u00db\u00d5\u0003",
    "\u0002\u0002\u0002\u00db\u00da\u0003\u0002\u0002\u0002\u00dc7\u0003",
    "\u0002\u0002\u0002\u00dd\u00de\u0007\b\u0002\u0002\u00de\u00df\u0005",
    "2\u001a\u0002\u00df\u00e0\u0007\t\u0002\u0002\u00e09\u0003\u0002\u0002",
    "\u0002\u000e>IV\\\u0091\u009b\u00a5\u00af\u00ba\u00c4\u00cb\u00db"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "';'", "','", "'='", "'('", "')'", "'['", "']'", 
                     "'*'", "'+'", "'-'", "':'", "'>'", "'<'", "'>='", "'<='", 
                     "'=='", "'/'", "'INT'", "'STRING'", "'if'", "'while'", 
                     "'let'", "'then'", "'else'", "'in'", "'do'", "'begin'", 
                     "'end'", "'const'", "'var'", "'def'", "'return'", "'\n'", 
                     "'print'", "'{'", "'}'", "'len'" ];

var symbolicNames = [ null, "PyCOMA", "COMA", "ASSIGN", "PIZQ", "PDER", 
                      "CIZQ", "CDER", "MULT", "SUM", "RESTA", "DOSPUN", 
                      "MAYOR", "MENOR", "MAYORIGUAL", "MENORIGUAL", "COMP", 
                      "DIV", "INT", "STRING", "IF", "WHILE", "LET", "THEN", 
                      "ELSE", "IN", "DO", "BEGIN", "END", "CONST", "VAR", 
                      "DEF", "RETURN", "NEWLINE", "PRINT", "INDENT", "DEDENT", 
                      "LEN", "NUM", "ID", "STR", "WS", "COMMENT", "FOR" ];

var ruleNames =  [ "program", "statement", "defStatement", "argList", "moreArgs", 
                   "ifStatement", "whileStatement", "forStatement", "returnStatement", 
                   "printStatement", "assignStatement", "functionCallStatement", 
                   "expressionStatement", "sequence", "moreStatements", 
                   "expression", "comparison", "additionExpression", "additionFactor", 
                   "multiplicationExpression", "multiplicationFactor", "elementExpression", 
                   "elementAccess", "functionCallExpression", "expressionList", 
                   "moreExpressions", "primitiveExpression", "listExpression" ];

function Parser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

Parser.prototype = Object.create(antlr4.Parser.prototype);
Parser.prototype.constructor = Parser;

Object.defineProperty(Parser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

Parser.EOF = antlr4.Token.EOF;
Parser.PyCOMA = 1;
Parser.COMA = 2;
Parser.ASSIGN = 3;
Parser.PIZQ = 4;
Parser.PDER = 5;
Parser.CIZQ = 6;
Parser.CDER = 7;
Parser.MULT = 8;
Parser.SUM = 9;
Parser.RESTA = 10;
Parser.DOSPUN = 11;
Parser.MAYOR = 12;
Parser.MENOR = 13;
Parser.MAYORIGUAL = 14;
Parser.MENORIGUAL = 15;
Parser.COMP = 16;
Parser.DIV = 17;
Parser.INT = 18;
Parser.STRING = 19;
Parser.IF = 20;
Parser.WHILE = 21;
Parser.LET = 22;
Parser.THEN = 23;
Parser.ELSE = 24;
Parser.IN = 25;
Parser.DO = 26;
Parser.BEGIN = 27;
Parser.END = 28;
Parser.CONST = 29;
Parser.VAR = 30;
Parser.DEF = 31;
Parser.RETURN = 32;
Parser.NEWLINE = 33;
Parser.PRINT = 34;
Parser.INDENT = 35;
Parser.DEDENT = 36;
Parser.LEN = 37;
Parser.NUM = 38;
Parser.ID = 39;
Parser.STR = 40;
Parser.WS = 41;
Parser.COMMENT = 42;
Parser.FOR = 43;

Parser.RULE_program = 0;
Parser.RULE_statement = 1;
Parser.RULE_defStatement = 2;
Parser.RULE_argList = 3;
Parser.RULE_moreArgs = 4;
Parser.RULE_ifStatement = 5;
Parser.RULE_whileStatement = 6;
Parser.RULE_forStatement = 7;
Parser.RULE_returnStatement = 8;
Parser.RULE_printStatement = 9;
Parser.RULE_assignStatement = 10;
Parser.RULE_functionCallStatement = 11;
Parser.RULE_expressionStatement = 12;
Parser.RULE_sequence = 13;
Parser.RULE_moreStatements = 14;
Parser.RULE_expression = 15;
Parser.RULE_comparison = 16;
Parser.RULE_additionExpression = 17;
Parser.RULE_additionFactor = 18;
Parser.RULE_multiplicationExpression = 19;
Parser.RULE_multiplicationFactor = 20;
Parser.RULE_elementExpression = 21;
Parser.RULE_elementAccess = 22;
Parser.RULE_functionCallExpression = 23;
Parser.RULE_expressionList = 24;
Parser.RULE_moreExpressions = 25;
Parser.RULE_primitiveExpression = 26;
Parser.RULE_listExpression = 27;


function ProgramContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = Parser.RULE_program;
    return this;
}

ProgramContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ProgramContext.prototype.constructor = ProgramContext;

ProgramContext.prototype.statement = function() {
    return this.getTypedRuleContext(StatementContext,0);
};

ProgramContext.prototype.program = function() {
    return this.getTypedRuleContext(ProgramContext,0);
};

ProgramContext.prototype.enterRule = function(listener) {
    if(listener instanceof ParserListener ) {
        listener.enterProgram(this);
	}
};

ProgramContext.prototype.exitRule = function(listener) {
    if(listener instanceof ParserListener ) {
        listener.exitProgram(this);
	}
};




Parser.ProgramContext = ProgramContext;

Parser.prototype.program = function() {

    var localctx = new ProgramContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, Parser.RULE_program);
    try {
        this.state = 60;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,0,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 56;
            this.statement();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 57;
            this.statement();
            this.state = 58;
            this.program();
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


function StatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = Parser.RULE_statement;
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
    if(listener instanceof ParserListener ) {
        listener.enterStatement(this);
	}
};

StatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof ParserListener ) {
        listener.exitStatement(this);
	}
};




Parser.StatementContext = StatementContext;

Parser.prototype.statement = function() {

    var localctx = new StatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, Parser.RULE_statement);
    try {
        this.state = 71;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 62;
            this.defStatement();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 63;
            this.ifStatement();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 64;
            this.returnStatement();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 65;
            this.printStatement();
            break;

        case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 66;
            this.whileStatement();
            break;

        case 6:
            this.enterOuterAlt(localctx, 6);
            this.state = 67;
            this.forStatement();
            break;

        case 7:
            this.enterOuterAlt(localctx, 7);
            this.state = 68;
            this.assignStatement();
            break;

        case 8:
            this.enterOuterAlt(localctx, 8);
            this.state = 69;
            this.functionCallStatement();
            break;

        case 9:
            this.enterOuterAlt(localctx, 9);
            this.state = 70;
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
    this.ruleIndex = Parser.RULE_defStatement;
    return this;
}

DefStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DefStatementContext.prototype.constructor = DefStatementContext;

DefStatementContext.prototype.DEF = function() {
    return this.getToken(Parser.DEF, 0);
};

DefStatementContext.prototype.ID = function() {
    return this.getToken(Parser.ID, 0);
};

DefStatementContext.prototype.PIZQ = function() {
    return this.getToken(Parser.PIZQ, 0);
};

DefStatementContext.prototype.argList = function() {
    return this.getTypedRuleContext(ArgListContext,0);
};

DefStatementContext.prototype.PDER = function() {
    return this.getToken(Parser.PDER, 0);
};

DefStatementContext.prototype.DOSPUN = function() {
    return this.getToken(Parser.DOSPUN, 0);
};

DefStatementContext.prototype.sequence = function() {
    return this.getTypedRuleContext(SequenceContext,0);
};

DefStatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof ParserListener ) {
        listener.enterDefStatement(this);
	}
};

DefStatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof ParserListener ) {
        listener.exitDefStatement(this);
	}
};




Parser.DefStatementContext = DefStatementContext;

Parser.prototype.defStatement = function() {

    var localctx = new DefStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, Parser.RULE_defStatement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 73;
        this.match(Parser.DEF);
        this.state = 74;
        this.match(Parser.ID);
        this.state = 75;
        this.match(Parser.PIZQ);
        this.state = 76;
        this.argList();
        this.state = 77;
        this.match(Parser.PDER);
        this.state = 78;
        this.match(Parser.DOSPUN);
        this.state = 79;
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
    this.ruleIndex = Parser.RULE_argList;
    return this;
}

ArgListContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ArgListContext.prototype.constructor = ArgListContext;

ArgListContext.prototype.ID = function() {
    return this.getToken(Parser.ID, 0);
};

ArgListContext.prototype.argList = function() {
    return this.getTypedRuleContext(ArgListContext,0);
};

ArgListContext.prototype.enterRule = function(listener) {
    if(listener instanceof ParserListener ) {
        listener.enterArgList(this);
	}
};

ArgListContext.prototype.exitRule = function(listener) {
    if(listener instanceof ParserListener ) {
        listener.exitArgList(this);
	}
};




Parser.ArgListContext = ArgListContext;

Parser.prototype.argList = function() {

    var localctx = new ArgListContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, Parser.RULE_argList);
    try {
        this.state = 84;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case Parser.ID:
            this.enterOuterAlt(localctx, 1);
            this.state = 81;
            this.match(Parser.ID);
            this.state = 82;
            this.argList();
            break;
        case Parser.PDER:
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


function MoreArgsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = Parser.RULE_moreArgs;
    return this;
}

MoreArgsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MoreArgsContext.prototype.constructor = MoreArgsContext;

MoreArgsContext.prototype.COMA = function() {
    return this.getToken(Parser.COMA, 0);
};

MoreArgsContext.prototype.ID = function() {
    return this.getToken(Parser.ID, 0);
};

MoreArgsContext.prototype.moreArgs = function() {
    return this.getTypedRuleContext(MoreArgsContext,0);
};

MoreArgsContext.prototype.enterRule = function(listener) {
    if(listener instanceof ParserListener ) {
        listener.enterMoreArgs(this);
	}
};

MoreArgsContext.prototype.exitRule = function(listener) {
    if(listener instanceof ParserListener ) {
        listener.exitMoreArgs(this);
	}
};




Parser.MoreArgsContext = MoreArgsContext;

Parser.prototype.moreArgs = function() {

    var localctx = new MoreArgsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, Parser.RULE_moreArgs);
    try {
        this.state = 90;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 86;
            this.match(Parser.COMA);
            this.state = 87;
            this.match(Parser.ID);
            this.state = 88;
            this.moreArgs();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);

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


function IfStatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = Parser.RULE_ifStatement;
    return this;
}

IfStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
IfStatementContext.prototype.constructor = IfStatementContext;

IfStatementContext.prototype.IF = function() {
    return this.getToken(Parser.IF, 0);
};

IfStatementContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

IfStatementContext.prototype.DOSPUN = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(Parser.DOSPUN);
    } else {
        return this.getToken(Parser.DOSPUN, i);
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
    return this.getToken(Parser.ELSE, 0);
};

IfStatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof ParserListener ) {
        listener.enterIfStatement(this);
	}
};

IfStatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof ParserListener ) {
        listener.exitIfStatement(this);
	}
};




Parser.IfStatementContext = IfStatementContext;

Parser.prototype.ifStatement = function() {

    var localctx = new IfStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, Parser.RULE_ifStatement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 92;
        this.match(Parser.IF);
        this.state = 93;
        this.expression();
        this.state = 94;
        this.match(Parser.DOSPUN);
        this.state = 95;
        this.sequence();
        this.state = 96;
        this.match(Parser.ELSE);
        this.state = 97;
        this.match(Parser.DOSPUN);
        this.state = 98;
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
    this.ruleIndex = Parser.RULE_whileStatement;
    return this;
}

WhileStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
WhileStatementContext.prototype.constructor = WhileStatementContext;

WhileStatementContext.prototype.WHILE = function() {
    return this.getToken(Parser.WHILE, 0);
};

WhileStatementContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

WhileStatementContext.prototype.DOSPUN = function() {
    return this.getToken(Parser.DOSPUN, 0);
};

WhileStatementContext.prototype.sequence = function() {
    return this.getTypedRuleContext(SequenceContext,0);
};

WhileStatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof ParserListener ) {
        listener.enterWhileStatement(this);
	}
};

WhileStatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof ParserListener ) {
        listener.exitWhileStatement(this);
	}
};




Parser.WhileStatementContext = WhileStatementContext;

Parser.prototype.whileStatement = function() {

    var localctx = new WhileStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, Parser.RULE_whileStatement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 100;
        this.match(Parser.WHILE);
        this.state = 101;
        this.expression();
        this.state = 102;
        this.match(Parser.DOSPUN);
        this.state = 103;
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
    this.ruleIndex = Parser.RULE_forStatement;
    return this;
}

ForStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ForStatementContext.prototype.constructor = ForStatementContext;

ForStatementContext.prototype.FOR = function() {
    return this.getToken(Parser.FOR, 0);
};

ForStatementContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

ForStatementContext.prototype.IN = function() {
    return this.getToken(Parser.IN, 0);
};

ForStatementContext.prototype.expressionList = function() {
    return this.getTypedRuleContext(ExpressionListContext,0);
};

ForStatementContext.prototype.DOSPUN = function() {
    return this.getToken(Parser.DOSPUN, 0);
};

ForStatementContext.prototype.sequence = function() {
    return this.getTypedRuleContext(SequenceContext,0);
};

ForStatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof ParserListener ) {
        listener.enterForStatement(this);
	}
};

ForStatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof ParserListener ) {
        listener.exitForStatement(this);
	}
};




Parser.ForStatementContext = ForStatementContext;

Parser.prototype.forStatement = function() {

    var localctx = new ForStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, Parser.RULE_forStatement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 105;
        this.match(Parser.FOR);
        this.state = 106;
        this.expression();
        this.state = 107;
        this.match(Parser.IN);
        this.state = 108;
        this.expressionList();
        this.state = 109;
        this.match(Parser.DOSPUN);
        this.state = 110;
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
    this.ruleIndex = Parser.RULE_returnStatement;
    return this;
}

ReturnStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ReturnStatementContext.prototype.constructor = ReturnStatementContext;

ReturnStatementContext.prototype.RETURN = function() {
    return this.getToken(Parser.RETURN, 0);
};

ReturnStatementContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

ReturnStatementContext.prototype.NEWLINE = function() {
    return this.getToken(Parser.NEWLINE, 0);
};

ReturnStatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof ParserListener ) {
        listener.enterReturnStatement(this);
	}
};

ReturnStatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof ParserListener ) {
        listener.exitReturnStatement(this);
	}
};




Parser.ReturnStatementContext = ReturnStatementContext;

Parser.prototype.returnStatement = function() {

    var localctx = new ReturnStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, Parser.RULE_returnStatement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 112;
        this.match(Parser.RETURN);
        this.state = 113;
        this.expression();
        this.state = 114;
        this.match(Parser.NEWLINE);
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
    this.ruleIndex = Parser.RULE_printStatement;
    return this;
}

PrintStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PrintStatementContext.prototype.constructor = PrintStatementContext;

PrintStatementContext.prototype.PRINT = function() {
    return this.getToken(Parser.PRINT, 0);
};

PrintStatementContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

PrintStatementContext.prototype.NEWLINE = function() {
    return this.getToken(Parser.NEWLINE, 0);
};

PrintStatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof ParserListener ) {
        listener.enterPrintStatement(this);
	}
};

PrintStatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof ParserListener ) {
        listener.exitPrintStatement(this);
	}
};




Parser.PrintStatementContext = PrintStatementContext;

Parser.prototype.printStatement = function() {

    var localctx = new PrintStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, Parser.RULE_printStatement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 116;
        this.match(Parser.PRINT);
        this.state = 117;
        this.expression();
        this.state = 118;
        this.match(Parser.NEWLINE);
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
    this.ruleIndex = Parser.RULE_assignStatement;
    return this;
}

AssignStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AssignStatementContext.prototype.constructor = AssignStatementContext;

AssignStatementContext.prototype.ID = function() {
    return this.getToken(Parser.ID, 0);
};

AssignStatementContext.prototype.ASSIGN = function() {
    return this.getToken(Parser.ASSIGN, 0);
};

AssignStatementContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

AssignStatementContext.prototype.NEWLINE = function() {
    return this.getToken(Parser.NEWLINE, 0);
};

AssignStatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof ParserListener ) {
        listener.enterAssignStatement(this);
	}
};

AssignStatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof ParserListener ) {
        listener.exitAssignStatement(this);
	}
};




Parser.AssignStatementContext = AssignStatementContext;

Parser.prototype.assignStatement = function() {

    var localctx = new AssignStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, Parser.RULE_assignStatement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 120;
        this.match(Parser.ID);
        this.state = 121;
        this.match(Parser.ASSIGN);
        this.state = 122;
        this.expression();
        this.state = 123;
        this.match(Parser.NEWLINE);
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
    this.ruleIndex = Parser.RULE_functionCallStatement;
    return this;
}

FunctionCallStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FunctionCallStatementContext.prototype.constructor = FunctionCallStatementContext;

FunctionCallStatementContext.prototype.primitiveExpression = function() {
    return this.getTypedRuleContext(PrimitiveExpressionContext,0);
};

FunctionCallStatementContext.prototype.PIZQ = function() {
    return this.getToken(Parser.PIZQ, 0);
};

FunctionCallStatementContext.prototype.expressionList = function() {
    return this.getTypedRuleContext(ExpressionListContext,0);
};

FunctionCallStatementContext.prototype.PDER = function() {
    return this.getToken(Parser.PDER, 0);
};

FunctionCallStatementContext.prototype.NEWLINE = function() {
    return this.getToken(Parser.NEWLINE, 0);
};

FunctionCallStatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof ParserListener ) {
        listener.enterFunctionCallStatement(this);
	}
};

FunctionCallStatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof ParserListener ) {
        listener.exitFunctionCallStatement(this);
	}
};




Parser.FunctionCallStatementContext = FunctionCallStatementContext;

Parser.prototype.functionCallStatement = function() {

    var localctx = new FunctionCallStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, Parser.RULE_functionCallStatement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 125;
        this.primitiveExpression();
        this.state = 126;
        this.match(Parser.PIZQ);
        this.state = 127;
        this.expressionList();
        this.state = 128;
        this.match(Parser.PDER);
        this.state = 129;
        this.match(Parser.NEWLINE);
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
    this.ruleIndex = Parser.RULE_expressionStatement;
    return this;
}

ExpressionStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExpressionStatementContext.prototype.constructor = ExpressionStatementContext;

ExpressionStatementContext.prototype.expressionList = function() {
    return this.getTypedRuleContext(ExpressionListContext,0);
};

ExpressionStatementContext.prototype.NEWLINE = function() {
    return this.getToken(Parser.NEWLINE, 0);
};

ExpressionStatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof ParserListener ) {
        listener.enterExpressionStatement(this);
	}
};

ExpressionStatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof ParserListener ) {
        listener.exitExpressionStatement(this);
	}
};




Parser.ExpressionStatementContext = ExpressionStatementContext;

Parser.prototype.expressionStatement = function() {

    var localctx = new ExpressionStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, Parser.RULE_expressionStatement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 131;
        this.expressionList();
        this.state = 132;
        this.match(Parser.NEWLINE);
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
    this.ruleIndex = Parser.RULE_sequence;
    return this;
}

SequenceContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SequenceContext.prototype.constructor = SequenceContext;

SequenceContext.prototype.NEWLINE = function() {
    return this.getToken(Parser.NEWLINE, 0);
};

SequenceContext.prototype.INDENT = function() {
    return this.getToken(Parser.INDENT, 0);
};

SequenceContext.prototype.moreStatements = function() {
    return this.getTypedRuleContext(MoreStatementsContext,0);
};

SequenceContext.prototype.DEDENT = function() {
    return this.getToken(Parser.DEDENT, 0);
};

SequenceContext.prototype.enterRule = function(listener) {
    if(listener instanceof ParserListener ) {
        listener.enterSequence(this);
	}
};

SequenceContext.prototype.exitRule = function(listener) {
    if(listener instanceof ParserListener ) {
        listener.exitSequence(this);
	}
};




Parser.SequenceContext = SequenceContext;

Parser.prototype.sequence = function() {

    var localctx = new SequenceContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, Parser.RULE_sequence);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 134;
        this.match(Parser.NEWLINE);
        this.state = 135;
        this.match(Parser.INDENT);
        this.state = 136;
        this.moreStatements();
        this.state = 137;
        this.match(Parser.DEDENT);
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
    this.ruleIndex = Parser.RULE_moreStatements;
    return this;
}

MoreStatementsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MoreStatementsContext.prototype.constructor = MoreStatementsContext;

MoreStatementsContext.prototype.statement = function() {
    return this.getTypedRuleContext(StatementContext,0);
};

MoreStatementsContext.prototype.moreStatements = function() {
    return this.getTypedRuleContext(MoreStatementsContext,0);
};

MoreStatementsContext.prototype.enterRule = function(listener) {
    if(listener instanceof ParserListener ) {
        listener.enterMoreStatements(this);
	}
};

MoreStatementsContext.prototype.exitRule = function(listener) {
    if(listener instanceof ParserListener ) {
        listener.exitMoreStatements(this);
	}
};




Parser.MoreStatementsContext = MoreStatementsContext;

Parser.prototype.moreStatements = function() {

    var localctx = new MoreStatementsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 28, Parser.RULE_moreStatements);
    try {
        this.state = 143;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 139;
            this.statement();
            this.state = 140;
            this.moreStatements();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 142;
            this.statement();
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


function ExpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = Parser.RULE_expression;
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
    if(listener instanceof ParserListener ) {
        listener.enterExpression(this);
	}
};

ExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof ParserListener ) {
        listener.exitExpression(this);
	}
};




Parser.ExpressionContext = ExpressionContext;

Parser.prototype.expression = function() {

    var localctx = new ExpressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 30, Parser.RULE_expression);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 145;
        this.additionExpression();
        this.state = 146;
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
    this.ruleIndex = Parser.RULE_comparison;
    return this;
}

ComparisonContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ComparisonContext.prototype.constructor = ComparisonContext;

ComparisonContext.prototype.additionExpression = function() {
    return this.getTypedRuleContext(AdditionExpressionContext,0);
};

ComparisonContext.prototype.comparison = function() {
    return this.getTypedRuleContext(ComparisonContext,0);
};

ComparisonContext.prototype.MENOR = function() {
    return this.getToken(Parser.MENOR, 0);
};

ComparisonContext.prototype.MAYOR = function() {
    return this.getToken(Parser.MAYOR, 0);
};

ComparisonContext.prototype.MENORIGUAL = function() {
    return this.getToken(Parser.MENORIGUAL, 0);
};

ComparisonContext.prototype.MAYORIGUAL = function() {
    return this.getToken(Parser.MAYORIGUAL, 0);
};

ComparisonContext.prototype.COMP = function() {
    return this.getToken(Parser.COMP, 0);
};

ComparisonContext.prototype.enterRule = function(listener) {
    if(listener instanceof ParserListener ) {
        listener.enterComparison(this);
	}
};

ComparisonContext.prototype.exitRule = function(listener) {
    if(listener instanceof ParserListener ) {
        listener.exitComparison(this);
	}
};




Parser.ComparisonContext = ComparisonContext;

Parser.prototype.comparison = function() {

    var localctx = new ComparisonContext(this, this._ctx, this.state);
    this.enterRule(localctx, 32, Parser.RULE_comparison);
    var _la = 0; // Token type
    try {
        this.state = 153;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case Parser.MAYOR:
        case Parser.MENOR:
        case Parser.MAYORIGUAL:
        case Parser.MENORIGUAL:
        case Parser.COMP:
            this.enterOuterAlt(localctx, 1);
            this.state = 148;
            _la = this._input.LA(1);
            if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << Parser.MAYOR) | (1 << Parser.MENOR) | (1 << Parser.MAYORIGUAL) | (1 << Parser.MENORIGUAL) | (1 << Parser.COMP))) !== 0))) {
            this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            this.state = 149;
            this.additionExpression();
            this.state = 150;
            this.comparison();
            break;
        case Parser.COMA:
        case Parser.PDER:
        case Parser.CDER:
        case Parser.DOSPUN:
        case Parser.IN:
        case Parser.NEWLINE:
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


function AdditionExpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = Parser.RULE_additionExpression;
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
    if(listener instanceof ParserListener ) {
        listener.enterAdditionExpression(this);
	}
};

AdditionExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof ParserListener ) {
        listener.exitAdditionExpression(this);
	}
};




Parser.AdditionExpressionContext = AdditionExpressionContext;

Parser.prototype.additionExpression = function() {

    var localctx = new AdditionExpressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 34, Parser.RULE_additionExpression);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 155;
        this.multiplicationExpression();
        this.state = 156;
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
    this.ruleIndex = Parser.RULE_additionFactor;
    return this;
}

AdditionFactorContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AdditionFactorContext.prototype.constructor = AdditionFactorContext;

AdditionFactorContext.prototype.multiplicationExpression = function() {
    return this.getTypedRuleContext(MultiplicationExpressionContext,0);
};

AdditionFactorContext.prototype.additionFactor = function() {
    return this.getTypedRuleContext(AdditionFactorContext,0);
};

AdditionFactorContext.prototype.SUM = function() {
    return this.getToken(Parser.SUM, 0);
};

AdditionFactorContext.prototype.RESTA = function() {
    return this.getToken(Parser.RESTA, 0);
};

AdditionFactorContext.prototype.enterRule = function(listener) {
    if(listener instanceof ParserListener ) {
        listener.enterAdditionFactor(this);
	}
};

AdditionFactorContext.prototype.exitRule = function(listener) {
    if(listener instanceof ParserListener ) {
        listener.exitAdditionFactor(this);
	}
};




Parser.AdditionFactorContext = AdditionFactorContext;

Parser.prototype.additionFactor = function() {

    var localctx = new AdditionFactorContext(this, this._ctx, this.state);
    this.enterRule(localctx, 36, Parser.RULE_additionFactor);
    var _la = 0; // Token type
    try {
        this.state = 163;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case Parser.SUM:
        case Parser.RESTA:
            this.enterOuterAlt(localctx, 1);
            this.state = 158;
            _la = this._input.LA(1);
            if(!(_la===Parser.SUM || _la===Parser.RESTA)) {
            this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            this.state = 159;
            this.multiplicationExpression();
            this.state = 160;
            this.additionFactor();
            break;
        case Parser.COMA:
        case Parser.PDER:
        case Parser.CDER:
        case Parser.DOSPUN:
        case Parser.MAYOR:
        case Parser.MENOR:
        case Parser.MAYORIGUAL:
        case Parser.MENORIGUAL:
        case Parser.COMP:
        case Parser.IN:
        case Parser.NEWLINE:
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


function MultiplicationExpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = Parser.RULE_multiplicationExpression;
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
    if(listener instanceof ParserListener ) {
        listener.enterMultiplicationExpression(this);
	}
};

MultiplicationExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof ParserListener ) {
        listener.exitMultiplicationExpression(this);
	}
};




Parser.MultiplicationExpressionContext = MultiplicationExpressionContext;

Parser.prototype.multiplicationExpression = function() {

    var localctx = new MultiplicationExpressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 38, Parser.RULE_multiplicationExpression);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 165;
        this.elementExpression();
        this.state = 166;
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
    this.ruleIndex = Parser.RULE_multiplicationFactor;
    return this;
}

MultiplicationFactorContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MultiplicationFactorContext.prototype.constructor = MultiplicationFactorContext;

MultiplicationFactorContext.prototype.elementExpression = function() {
    return this.getTypedRuleContext(ElementExpressionContext,0);
};

MultiplicationFactorContext.prototype.multiplicationFactor = function() {
    return this.getTypedRuleContext(MultiplicationFactorContext,0);
};

MultiplicationFactorContext.prototype.MULT = function() {
    return this.getToken(Parser.MULT, 0);
};

MultiplicationFactorContext.prototype.DIV = function() {
    return this.getToken(Parser.DIV, 0);
};

MultiplicationFactorContext.prototype.enterRule = function(listener) {
    if(listener instanceof ParserListener ) {
        listener.enterMultiplicationFactor(this);
	}
};

MultiplicationFactorContext.prototype.exitRule = function(listener) {
    if(listener instanceof ParserListener ) {
        listener.exitMultiplicationFactor(this);
	}
};




Parser.MultiplicationFactorContext = MultiplicationFactorContext;

Parser.prototype.multiplicationFactor = function() {

    var localctx = new MultiplicationFactorContext(this, this._ctx, this.state);
    this.enterRule(localctx, 40, Parser.RULE_multiplicationFactor);
    var _la = 0; // Token type
    try {
        this.state = 173;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case Parser.MULT:
        case Parser.DIV:
            this.enterOuterAlt(localctx, 1);
            this.state = 168;
            _la = this._input.LA(1);
            if(!(_la===Parser.MULT || _la===Parser.DIV)) {
            this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            this.state = 169;
            this.elementExpression();
            this.state = 170;
            this.multiplicationFactor();
            break;
        case Parser.COMA:
        case Parser.PDER:
        case Parser.CDER:
        case Parser.SUM:
        case Parser.RESTA:
        case Parser.DOSPUN:
        case Parser.MAYOR:
        case Parser.MENOR:
        case Parser.MAYORIGUAL:
        case Parser.MENORIGUAL:
        case Parser.COMP:
        case Parser.IN:
        case Parser.NEWLINE:
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


function ElementExpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = Parser.RULE_elementExpression;
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
    if(listener instanceof ParserListener ) {
        listener.enterElementExpression(this);
	}
};

ElementExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof ParserListener ) {
        listener.exitElementExpression(this);
	}
};




Parser.ElementExpressionContext = ElementExpressionContext;

Parser.prototype.elementExpression = function() {

    var localctx = new ElementExpressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 42, Parser.RULE_elementExpression);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 175;
        this.primitiveExpression();
        this.state = 176;
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
    this.ruleIndex = Parser.RULE_elementAccess;
    return this;
}

ElementAccessContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ElementAccessContext.prototype.constructor = ElementAccessContext;

ElementAccessContext.prototype.CIZQ = function() {
    return this.getToken(Parser.CIZQ, 0);
};

ElementAccessContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

ElementAccessContext.prototype.CDER = function() {
    return this.getToken(Parser.CDER, 0);
};

ElementAccessContext.prototype.elementAccess = function() {
    return this.getTypedRuleContext(ElementAccessContext,0);
};

ElementAccessContext.prototype.enterRule = function(listener) {
    if(listener instanceof ParserListener ) {
        listener.enterElementAccess(this);
	}
};

ElementAccessContext.prototype.exitRule = function(listener) {
    if(listener instanceof ParserListener ) {
        listener.exitElementAccess(this);
	}
};




Parser.ElementAccessContext = ElementAccessContext;

Parser.prototype.elementAccess = function() {

    var localctx = new ElementAccessContext(this, this._ctx, this.state);
    this.enterRule(localctx, 44, Parser.RULE_elementAccess);
    try {
        this.state = 184;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case Parser.CIZQ:
            this.enterOuterAlt(localctx, 1);
            this.state = 178;
            this.match(Parser.CIZQ);
            this.state = 179;
            this.expression();
            this.state = 180;
            this.match(Parser.CDER);
            this.state = 181;
            this.elementAccess();
            break;
        case Parser.COMA:
        case Parser.PDER:
        case Parser.CDER:
        case Parser.MULT:
        case Parser.SUM:
        case Parser.RESTA:
        case Parser.DOSPUN:
        case Parser.MAYOR:
        case Parser.MENOR:
        case Parser.MAYORIGUAL:
        case Parser.MENORIGUAL:
        case Parser.COMP:
        case Parser.DIV:
        case Parser.IN:
        case Parser.NEWLINE:
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


function FunctionCallExpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = Parser.RULE_functionCallExpression;
    return this;
}

FunctionCallExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FunctionCallExpressionContext.prototype.constructor = FunctionCallExpressionContext;

FunctionCallExpressionContext.prototype.PIZQ = function() {
    return this.getToken(Parser.PIZQ, 0);
};

FunctionCallExpressionContext.prototype.expressionList = function() {
    return this.getTypedRuleContext(ExpressionListContext,0);
};

FunctionCallExpressionContext.prototype.PDER = function() {
    return this.getToken(Parser.PDER, 0);
};

FunctionCallExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof ParserListener ) {
        listener.enterFunctionCallExpression(this);
	}
};

FunctionCallExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof ParserListener ) {
        listener.exitFunctionCallExpression(this);
	}
};




Parser.FunctionCallExpressionContext = FunctionCallExpressionContext;

Parser.prototype.functionCallExpression = function() {

    var localctx = new FunctionCallExpressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 46, Parser.RULE_functionCallExpression);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 186;
        this.match(Parser.PIZQ);
        this.state = 187;
        this.expressionList();
        this.state = 188;
        this.match(Parser.PDER);
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
    this.ruleIndex = Parser.RULE_expressionList;
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
    if(listener instanceof ParserListener ) {
        listener.enterExpressionList(this);
	}
};

ExpressionListContext.prototype.exitRule = function(listener) {
    if(listener instanceof ParserListener ) {
        listener.exitExpressionList(this);
	}
};




Parser.ExpressionListContext = ExpressionListContext;

Parser.prototype.expressionList = function() {

    var localctx = new ExpressionListContext(this, this._ctx, this.state);
    this.enterRule(localctx, 48, Parser.RULE_expressionList);
    try {
        this.state = 194;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case Parser.PIZQ:
        case Parser.CIZQ:
        case Parser.LEN:
        case Parser.NUM:
        case Parser.ID:
        case Parser.STR:
            this.enterOuterAlt(localctx, 1);
            this.state = 190;
            this.expression();
            this.state = 191;
            this.moreExpressions();
            break;
        case Parser.PDER:
        case Parser.CDER:
        case Parser.DOSPUN:
        case Parser.NEWLINE:
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
    this.ruleIndex = Parser.RULE_moreExpressions;
    return this;
}

MoreExpressionsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MoreExpressionsContext.prototype.constructor = MoreExpressionsContext;

MoreExpressionsContext.prototype.COMA = function() {
    return this.getToken(Parser.COMA, 0);
};

MoreExpressionsContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

MoreExpressionsContext.prototype.moreExpressions = function() {
    return this.getTypedRuleContext(MoreExpressionsContext,0);
};

MoreExpressionsContext.prototype.enterRule = function(listener) {
    if(listener instanceof ParserListener ) {
        listener.enterMoreExpressions(this);
	}
};

MoreExpressionsContext.prototype.exitRule = function(listener) {
    if(listener instanceof ParserListener ) {
        listener.exitMoreExpressions(this);
	}
};




Parser.MoreExpressionsContext = MoreExpressionsContext;

Parser.prototype.moreExpressions = function() {

    var localctx = new MoreExpressionsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 50, Parser.RULE_moreExpressions);
    try {
        this.state = 201;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case Parser.COMA:
            this.enterOuterAlt(localctx, 1);
            this.state = 196;
            this.match(Parser.COMA);
            this.state = 197;
            this.expression();
            this.state = 198;
            this.moreExpressions();
            break;
        case Parser.PDER:
        case Parser.CDER:
        case Parser.DOSPUN:
        case Parser.NEWLINE:
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


function PrimitiveExpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = Parser.RULE_primitiveExpression;
    return this;
}

PrimitiveExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PrimitiveExpressionContext.prototype.constructor = PrimitiveExpressionContext;

PrimitiveExpressionContext.prototype.NUM = function() {
    return this.getToken(Parser.NUM, 0);
};

PrimitiveExpressionContext.prototype.STR = function() {
    return this.getToken(Parser.STR, 0);
};

PrimitiveExpressionContext.prototype.ID = function() {
    return this.getToken(Parser.ID, 0);
};

PrimitiveExpressionContext.prototype.PIZQ = function() {
    return this.getToken(Parser.PIZQ, 0);
};

PrimitiveExpressionContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

PrimitiveExpressionContext.prototype.PDER = function() {
    return this.getToken(Parser.PDER, 0);
};

PrimitiveExpressionContext.prototype.listExpression = function() {
    return this.getTypedRuleContext(ListExpressionContext,0);
};

PrimitiveExpressionContext.prototype.LEN = function() {
    return this.getToken(Parser.LEN, 0);
};

PrimitiveExpressionContext.prototype.functionCallExpression = function() {
    return this.getTypedRuleContext(FunctionCallExpressionContext,0);
};

PrimitiveExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof ParserListener ) {
        listener.enterPrimitiveExpression(this);
	}
};

PrimitiveExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof ParserListener ) {
        listener.exitPrimitiveExpression(this);
	}
};




Parser.PrimitiveExpressionContext = PrimitiveExpressionContext;

Parser.prototype.primitiveExpression = function() {

    var localctx = new PrimitiveExpressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 52, Parser.RULE_primitiveExpression);
    try {
        this.state = 217;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,11,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 203;
            this.match(Parser.NUM);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 204;
            this.match(Parser.STR);
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 205;
            this.match(Parser.ID);
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 206;
            this.match(Parser.PIZQ);
            this.state = 207;
            this.expression();
            this.state = 208;
            this.match(Parser.PDER);
            break;

        case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 210;
            this.listExpression();
            break;

        case 6:
            this.enterOuterAlt(localctx, 6);
            this.state = 211;
            this.match(Parser.LEN);
            this.state = 212;
            this.match(Parser.PIZQ);
            this.state = 213;
            this.expression();
            this.state = 214;
            this.match(Parser.PDER);
            break;

        case 7:
            this.enterOuterAlt(localctx, 7);
            this.state = 216;
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
    this.ruleIndex = Parser.RULE_listExpression;
    return this;
}

ListExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ListExpressionContext.prototype.constructor = ListExpressionContext;

ListExpressionContext.prototype.CIZQ = function() {
    return this.getToken(Parser.CIZQ, 0);
};

ListExpressionContext.prototype.expressionList = function() {
    return this.getTypedRuleContext(ExpressionListContext,0);
};

ListExpressionContext.prototype.CDER = function() {
    return this.getToken(Parser.CDER, 0);
};

ListExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof ParserListener ) {
        listener.enterListExpression(this);
	}
};

ListExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof ParserListener ) {
        listener.exitListExpression(this);
	}
};




Parser.ListExpressionContext = ListExpressionContext;

Parser.prototype.listExpression = function() {

    var localctx = new ListExpressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 54, Parser.RULE_listExpression);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 219;
        this.match(Parser.CIZQ);
        this.state = 220;
        this.expressionList();
        this.state = 221;
        this.match(Parser.CDER);
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


exports.Parser = Parser;
