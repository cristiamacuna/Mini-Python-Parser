// Generated from /Users/cristiamacuna/Documents/IIS-2019/Compiladores/Proyecto/G4/Parser2.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');
var Parser2Listener = require('./Parser2Listener').Parser2Listener;
var Parser2Visitor = require('./Parser2Visitor').Parser2Visitor;

var grammarFileName = "Parser2.g4";


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003%\u00f1\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010\u0004",
    "\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014\t",
    "\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017\t\u0017\u0004",
    "\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a\u0004\u001b\t",
    "\u001b\u0004\u001c\t\u001c\u0004\u001d\t\u001d\u0003\u0002\u0007\u0002",
    "<\n\u0002\f\u0002\u000e\u0002?\u000b\u0002\u0003\u0002\u0003\u0002\u0007",
    "\u0002C\n\u0002\f\u0002\u000e\u0002F\u000b\u0002\u0003\u0002\u0003\u0002",
    "\u0003\u0003\u0003\u0003\u0007\u0003L\n\u0003\f\u0003\u000e\u0003O\u000b",
    "\u0003\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0005\u0004Z\n\u0004\u0003",
    "\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003",
    "\u0005\u0003\u0005\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0007\u0003",
    "\u0007\u0007\u0007i\n\u0007\f\u0007\u000e\u0007l\u000b\u0007\u0003\b",
    "\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\t\u0003",
    "\t\u0003\t\u0003\t\u0003\t\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003",
    "\n\u0003\n\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\f\u0003",
    "\f\u0003\f\u0003\f\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\u000e",
    "\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000f",
    "\u0003\u000f\u0003\u000f\u0003\u0010\u0003\u0010\u0003\u0010\u0006\u0010",
    "\u009b\n\u0010\r\u0010\u000e\u0010\u009c\u0003\u0010\u0003\u0010\u0003",
    "\u0011\u0003\u0011\u0003\u0011\u0003\u0012\u0003\u0012\u0007\u0012\u00a6",
    "\n\u0012\f\u0012\u000e\u0012\u00a9\u000b\u0012\u0003\u0013\u0003\u0013",
    "\u0003\u0013\u0003\u0014\u0003\u0014\u0007\u0014\u00b0\n\u0014\f\u0014",
    "\u000e\u0014\u00b3\u000b\u0014\u0003\u0015\u0003\u0015\u0003\u0015\u0003",
    "\u0016\u0003\u0016\u0007\u0016\u00ba\n\u0016\f\u0016\u000e\u0016\u00bd",
    "\u000b\u0016\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0018\u0003\u0018",
    "\u0003\u0018\u0003\u0018\u0007\u0018\u00c6\n\u0018\f\u0018\u000e\u0018",
    "\u00c9\u000b\u0018\u0003\u0019\u0003\u0019\u0003\u0019\u0003\u0019\u0003",
    "\u0019\u0003\u001a\u0003\u001a\u0003\u001a\u0003\u001a\u0005\u001a\u00d4",
    "\n\u001a\u0003\u001b\u0003\u001b\u0007\u001b\u00d8\n\u001b\f\u001b\u000e",
    "\u001b\u00db\u000b\u001b\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001c",
    "\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001c",
    "\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001c\u0005\u001c\u00eb\n",
    "\u001c\u0003\u001d\u0003\u001d\u0003\u001d\u0003\u001d\u0003\u001d\u0002",
    "\u0002\u001e\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018",
    "\u001a\u001c\u001e \"$&(*,.02468\u0002\u0005\u0005\u0002\u000e\u000e",
    "\u0014\u0015\u001a\u001b\u0004\u0002\u0011\u0011\u0017\u0017\u0003\u0002",
    "\u0012\u0013\u0002\u00ed\u0002=\u0003\u0002\u0002\u0002\u0004I\u0003",
    "\u0002\u0002\u0002\u0006Y\u0003\u0002\u0002\u0002\b[\u0003\u0002\u0002",
    "\u0002\nc\u0003\u0002\u0002\u0002\fj\u0003\u0002\u0002\u0002\u000em",
    "\u0003\u0002\u0002\u0002\u0010u\u0003\u0002\u0002\u0002\u0012z\u0003",
    "\u0002\u0002\u0002\u0014\u0081\u0003\u0002\u0002\u0002\u0016\u0085\u0003",
    "\u0002\u0002\u0002\u0018\u0089\u0003\u0002\u0002\u0002\u001a\u008e\u0003",
    "\u0002\u0002\u0002\u001c\u0094\u0003\u0002\u0002\u0002\u001e\u0097\u0003",
    "\u0002\u0002\u0002 \u00a0\u0003\u0002\u0002\u0002\"\u00a7\u0003\u0002",
    "\u0002\u0002$\u00aa\u0003\u0002\u0002\u0002&\u00b1\u0003\u0002\u0002",
    "\u0002(\u00b4\u0003\u0002\u0002\u0002*\u00bb\u0003\u0002\u0002\u0002",
    ",\u00be\u0003\u0002\u0002\u0002.\u00c7\u0003\u0002\u0002\u00020\u00ca",
    "\u0003\u0002\u0002\u00022\u00d3\u0003\u0002\u0002\u00024\u00d9\u0003",
    "\u0002\u0002\u00026\u00ea\u0003\u0002\u0002\u00028\u00ec\u0003\u0002",
    "\u0002\u0002:<\u0007\u001c\u0002\u0002;:\u0003\u0002\u0002\u0002<?\u0003",
    "\u0002\u0002\u0002=;\u0003\u0002\u0002\u0002=>\u0003\u0002\u0002\u0002",
    ">@\u0003\u0002\u0002\u0002?=\u0003\u0002\u0002\u0002@D\u0005\u0006\u0004",
    "\u0002AC\u0005\u0006\u0004\u0002BA\u0003\u0002\u0002\u0002CF\u0003\u0002",
    "\u0002\u0002DB\u0003\u0002\u0002\u0002DE\u0003\u0002\u0002\u0002EG\u0003",
    "\u0002\u0002\u0002FD\u0003\u0002\u0002\u0002GH\u0007\u0002\u0002\u0003",
    "H\u0003\u0003\u0002\u0002\u0002IM\u0005\u0006\u0004\u0002JL\u0005\u0006",
    "\u0004\u0002KJ\u0003\u0002\u0002\u0002LO\u0003\u0002\u0002\u0002MK\u0003",
    "\u0002\u0002\u0002MN\u0003\u0002\u0002\u0002N\u0005\u0003\u0002\u0002",
    "\u0002OM\u0003\u0002\u0002\u0002PZ\u0005\b\u0005\u0002QZ\u0005\u000e",
    "\b\u0002RZ\u0005\u0014\u000b\u0002SZ\u0005\u0016\f\u0002TZ\u0005\u0010",
    "\t\u0002UZ\u0005\u0012\n\u0002VZ\u0005\u0018\r\u0002WZ\u0005\u001a\u000e",
    "\u0002XZ\u0005\u001c\u000f\u0002YP\u0003\u0002\u0002\u0002YQ\u0003\u0002",
    "\u0002\u0002YR\u0003\u0002\u0002\u0002YS\u0003\u0002\u0002\u0002YT\u0003",
    "\u0002\u0002\u0002YU\u0003\u0002\u0002\u0002YV\u0003\u0002\u0002\u0002",
    "YW\u0003\u0002\u0002\u0002YX\u0003\u0002\u0002\u0002Z\u0007\u0003\u0002",
    "\u0002\u0002[\\\u0007\u0003\u0002\u0002\\]\u0007\u001f\u0002\u0002]",
    "^\u0007\u000f\u0002\u0002^_\u0005\n\u0006\u0002_`\u0007\u0010\u0002",
    "\u0002`a\u0007\u0016\u0002\u0002ab\u0005\u001e\u0010\u0002b\t\u0003",
    "\u0002\u0002\u0002cd\u0007\u001f\u0002\u0002de\u0005\f\u0007\u0002e",
    "\u000b\u0003\u0002\u0002\u0002fg\u0007\r\u0002\u0002gi\u0007\u001f\u0002",
    "\u0002hf\u0003\u0002\u0002\u0002il\u0003\u0002\u0002\u0002jh\u0003\u0002",
    "\u0002\u0002jk\u0003\u0002\u0002\u0002k\r\u0003\u0002\u0002\u0002lj",
    "\u0003\u0002\u0002\u0002mn\u0007\u0005\u0002\u0002no\u0005 \u0011\u0002",
    "op\u0007\u0016\u0002\u0002pq\u0005\u001e\u0010\u0002qr\u0007\b\u0002",
    "\u0002rs\u0007\u0016\u0002\u0002st\u0005\u001e\u0010\u0002t\u000f\u0003",
    "\u0002\u0002\u0002uv\u0007\t\u0002\u0002vw\u0005 \u0011\u0002wx\u0007",
    "\u0016\u0002\u0002xy\u0005\u001e\u0010\u0002y\u0011\u0003\u0002\u0002",
    "\u0002z{\u0007\u0006\u0002\u0002{|\u0005 \u0011\u0002|}\u0007\u0007",
    "\u0002\u0002}~\u00052\u001a\u0002~\u007f\u0007\u0016\u0002\u0002\u007f",
    "\u0080\u0005\u001e\u0010\u0002\u0080\u0013\u0003\u0002\u0002\u0002\u0081",
    "\u0082\u0007\n\u0002\u0002\u0082\u0083\u0005 \u0011\u0002\u0083\u0084",
    "\u0007\u001c\u0002\u0002\u0084\u0015\u0003\u0002\u0002\u0002\u0085\u0086",
    "\u0007\u000b\u0002\u0002\u0086\u0087\u0005 \u0011\u0002\u0087\u0088",
    "\u0007\u001c\u0002\u0002\u0088\u0017\u0003\u0002\u0002\u0002\u0089\u008a",
    "\u0007\u001f\u0002\u0002\u008a\u008b\u0007\f\u0002\u0002\u008b\u008c",
    "\u0005 \u0011\u0002\u008c\u008d\u0007\u001c\u0002\u0002\u008d\u0019",
    "\u0003\u0002\u0002\u0002\u008e\u008f\u00056\u001c\u0002\u008f\u0090",
    "\u0007\u000f\u0002\u0002\u0090\u0091\u00052\u001a\u0002\u0091\u0092",
    "\u0007\u0010\u0002\u0002\u0092\u0093\u0007\u001c\u0002\u0002\u0093\u001b",
    "\u0003\u0002\u0002\u0002\u0094\u0095\u00052\u001a\u0002\u0095\u0096",
    "\u0007\u001c\u0002\u0002\u0096\u001d\u0003\u0002\u0002\u0002\u0097\u0098",
    "\u0007\u001c\u0002\u0002\u0098\u009a\u0007$\u0002\u0002\u0099\u009b",
    "\u0005\u0006\u0004\u0002\u009a\u0099\u0003\u0002\u0002\u0002\u009b\u009c",
    "\u0003\u0002\u0002\u0002\u009c\u009a\u0003\u0002\u0002\u0002\u009c\u009d",
    "\u0003\u0002\u0002\u0002\u009d\u009e\u0003\u0002\u0002\u0002\u009e\u009f",
    "\u0007%\u0002\u0002\u009f\u001f\u0003\u0002\u0002\u0002\u00a0\u00a1",
    "\u0005$\u0013\u0002\u00a1\u00a2\u0005\"\u0012\u0002\u00a2!\u0003\u0002",
    "\u0002\u0002\u00a3\u00a4\t\u0002\u0002\u0002\u00a4\u00a6\u0005$\u0013",
    "\u0002\u00a5\u00a3\u0003\u0002\u0002\u0002\u00a6\u00a9\u0003\u0002\u0002",
    "\u0002\u00a7\u00a5\u0003\u0002\u0002\u0002\u00a7\u00a8\u0003\u0002\u0002",
    "\u0002\u00a8#\u0003\u0002\u0002\u0002\u00a9\u00a7\u0003\u0002\u0002",
    "\u0002\u00aa\u00ab\u0005(\u0015\u0002\u00ab\u00ac\u0005&\u0014\u0002",
    "\u00ac%\u0003\u0002\u0002\u0002\u00ad\u00ae\t\u0003\u0002\u0002\u00ae",
    "\u00b0\u0005(\u0015\u0002\u00af\u00ad\u0003\u0002\u0002\u0002\u00b0",
    "\u00b3\u0003\u0002\u0002\u0002\u00b1\u00af\u0003\u0002\u0002\u0002\u00b1",
    "\u00b2\u0003\u0002\u0002\u0002\u00b2\'\u0003\u0002\u0002\u0002\u00b3",
    "\u00b1\u0003\u0002\u0002\u0002\u00b4\u00b5\u0005,\u0017\u0002\u00b5",
    "\u00b6\u0005*\u0016\u0002\u00b6)\u0003\u0002\u0002\u0002\u00b7\u00b8",
    "\t\u0004\u0002\u0002\u00b8\u00ba\u0005,\u0017\u0002\u00b9\u00b7\u0003",
    "\u0002\u0002\u0002\u00ba\u00bd\u0003\u0002\u0002\u0002\u00bb\u00b9\u0003",
    "\u0002\u0002\u0002\u00bb\u00bc\u0003\u0002\u0002\u0002\u00bc+\u0003",
    "\u0002\u0002\u0002\u00bd\u00bb\u0003\u0002\u0002\u0002\u00be\u00bf\u0005",
    "6\u001c\u0002\u00bf\u00c0\u0005.\u0018\u0002\u00c0-\u0003\u0002\u0002",
    "\u0002\u00c1\u00c2\u0007\u0018\u0002\u0002\u00c2\u00c3\u0005 \u0011",
    "\u0002\u00c3\u00c4\u0007\u0019\u0002\u0002\u00c4\u00c6\u0003\u0002\u0002",
    "\u0002\u00c5\u00c1\u0003\u0002\u0002\u0002\u00c6\u00c9\u0003\u0002\u0002",
    "\u0002\u00c7\u00c5\u0003\u0002\u0002\u0002\u00c7\u00c8\u0003\u0002\u0002",
    "\u0002\u00c8/\u0003\u0002\u0002\u0002\u00c9\u00c7\u0003\u0002\u0002",
    "\u0002\u00ca\u00cb\u0007\u001f\u0002\u0002\u00cb\u00cc\u0007\u000f\u0002",
    "\u0002\u00cc\u00cd\u00052\u001a\u0002\u00cd\u00ce\u0007\u0010\u0002",
    "\u0002\u00ce1\u0003\u0002\u0002\u0002\u00cf\u00d0\u0005 \u0011\u0002",
    "\u00d0\u00d1\u00054\u001b\u0002\u00d1\u00d4\u0003\u0002\u0002\u0002",
    "\u00d2\u00d4\u0003\u0002\u0002\u0002\u00d3\u00cf\u0003\u0002\u0002\u0002",
    "\u00d3\u00d2\u0003\u0002\u0002\u0002\u00d43\u0003\u0002\u0002\u0002",
    "\u00d5\u00d6\u0007\r\u0002\u0002\u00d6\u00d8\u0005 \u0011\u0002\u00d7",
    "\u00d5\u0003\u0002\u0002\u0002\u00d8\u00db\u0003\u0002\u0002\u0002\u00d9",
    "\u00d7\u0003\u0002\u0002\u0002\u00d9\u00da\u0003\u0002\u0002\u0002\u00da",
    "5\u0003\u0002\u0002\u0002\u00db\u00d9\u0003\u0002\u0002\u0002\u00dc",
    "\u00eb\u0007\u001e\u0002\u0002\u00dd\u00eb\u0007 \u0002\u0002\u00de",
    "\u00eb\u0007\u001f\u0002\u0002\u00df\u00e0\u0007\u000f\u0002\u0002\u00e0",
    "\u00e1\u0005 \u0011\u0002\u00e1\u00e2\u0007\u0010\u0002\u0002\u00e2",
    "\u00eb\u0003\u0002\u0002\u0002\u00e3\u00eb\u00058\u001d\u0002\u00e4",
    "\u00e5\u0007\u0004\u0002\u0002\u00e5\u00e6\u0007\u000f\u0002\u0002\u00e6",
    "\u00e7\u0005 \u0011\u0002\u00e7\u00e8\u0007\u0010\u0002\u0002\u00e8",
    "\u00eb\u0003\u0002\u0002\u0002\u00e9\u00eb\u00050\u0019\u0002\u00ea",
    "\u00dc\u0003\u0002\u0002\u0002\u00ea\u00dd\u0003\u0002\u0002\u0002\u00ea",
    "\u00de\u0003\u0002\u0002\u0002\u00ea\u00df\u0003\u0002\u0002\u0002\u00ea",
    "\u00e3\u0003\u0002\u0002\u0002\u00ea\u00e4\u0003\u0002\u0002\u0002\u00ea",
    "\u00e9\u0003\u0002\u0002\u0002\u00eb7\u0003\u0002\u0002\u0002\u00ec",
    "\u00ed\u0007\u0018\u0002\u0002\u00ed\u00ee\u00052\u001a\u0002\u00ee",
    "\u00ef\u0007\u0019\u0002\u0002\u00ef9\u0003\u0002\u0002\u0002\u000f",
    "=DMYj\u009c\u00a7\u00b1\u00bb\u00c7\u00d3\u00d9\u00ea"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'def'", "'len'", "'if'", "'for'", "'in'", "'else'", 
                     "'while'", "'return'", "'print'", "'='", "','", "'=='", 
                     "'('", "')'", "'+'", "'*'", "'/'", "'>'", "'<'", "':'", 
                     "'-'", "'['", "']'", "'<='", "'>='" ];

