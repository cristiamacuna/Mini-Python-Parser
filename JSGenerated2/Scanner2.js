// Generated from /Users/cristiamacuna/Documents/IIS-2019/Compiladores/Proyecto/G4/Scanner2.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');


//  import com.yuvalshavit.antlr4.DenterHelper;
//  var denterHelper = require('antlr4/index');



var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0002%\u00ff\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t",
    "\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004",
    "\f\t\f\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010",
    "\t\u0010\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013",
    "\u0004\u0014\t\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017",
    "\t\u0017\u0004\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a",
    "\u0004\u001b\t\u001b\u0004\u001c\t\u001c\u0004\u001d\t\u001d\u0004\u001e",
    "\t\u001e\u0004\u001f\t\u001f\u0004 \t \u0004!\t!\u0004\"\t\"\u0004#",
    "\t#\u0004$\t$\u0004%\t%\u0004&\t&\u0003\u0002\u0003\u0002\u0003\u0002",
    "\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005",
    "\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007\u0003\u0007",
    "\u0003\u0007\u0003\u0007\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003",
    "\b\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\n\u0003",
    "\n\u0003\n\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b",
    "\u0003\u000b\u0003\f\u0003\f\u0003\r\u0003\r\u0003\u000e\u0003\u000e",
    "\u0003\u000f\u0003\u000f\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0011",
    "\u0003\u0011\u0003\u0012\u0003\u0012\u0003\u0013\u0003\u0013\u0003\u0014",
    "\u0003\u0014\u0003\u0015\u0003\u0015\u0003\u0016\u0003\u0016\u0003\u0017",
    "\u0003\u0017\u0003\u0018\u0003\u0018\u0003\u0019\u0003\u0019\u0003\u001a",
    "\u0003\u001a\u0003\u001b\u0003\u001b\u0003\u001c\u0003\u001c\u0003\u001c",
    "\u0003\u001d\u0003\u001d\u0003\u001d\u0003\u001e\u0003\u001e\u0003\u001f",
    "\u0003\u001f\u0003 \u0003 \u0003 \u0005 \u00a9\n \u0003 \u0003 \u0003",
    "!\u0003!\u0005!\u00af\n!\u0003!\u0003!\u0007!\u00b3\n!\f!\u000e!\u00b6",
    "\u000b!\u0003!\u0005!\u00b9\n!\u0003!\u0006!\u00bc\n!\r!\u000e!\u00bd",
    "\u0005!\u00c0\n!\u0003!\u0003!\u0006!\u00c4\n!\r!\u000e!\u00c5\u0005",
    "!\u00c8\n!\u0003\"\u0003\"\u0003\"\u0007\"\u00cd\n\"\f\"\u000e\"\u00d0",
    "\u000b\"\u0003#\u0003#\u0003#\u0003#\u0007#\u00d6\n#\f#\u000e#\u00d9",
    "\u000b#\u0003#\u0003#\u0003$\u0003$\u0003$\u0003$\u0007$\u00e1\n$\f",
    "$\u000e$\u00e4\u000b$\u0003$\u0005$\u00e7\n$\u0003$\u0003$\u0003$\u0003",
    "$\u0003%\u0003%\u0003%\u0003%\u0003%\u0007%\u00f2\n%\f%\u000e%\u00f5",
    "\u000b%\u0003%\u0003%\u0003%\u0003%\u0003%\u0003&\u0003&\u0003&\u0003",
    "&\u0004\u00e2\u00f3\u0002\'\u0003\u0003\u0005\u0004\u0007\u0005\t\u0006",
    "\u000b\u0007\r\b\u000f\t\u0011\n\u0013\u000b\u0015\f\u0017\r\u0019\u000e",
    "\u001b\u000f\u001d\u0010\u001f\u0011!\u0012#\u0013%\u0014\'\u0015)\u0016",
    "+\u0017-\u0018/\u00191\u001a3\u001b5\u001c7\u001d9\u001e;\u0002=\u0002",
    "?\u001fA C!E\"G#I$K%\u0003\u0002\b\u0005\u0002C\\aac|\u0003\u00022;",
    "\u0004\u0002\"\"2;\u0003\u00023;\u0003\u0002$$\u0006\u0002\u000b\f\u000f",
    "\u000f\"\"--\u0002\u010e\u0002\u0003\u0003\u0002\u0002\u0002\u0002\u0005",
    "\u0003\u0002\u0002\u0002\u0002\u0007\u0003\u0002\u0002\u0002\u0002\t",
    "\u0003\u0002\u0002\u0002\u0002\u000b\u0003\u0002\u0002\u0002\u0002\r",
    "\u0003\u0002\u0002\u0002\u0002\u000f\u0003\u0002\u0002\u0002\u0002\u0011",
    "\u0003\u0002\u0002\u0002\u0002\u0013\u0003\u0002\u0002\u0002\u0002\u0015",
    "\u0003\u0002\u0002\u0002\u0002\u0017\u0003\u0002\u0002\u0002\u0002\u0019",
    "\u0003\u0002\u0002\u0002\u0002\u001b\u0003\u0002\u0002\u0002\u0002\u001d",
    "\u0003\u0002\u0002\u0002\u0002\u001f\u0003\u0002\u0002\u0002\u0002!",
    "\u0003\u0002\u0002\u0002\u0002#\u0003\u0002\u0002\u0002\u0002%\u0003",
    "\u0002\u0002\u0002\u0002\'\u0003\u0002\u0002\u0002\u0002)\u0003\u0002",
    "\u0002\u0002\u0002+\u0003\u0002\u0002\u0002\u0002-\u0003\u0002\u0002",
    "\u0002\u0002/\u0003\u0002\u0002\u0002\u00021\u0003\u0002\u0002\u0002",
    "\u00023\u0003\u0002\u0002\u0002\u00025\u0003\u0002\u0002\u0002\u0002",
    "7\u0003\u0002\u0002\u0002\u00029\u0003\u0002\u0002\u0002\u0002?\u0003",
    "\u0002\u0002\u0002\u0002A\u0003\u0002\u0002\u0002\u0002C\u0003\u0002",
    "\u0002\u0002\u0002E\u0003\u0002\u0002\u0002\u0002G\u0003\u0002\u0002",
    "\u0002\u0002I\u0003\u0002\u0002\u0002\u0002K\u0003\u0002\u0002\u0002",
    "\u0003M\u0003\u0002\u0002\u0002\u0005Q\u0003\u0002\u0002\u0002\u0007",
    "U\u0003\u0002\u0002\u0002\tX\u0003\u0002\u0002\u0002\u000b\\\u0003\u0002",
    "\u0002\u0002\r_\u0003\u0002\u0002\u0002\u000fd\u0003\u0002\u0002\u0002",
    "\u0011j\u0003\u0002\u0002\u0002\u0013q\u0003\u0002\u0002\u0002\u0015",
    "t\u0003\u0002\u0002\u0002\u0017z\u0003\u0002\u0002\u0002\u0019|\u0003",
    "\u0002\u0002\u0002\u001b~\u0003\u0002\u0002\u0002\u001d\u0080\u0003",
    "\u0002\u0002\u0002\u001f\u0082\u0003\u0002\u0002\u0002!\u0085\u0003",
    "\u0002\u0002\u0002#\u0087\u0003\u0002\u0002\u0002%\u0089\u0003\u0002",
    "\u0002\u0002\'\u008b\u0003\u0002\u0002\u0002)\u008d\u0003\u0002\u0002",
    "\u0002+\u008f\u0003\u0002\u0002\u0002-\u0091\u0003\u0002\u0002\u0002",
    "/\u0093\u0003\u0002\u0002\u00021\u0095\u0003\u0002\u0002\u00023\u0097",
    "\u0003\u0002\u0002\u00025\u0099\u0003\u0002\u0002\u00027\u009b\u0003",
    "\u0002\u0002\u00029\u009e\u0003\u0002\u0002\u0002;\u00a1\u0003\u0002",
    "\u0002\u0002=\u00a3\u0003\u0002\u0002\u0002?\u00a5\u0003\u0002\u0002",
    "\u0002A\u00c7\u0003\u0002\u0002\u0002C\u00c9\u0003\u0002\u0002\u0002",
    "E\u00d1\u0003\u0002\u0002\u0002G\u00dc\u0003\u0002\u0002\u0002I\u00ec",
    "\u0003\u0002\u0002\u0002K\u00fb\u0003\u0002\u0002\u0002MN\u0007f\u0002",
    "\u0002NO\u0007g\u0002\u0002OP\u0007h\u0002\u0002P\u0004\u0003\u0002",
    "\u0002\u0002QR\u0007n\u0002\u0002RS\u0007g\u0002\u0002ST\u0007p\u0002",
    "\u0002T\u0006\u0003\u0002\u0002\u0002UV\u0007k\u0002\u0002VW\u0007h",
    "\u0002\u0002W\b\u0003\u0002\u0002\u0002XY\u0007h\u0002\u0002YZ\u0007",
    "q\u0002\u0002Z[\u0007t\u0002\u0002[\n\u0003\u0002\u0002\u0002\\]\u0007",
    "k\u0002\u0002]^\u0007p\u0002\u0002^\f\u0003\u0002\u0002\u0002_`\u0007",
    "g\u0002\u0002`a\u0007n\u0002\u0002ab\u0007u\u0002\u0002bc\u0007g\u0002",
    "\u0002c\u000e\u0003\u0002\u0002\u0002de\u0007y\u0002\u0002ef\u0007j",
    "\u0002\u0002fg\u0007k\u0002\u0002gh\u0007n\u0002\u0002hi\u0007g\u0002",
    "\u0002i\u0010\u0003\u0002\u0002\u0002jk\u0007t\u0002\u0002kl\u0007g",
    "\u0002\u0002lm\u0007v\u0002\u0002mn\u0007w\u0002\u0002no\u0007t\u0002",
    "\u0002op\u0007p\u0002\u0002p\u0012\u0003\u0002\u0002\u0002qr\u0007p",
    "\u0002\u0002rs\u0007n\u0002\u0002s\u0014\u0003\u0002\u0002\u0002tu\u0007",
    "r\u0002\u0002uv\u0007t\u0002\u0002vw\u0007k\u0002\u0002wx\u0007p\u0002",
    "\u0002xy\u0007v\u0002\u0002y\u0016\u0003\u0002\u0002\u0002z{\u0007?",
    "\u0002\u0002{\u0018\u0003\u0002\u0002\u0002|}\u0007}\u0002\u0002}\u001a",
    "\u0003\u0002\u0002\u0002~\u007f\u0007\u007f\u0002\u0002\u007f\u001c",
    "\u0003\u0002\u0002\u0002\u0080\u0081\u0007.\u0002\u0002\u0081\u001e",
    "\u0003\u0002\u0002\u0002\u0082\u0083\u0007?\u0002\u0002\u0083\u0084",
    "\u0007?\u0002\u0002\u0084 \u0003\u0002\u0002\u0002\u0085\u0086\u0007",
    "*\u0002\u0002\u0086\"\u0003\u0002\u0002\u0002\u0087\u0088\u0007+\u0002",
    "\u0002\u0088$\u0003\u0002\u0002\u0002\u0089\u008a\u0007-\u0002\u0002",
    "\u008a&\u0003\u0002\u0002\u0002\u008b\u008c\u0007,\u0002\u0002\u008c",
    "(\u0003\u0002\u0002\u0002\u008d\u008e\u00071\u0002\u0002\u008e*\u0003",
    "\u0002\u0002\u0002\u008f\u0090\u0007@\u0002\u0002\u0090,\u0003\u0002",
    "\u0002\u0002\u0091\u0092\u0007>\u0002\u0002\u0092.\u0003\u0002\u0002",
    "\u0002\u0093\u0094\u0007<\u0002\u0002\u00940\u0003\u0002\u0002\u0002",
    "\u0095\u0096\u0007/\u0002\u0002\u00962\u0003\u0002\u0002\u0002\u0097",
    "\u0098\u0007]\u0002\u0002\u00984\u0003\u0002\u0002\u0002\u0099\u009a",
    "\u0007_\u0002\u0002\u009a6\u0003\u0002\u0002\u0002\u009b\u009c\u0007",
    ">\u0002\u0002\u009c\u009d\u0007?\u0002\u0002\u009d8\u0003\u0002\u0002",
    "\u0002\u009e\u009f\u0007@\u0002\u0002\u009f\u00a0\u0007?\u0002\u0002",
    "\u00a0:\u0003\u0002\u0002\u0002\u00a1\u00a2\t\u0002\u0002\u0002\u00a2",
    "<\u0003\u0002\u0002\u0002\u00a3\u00a4\t\u0003\u0002\u0002\u00a4>\u0003",
    "\u0002\u0002\u0002\u00a5\u00a8\u0007)\u0002\u0002\u00a6\u00a9\u0005",
    ";\u001e\u0002\u00a7\u00a9\t\u0004\u0002\u0002\u00a8\u00a6\u0003\u0002",
    "\u0002\u0002\u00a8\u00a7\u0003\u0002\u0002\u0002\u00a8\u00a9\u0003\u0002",
    "\u0002\u0002\u00a9\u00aa\u0003\u0002\u0002\u0002\u00aa\u00ab\u0007)",
    "\u0002\u0002\u00ab@\u0003\u0002\u0002\u0002\u00ac\u00c8\u00072\u0002",
    "\u0002\u00ad\u00af\u0007/\u0002\u0002\u00ae\u00ad\u0003\u0002\u0002",
    "\u0002\u00ae\u00af\u0003\u0002\u0002\u0002\u00af\u00b0\u0003\u0002\u0002",
    "\u0002\u00b0\u00b4\t\u0005\u0002\u0002\u00b1\u00b3\u0005=\u001f\u0002",
    "\u00b2\u00b1\u0003\u0002\u0002\u0002\u00b3\u00b6\u0003\u0002\u0002\u0002",
    "\u00b4\u00b2\u0003\u0002\u0002\u0002\u00b4\u00b5\u0003\u0002\u0002\u0002",
    "\u00b5\u00c8\u0003\u0002\u0002\u0002\u00b6\u00b4\u0003\u0002\u0002\u0002",
    "\u00b7\u00b9\u0007/\u0002\u0002\u00b8\u00b7\u0003\u0002\u0002\u0002",
    "\u00b8\u00b9\u0003\u0002\u0002\u0002\u00b9\u00bb\u0003\u0002\u0002\u0002",
    "\u00ba\u00bc\t\u0003\u0002\u0002\u00bb\u00ba\u0003\u0002\u0002\u0002",
    "\u00bc\u00bd\u0003\u0002\u0002\u0002\u00bd\u00bb\u0003\u0002\u0002\u0002",
    "\u00bd\u00be\u0003\u0002\u0002\u0002\u00be\u00c0\u0003\u0002\u0002\u0002",
    "\u00bf\u00b8\u0003\u0002\u0002\u0002\u00bf\u00c0\u0003\u0002\u0002\u0002",
    "\u00c0\u00c1\u0003\u0002\u0002\u0002\u00c1\u00c3\u00070\u0002\u0002",
    "\u00c2\u00c4\t\u0003\u0002\u0002\u00c3\u00c2\u0003\u0002\u0002\u0002",
    "\u00c4\u00c5\u0003\u0002\u0002\u0002\u00c5\u00c3\u0003\u0002\u0002\u0002",
    "\u00c5\u00c6\u0003\u0002\u0002\u0002\u00c6\u00c8\u0003\u0002\u0002\u0002",
    "\u00c7\u00ac\u0003\u0002\u0002\u0002\u00c7\u00ae\u0003\u0002\u0002\u0002",
    "\u00c7\u00bf\u0003\u0002\u0002\u0002\u00c8B\u0003\u0002\u0002\u0002",
    "\u00c9\u00ce\u0005;\u001e\u0002\u00ca\u00cd\u0005;\u001e\u0002\u00cb",
    "\u00cd\u0005=\u001f\u0002\u00cc\u00ca\u0003\u0002\u0002\u0002\u00cc",
    "\u00cb\u0003\u0002\u0002\u0002\u00cd\u00d0\u0003\u0002\u0002\u0002\u00ce",
    "\u00cc\u0003\u0002\u0002\u0002\u00ce\u00cf\u0003\u0002\u0002\u0002\u00cf",
    "D\u0003\u0002\u0002\u0002\u00d0\u00ce\u0003\u0002\u0002\u0002\u00d1",
    "\u00d7\u0007$\u0002\u0002\u00d2\u00d3\u0007$\u0002\u0002\u00d3\u00d6",
    "\u0007$\u0002\u0002\u00d4\u00d6\n\u0006\u0002\u0002\u00d5\u00d2\u0003",
    "\u0002\u0002\u0002\u00d5\u00d4\u0003\u0002\u0002\u0002\u00d6\u00d9\u0003",
    "\u0002\u0002\u0002\u00d7\u00d5\u0003\u0002\u0002\u0002\u00d7\u00d8\u0003",
    "\u0002\u0002\u0002\u00d8\u00da\u0003\u0002\u0002\u0002\u00d9\u00d7\u0003",
    "\u0002\u0002\u0002\u00da\u00db\u0007$\u0002\u0002\u00dbF\u0003\u0002",
    "\u0002\u0002\u00dc\u00dd\u00071\u0002\u0002\u00dd\u00de\u00071\u0002",
    "\u0002\u00de\u00e2\u0003\u0002\u0002\u0002\u00df\u00e1\u000b\u0002\u0002",
    "\u0002\u00e0\u00df\u0003\u0002\u0002\u0002\u00e1\u00e4\u0003\u0002\u0002",
    "\u0002\u00e2\u00e3\u0003\u0002\u0002\u0002\u00e2\u00e0\u0003\u0002\u0002",
    "\u0002\u00e3\u00e6\u0003\u0002\u0002\u0002\u00e4\u00e2\u0003\u0002\u0002",
    "\u0002\u00e5\u00e7\u0007\u000f\u0002\u0002\u00e6\u00e5\u0003\u0002\u0002",
    "\u0002\u00e6\u00e7\u0003\u0002\u0002\u0002\u00e7\u00e8\u0003\u0002\u0002",
    "\u0002\u00e8\u00e9\u0007\f\u0002\u0002\u00e9\u00ea\u0003\u0002\u0002",
    "\u0002\u00ea\u00eb\b$\u0002\u0002\u00ebH\u0003\u0002\u0002\u0002\u00ec",
    "\u00ed\u00071\u0002\u0002\u00ed\u00ee\u0007,\u0002\u0002\u00ee\u00f3",
    "\u0003\u0002\u0002\u0002\u00ef\u00f2\u0005I%\u0002\u00f0\u00f2\u000b",
    "\u0002\u0002\u0002\u00f1\u00ef\u0003\u0002\u0002\u0002\u00f1\u00f0\u0003",
    "\u0002\u0002\u0002\u00f2\u00f5\u0003\u0002\u0002\u0002\u00f3\u00f4\u0003",
    "\u0002\u0002\u0002\u00f3\u00f1\u0003\u0002\u0002\u0002\u00f4\u00f6\u0003",
    "\u0002\u0002\u0002\u00f5\u00f3\u0003\u0002\u0002\u0002\u00f6\u00f7\u0007",
    ",\u0002\u0002\u00f7\u00f8\u00071\u0002\u0002\u00f8\u00f9\u0003\u0002",
    "\u0002\u0002\u00f9\u00fa\b%\u0002\u0002\u00faJ\u0003\u0002\u0002\u0002",
    "\u00fb\u00fc\t\u0007\u0002\u0002\u00fc\u00fd\u0003\u0002\u0002\u0002",
    "\u00fd\u00fe\b&\u0002\u0002\u00feL\u0003\u0002\u0002\u0002\u0013\u0002",
    "\u00a8\u00ae\u00b4\u00b8\u00bd\u00bf\u00c5\u00c7\u00cc\u00ce\u00d5\u00d7",
    "\u00e2\u00e6\u00f1\u00f3\u0003\b\u0002\u0002"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