var symbolicNames = [ null, "DEF", "LEN", "IF", "FOR", "IN", "ELSE", "WHILE", 
                      "RETURN", "PRINT", "ASSIGN", "COMA", "COMP", "PIZQ", 
                      "PDER", "SUMA", "MUL", "DIV", "MAYOR", "MENOR", "DOSPUN", 
                      "SUB", "CIZQ", "CDER", "MENORIGUAL", "MAYORIGUAL", 
                      "NEWLINE", "CHAR", "NUM", "IDENTIFIER", "STRING", 
                      "COMMENT", "COMENTARIO", "WS", "INDENT", "DEDENT" ];

var ruleNames =  [ "program", "statements", "statement", "defStatement", 
                   "argList", "moreArgs", "ifStatement", "whileStatement", 
                   "forStatement", "returnStatement", "printStatement", 
                   "assignStatement", "functionCallStatement", "expressionStatement", 
                   "sequence", "expression", "comparison", "additionExpression", 
                   "additionFactor", "multiplicationExpression", "multiplicationFactor", 
                   "elementExpression", "elementAccess", "functionCallExpression", 
                   "expressionList", "moreExpressions", "primitiveExpression", 
                   "listExpression" ];

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
Parser2.PRINT = 9;
Parser2.ASSIGN = 10;
Parser2.COMA = 11;
Parser2.COMP = 12;
Parser2.PIZQ = 13;
Parser2.PDER = 14;
Parser2.SUMA = 15;
Parser2.MUL = 16;
Parser2.DIV = 17;
Parser2.MAYOR = 18;
Parser2.MENOR = 19;
Parser2.DOSPUN = 20;
Parser2.SUB = 21;
Parser2.CIZQ = 22;
Parser2.CDER = 23;
Parser2.MENORIGUAL = 24;
Parser2.MAYORIGUAL = 25;
Parser2.NEWLINE = 26;
Parser2.CHAR = 27;
Parser2.NUM = 28;
Parser2.IDENTIFIER = 29;
Parser2.STRING = 30;
Parser2.COMMENT = 31;
Parser2.COMENTARIO = 32;
Parser2.WS = 33;
Parser2.INDENT = 34;
Parser2.DEDENT = 35;

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
Parser2.RULE_expression = 15;
Parser2.RULE_comparison = 16;
Parser2.RULE_additionExpression = 17;
Parser2.RULE_additionFactor = 18;
Parser2.RULE_multiplicationExpression = 19;
Parser2.RULE_multiplicationFactor = 20;
Parser2.RULE_elementExpression = 21;
Parser2.RULE_elementAccess = 22;
Parser2.RULE_functionCallExpression = 23;
Parser2.RULE_expressionList = 24;
Parser2.RULE_moreExpressions = 25;
Parser2.RULE_primitiveExpression = 26;
Parser2.RULE_listExpression = 27;


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


 
ProgramContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function ProgramASTContext(parser, ctx) {
	ProgramContext.call(this, parser);
    ProgramContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ProgramASTContext.prototype = Object.create(ProgramContext.prototype);
ProgramASTContext.prototype.constructor = ProgramASTContext;

Parser2.ProgramASTContext = ProgramASTContext;

ProgramASTContext.prototype.statement = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(StatementContext);
    } else {
        return this.getTypedRuleContext(StatementContext,i);
    }
};

ProgramASTContext.prototype.EOF = function() {
    return this.getToken(Parser2.EOF, 0);
};

ProgramASTContext.prototype.NEWLINE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(Parser2.NEWLINE);
    } else {
        return this.getToken(Parser2.NEWLINE, i);
    }
};

ProgramASTContext.prototype.enterRule = function(listener) {
    if(listener instanceof Parser2Listener ) {
        listener.enterProgramAST(this);
	}
};

ProgramASTContext.prototype.exitRule = function(listener) {
    if(listener instanceof Parser2Listener ) {
        listener.exitProgramAST(this);
	}
};

ProgramASTContext.prototype.accept = function(visitor) {
    if ( visitor instanceof Parser2Visitor ) {
        return visitor.visitProgramAST(this);
    } else {
        return visitor.visitChildren(this);
    }
};



Parser2.ProgramContext = ProgramContext;

Parser2.prototype.program = function() {

    var localctx = new ProgramContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, Parser2.RULE_program);
    var _la = 0; // Token type
    try {
        localctx = new ProgramASTContext(this, localctx);
        this.enterOuterAlt(localctx, 1);
        this.state = 59;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,0,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 56;
                this.match(Parser2.NEWLINE); 
            }
            this.state = 61;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,0,this._ctx);
        }

        this.state = 62;
        this.statement();
        this.state = 66;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << Parser2.DEF) | (1 << Parser2.LEN) | (1 << Parser2.IF) | (1 << Parser2.FOR) | (1 << Parser2.WHILE) | (1 << Parser2.RETURN) | (1 << Parser2.PRINT) | (1 << Parser2.PIZQ) | (1 << Parser2.CIZQ) | (1 << Parser2.NEWLINE) | (1 << Parser2.NUM) | (1 << Parser2.IDENTIFIER) | (1 << Parser2.STRING))) !== 0)) {
            this.state = 63;
            this.statement();
            this.state = 68;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 69;
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


 
StatementsContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function StatementsASTContext(parser, ctx) {
	StatementsContext.call(this, parser);
    StatementsContext.prototype.copyFrom.call(this, ctx);
    return this;
}

StatementsASTContext.prototype = Object.create(StatementsContext.prototype);
StatementsASTContext.prototype.constructor = StatementsASTContext;

Parser2.StatementsASTContext = StatementsASTContext;

StatementsASTContext.prototype.statement = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(StatementContext);
    } else {
        return this.getTypedRuleContext(StatementContext,i);
    }
};
StatementsASTContext.prototype.enterRule = function(listener) {
    if(listener instanceof Parser2Listener ) {
        listener.enterStatementsAST(this);
	}
};

StatementsASTContext.prototype.exitRule = function(listener) {
    if(listener instanceof Parser2Listener ) {
        listener.exitStatementsAST(this);
	}
};

StatementsASTContext.prototype.accept = function(visitor) {
    if ( visitor instanceof Parser2Visitor ) {
        return visitor.visitStatementsAST(this);
    } else {
        return visitor.visitChildren(this);
    }
};



Parser2.StatementsContext = StatementsContext;

Parser2.prototype.statements = function() {

    var localctx = new StatementsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, Parser2.RULE_statements);
    var _la = 0; // Token type
    try {
        localctx = new StatementsASTContext(this, localctx);
        this.enterOuterAlt(localctx, 1);
        this.state = 71;
        this.statement();
        this.state = 75;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << Parser2.DEF) | (1 << Parser2.LEN) | (1 << Parser2.IF) | (1 << Parser2.FOR) | (1 << Parser2.WHILE) | (1 << Parser2.RETURN) | (1 << Parser2.PRINT) | (1 << Parser2.PIZQ) | (1 << Parser2.CIZQ) | (1 << Parser2.NEWLINE) | (1 << Parser2.NUM) | (1 << Parser2.IDENTIFIER) | (1 << Parser2.STRING))) !== 0)) {
            this.state = 72;
            this.statement();
            this.state = 77;
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


 
StatementContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function Statement_whileStatementASTContext(parser, ctx) {
	StatementContext.call(this, parser);
    StatementContext.prototype.copyFrom.call(this, ctx);
    return this;
}

Statement_whileStatementASTContext.prototype = Object.create(StatementContext.prototype);
Statement_whileStatementASTContext.prototype.constructor = Statement_whileStatementASTContext;

Parser2.Statement_whileStatementASTContext = Statement_whileStatementASTContext;

Statement_whileStatementASTContext.prototype.whileStatement = function() {
    return this.getTypedRuleContext(WhileStatementContext,0);
};
Statement_whileStatementASTContext.prototype.enterRule = function(listener) {
    if(listener instanceof Parser2Listener ) {
        listener.enterStatement_whileStatementAST(this);
	}
};

Statement_whileStatementASTContext.prototype.exitRule = function(listener) {
    if(listener instanceof Parser2Listener ) {
        listener.exitStatement_whileStatementAST(this);
	}
};

Statement_whileStatementASTContext.prototype.accept = function(visitor) {
    if ( visitor instanceof Parser2Visitor ) {
        return visitor.visitStatement_whileStatementAST(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function Statement_assignStatementASTContext(parser, ctx) {
	StatementContext.call(this, parser);
    StatementContext.prototype.copyFrom.call(this, ctx);
    return this;
}

Statement_assignStatementASTContext.prototype = Object.create(StatementContext.prototype);
Statement_assignStatementASTContext.prototype.constructor = Statement_assignStatementASTContext;

Parser2.Statement_assignStatementASTContext = Statement_assignStatementASTContext;

Statement_assignStatementASTContext.prototype.assignStatement = function() {
    return this.getTypedRuleContext(AssignStatementContext,0);
};
Statement_assignStatementASTContext.prototype.enterRule = function(listener) {
    if(listener instanceof Parser2Listener ) {
        listener.enterStatement_assignStatementAST(this);
	}
};

Statement_assignStatementASTContext.prototype.exitRule = function(listener) {
    if(listener instanceof Parser2Listener ) {
        listener.exitStatement_assignStatementAST(this);
	}
};

Statement_assignStatementASTContext.prototype.accept = function(visitor) {
    if ( visitor instanceof Parser2Visitor ) {
        return visitor.visitStatement_assignStatementAST(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function Statement_defStatementASTContext(parser, ctx) {
	StatementContext.call(this, parser);
    StatementContext.prototype.copyFrom.call(this, ctx);
    return this;
}

Statement_defStatementASTContext.prototype = Object.create(StatementContext.prototype);
Statement_defStatementASTContext.prototype.constructor = Statement_defStatementASTContext;

Parser2.Statement_defStatementASTContext = Statement_defStatementASTContext;

Statement_defStatementASTContext.prototype.defStatement = function() {
    return this.getTypedRuleContext(DefStatementContext,0);
};
Statement_defStatementASTContext.prototype.enterRule = function(listener) {
    if(listener instanceof Parser2Listener ) {
        listener.enterStatement_defStatementAST(this);
	}
};

Statement_defStatementASTContext.prototype.exitRule = function(listener) {
    if(listener instanceof Parser2Listener ) {
        listener.exitStatement_defStatementAST(this);
	}
};

Statement_defStatementASTContext.prototype.accept = function(visitor) {
    if ( visitor instanceof Parser2Visitor ) {
        return visitor.visitStatement_defStatementAST(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function Statement_ifStatementASTContext(parser, ctx) {
	StatementContext.call(this, parser);
    StatementContext.prototype.copyFrom.call(this, ctx);
    return this;
}

Statement_ifStatementASTContext.prototype = Object.create(StatementContext.prototype);
Statement_ifStatementASTContext.prototype.constructor = Statement_ifStatementASTContext;

Parser2.Statement_ifStatementASTContext = Statement_ifStatementASTContext;

Statement_ifStatementASTContext.prototype.ifStatement = function() {
    return this.getTypedRuleContext(IfStatementContext,0);
};
Statement_ifStatementASTContext.prototype.enterRule = function(listener) {
    if(listener instanceof Parser2Listener ) {
        listener.enterStatement_ifStatementAST(this);
	}
};

Statement_ifStatementASTContext.prototype.exitRule = function(listener) {
    if(listener instanceof Parser2Listener ) {
        listener.exitStatement_ifStatementAST(this);
	}
};

Statement_ifStatementASTContext.prototype.accept = function(visitor) {
    if ( visitor instanceof Parser2Visitor ) {
        return visitor.visitStatement_ifStatementAST(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function Statement_forStatementASTContext(parser, ctx) {
	StatementContext.call(this, parser);
    StatementContext.prototype.copyFrom.call(this, ctx);
    return this;
}

Statement_forStatementASTContext.prototype = Object.create(StatementContext.prototype);
Statement_forStatementASTContext.prototype.constructor = Statement_forStatementASTContext;

Parser2.Statement_forStatementASTContext = Statement_forStatementASTContext;

Statement_forStatementASTContext.prototype.forStatement = function() {
    return this.getTypedRuleContext(ForStatementContext,0);
};
Statement_forStatementASTContext.prototype.enterRule = function(listener) {
    if(listener instanceof Parser2Listener ) {
        listener.enterStatement_forStatementAST(this);
	}
};

Statement_forStatementASTContext.prototype.exitRule = function(listener) {
    if(listener instanceof Parser2Listener ) {
        listener.exitStatement_forStatementAST(this);
	}
};

Statement_forStatementASTContext.prototype.accept = function(visitor) {
    if ( visitor instanceof Parser2Visitor ) {
        return visitor.visitStatement_forStatementAST(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function Statement_expressionStatementASTContext(parser, ctx) {
	StatementContext.call(this, parser);
    StatementContext.prototype.copyFrom.call(this, ctx);
    return this;
}

Statement_expressionStatementASTContext.prototype = Object.create(StatementContext.prototype);
Statement_expressionStatementASTContext.prototype.constructor = Statement_expressionStatementASTContext;

Parser2.Statement_expressionStatementASTContext = Statement_expressionStatementASTContext;

Statement_expressionStatementASTContext.prototype.expressionStatement = function() {
    return this.getTypedRuleContext(ExpressionStatementContext,0);
};
Statement_expressionStatementASTContext.prototype.enterRule = function(listener) {
    if(listener instanceof Parser2Listener ) {
        listener.enterStatement_expressionStatementAST(this);
	}
};

Statement_expressionStatementASTContext.prototype.exitRule = function(listener) {
    if(listener instanceof Parser2Listener ) {
        listener.exitStatement_expressionStatementAST(this);
	}
};

Statement_expressionStatementASTContext.prototype.accept = function(visitor) {
    if ( visitor instanceof Parser2Visitor ) {
        return visitor.visitStatement_expressionStatementAST(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function Statement_returnStatementASTContext(parser, ctx) {
	StatementContext.call(this, parser);
    StatementContext.prototype.copyFrom.call(this, ctx);
    return this;
}

Statement_returnStatementASTContext.prototype = Object.create(StatementContext.prototype);
Statement_returnStatementASTContext.prototype.constructor = Statement_returnStatementASTContext;

Parser2.Statement_returnStatementASTContext = Statement_returnStatementASTContext;

Statement_returnStatementASTContext.prototype.returnStatement = function() {
    return this.getTypedRuleContext(ReturnStatementContext,0);
};
Statement_returnStatementASTContext.prototype.enterRule = function(listener) {
    if(listener instanceof Parser2Listener ) {
        listener.enterStatement_returnStatementAST(this);
	}
};

Statement_returnStatementASTContext.prototype.exitRule = function(listener) {
    if(listener instanceof Parser2Listener ) {
        listener.exitStatement_returnStatementAST(this);
	}
};

Statement_returnStatementASTContext.prototype.accept = function(visitor) {
    if ( visitor instanceof Parser2Visitor ) {
        return visitor.visitStatement_returnStatementAST(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function Statement_printStatementASTContext(parser, ctx) {
	StatementContext.call(this, parser);
    StatementContext.prototype.copyFrom.call(this, ctx);
    return this;
}

Statement_printStatementASTContext.prototype = Object.create(StatementContext.prototype);
Statement_printStatementASTContext.prototype.constructor = Statement_printStatementASTContext;

Parser2.Statement_printStatementASTContext = Statement_printStatementASTContext;

Statement_printStatementASTContext.prototype.printStatement = function() {
    return this.getTypedRuleContext(PrintStatementContext,0);
};
Statement_printStatementASTContext.prototype.enterRule = function(listener) {
    if(listener instanceof Parser2Listener ) {
        listener.enterStatement_printStatementAST(this);
	}
};

Statement_printStatementASTContext.prototype.exitRule = function(listener) {
    if(listener instanceof Parser2Listener ) {
        listener.exitStatement_printStatementAST(this);
	}
};

Statement_printStatementASTContext.prototype.accept = function(visitor) {
    if ( visitor instanceof Parser2Visitor ) {
        return visitor.visitStatement_printStatementAST(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function Statement_functionCallStatementASTContext(parser, ctx) {
	StatementContext.call(this, parser);
    StatementContext.prototype.copyFrom.call(this, ctx);
    return this;
}

Statement_functionCallStatementASTContext.prototype = Object.create(StatementContext.prototype);
Statement_functionCallStatementASTContext.prototype.constructor = Statement_functionCallStatementASTContext;

Parser2.Statement_functionCallStatementASTContext = Statement_functionCallStatementASTContext;

Statement_functionCallStatementASTContext.prototype.functionCallStatement = function() {
    return this.getTypedRuleContext(FunctionCallStatementContext,0);
};
Statement_functionCallStatementASTContext.prototype.enterRule = function(listener) {
    if(listener instanceof Parser2Listener ) {
        listener.enterStatement_functionCallStatementAST(this);
	}
};

Statement_functionCallStatementASTContext.prototype.exitRule = function(listener) {
    if(listener instanceof Parser2Listener ) {
        listener.exitStatement_functionCallStatementAST(this);
	}
};

Statement_functionCallStatementASTContext.prototype.accept = function(visitor) {
    if ( visitor instanceof Parser2Visitor ) {
        return visitor.visitStatement_functionCallStatementAST(this);
    } else {
        return visitor.visitChildren(this);
    }
};



Parser2.StatementContext = StatementContext;

Parser2.prototype.statement = function() {

    var localctx = new StatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, Parser2.RULE_statement);
    try {
        this.state = 87;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
        switch(la_) {
        case 1:
            localctx = new Statement_defStatementASTContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 78;
            this.defStatement();
            break;

        case 2:
            localctx = new Statement_ifStatementASTContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 79;
            this.ifStatement();
            break;

        case 3:
            localctx = new Statement_returnStatementASTContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 80;
            this.returnStatement();
            break;

        case 4:
            localctx = new Statement_printStatementASTContext(this, localctx);
            this.enterOuterAlt(localctx, 4);
            this.state = 81;
            this.printStatement();
            break;

        case 5:
            localctx = new Statement_whileStatementASTContext(this, localctx);
            this.enterOuterAlt(localctx, 5);
            this.state = 82;
            this.whileStatement();
            break;

        case 6:
            localctx = new Statement_forStatementASTContext(this, localctx);
            this.enterOuterAlt(localctx, 6);
            this.state = 83;
            this.forStatement();
            break;

        case 7:
            localctx = new Statement_assignStatementASTContext(this, localctx);
            this.enterOuterAlt(localctx, 7);
            this.state = 84;
            this.assignStatement();
            break;

        case 8:
            localctx = new Statement_functionCallStatementASTContext(this, localctx);
            this.enterOuterAlt(localctx, 8);
            this.state = 85;
            this.functionCallStatement();
            break;

        case 9:
            localctx = new Statement_expressionStatementASTContext(this, localctx);
            this.enterOuterAlt(localctx, 9);
            this.state = 86;
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


 
DefStatementContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function DefStatementASTContext(parser, ctx) {
	DefStatementContext.call(this, parser);
    DefStatementContext.prototype.copyFrom.call(this, ctx);
    return this;
}

DefStatementASTContext.prototype = Object.create(DefStatementContext.prototype);
DefStatementASTContext.prototype.constructor = DefStatementASTContext;

Parser2.DefStatementASTContext = DefStatementASTContext;

DefStatementASTContext.prototype.DEF = function() {
    return this.getToken(Parser2.DEF, 0);
};

DefStatementASTContext.prototype.IDENTIFIER = function() {
    return this.getToken(Parser2.IDENTIFIER, 0);
};

DefStatementASTContext.prototype.PIZQ = function() {
    return this.getToken(Parser2.PIZQ, 0);
};

DefStatementASTContext.prototype.argList = function() {
    return this.getTypedRuleContext(ArgListContext,0);
};

DefStatementASTContext.prototype.PDER = function() {
    return this.getToken(Parser2.PDER, 0);
};

DefStatementASTContext.prototype.DOSPUN = function() {
    return this.getToken(Parser2.DOSPUN, 0);
};

DefStatementASTContext.prototype.sequence = function() {
    return this.getTypedRuleContext(SequenceContext,0);
};
DefStatementASTContext.prototype.enterRule = function(listener) {
    if(listener instanceof Parser2Listener ) {
        listener.enterDefStatementAST(this);
	}
};

DefStatementASTContext.prototype.exitRule = function(listener) {
    if(listener instanceof Parser2Listener ) {
        listener.exitDefStatementAST(this);
	}
};

DefStatementASTContext.prototype.accept = function(visitor) {
    if ( visitor instanceof Parser2Visitor ) {
        return visitor.visitDefStatementAST(this);
    } else {
        return visitor.visitChildren(this);
    }
};



Parser2.DefStatementContext = DefStatementContext;

Parser2.prototype.defStatement = function() {

    var localctx = new DefStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, Parser2.RULE_defStatement);
    try {
        localctx = new DefStatementASTContext(this, localctx);
        this.enterOuterAlt(localctx, 1);
        this.state = 89;
        this.match(Parser2.DEF);
        this.state = 90;
        this.match(Parser2.IDENTIFIER);
        this.state = 91;
        this.match(Parser2.PIZQ);
        this.state = 92;
        this.argList();
        this.state = 93;
        this.match(Parser2.PDER);
        this.state = 94;
        this.match(Parser2.DOSPUN);
        this.state = 95;
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


 
ArgListContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function ArgListASTContext(parser, ctx) {
	ArgListContext.call(this, parser);
    ArgListContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ArgListASTContext.prototype = Object.create(ArgListContext.prototype);
ArgListASTContext.prototype.constructor = ArgListASTContext;

Parser2.ArgListASTContext = ArgListASTContext;

ArgListASTContext.prototype.IDENTIFIER = function() {
    return this.getToken(Parser2.IDENTIFIER, 0);
};

ArgListASTContext.prototype.moreArgs = function() {
    return this.getTypedRuleContext(MoreArgsContext,0);
};
ArgListASTContext.prototype.enterRule = function(listener) {
    if(listener instanceof Parser2Listener ) {
        listener.enterArgListAST(this);
	}
};

ArgListASTContext.prototype.exitRule = function(listener) {
    if(listener instanceof Parser2Listener ) {
        listener.exitArgListAST(this);
	}
};

ArgListASTContext.prototype.accept = function(visitor) {
    if ( visitor instanceof Parser2Visitor ) {
        return visitor.visitArgListAST(this);
    } else {
        return visitor.visitChildren(this);
    }
};



Parser2.ArgListContext = ArgListContext;

Parser2.prototype.argList = function() {

    var localctx = new ArgListContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, Parser2.RULE_argList);
    try {
        localctx = new ArgListASTContext(this, localctx);
        this.enterOuterAlt(localctx, 1);
        this.state = 97;
        this.match(Parser2.IDENTIFIER);
        this.state = 98;
        this.moreArgs();
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


 
MoreArgsContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function MoreArgsASTContext(parser, ctx) {
	MoreArgsContext.call(this, parser);
    MoreArgsContext.prototype.copyFrom.call(this, ctx);
    return this;
}

MoreArgsASTContext.prototype = Object.create(MoreArgsContext.prototype);
MoreArgsASTContext.prototype.constructor = MoreArgsASTContext;

Parser2.MoreArgsASTContext = MoreArgsASTContext;

MoreArgsASTContext.prototype.COMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(Parser2.COMA);
    } else {
        return this.getToken(Parser2.COMA, i);
    }
};


MoreArgsASTContext.prototype.IDENTIFIER = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(Parser2.IDENTIFIER);
    } else {
        return this.getToken(Parser2.IDENTIFIER, i);
    }
};

MoreArgsASTContext.prototype.enterRule = function(listener) {
    if(listener instanceof Parser2Listener ) {
        listener.enterMoreArgsAST(this);
	}
};

MoreArgsASTContext.prototype.exitRule = function(listener) {
    if(listener instanceof Parser2Listener ) {
        listener.exitMoreArgsAST(this);
	}
};

MoreArgsASTContext.prototype.accept = function(visitor) {
    if ( visitor instanceof Parser2Visitor ) {
        return visitor.visitMoreArgsAST(this);
    } else {
        return visitor.visitChildren(this);
    }
};



Parser2.MoreArgsContext = MoreArgsContext;

Parser2.prototype.moreArgs = function() {

    var localctx = new MoreArgsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, Parser2.RULE_moreArgs);
    var _la = 0; // Token type
    try {
        localctx = new MoreArgsASTContext(this, localctx);
        this.enterOuterAlt(localctx, 1);
        this.state = 104;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===Parser2.COMA) {
            this.state = 100;
            this.match(Parser2.COMA);
            this.state = 101;
            this.match(Parser2.IDENTIFIER);
            this.state = 106;
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


 
IfStatementContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function IfStatementASTContext(parser, ctx) {
	IfStatementContext.call(this, parser);
    IfStatementContext.prototype.copyFrom.call(this, ctx);
    return this;
}

IfStatementASTContext.prototype = Object.create(IfStatementContext.prototype);
IfStatementASTContext.prototype.constructor = IfStatementASTContext;

Parser2.IfStatementASTContext = IfStatementASTContext;

IfStatementASTContext.prototype.IF = function() {
    return this.getToken(Parser2.IF, 0);
};

IfStatementASTContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

IfStatementASTContext.prototype.DOSPUN = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(Parser2.DOSPUN);
    } else {
        return this.getToken(Parser2.DOSPUN, i);
    }
};


IfStatementASTContext.prototype.sequence = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(SequenceContext);
    } else {
        return this.getTypedRuleContext(SequenceContext,i);
    }
};

IfStatementASTContext.prototype.ELSE = function() {
    return this.getToken(Parser2.ELSE, 0);
};
IfStatementASTContext.prototype.enterRule = function(listener) {
    if(listener instanceof Parser2Listener ) {
        listener.enterIfStatementAST(this);
	}
};

IfStatementASTContext.prototype.exitRule = function(listener) {
    if(listener instanceof Parser2Listener ) {
        listener.exitIfStatementAST(this);
	}
};

IfStatementASTContext.prototype.accept = function(visitor) {
    if ( visitor instanceof Parser2Visitor ) {
        return visitor.visitIfStatementAST(this);
    } else {
        return visitor.visitChildren(this);
    }
};



Parser2.IfStatementContext = IfStatementContext;

Parser2.prototype.ifStatement = function() {

    var localctx = new IfStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, Parser2.RULE_ifStatement);
    try {
        localctx = new IfStatementASTContext(this, localctx);
        this.enterOuterAlt(localctx, 1);
        this.state = 107;
        this.match(Parser2.IF);
        this.state = 108;
        this.expression();
        this.state = 109;
        this.match(Parser2.DOSPUN);
        this.state = 110;
        this.sequence();
        this.state = 111;
        this.match(Parser2.ELSE);
        this.state = 112;
        this.match(Parser2.DOSPUN);
        this.state = 113;
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


 
WhileStatementContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function WhileStatementASTContext(parser, ctx) {
	WhileStatementContext.call(this, parser);
    WhileStatementContext.prototype.copyFrom.call(this, ctx);
    return this;
}

WhileStatementASTContext.prototype = Object.create(WhileStatementContext.prototype);
WhileStatementASTContext.prototype.constructor = WhileStatementASTContext;

Parser2.WhileStatementASTContext = WhileStatementASTContext;

WhileStatementASTContext.prototype.WHILE = function() {
    return this.getToken(Parser2.WHILE, 0);
};

WhileStatementASTContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

WhileStatementASTContext.prototype.DOSPUN = function() {
    return this.getToken(Parser2.DOSPUN, 0);
};

WhileStatementASTContext.prototype.sequence = function() {
    return this.getTypedRuleContext(SequenceContext,0);
};
WhileStatementASTContext.prototype.enterRule = function(listener) {
    if(listener instanceof Parser2Listener ) {
        listener.enterWhileStatementAST(this);
	}
};

WhileStatementASTContext.prototype.exitRule = function(listener) {
    if(listener instanceof Parser2Listener ) {
        listener.exitWhileStatementAST(this);
	}
};

WhileStatementASTContext.prototype.accept = function(visitor) {
    if ( visitor instanceof Parser2Visitor ) {
        return visitor.visitWhileStatementAST(this);
    } else {
        return visitor.visitChildren(this);
    }
};



Parser2.WhileStatementContext = WhileStatementContext;

Parser2.prototype.whileStatement = function() {

    var localctx = new WhileStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, Parser2.RULE_whileStatement);
    try {
        localctx = new WhileStatementASTContext(this, localctx);
        this.enterOuterAlt(localctx, 1);
        this.state = 115;
        this.match(Parser2.WHILE);
        this.state = 116;
        this.expression();
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


 
ForStatementContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function ForStatementASTContext(parser, ctx) {
	ForStatementContext.call(this, parser);
    ForStatementContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ForStatementASTContext.prototype = Object.create(ForStatementContext.prototype);
ForStatementASTContext.prototype.constructor = ForStatementASTContext;

Parser2.ForStatementASTContext = ForStatementASTContext;

ForStatementASTContext.prototype.FOR = function() {
    return this.getToken(Parser2.FOR, 0);
};

ForStatementASTContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

ForStatementASTContext.prototype.IN = function() {
    return this.getToken(Parser2.IN, 0);
};

ForStatementASTContext.prototype.expressionList = function() {
    return this.getTypedRuleContext(ExpressionListContext,0);
};

ForStatementASTContext.prototype.DOSPUN = function() {
    return this.getToken(Parser2.DOSPUN, 0);
};

ForStatementASTContext.prototype.sequence = function() {
    return this.getTypedRuleContext(SequenceContext,0);
};
ForStatementASTContext.prototype.enterRule = function(listener) {
    if(listener instanceof Parser2Listener ) {
        listener.enterForStatementAST(this);
	}
};

ForStatementASTContext.prototype.exitRule = function(listener) {
    if(listener instanceof Parser2Listener ) {
        listener.exitForStatementAST(this);
	}
};

ForStatementASTContext.prototype.accept = function(visitor) {
    if ( visitor instanceof Parser2Visitor ) {
        return visitor.visitForStatementAST(this);
    } else {
        return visitor.visitChildren(this);
    }
};



Parser2.ForStatementContext = ForStatementContext;

Parser2.prototype.forStatement = function() {

    var localctx = new ForStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, Parser2.RULE_forStatement);
    try {
        localctx = new ForStatementASTContext(this, localctx);
        this.enterOuterAlt(localctx, 1);
        this.state = 120;
        this.match(Parser2.FOR);
        this.state = 121;
        this.expression();
        this.state = 122;
        this.match(Parser2.IN);
        this.state = 123;
        this.expressionList();
        this.state = 124;
        this.match(Parser2.DOSPUN);
        this.state = 125;
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


 
ReturnStatementContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function ReturnStatementASTContext(parser, ctx) {
	ReturnStatementContext.call(this, parser);
    ReturnStatementContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ReturnStatementASTContext.prototype = Object.create(ReturnStatementContext.prototype);
ReturnStatementASTContext.prototype.constructor = ReturnStatementASTContext;

Parser2.ReturnStatementASTContext = ReturnStatementASTContext;

ReturnStatementASTContext.prototype.RETURN = function() {
    return this.getToken(Parser2.RETURN, 0);
};

ReturnStatementASTContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

ReturnStatementASTContext.prototype.NEWLINE = function() {
    return this.getToken(Parser2.NEWLINE, 0);
};
ReturnStatementASTContext.prototype.enterRule = function(listener) {
    if(listener instanceof Parser2Listener ) {
        listener.enterReturnStatementAST(this);
	}
};

ReturnStatementASTContext.prototype.exitRule = function(listener) {
    if(listener instanceof Parser2Listener ) {
        listener.exitReturnStatementAST(this);
	}
};

ReturnStatementASTContext.prototype.accept = function(visitor) {
    if ( visitor instanceof Parser2Visitor ) {
        return visitor.visitReturnStatementAST(this);
    } else {
        return visitor.visitChildren(this);
    }
};



Parser2.ReturnStatementContext = ReturnStatementContext;

Parser2.prototype.returnStatement = function() {

    var localctx = new ReturnStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, Parser2.RULE_returnStatement);
    try {
        localctx = new ReturnStatementASTContext(this, localctx);
        this.enterOuterAlt(localctx, 1);
        this.state = 127;
        this.match(Parser2.RETURN);
        this.state = 128;
        this.expression();
        this.state = 129;
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


 
PrintStatementContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function PrintStatementASTContext(parser, ctx) {
	PrintStatementContext.call(this, parser);
    PrintStatementContext.prototype.copyFrom.call(this, ctx);
    return this;
}

PrintStatementASTContext.prototype = Object.create(PrintStatementContext.prototype);
PrintStatementASTContext.prototype.constructor = PrintStatementASTContext;

Parser2.PrintStatementASTContext = PrintStatementASTContext;

PrintStatementASTContext.prototype.PRINT = function() {
    return this.getToken(Parser2.PRINT, 0);
};

PrintStatementASTContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

PrintStatementASTContext.prototype.NEWLINE = function() {
    return this.getToken(Parser2.NEWLINE, 0);
};
PrintStatementASTContext.prototype.enterRule = function(listener) {
    if(listener instanceof Parser2Listener ) {
        listener.enterPrintStatementAST(this);
	}
};

PrintStatementASTContext.prototype.exitRule = function(listener) {
    if(listener instanceof Parser2Listener ) {
        listener.exitPrintStatementAST(this);
	}
};

PrintStatementASTContext.prototype.accept = function(visitor) {
    if ( visitor instanceof Parser2Visitor ) {
        return visitor.visitPrintStatementAST(this);
    } else {
        return visitor.visitChildren(this);
    }
};



Parser2.PrintStatementContext = PrintStatementContext;

Parser2.prototype.printStatement = function() {

    var localctx = new PrintStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, Parser2.RULE_printStatement);
    try {
        localctx = new PrintStatementASTContext(this, localctx);
        this.enterOuterAlt(localctx, 1);
        this.state = 131;
        this.match(Parser2.PRINT);
        this.state = 132;
        this.expression();
        this.state = 133;
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


 
AssignStatementContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function AssignStatementASTContext(parser, ctx) {
	AssignStatementContext.call(this, parser);
    AssignStatementContext.prototype.copyFrom.call(this, ctx);
    return this;
}

AssignStatementASTContext.prototype = Object.create(AssignStatementContext.prototype);
AssignStatementASTContext.prototype.constructor = AssignStatementASTContext;

Parser2.AssignStatementASTContext = AssignStatementASTContext;

AssignStatementASTContext.prototype.IDENTIFIER = function() {
    return this.getToken(Parser2.IDENTIFIER, 0);
};

AssignStatementASTContext.prototype.ASSIGN = function() {
    return this.getToken(Parser2.ASSIGN, 0);
};

AssignStatementASTContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

AssignStatementASTContext.prototype.NEWLINE = function() {
    return this.getToken(Parser2.NEWLINE, 0);
};
AssignStatementASTContext.prototype.enterRule = function(listener) {
    if(listener instanceof Parser2Listener ) {
        listener.enterAssignStatementAST(this);
	}
};

AssignStatementASTContext.prototype.exitRule = function(listener) {
    if(listener instanceof Parser2Listener ) {
        listener.exitAssignStatementAST(this);
	}
};

AssignStatementASTContext.prototype.accept = function(visitor) {
    if ( visitor instanceof Parser2Visitor ) {
        return visitor.visitAssignStatementAST(this);
    } else {
        return visitor.visitChildren(this);
    }
};



Parser2.AssignStatementContext = AssignStatementContext;

Parser2.prototype.assignStatement = function() {

    var localctx = new AssignStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, Parser2.RULE_assignStatement);
    try {
        localctx = new AssignStatementASTContext(this, localctx);
        this.enterOuterAlt(localctx, 1);
        this.state = 135;
        this.match(Parser2.IDENTIFIER);
        this.state = 136;
        this.match(Parser2.ASSIGN);
        this.state = 137;
        this.expression();
        this.state = 138;
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


 
FunctionCallStatementContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function FunctionCallStatementASTContext(parser, ctx) {
	FunctionCallStatementContext.call(this, parser);
    FunctionCallStatementContext.prototype.copyFrom.call(this, ctx);
    return this;
}

FunctionCallStatementASTContext.prototype = Object.create(FunctionCallStatementContext.prototype);
FunctionCallStatementASTContext.prototype.constructor = FunctionCallStatementASTContext;

Parser2.FunctionCallStatementASTContext = FunctionCallStatementASTContext;

FunctionCallStatementASTContext.prototype.primitiveExpression = function() {
    return this.getTypedRuleContext(PrimitiveExpressionContext,0);
};

FunctionCallStatementASTContext.prototype.PIZQ = function() {
    return this.getToken(Parser2.PIZQ, 0);
};

FunctionCallStatementASTContext.prototype.expressionList = function() {
    return this.getTypedRuleContext(ExpressionListContext,0);
};

FunctionCallStatementASTContext.prototype.PDER = function() {
    return this.getToken(Parser2.PDER, 0);
};

FunctionCallStatementASTContext.prototype.NEWLINE = function() {
    return this.getToken(Parser2.NEWLINE, 0);
};
FunctionCallStatementASTContext.prototype.enterRule = function(listener) {
    if(listener instanceof Parser2Listener ) {
        listener.enterFunctionCallStatementAST(this);
	}
};

FunctionCallStatementASTContext.prototype.exitRule = function(listener) {
    if(listener instanceof Parser2Listener ) {
        listener.exitFunctionCallStatementAST(this);
	}
};

FunctionCallStatementASTContext.prototype.accept = function(visitor) {
    if ( visitor instanceof Parser2Visitor ) {
        return visitor.visitFunctionCallStatementAST(this);
    } else {
        return visitor.visitChildren(this);
    }
};



Parser2.FunctionCallStatementContext = FunctionCallStatementContext;

Parser2.prototype.functionCallStatement = function() {

    var localctx = new FunctionCallStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, Parser2.RULE_functionCallStatement);
    try {
        localctx = new FunctionCallStatementASTContext(this, localctx);
        this.enterOuterAlt(localctx, 1);
        this.state = 140;
        this.primitiveExpression();
        this.state = 141;
        this.match(Parser2.PIZQ);
        this.state = 142;
        this.expressionList();
        this.state = 143;
        this.match(Parser2.PDER);
        this.state = 144;
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


 
ExpressionStatementContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function ExpressionStatementASTContext(parser, ctx) {
	ExpressionStatementContext.call(this, parser);
    ExpressionStatementContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ExpressionStatementASTContext.prototype = Object.create(ExpressionStatementContext.prototype);
ExpressionStatementASTContext.prototype.constructor = ExpressionStatementASTContext;

Parser2.ExpressionStatementASTContext = ExpressionStatementASTContext;

ExpressionStatementASTContext.prototype.expressionList = function() {
    return this.getTypedRuleContext(ExpressionListContext,0);
};

ExpressionStatementASTContext.prototype.NEWLINE = function() {
    return this.getToken(Parser2.NEWLINE, 0);
};
ExpressionStatementASTContext.prototype.enterRule = function(listener) {
    if(listener instanceof Parser2Listener ) {
        listener.enterExpressionStatementAST(this);
	}
};

ExpressionStatementASTContext.prototype.exitRule = function(listener) {
    if(listener instanceof Parser2Listener ) {
        listener.exitExpressionStatementAST(this);
	}
};

ExpressionStatementASTContext.prototype.accept = function(visitor) {
    if ( visitor instanceof Parser2Visitor ) {
        return visitor.visitExpressionStatementAST(this);
    } else {
        return visitor.visitChildren(this);
    }
};



Parser2.ExpressionStatementContext = ExpressionStatementContext;

Parser2.prototype.expressionStatement = function() {

    var localctx = new ExpressionStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, Parser2.RULE_expressionStatement);
    try {
        localctx = new ExpressionStatementASTContext(this, localctx);
        this.enterOuterAlt(localctx, 1);
        this.state = 146;
        this.expressionList();
        this.state = 147;
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


 
SequenceContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function SequenceASTContext(parser, ctx) {
	SequenceContext.call(this, parser);
    SequenceContext.prototype.copyFrom.call(this, ctx);
    return this;
}

SequenceASTContext.prototype = Object.create(SequenceContext.prototype);
SequenceASTContext.prototype.constructor = SequenceASTContext;

Parser2.SequenceASTContext = SequenceASTContext;

SequenceASTContext.prototype.NEWLINE = function() {
    return this.getToken(Parser2.NEWLINE, 0);
};

SequenceASTContext.prototype.INDENT = function() {
    return this.getToken(Parser2.INDENT, 0);
};

SequenceASTContext.prototype.DEDENT = function() {
    return this.getToken(Parser2.DEDENT, 0);
};

SequenceASTContext.prototype.statement = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(StatementContext);
    } else {
        return this.getTypedRuleContext(StatementContext,i);
    }
};
SequenceASTContext.prototype.enterRule = function(listener) {
    if(listener instanceof Parser2Listener ) {
        listener.enterSequenceAST(this);
	}
};

SequenceASTContext.prototype.exitRule = function(listener) {
    if(listener instanceof Parser2Listener ) {
        listener.exitSequenceAST(this);
	}
};

SequenceASTContext.prototype.accept = function(visitor) {
    if ( visitor instanceof Parser2Visitor ) {
        return visitor.visitSequenceAST(this);
    } else {
        return visitor.visitChildren(this);
    }
};



Parser2.SequenceContext = SequenceContext;

Parser2.prototype.sequence = function() {

    var localctx = new SequenceContext(this, this._ctx, this.state);
    this.enterRule(localctx, 28, Parser2.RULE_sequence);
    var _la = 0; // Token type
    try {
        localctx = new SequenceASTContext(this, localctx);
        this.enterOuterAlt(localctx, 1);
        this.state = 149;
        this.match(Parser2.NEWLINE);
        this.state = 150;
        this.match(Parser2.INDENT);
        this.state = 152; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 151;
            this.statement();
            this.state = 154; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << Parser2.DEF) | (1 << Parser2.LEN) | (1 << Parser2.IF) | (1 << Parser2.FOR) | (1 << Parser2.WHILE) | (1 << Parser2.RETURN) | (1 << Parser2.PRINT) | (1 << Parser2.PIZQ) | (1 << Parser2.CIZQ) | (1 << Parser2.NEWLINE) | (1 << Parser2.NUM) | (1 << Parser2.IDENTIFIER) | (1 << Parser2.STRING))) !== 0));
        this.state = 156;
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


 
ExpressionContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function ExpressionASTContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ExpressionASTContext.prototype = Object.create(ExpressionContext.prototype);
ExpressionASTContext.prototype.constructor = ExpressionASTContext;

Parser2.ExpressionASTContext = ExpressionASTContext;

ExpressionASTContext.prototype.additionExpression = function() {
    return this.getTypedRuleContext(AdditionExpressionContext,0);
};

ExpressionASTContext.prototype.comparison = function() {
    return this.getTypedRuleContext(ComparisonContext,0);
};
ExpressionASTContext.prototype.enterRule = function(listener) {
    if(listener instanceof Parser2Listener ) {
        listener.enterExpressionAST(this);
	}
};

ExpressionASTContext.prototype.exitRule = function(listener) {
    if(listener instanceof Parser2Listener ) {
        listener.exitExpressionAST(this);
	}
};

ExpressionASTContext.prototype.accept = function(visitor) {
    if ( visitor instanceof Parser2Visitor ) {
        return visitor.visitExpressionAST(this);
    } else {
        return visitor.visitChildren(this);
    }
};



Parser2.ExpressionContext = ExpressionContext;

Parser2.prototype.expression = function() {

    var localctx = new ExpressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 30, Parser2.RULE_expression);
    try {
        localctx = new ExpressionASTContext(this, localctx);
        this.enterOuterAlt(localctx, 1);
        this.state = 158;
        this.additionExpression();
        this.state = 159;
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


 
ComparisonContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function ComparisonASTContext(parser, ctx) {
	ComparisonContext.call(this, parser);
    ComparisonContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ComparisonASTContext.prototype = Object.create(ComparisonContext.prototype);
ComparisonASTContext.prototype.constructor = ComparisonASTContext;

Parser2.ComparisonASTContext = ComparisonASTContext;

ComparisonASTContext.prototype.additionExpression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(AdditionExpressionContext);
    } else {
        return this.getTypedRuleContext(AdditionExpressionContext,i);
    }
};

ComparisonASTContext.prototype.MENOR = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(Parser2.MENOR);
    } else {
        return this.getToken(Parser2.MENOR, i);
    }
};


ComparisonASTContext.prototype.MAYOR = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(Parser2.MAYOR);
    } else {
        return this.getToken(Parser2.MAYOR, i);
    }
};


ComparisonASTContext.prototype.MENORIGUAL = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(Parser2.MENORIGUAL);
    } else {
        return this.getToken(Parser2.MENORIGUAL, i);
    }
};


ComparisonASTContext.prototype.MAYORIGUAL = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(Parser2.MAYORIGUAL);
    } else {
        return this.getToken(Parser2.MAYORIGUAL, i);
    }
};


ComparisonASTContext.prototype.COMP = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(Parser2.COMP);
    } else {
        return this.getToken(Parser2.COMP, i);
    }
};

ComparisonASTContext.prototype.enterRule = function(listener) {
    if(listener instanceof Parser2Listener ) {
        listener.enterComparisonAST(this);
	}
};

ComparisonASTContext.prototype.exitRule = function(listener) {
    if(listener instanceof Parser2Listener ) {
        listener.exitComparisonAST(this);
	}
};

ComparisonASTContext.prototype.accept = function(visitor) {
    if ( visitor instanceof Parser2Visitor ) {
        return visitor.visitComparisonAST(this);
    } else {
        return visitor.visitChildren(this);
    }
};



Parser2.ComparisonContext = ComparisonContext;

Parser2.prototype.comparison = function() {

    var localctx = new ComparisonContext(this, this._ctx, this.state);
    this.enterRule(localctx, 32, Parser2.RULE_comparison);
    var _la = 0; // Token type
    try {
        localctx = new ComparisonASTContext(this, localctx);
        this.enterOuterAlt(localctx, 1);
        this.state = 165;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << Parser2.COMP) | (1 << Parser2.MAYOR) | (1 << Parser2.MENOR) | (1 << Parser2.MENORIGUAL) | (1 << Parser2.MAYORIGUAL))) !== 0)) {
            this.state = 161;
            _la = this._input.LA(1);
            if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << Parser2.COMP) | (1 << Parser2.MAYOR) | (1 << Parser2.MENOR) | (1 << Parser2.MENORIGUAL) | (1 << Parser2.MAYORIGUAL))) !== 0))) {
            this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            this.state = 162;
            this.additionExpression();
            this.state = 167;
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


 
AdditionExpressionContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function AdditionExpressionASTContext(parser, ctx) {
	AdditionExpressionContext.call(this, parser);
    AdditionExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

AdditionExpressionASTContext.prototype = Object.create(AdditionExpressionContext.prototype);
AdditionExpressionASTContext.prototype.constructor = AdditionExpressionASTContext;

Parser2.AdditionExpressionASTContext = AdditionExpressionASTContext;

AdditionExpressionASTContext.prototype.multiplicationExpression = function() {
    return this.getTypedRuleContext(MultiplicationExpressionContext,0);
};

AdditionExpressionASTContext.prototype.additionFactor = function() {
    return this.getTypedRuleContext(AdditionFactorContext,0);
};
AdditionExpressionASTContext.prototype.enterRule = function(listener) {
    if(listener instanceof Parser2Listener ) {
        listener.enterAdditionExpressionAST(this);
	}
};

AdditionExpressionASTContext.prototype.exitRule = function(listener) {
    if(listener instanceof Parser2Listener ) {
        listener.exitAdditionExpressionAST(this);
	}
};

AdditionExpressionASTContext.prototype.accept = function(visitor) {
    if ( visitor instanceof Parser2Visitor ) {
        return visitor.visitAdditionExpressionAST(this);
    } else {
        return visitor.visitChildren(this);
    }
};



Parser2.AdditionExpressionContext = AdditionExpressionContext;

Parser2.prototype.additionExpression = function() {

    var localctx = new AdditionExpressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 34, Parser2.RULE_additionExpression);
    try {
        localctx = new AdditionExpressionASTContext(this, localctx);
        this.enterOuterAlt(localctx, 1);
        this.state = 168;
        this.multiplicationExpression();
        this.state = 169;
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


 
AdditionFactorContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function AdditionFactorASTContext(parser, ctx) {
	AdditionFactorContext.call(this, parser);
    AdditionFactorContext.prototype.copyFrom.call(this, ctx);
    return this;
}

AdditionFactorASTContext.prototype = Object.create(AdditionFactorContext.prototype);
AdditionFactorASTContext.prototype.constructor = AdditionFactorASTContext;

Parser2.AdditionFactorASTContext = AdditionFactorASTContext;

AdditionFactorASTContext.prototype.multiplicationExpression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(MultiplicationExpressionContext);
    } else {
        return this.getTypedRuleContext(MultiplicationExpressionContext,i);
    }
};

AdditionFactorASTContext.prototype.SUMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(Parser2.SUMA);
    } else {
        return this.getToken(Parser2.SUMA, i);
    }
};


AdditionFactorASTContext.prototype.SUB = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(Parser2.SUB);
    } else {
        return this.getToken(Parser2.SUB, i);
    }
};

AdditionFactorASTContext.prototype.enterRule = function(listener) {
    if(listener instanceof Parser2Listener ) {
        listener.enterAdditionFactorAST(this);
	}
};

AdditionFactorASTContext.prototype.exitRule = function(listener) {
    if(listener instanceof Parser2Listener ) {
        listener.exitAdditionFactorAST(this);
	}
};

AdditionFactorASTContext.prototype.accept = function(visitor) {
    if ( visitor instanceof Parser2Visitor ) {
        return visitor.visitAdditionFactorAST(this);
    } else {
        return visitor.visitChildren(this);
    }
};



Parser2.AdditionFactorContext = AdditionFactorContext;

Parser2.prototype.additionFactor = function() {

    var localctx = new AdditionFactorContext(this, this._ctx, this.state);
    this.enterRule(localctx, 36, Parser2.RULE_additionFactor);
    var _la = 0; // Token type
    try {
        localctx = new AdditionFactorASTContext(this, localctx);
        this.enterOuterAlt(localctx, 1);
        this.state = 175;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===Parser2.SUMA || _la===Parser2.SUB) {
            this.state = 171;
            _la = this._input.LA(1);
            if(!(_la===Parser2.SUMA || _la===Parser2.SUB)) {
            this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            this.state = 172;
            this.multiplicationExpression();
            this.state = 177;
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


 
MultiplicationExpressionContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function MultiplicationExpressionASTContext(parser, ctx) {
	MultiplicationExpressionContext.call(this, parser);
    MultiplicationExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

MultiplicationExpressionASTContext.prototype = Object.create(MultiplicationExpressionContext.prototype);
MultiplicationExpressionASTContext.prototype.constructor = MultiplicationExpressionASTContext;

Parser2.MultiplicationExpressionASTContext = MultiplicationExpressionASTContext;

MultiplicationExpressionASTContext.prototype.elementExpression = function() {
    return this.getTypedRuleContext(ElementExpressionContext,0);
};

MultiplicationExpressionASTContext.prototype.multiplicationFactor = function() {
    return this.getTypedRuleContext(MultiplicationFactorContext,0);
};
MultiplicationExpressionASTContext.prototype.enterRule = function(listener) {
    if(listener instanceof Parser2Listener ) {
        listener.enterMultiplicationExpressionAST(this);
	}
};

MultiplicationExpressionASTContext.prototype.exitRule = function(listener) {
    if(listener instanceof Parser2Listener ) {
        listener.exitMultiplicationExpressionAST(this);
	}
};

MultiplicationExpressionASTContext.prototype.accept = function(visitor) {
    if ( visitor instanceof Parser2Visitor ) {
        return visitor.visitMultiplicationExpressionAST(this);
    } else {
        return visitor.visitChildren(this);
    }
};



Parser2.MultiplicationExpressionContext = MultiplicationExpressionContext;

Parser2.prototype.multiplicationExpression = function() {

    var localctx = new MultiplicationExpressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 38, Parser2.RULE_multiplicationExpression);
    try {
        localctx = new MultiplicationExpressionASTContext(this, localctx);
        this.enterOuterAlt(localctx, 1);
        this.state = 178;
        this.elementExpression();
        this.state = 179;
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


 
MultiplicationFactorContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function MultiplicationFactorASTContext(parser, ctx) {
	MultiplicationFactorContext.call(this, parser);
    MultiplicationFactorContext.prototype.copyFrom.call(this, ctx);
    return this;
}

MultiplicationFactorASTContext.prototype = Object.create(MultiplicationFactorContext.prototype);
MultiplicationFactorASTContext.prototype.constructor = MultiplicationFactorASTContext;

Parser2.MultiplicationFactorASTContext = MultiplicationFactorASTContext;

MultiplicationFactorASTContext.prototype.elementExpression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ElementExpressionContext);
    } else {
        return this.getTypedRuleContext(ElementExpressionContext,i);
    }
};

MultiplicationFactorASTContext.prototype.MUL = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(Parser2.MUL);
    } else {
        return this.getToken(Parser2.MUL, i);
    }
};


MultiplicationFactorASTContext.prototype.DIV = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(Parser2.DIV);
    } else {
        return this.getToken(Parser2.DIV, i);
    }
};

MultiplicationFactorASTContext.prototype.enterRule = function(listener) {
    if(listener instanceof Parser2Listener ) {
        listener.enterMultiplicationFactorAST(this);
	}
};

MultiplicationFactorASTContext.prototype.exitRule = function(listener) {
    if(listener instanceof Parser2Listener ) {
        listener.exitMultiplicationFactorAST(this);
	}
};

MultiplicationFactorASTContext.prototype.accept = function(visitor) {
    if ( visitor instanceof Parser2Visitor ) {
        return visitor.visitMultiplicationFactorAST(this);
    } else {
        return visitor.visitChildren(this);
    }
};



Parser2.MultiplicationFactorContext = MultiplicationFactorContext;

Parser2.prototype.multiplicationFactor = function() {

    var localctx = new MultiplicationFactorContext(this, this._ctx, this.state);
    this.enterRule(localctx, 40, Parser2.RULE_multiplicationFactor);
    var _la = 0; // Token type
    try {
        localctx = new MultiplicationFactorASTContext(this, localctx);
        this.enterOuterAlt(localctx, 1);
        this.state = 185;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===Parser2.MUL || _la===Parser2.DIV) {
            this.state = 181;
            _la = this._input.LA(1);
            if(!(_la===Parser2.MUL || _la===Parser2.DIV)) {
            this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            this.state = 182;
            this.elementExpression();
            this.state = 187;
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


 
ElementExpressionContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function ElementExpressionASTContext(parser, ctx) {
	ElementExpressionContext.call(this, parser);
    ElementExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ElementExpressionASTContext.prototype = Object.create(ElementExpressionContext.prototype);
ElementExpressionASTContext.prototype.constructor = ElementExpressionASTContext;

Parser2.ElementExpressionASTContext = ElementExpressionASTContext;

ElementExpressionASTContext.prototype.primitiveExpression = function() {
    return this.getTypedRuleContext(PrimitiveExpressionContext,0);
};

ElementExpressionASTContext.prototype.elementAccess = function() {
    return this.getTypedRuleContext(ElementAccessContext,0);
};
ElementExpressionASTContext.prototype.enterRule = function(listener) {
    if(listener instanceof Parser2Listener ) {
        listener.enterElementExpressionAST(this);
	}
};

ElementExpressionASTContext.prototype.exitRule = function(listener) {
    if(listener instanceof Parser2Listener ) {
        listener.exitElementExpressionAST(this);
	}
};

ElementExpressionASTContext.prototype.accept = function(visitor) {
    if ( visitor instanceof Parser2Visitor ) {
        return visitor.visitElementExpressionAST(this);
    } else {
        return visitor.visitChildren(this);
    }
};



Parser2.ElementExpressionContext = ElementExpressionContext;

Parser2.prototype.elementExpression = function() {

    var localctx = new ElementExpressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 42, Parser2.RULE_elementExpression);
    try {
        localctx = new ElementExpressionASTContext(this, localctx);
        this.enterOuterAlt(localctx, 1);
        this.state = 188;
        this.primitiveExpression();
        this.state = 189;
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


 
ElementAccessContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function ElementAccessASTContext(parser, ctx) {
	ElementAccessContext.call(this, parser);
    ElementAccessContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ElementAccessASTContext.prototype = Object.create(ElementAccessContext.prototype);
ElementAccessASTContext.prototype.constructor = ElementAccessASTContext;

Parser2.ElementAccessASTContext = ElementAccessASTContext;

ElementAccessASTContext.prototype.CIZQ = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(Parser2.CIZQ);
    } else {
        return this.getToken(Parser2.CIZQ, i);
    }
};


ElementAccessASTContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

ElementAccessASTContext.prototype.CDER = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(Parser2.CDER);
    } else {
        return this.getToken(Parser2.CDER, i);
    }
};

ElementAccessASTContext.prototype.enterRule = function(listener) {
    if(listener instanceof Parser2Listener ) {
        listener.enterElementAccessAST(this);
	}
};

ElementAccessASTContext.prototype.exitRule = function(listener) {
    if(listener instanceof Parser2Listener ) {
        listener.exitElementAccessAST(this);
	}
};

ElementAccessASTContext.prototype.accept = function(visitor) {
    if ( visitor instanceof Parser2Visitor ) {
        return visitor.visitElementAccessAST(this);
    } else {
        return visitor.visitChildren(this);
    }
};



Parser2.ElementAccessContext = ElementAccessContext;

Parser2.prototype.elementAccess = function() {

    var localctx = new ElementAccessContext(this, this._ctx, this.state);
    this.enterRule(localctx, 44, Parser2.RULE_elementAccess);
    var _la = 0; // Token type
    try {
        localctx = new ElementAccessASTContext(this, localctx);
        this.enterOuterAlt(localctx, 1);
        this.state = 197;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===Parser2.CIZQ) {
            this.state = 191;
            this.match(Parser2.CIZQ);
            this.state = 192;
            this.expression();
            this.state = 193;
            this.match(Parser2.CDER);
            this.state = 199;
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


 
FunctionCallExpressionContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function FunctionCallExpressionASTContext(parser, ctx) {
	FunctionCallExpressionContext.call(this, parser);
    FunctionCallExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

FunctionCallExpressionASTContext.prototype = Object.create(FunctionCallExpressionContext.prototype);
FunctionCallExpressionASTContext.prototype.constructor = FunctionCallExpressionASTContext;

Parser2.FunctionCallExpressionASTContext = FunctionCallExpressionASTContext;

FunctionCallExpressionASTContext.prototype.IDENTIFIER = function() {
    return this.getToken(Parser2.IDENTIFIER, 0);
};

FunctionCallExpressionASTContext.prototype.PIZQ = function() {
    return this.getToken(Parser2.PIZQ, 0);
};

FunctionCallExpressionASTContext.prototype.expressionList = function() {
    return this.getTypedRuleContext(ExpressionListContext,0);
};

FunctionCallExpressionASTContext.prototype.PDER = function() {
    return this.getToken(Parser2.PDER, 0);
};
FunctionCallExpressionASTContext.prototype.enterRule = function(listener) {
    if(listener instanceof Parser2Listener ) {
        listener.enterFunctionCallExpressionAST(this);
	}
};

FunctionCallExpressionASTContext.prototype.exitRule = function(listener) {
    if(listener instanceof Parser2Listener ) {
        listener.exitFunctionCallExpressionAST(this);
	}
};

FunctionCallExpressionASTContext.prototype.accept = function(visitor) {
    if ( visitor instanceof Parser2Visitor ) {
        return visitor.visitFunctionCallExpressionAST(this);
    } else {
        return visitor.visitChildren(this);
    }
};



Parser2.FunctionCallExpressionContext = FunctionCallExpressionContext;

Parser2.prototype.functionCallExpression = function() {

    var localctx = new FunctionCallExpressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 46, Parser2.RULE_functionCallExpression);
    try {
        localctx = new FunctionCallExpressionASTContext(this, localctx);
        this.enterOuterAlt(localctx, 1);
        this.state = 200;
        this.match(Parser2.IDENTIFIER);
        this.state = 201;
        this.match(Parser2.PIZQ);
        this.state = 202;
        this.expressionList();
        this.state = 203;
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


 
ExpressionListContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function ExpressionListASTContext(parser, ctx) {
	ExpressionListContext.call(this, parser);
    ExpressionListContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ExpressionListASTContext.prototype = Object.create(ExpressionListContext.prototype);
ExpressionListASTContext.prototype.constructor = ExpressionListASTContext;

Parser2.ExpressionListASTContext = ExpressionListASTContext;

ExpressionListASTContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

ExpressionListASTContext.prototype.moreExpressions = function() {
    return this.getTypedRuleContext(MoreExpressionsContext,0);
};
ExpressionListASTContext.prototype.enterRule = function(listener) {
    if(listener instanceof Parser2Listener ) {
        listener.enterExpressionListAST(this);
	}
};

ExpressionListASTContext.prototype.exitRule = function(listener) {
    if(listener instanceof Parser2Listener ) {
        listener.exitExpressionListAST(this);
	}
};

ExpressionListASTContext.prototype.accept = function(visitor) {
    if ( visitor instanceof Parser2Visitor ) {
        return visitor.visitExpressionListAST(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function ExpressionListEPSILONASTContext(parser, ctx) {
	ExpressionListContext.call(this, parser);
    ExpressionListContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ExpressionListEPSILONASTContext.prototype = Object.create(ExpressionListContext.prototype);
ExpressionListEPSILONASTContext.prototype.constructor = ExpressionListEPSILONASTContext;

Parser2.ExpressionListEPSILONASTContext = ExpressionListEPSILONASTContext;

ExpressionListEPSILONASTContext.prototype.enterRule = function(listener) {
    if(listener instanceof Parser2Listener ) {
        listener.enterExpressionListEPSILONAST(this);
	}
};

ExpressionListEPSILONASTContext.prototype.exitRule = function(listener) {
    if(listener instanceof Parser2Listener ) {
        listener.exitExpressionListEPSILONAST(this);
	}
};

ExpressionListEPSILONASTContext.prototype.accept = function(visitor) {
    if ( visitor instanceof Parser2Visitor ) {
        return visitor.visitExpressionListEPSILONAST(this);
    } else {
        return visitor.visitChildren(this);
    }
};



Parser2.ExpressionListContext = ExpressionListContext;

Parser2.prototype.expressionList = function() {

    var localctx = new ExpressionListContext(this, this._ctx, this.state);
    this.enterRule(localctx, 48, Parser2.RULE_expressionList);
    try {
        this.state = 209;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case Parser2.LEN:
        case Parser2.PIZQ:
        case Parser2.CIZQ:
        case Parser2.NUM:
        case Parser2.IDENTIFIER:
        case Parser2.STRING:
            localctx = new ExpressionListASTContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 205;
            this.expression();
            this.state = 206;
            this.moreExpressions();
            break;
        case Parser2.PDER:
        case Parser2.DOSPUN:
        case Parser2.CDER:
        case Parser2.NEWLINE:
            localctx = new ExpressionListEPSILONASTContext(this, localctx);
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


 
MoreExpressionsContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function MoreExpressionsASTContext(parser, ctx) {
	MoreExpressionsContext.call(this, parser);
    MoreExpressionsContext.prototype.copyFrom.call(this, ctx);
    return this;
}

MoreExpressionsASTContext.prototype = Object.create(MoreExpressionsContext.prototype);
MoreExpressionsASTContext.prototype.constructor = MoreExpressionsASTContext;

Parser2.MoreExpressionsASTContext = MoreExpressionsASTContext;

MoreExpressionsASTContext.prototype.COMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(Parser2.COMA);
    } else {
        return this.getToken(Parser2.COMA, i);
    }
};


MoreExpressionsASTContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};
MoreExpressionsASTContext.prototype.enterRule = function(listener) {
    if(listener instanceof Parser2Listener ) {
        listener.enterMoreExpressionsAST(this);
	}
};

MoreExpressionsASTContext.prototype.exitRule = function(listener) {
    if(listener instanceof Parser2Listener ) {
        listener.exitMoreExpressionsAST(this);
	}
};

MoreExpressionsASTContext.prototype.accept = function(visitor) {
    if ( visitor instanceof Parser2Visitor ) {
        return visitor.visitMoreExpressionsAST(this);
    } else {
        return visitor.visitChildren(this);
    }
};



Parser2.MoreExpressionsContext = MoreExpressionsContext;

Parser2.prototype.moreExpressions = function() {

    var localctx = new MoreExpressionsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 50, Parser2.RULE_moreExpressions);
    var _la = 0; // Token type
    try {
        localctx = new MoreExpressionsASTContext(this, localctx);
        this.enterOuterAlt(localctx, 1);
        this.state = 215;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===Parser2.COMA) {
            this.state = 211;
            this.match(Parser2.COMA);
            this.state = 212;
            this.expression();
            this.state = 217;
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


 
PrimitiveExpressionContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function PrimitiveExpression_identifierASTContext(parser, ctx) {
	PrimitiveExpressionContext.call(this, parser);
    PrimitiveExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

PrimitiveExpression_identifierASTContext.prototype = Object.create(PrimitiveExpressionContext.prototype);
PrimitiveExpression_identifierASTContext.prototype.constructor = PrimitiveExpression_identifierASTContext;

Parser2.PrimitiveExpression_identifierASTContext = PrimitiveExpression_identifierASTContext;

PrimitiveExpression_identifierASTContext.prototype.IDENTIFIER = function() {
    return this.getToken(Parser2.IDENTIFIER, 0);
};
PrimitiveExpression_identifierASTContext.prototype.enterRule = function(listener) {
    if(listener instanceof Parser2Listener ) {
        listener.enterPrimitiveExpression_identifierAST(this);
	}
};

PrimitiveExpression_identifierASTContext.prototype.exitRule = function(listener) {
    if(listener instanceof Parser2Listener ) {
        listener.exitPrimitiveExpression_identifierAST(this);
	}
};

PrimitiveExpression_identifierASTContext.prototype.accept = function(visitor) {
    if ( visitor instanceof Parser2Visitor ) {
        return visitor.visitPrimitiveExpression_identifierAST(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function PrimitiveExpression_stringASTContext(parser, ctx) {
	PrimitiveExpressionContext.call(this, parser);
    PrimitiveExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

PrimitiveExpression_stringASTContext.prototype = Object.create(PrimitiveExpressionContext.prototype);
PrimitiveExpression_stringASTContext.prototype.constructor = PrimitiveExpression_stringASTContext;

Parser2.PrimitiveExpression_stringASTContext = PrimitiveExpression_stringASTContext;

PrimitiveExpression_stringASTContext.prototype.STRING = function() {
    return this.getToken(Parser2.STRING, 0);
};
PrimitiveExpression_stringASTContext.prototype.enterRule = function(listener) {
    if(listener instanceof Parser2Listener ) {
        listener.enterPrimitiveExpression_stringAST(this);
	}
};

PrimitiveExpression_stringASTContext.prototype.exitRule = function(listener) {
    if(listener instanceof Parser2Listener ) {
        listener.exitPrimitiveExpression_stringAST(this);
	}
};

PrimitiveExpression_stringASTContext.prototype.accept = function(visitor) {
    if ( visitor instanceof Parser2Visitor ) {
        return visitor.visitPrimitiveExpression_stringAST(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function PrimitiveExpression_numASTContext(parser, ctx) {
	PrimitiveExpressionContext.call(this, parser);
    PrimitiveExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

PrimitiveExpression_numASTContext.prototype = Object.create(PrimitiveExpressionContext.prototype);
PrimitiveExpression_numASTContext.prototype.constructor = PrimitiveExpression_numASTContext;

Parser2.PrimitiveExpression_numASTContext = PrimitiveExpression_numASTContext;

PrimitiveExpression_numASTContext.prototype.NUM = function() {
    return this.getToken(Parser2.NUM, 0);
};
PrimitiveExpression_numASTContext.prototype.enterRule = function(listener) {
    if(listener instanceof Parser2Listener ) {
        listener.enterPrimitiveExpression_numAST(this);
	}
};

PrimitiveExpression_numASTContext.prototype.exitRule = function(listener) {
    if(listener instanceof Parser2Listener ) {
        listener.exitPrimitiveExpression_numAST(this);
	}
};

PrimitiveExpression_numASTContext.prototype.accept = function(visitor) {
    if ( visitor instanceof Parser2Visitor ) {
        return visitor.visitPrimitiveExpression_numAST(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function PrimitiveExpression_expressionASTContext(parser, ctx) {
	PrimitiveExpressionContext.call(this, parser);
    PrimitiveExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

PrimitiveExpression_expressionASTContext.prototype = Object.create(PrimitiveExpressionContext.prototype);
PrimitiveExpression_expressionASTContext.prototype.constructor = PrimitiveExpression_expressionASTContext;

Parser2.PrimitiveExpression_expressionASTContext = PrimitiveExpression_expressionASTContext;

PrimitiveExpression_expressionASTContext.prototype.PIZQ = function() {
    return this.getToken(Parser2.PIZQ, 0);
};

PrimitiveExpression_expressionASTContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

PrimitiveExpression_expressionASTContext.prototype.PDER = function() {
    return this.getToken(Parser2.PDER, 0);
};
PrimitiveExpression_expressionASTContext.prototype.enterRule = function(listener) {
    if(listener instanceof Parser2Listener ) {
        listener.enterPrimitiveExpression_expressionAST(this);
	}
};

PrimitiveExpression_expressionASTContext.prototype.exitRule = function(listener) {
    if(listener instanceof Parser2Listener ) {
        listener.exitPrimitiveExpression_expressionAST(this);
	}
};

PrimitiveExpression_expressionASTContext.prototype.accept = function(visitor) {
    if ( visitor instanceof Parser2Visitor ) {
        return visitor.visitPrimitiveExpression_expressionAST(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function PrimitiveExpression_functionCallExpressionASTContext(parser, ctx) {
	PrimitiveExpressionContext.call(this, parser);
    PrimitiveExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

PrimitiveExpression_functionCallExpressionASTContext.prototype = Object.create(PrimitiveExpressionContext.prototype);
PrimitiveExpression_functionCallExpressionASTContext.prototype.constructor = PrimitiveExpression_functionCallExpressionASTContext;

Parser2.PrimitiveExpression_functionCallExpressionASTContext = PrimitiveExpression_functionCallExpressionASTContext;

PrimitiveExpression_functionCallExpressionASTContext.prototype.functionCallExpression = function() {
    return this.getTypedRuleContext(FunctionCallExpressionContext,0);
};
PrimitiveExpression_functionCallExpressionASTContext.prototype.enterRule = function(listener) {
    if(listener instanceof Parser2Listener ) {
        listener.enterPrimitiveExpression_functionCallExpressionAST(this);
	}
};

PrimitiveExpression_functionCallExpressionASTContext.prototype.exitRule = function(listener) {
    if(listener instanceof Parser2Listener ) {
        listener.exitPrimitiveExpression_functionCallExpressionAST(this);
	}
};

PrimitiveExpression_functionCallExpressionASTContext.prototype.accept = function(visitor) {
    if ( visitor instanceof Parser2Visitor ) {
        return visitor.visitPrimitiveExpression_functionCallExpressionAST(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function PrimitiveExpression_lenExpressionASTContext(parser, ctx) {
	PrimitiveExpressionContext.call(this, parser);
    PrimitiveExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

PrimitiveExpression_lenExpressionASTContext.prototype = Object.create(PrimitiveExpressionContext.prototype);
PrimitiveExpression_lenExpressionASTContext.prototype.constructor = PrimitiveExpression_lenExpressionASTContext;

Parser2.PrimitiveExpression_lenExpressionASTContext = PrimitiveExpression_lenExpressionASTContext;

PrimitiveExpression_lenExpressionASTContext.prototype.LEN = function() {
    return this.getToken(Parser2.LEN, 0);
};

PrimitiveExpression_lenExpressionASTContext.prototype.PIZQ = function() {
    return this.getToken(Parser2.PIZQ, 0);
};

PrimitiveExpression_lenExpressionASTContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

PrimitiveExpression_lenExpressionASTContext.prototype.PDER = function() {
    return this.getToken(Parser2.PDER, 0);
};
PrimitiveExpression_lenExpressionASTContext.prototype.enterRule = function(listener) {
    if(listener instanceof Parser2Listener ) {
        listener.enterPrimitiveExpression_lenExpressionAST(this);
	}
};

PrimitiveExpression_lenExpressionASTContext.prototype.exitRule = function(listener) {
    if(listener instanceof Parser2Listener ) {
        listener.exitPrimitiveExpression_lenExpressionAST(this);
	}
};

PrimitiveExpression_lenExpressionASTContext.prototype.accept = function(visitor) {
    if ( visitor instanceof Parser2Visitor ) {
        return visitor.visitPrimitiveExpression_lenExpressionAST(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function PrimitiveExpression_listExpressionASTContext(parser, ctx) {
	PrimitiveExpressionContext.call(this, parser);
    PrimitiveExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

PrimitiveExpression_listExpressionASTContext.prototype = Object.create(PrimitiveExpressionContext.prototype);
PrimitiveExpression_listExpressionASTContext.prototype.constructor = PrimitiveExpression_listExpressionASTContext;

Parser2.PrimitiveExpression_listExpressionASTContext = PrimitiveExpression_listExpressionASTContext;

PrimitiveExpression_listExpressionASTContext.prototype.listExpression = function() {
    return this.getTypedRuleContext(ListExpressionContext,0);
};
PrimitiveExpression_listExpressionASTContext.prototype.enterRule = function(listener) {
    if(listener instanceof Parser2Listener ) {
        listener.enterPrimitiveExpression_listExpressionAST(this);
	}
};

PrimitiveExpression_listExpressionASTContext.prototype.exitRule = function(listener) {
    if(listener instanceof Parser2Listener ) {
        listener.exitPrimitiveExpression_listExpressionAST(this);
	}
};

PrimitiveExpression_listExpressionASTContext.prototype.accept = function(visitor) {
    if ( visitor instanceof Parser2Visitor ) {
        return visitor.visitPrimitiveExpression_listExpressionAST(this);
    } else {
        return visitor.visitChildren(this);
    }
};



Parser2.PrimitiveExpressionContext = PrimitiveExpressionContext;

Parser2.prototype.primitiveExpression = function() {

    var localctx = new PrimitiveExpressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 52, Parser2.RULE_primitiveExpression);
    try {
        this.state = 232;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,12,this._ctx);
        switch(la_) {
        case 1:
            localctx = new PrimitiveExpression_numASTContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 218;
            this.match(Parser2.NUM);
            break;

        case 2:
            localctx = new PrimitiveExpression_stringASTContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 219;
            this.match(Parser2.STRING);
            break;

        case 3:
            localctx = new PrimitiveExpression_identifierASTContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 220;
            this.match(Parser2.IDENTIFIER);
            break;

        case 4:
            localctx = new PrimitiveExpression_expressionASTContext(this, localctx);
            this.enterOuterAlt(localctx, 4);
            this.state = 221;
            this.match(Parser2.PIZQ);
            this.state = 222;
            this.expression();
            this.state = 223;
            this.match(Parser2.PDER);
            break;

        case 5:
            localctx = new PrimitiveExpression_listExpressionASTContext(this, localctx);
            this.enterOuterAlt(localctx, 5);
            this.state = 225;
            this.listExpression();
            break;

        case 6:
            localctx = new PrimitiveExpression_lenExpressionASTContext(this, localctx);
            this.enterOuterAlt(localctx, 6);
            this.state = 226;
            this.match(Parser2.LEN);
            this.state = 227;
            this.match(Parser2.PIZQ);
            this.state = 228;
            this.expression();
            this.state = 229;
            this.match(Parser2.PDER);
            break;

        case 7:
            localctx = new PrimitiveExpression_functionCallExpressionASTContext(this, localctx);
            this.enterOuterAlt(localctx, 7);
            this.state = 231;
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


 
ListExpressionContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function ListExpressionASTContext(parser, ctx) {
	ListExpressionContext.call(this, parser);
    ListExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ListExpressionASTContext.prototype = Object.create(ListExpressionContext.prototype);
ListExpressionASTContext.prototype.constructor = ListExpressionASTContext;

Parser2.ListExpressionASTContext = ListExpressionASTContext;

ListExpressionASTContext.prototype.CIZQ = function() {
    return this.getToken(Parser2.CIZQ, 0);
};

ListExpressionASTContext.prototype.expressionList = function() {
    return this.getTypedRuleContext(ExpressionListContext,0);
};

ListExpressionASTContext.prototype.CDER = function() {
    return this.getToken(Parser2.CDER, 0);
};
ListExpressionASTContext.prototype.enterRule = function(listener) {
    if(listener instanceof Parser2Listener ) {
        listener.enterListExpressionAST(this);
	}
};

ListExpressionASTContext.prototype.exitRule = function(listener) {
    if(listener instanceof Parser2Listener ) {
        listener.exitListExpressionAST(this);
	}
};

ListExpressionASTContext.prototype.accept = function(visitor) {
    if ( visitor instanceof Parser2Visitor ) {
        return visitor.visitListExpressionAST(this);
    } else {
        return visitor.visitChildren(this);
    }
};



Parser2.ListExpressionContext = ListExpressionContext;

Parser2.prototype.listExpression = function() {

    var localctx = new ListExpressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 54, Parser2.RULE_listExpression);
    try {
        localctx = new ListExpressionASTContext(this, localctx);
        this.enterOuterAlt(localctx, 1);
        this.state = 234;
        this.match(Parser2.CIZQ);
        this.state = 235;
        this.expressionList();
        this.state = 236;
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