function Scanner2(input) {
	antlr4.Lexer.call(this, input);
    this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    return this;
}

Scanner2.prototype = Object.create(antlr4.Lexer.prototype);
Scanner2.prototype.constructor = Scanner2;

Object.defineProperty(Scanner2.prototype, "atn", {
        get : function() {
                return atn;
        }
});

Scanner2.EOF = antlr4.Token.EOF;
Scanner2.DEF = 1;
Scanner2.LEN = 2;
Scanner2.IF = 3;
Scanner2.FOR = 4;
Scanner2.IN = 5;
Scanner2.ELSE = 6;
Scanner2.WHILE = 7;
Scanner2.RETURN = 8;
Scanner2.NEWLINE = 9;
Scanner2.PRINT = 10;
Scanner2.ASSIGN = 11;
Scanner2.INDENT = 12;
Scanner2.DEDENT = 13;
Scanner2.COMA = 14;
Scanner2.COMP = 15;
Scanner2.PIZQ = 16;
Scanner2.PDER = 17;
Scanner2.SUMA = 18;
Scanner2.MUL = 19;
Scanner2.DIV = 20;
Scanner2.MAYOR = 21;
Scanner2.MENOR = 22;
Scanner2.DOSPUN = 23;
Scanner2.SUB = 24;
Scanner2.CIZQ = 25;
Scanner2.CDER = 26;
Scanner2.MENORIGUAL = 27;
Scanner2.MAYORIGUAL = 28;
Scanner2.CHAR = 29;
Scanner2.NUM = 30;
Scanner2.IDENTIFIER = 31;
Scanner2.STRING = 32;
Scanner2.COMMENT = 33;
Scanner2.COMENTARIO = 34;
Scanner2.WS = 35;

Scanner2.prototype.channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];

Scanner2.prototype.modeNames = [ "DEFAULT_MODE" ];

Scanner2.prototype.literalNames = [ null, "'def'", "'len'", "'if'", "'for'", 
                                    "'in'", "'else'", "'while'", "'return'", 
                                    "'nl'", "'print'", "'='", "'{'", "'}'", 
                                    "','", "'=='", "'('", "')'", "'+'", 
                                    "'*'", "'/'", "'>'", "'<'", "':'", "'-'", 
                                    "'['", "']'", "'<='", "'>='" ];

Scanner2.prototype.symbolicNames = [ null, "DEF", "LEN", "IF", "FOR", "IN", 
                                     "ELSE", "WHILE", "RETURN", "NEWLINE", 
                                     "PRINT", "ASSIGN", "INDENT", "DEDENT", 
                                     "COMA", "COMP", "PIZQ", "PDER", "SUMA", 
                                     "MUL", "DIV", "MAYOR", "MENOR", "DOSPUN", 
                                     "SUB", "CIZQ", "CDER", "MENORIGUAL", 
                                     "MAYORIGUAL", "CHAR", "NUM", "IDENTIFIER", 
                                     "STRING", "COMMENT", "COMENTARIO", 
                                     "WS" ];

Scanner2.prototype.ruleNames = [ "DEF", "LEN", "IF", "FOR", "IN", "ELSE", 
                                 "WHILE", "RETURN", "NEWLINE", "PRINT", 
                                 "ASSIGN", "INDENT", "DEDENT", "COMA", "COMP", 
                                 "PIZQ", "PDER", "SUMA", "MUL", "DIV", "MAYOR", 
                                 "MENOR", "DOSPUN", "SUB", "CIZQ", "CDER", 
                                 "MENORIGUAL", "MAYORIGUAL", "L", "N", "CHAR", 
                                 "NUM", "IDENTIFIER", "STRING", "COMMENT", 
                                 "COMENTARIO", "WS" ];

Scanner2.prototype.grammarFileName = "Scanner2.g4";


/*  private final DenterHelper denter = DenterHelper.builder()
    .nl(NEWLINE)
    .indent(miniPythonParser.INDENT)
    .dedent(miniPythonParser.DEDENT)
    .pullToken(miniPythonLexer.super::nextToken);

  @Override
  public Token nextToken() {
    return denter.nextToken();
  }*/



exports.Scanner2 = Scanner2;

