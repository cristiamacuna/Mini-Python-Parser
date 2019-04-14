// Generated from /Users/cristiamacuna/Documents/IIS-2019/Compiladores/Proyecto/G4/Scanner2.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');


//  import com.yuvalshavit.antlr4.DenterHelper;
//  var denterHelper = require('antlr4/index');



var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0002#\u010b\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t",
    "\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004",
    "\f\t\f\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010",
    "\t\u0010\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013",
    "\u0004\u0014\t\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017",
    "\t\u0017\u0004\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a",
    "\u0004\u001b\t\u001b\u0004\u001c\t\u001c\u0004\u001d\t\u001d\u0004\u001e",
    "\t\u001e\u0004\u001f\t\u001f\u0004 \t \u0004!\t!\u0004\"\t\"\u0004#",
    "\t#\u0004$\t$\u0004%\t%\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0006",
    "\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007",
    "\u0003\u0007\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\t",
    "\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\n\u0003\n\u0003",
    "\n\u0003\n\u0003\n\u0003\n\u0003\u000b\u0003\u000b\u0003\f\u0003\f\u0003",
    "\r\u0003\r\u0003\r\u0003\u000e\u0003\u000e\u0003\u000f\u0003\u000f\u0003",
    "\u0010\u0003\u0010\u0003\u0011\u0003\u0011\u0003\u0012\u0003\u0012\u0003",
    "\u0013\u0003\u0013\u0003\u0014\u0003\u0014\u0003\u0015\u0003\u0015\u0003",
    "\u0016\u0003\u0016\u0003\u0017\u0003\u0017\u0003\u0018\u0003\u0018\u0003",
    "\u0019\u0003\u0019\u0003\u0019\u0003\u001a\u0003\u001a\u0003\u001a\u0003",
    "\u001b\u0003\u001b\u0003\u001b\u0005\u001b\u009c\n\u001b\u0003\u001b",
    "\u0003\u001b\u0005\u001b\u00a0\n\u001b\u0003\u001b\u0005\u001b\u00a3",
    "\n\u001b\u0005\u001b\u00a5\n\u001b\u0003\u001b\u0003\u001b\u0003\u001c",
    "\u0003\u001c\u0003\u001d\u0003\u001d\u0003\u001e\u0006\u001e\u00ae\n",
    "\u001e\r\u001e\u000e\u001e\u00af\u0003\u001f\u0003\u001f\u0003\u001f",
    "\u0005\u001f\u00b5\n\u001f\u0003\u001f\u0003\u001f\u0003 \u0003 \u0005",
    " \u00bb\n \u0003 \u0003 \u0007 \u00bf\n \f \u000e \u00c2\u000b \u0003",
    " \u0005 \u00c5\n \u0003 \u0006 \u00c8\n \r \u000e \u00c9\u0005 \u00cc",
    "\n \u0003 \u0003 \u0006 \u00d0\n \r \u000e \u00d1\u0005 \u00d4\n \u0003",
    "!\u0003!\u0003!\u0007!\u00d9\n!\f!\u000e!\u00dc\u000b!\u0003\"\u0003",
    "\"\u0003\"\u0003\"\u0007\"\u00e2\n\"\f\"\u000e\"\u00e5\u000b\"\u0003",
    "\"\u0003\"\u0003#\u0003#\u0007#\u00eb\n#\f#\u000e#\u00ee\u000b#\u0003",
    "#\u0005#\u00f1\n#\u0003#\u0003#\u0003#\u0003#\u0003$\u0003$\u0003$\u0003",
    "$\u0003$\u0003$\u0007$\u00fd\n$\f$\u000e$\u0100\u000b$\u0003$\u0003",
    "$\u0003$\u0003$\u0003$\u0003$\u0003%\u0003%\u0003%\u0003%\u0004\u00ec",
    "\u00fe\u0002&\u0003\u0003\u0005\u0004\u0007\u0005\t\u0006\u000b\u0007",
    "\r\b\u000f\t\u0011\n\u0013\u000b\u0015\f\u0017\r\u0019\u000e\u001b\u000f",
    "\u001d\u0010\u001f\u0011!\u0012#\u0013%\u0014\'\u0015)\u0016+\u0017",
    "-\u0018/\u00191\u001a3\u001b5\u001c7\u00029\u0002;\u0002=\u001d?\u001e",
    "A\u001fC E!G\"I#\u0003\u0002\b\u0005\u0002C\\aac|\u0003\u00022;\u0004",
    "\u0002\u000b\u000b\"\"\u0004\u0002\"\"2;\u0003\u00023;\u0003\u0002$",
    "$\u0002\u011e\u0002\u0003\u0003\u0002\u0002\u0002\u0002\u0005\u0003",
    "\u0002\u0002\u0002\u0002\u0007\u0003\u0002\u0002\u0002\u0002\t\u0003",
    "\u0002\u0002\u0002\u0002\u000b\u0003\u0002\u0002\u0002\u0002\r\u0003",
    "\u0002\u0002\u0002\u0002\u000f\u0003\u0002\u0002\u0002\u0002\u0011\u0003",
    "\u0002\u0002\u0002\u0002\u0013\u0003\u0002\u0002\u0002\u0002\u0015\u0003",
    "\u0002\u0002\u0002\u0002\u0017\u0003\u0002\u0002\u0002\u0002\u0019\u0003",
    "\u0002\u0002\u0002\u0002\u001b\u0003\u0002\u0002\u0002\u0002\u001d\u0003",
    "\u0002\u0002\u0002\u0002\u001f\u0003\u0002\u0002\u0002\u0002!\u0003",
    "\u0002\u0002\u0002\u0002#\u0003\u0002\u0002\u0002\u0002%\u0003\u0002",
    "\u0002\u0002\u0002\'\u0003\u0002\u0002\u0002\u0002)\u0003\u0002\u0002",
    "\u0002\u0002+\u0003\u0002\u0002\u0002\u0002-\u0003\u0002\u0002\u0002",
    "\u0002/\u0003\u0002\u0002\u0002\u00021\u0003\u0002\u0002\u0002\u0002",
    "3\u0003\u0002\u0002\u0002\u00025\u0003\u0002\u0002\u0002\u0002=\u0003",
    "\u0002\u0002\u0002\u0002?\u0003\u0002\u0002\u0002\u0002A\u0003\u0002",
    "\u0002\u0002\u0002C\u0003\u0002\u0002\u0002\u0002E\u0003\u0002\u0002",
    "\u0002\u0002G\u0003\u0002\u0002\u0002\u0002I\u0003\u0002\u0002\u0002",
    "\u0003K\u0003\u0002\u0002\u0002\u0005O\u0003\u0002\u0002\u0002\u0007",
    "S\u0003\u0002\u0002\u0002\tV\u0003\u0002\u0002\u0002\u000bZ\u0003\u0002",
    "\u0002\u0002\r]\u0003\u0002\u0002\u0002\u000fb\u0003\u0002\u0002\u0002",
    "\u0011h\u0003\u0002\u0002\u0002\u0013o\u0003\u0002\u0002\u0002\u0015",
    "u\u0003\u0002\u0002\u0002\u0017w\u0003\u0002\u0002\u0002\u0019y\u0003",
    "\u0002\u0002\u0002\u001b|\u0003\u0002\u0002\u0002\u001d~\u0003\u0002",
    "\u0002\u0002\u001f\u0080\u0003\u0002\u0002\u0002!\u0082\u0003\u0002",
    "\u0002\u0002#\u0084\u0003\u0002\u0002\u0002%\u0086\u0003\u0002\u0002",
    "\u0002\'\u0088\u0003\u0002\u0002\u0002)\u008a\u0003\u0002\u0002\u0002",
    "+\u008c\u0003\u0002\u0002\u0002-\u008e\u0003\u0002\u0002\u0002/\u0090",
    "\u0003\u0002\u0002\u00021\u0092\u0003\u0002\u0002\u00023\u0095\u0003",
    "\u0002\u0002\u00025\u00a4\u0003\u0002\u0002\u00027\u00a8\u0003\u0002",
    "\u0002\u00029\u00aa\u0003\u0002\u0002\u0002;\u00ad\u0003\u0002\u0002",
    "\u0002=\u00b1\u0003\u0002\u0002\u0002?\u00d3\u0003\u0002\u0002\u0002",
    "A\u00d5\u0003\u0002\u0002\u0002C\u00dd\u0003\u0002\u0002\u0002E\u00e8",
    "\u0003\u0002\u0002\u0002G\u00f6\u0003\u0002\u0002\u0002I\u0107\u0003",
    "\u0002\u0002\u0002KL\u0007f\u0002\u0002LM\u0007g\u0002\u0002MN\u0007",
    "h\u0002\u0002N\u0004\u0003\u0002\u0002\u0002OP\u0007n\u0002\u0002PQ",
    "\u0007g\u0002\u0002QR\u0007p\u0002\u0002R\u0006\u0003\u0002\u0002\u0002",
    "ST\u0007k\u0002\u0002TU\u0007h\u0002\u0002U\b\u0003\u0002\u0002\u0002",
    "VW\u0007h\u0002\u0002WX\u0007q\u0002\u0002XY\u0007t\u0002\u0002Y\n\u0003",
    "\u0002\u0002\u0002Z[\u0007k\u0002\u0002[\\\u0007p\u0002\u0002\\\f\u0003",
    "\u0002\u0002\u0002]^\u0007g\u0002\u0002^_\u0007n\u0002\u0002_`\u0007",
    "u\u0002\u0002`a\u0007g\u0002\u0002a\u000e\u0003\u0002\u0002\u0002bc",
    "\u0007y\u0002\u0002cd\u0007j\u0002\u0002de\u0007k\u0002\u0002ef\u0007",
    "n\u0002\u0002fg\u0007g\u0002\u0002g\u0010\u0003\u0002\u0002\u0002hi",
    "\u0007t\u0002\u0002ij\u0007g\u0002\u0002jk\u0007v\u0002\u0002kl\u0007",
    "w\u0002\u0002lm\u0007t\u0002\u0002mn\u0007p\u0002\u0002n\u0012\u0003",
    "\u0002\u0002\u0002op\u0007r\u0002\u0002pq\u0007t\u0002\u0002qr\u0007",
    "k\u0002\u0002rs\u0007p\u0002\u0002st\u0007v\u0002\u0002t\u0014\u0003",
    "\u0002\u0002\u0002uv\u0007?\u0002\u0002v\u0016\u0003\u0002\u0002\u0002",
    "wx\u0007.\u0002\u0002x\u0018\u0003\u0002\u0002\u0002yz\u0007?\u0002",
    "\u0002z{\u0007?\u0002\u0002{\u001a\u0003\u0002\u0002\u0002|}\u0007*",
    "\u0002\u0002}\u001c\u0003\u0002\u0002\u0002~\u007f\u0007+\u0002\u0002",
    "\u007f\u001e\u0003\u0002\u0002\u0002\u0080\u0081\u0007-\u0002\u0002",
    "\u0081 \u0003\u0002\u0002\u0002\u0082\u0083\u0007,\u0002\u0002\u0083",
    "\"\u0003\u0002\u0002\u0002\u0084\u0085\u00071\u0002\u0002\u0085$\u0003",
    "\u0002\u0002\u0002\u0086\u0087\u0007@\u0002\u0002\u0087&\u0003\u0002",
    "\u0002\u0002\u0088\u0089\u0007>\u0002\u0002\u0089(\u0003\u0002\u0002",
    "\u0002\u008a\u008b\u0007<\u0002\u0002\u008b*\u0003\u0002\u0002\u0002",
    "\u008c\u008d\u0007/\u0002\u0002\u008d,\u0003\u0002\u0002\u0002\u008e",
    "\u008f\u0007]\u0002\u0002\u008f.\u0003\u0002\u0002\u0002\u0090\u0091",
    "\u0007_\u0002\u0002\u00910\u0003\u0002\u0002\u0002\u0092\u0093\u0007",
    ">\u0002\u0002\u0093\u0094\u0007?\u0002\u0002\u00942\u0003\u0002\u0002",
    "\u0002\u0095\u0096\u0007@\u0002\u0002\u0096\u0097\u0007?\u0002\u0002",
    "\u00974\u0003\u0002\u0002\u0002\u0098\u0099\u0006\u001b\u0002\u0002",
    "\u0099\u00a5\u0005;\u001e\u0002\u009a\u009c\u0007\u000f\u0002\u0002",
    "\u009b\u009a\u0003\u0002\u0002\u0002\u009b\u009c\u0003\u0002\u0002\u0002",
    "\u009c\u009d\u0003\u0002\u0002\u0002\u009d\u00a0\u0007\f\u0002\u0002",
    "\u009e\u00a0\u0007\u000f\u0002\u0002\u009f\u009b\u0003\u0002\u0002\u0002",
    "\u009f\u009e\u0003\u0002\u0002\u0002\u00a0\u00a2\u0003\u0002\u0002\u0002",
    "\u00a1\u00a3\u0005;\u001e\u0002\u00a2\u00a1\u0003\u0002\u0002\u0002",
    "\u00a2\u00a3\u0003\u0002\u0002\u0002\u00a3\u00a5\u0003\u0002\u0002\u0002",
    "\u00a4\u0098\u0003\u0002\u0002\u0002\u00a4\u009f\u0003\u0002\u0002\u0002",
    "\u00a5\u00a6\u0003\u0002\u0002\u0002\u00a6\u00a7\b\u001b\u0002\u0002",
    "\u00a76\u0003\u0002\u0002\u0002\u00a8\u00a9\t\u0002\u0002\u0002\u00a9",
    "8\u0003\u0002\u0002\u0002\u00aa\u00ab\t\u0003\u0002\u0002\u00ab:\u0003",
    "\u0002\u0002\u0002\u00ac\u00ae\t\u0004\u0002\u0002\u00ad\u00ac\u0003",
    "\u0002\u0002\u0002\u00ae\u00af\u0003\u0002\u0002\u0002\u00af\u00ad\u0003",
    "\u0002\u0002\u0002\u00af\u00b0\u0003\u0002\u0002\u0002\u00b0<\u0003",
    "\u0002\u0002\u0002\u00b1\u00b4\u0007)\u0002\u0002\u00b2\u00b5\u0005",
    "7\u001c\u0002\u00b3\u00b5\t\u0005\u0002\u0002\u00b4\u00b2\u0003\u0002",
    "\u0002\u0002\u00b4\u00b3\u0003\u0002\u0002\u0002\u00b4\u00b5\u0003\u0002",
    "\u0002\u0002\u00b5\u00b6\u0003\u0002\u0002\u0002\u00b6\u00b7\u0007)",
    "\u0002\u0002\u00b7>\u0003\u0002\u0002\u0002\u00b8\u00d4\u00072\u0002",
    "\u0002\u00b9\u00bb\u0007/\u0002\u0002\u00ba\u00b9\u0003\u0002\u0002",
    "\u0002\u00ba\u00bb\u0003\u0002\u0002\u0002\u00bb\u00bc\u0003\u0002\u0002",
    "\u0002\u00bc\u00c0\t\u0006\u0002\u0002\u00bd\u00bf\u00059\u001d\u0002",
    "\u00be\u00bd\u0003\u0002\u0002\u0002\u00bf\u00c2\u0003\u0002\u0002\u0002",
    "\u00c0\u00be\u0003\u0002\u0002\u0002\u00c0\u00c1\u0003\u0002\u0002\u0002",
    "\u00c1\u00d4\u0003\u0002\u0002\u0002\u00c2\u00c0\u0003\u0002\u0002\u0002",
    "\u00c3\u00c5\u0007/\u0002\u0002\u00c4\u00c3\u0003\u0002\u0002\u0002",
    "\u00c4\u00c5\u0003\u0002\u0002\u0002\u00c5\u00c7\u0003\u0002\u0002\u0002",
    "\u00c6\u00c8\t\u0003\u0002\u0002\u00c7\u00c6\u0003\u0002\u0002\u0002",
    "\u00c8\u00c9\u0003\u0002\u0002\u0002\u00c9\u00c7\u0003\u0002\u0002\u0002",
    "\u00c9\u00ca\u0003\u0002\u0002\u0002\u00ca\u00cc\u0003\u0002\u0002\u0002",
    "\u00cb\u00c4\u0003\u0002\u0002\u0002\u00cb\u00cc\u0003\u0002\u0002\u0002",
    "\u00cc\u00cd\u0003\u0002\u0002\u0002\u00cd\u00cf\u00070\u0002\u0002",
    "\u00ce\u00d0\t\u0003\u0002\u0002\u00cf\u00ce\u0003\u0002\u0002\u0002",
    "\u00d0\u00d1\u0003\u0002\u0002\u0002\u00d1\u00cf\u0003\u0002\u0002\u0002",
    "\u00d1\u00d2\u0003\u0002\u0002\u0002\u00d2\u00d4\u0003\u0002\u0002\u0002",
    "\u00d3\u00b8\u0003\u0002\u0002\u0002\u00d3\u00ba\u0003\u0002\u0002\u0002",
    "\u00d3\u00cb\u0003\u0002\u0002\u0002\u00d4@\u0003\u0002\u0002\u0002",
    "\u00d5\u00da\u00057\u001c\u0002\u00d6\u00d9\u00057\u001c\u0002\u00d7",
    "\u00d9\u00059\u001d\u0002\u00d8\u00d6\u0003\u0002\u0002\u0002\u00d8",
    "\u00d7\u0003\u0002\u0002\u0002\u00d9\u00dc\u0003\u0002\u0002\u0002\u00da",
    "\u00d8\u0003\u0002\u0002\u0002\u00da\u00db\u0003\u0002\u0002\u0002\u00db",
    "B\u0003\u0002\u0002\u0002\u00dc\u00da\u0003\u0002\u0002\u0002\u00dd",
    "\u00e3\u0007$\u0002\u0002\u00de\u00df\u0007$\u0002\u0002\u00df\u00e2",
    "\u0007$\u0002\u0002\u00e0\u00e2\n\u0007\u0002\u0002\u00e1\u00de\u0003",
    "\u0002\u0002\u0002\u00e1\u00e0\u0003\u0002\u0002\u0002\u00e2\u00e5\u0003",
    "\u0002\u0002\u0002\u00e3\u00e1\u0003\u0002\u0002\u0002\u00e3\u00e4\u0003",
    "\u0002\u0002\u0002\u00e4\u00e6\u0003\u0002\u0002\u0002\u00e5\u00e3\u0003",
    "\u0002\u0002\u0002\u00e6\u00e7\u0007$\u0002\u0002\u00e7D\u0003\u0002",
    "\u0002\u0002\u00e8\u00ec\u0007%\u0002\u0002\u00e9\u00eb\u000b\u0002",
    "\u0002\u0002\u00ea\u00e9\u0003\u0002\u0002\u0002\u00eb\u00ee\u0003\u0002",
    "\u0002\u0002\u00ec\u00ed\u0003\u0002\u0002\u0002\u00ec\u00ea\u0003\u0002",
    "\u0002\u0002\u00ed\u00f0\u0003\u0002\u0002\u0002\u00ee\u00ec\u0003\u0002",
    "\u0002\u0002\u00ef\u00f1\u0007\u000f\u0002\u0002\u00f0\u00ef\u0003\u0002",
    "\u0002\u0002\u00f0\u00f1\u0003\u0002\u0002\u0002\u00f1\u00f2\u0003\u0002",
    "\u0002\u0002\u00f2\u00f3\u0007\f\u0002\u0002\u00f3\u00f4\u0003\u0002",
    "\u0002\u0002\u00f4\u00f5\b#\u0003\u0002\u00f5F\u0003\u0002\u0002\u0002",
    "\u00f6\u00f7\u0007$\u0002\u0002\u00f7\u00f8\u0007$\u0002\u0002\u00f8",
    "\u00f9\u0007$\u0002\u0002\u00f9\u00fe\u0003\u0002\u0002\u0002\u00fa",
    "\u00fd\u0005G$\u0002\u00fb\u00fd\u000b\u0002\u0002\u0002\u00fc\u00fa",
    "\u0003\u0002\u0002\u0002\u00fc\u00fb\u0003\u0002\u0002\u0002\u00fd\u0100",
    "\u0003\u0002\u0002\u0002\u00fe\u00ff\u0003\u0002\u0002\u0002\u00fe\u00fc",
    "\u0003\u0002\u0002\u0002\u00ff\u0101\u0003\u0002\u0002\u0002\u0100\u00fe",
    "\u0003\u0002\u0002\u0002\u0101\u0102\u0007$\u0002\u0002\u0102\u0103",
    "\u0007$\u0002\u0002\u0103\u0104\u0007$\u0002\u0002\u0104\u0105\u0003",
    "\u0002\u0002\u0002\u0105\u0106\b$\u0003\u0002\u0106H\u0003\u0002\u0002",
    "\u0002\u0107\u0108\u0005;\u001e\u0002\u0108\u0109\u0003\u0002\u0002",
    "\u0002\u0109\u010a\b%\u0003\u0002\u010aJ\u0003\u0002\u0002\u0002\u0018",
    "\u0002\u009b\u009f\u00a2\u00a4\u00af\u00b4\u00ba\u00c0\u00c4\u00c9\u00cb",
    "\u00d1\u00d3\u00d8\u00da\u00e1\u00e3\u00ec\u00f0\u00fc\u00fe\u0004\u0003",
    "\u001b\u0002\b\u0002\u0002"].join("");


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
Scanner2.PRINT = 9;
Scanner2.ASSIGN = 10;
Scanner2.COMA = 11;
Scanner2.COMP = 12;
Scanner2.PIZQ = 13;
Scanner2.PDER = 14;
Scanner2.SUMA = 15;
Scanner2.MUL = 16;
Scanner2.DIV = 17;
Scanner2.MAYOR = 18;
Scanner2.MENOR = 19;
Scanner2.DOSPUN = 20;
Scanner2.SUB = 21;
Scanner2.CIZQ = 22;
Scanner2.CDER = 23;
Scanner2.MENORIGUAL = 24;
Scanner2.MAYORIGUAL = 25;
Scanner2.NEWLINE = 26;
Scanner2.CHAR = 27;
Scanner2.NUM = 28;
Scanner2.IDENTIFIER = 29;
Scanner2.STRING = 30;
Scanner2.COMMENT = 31;
Scanner2.COMENTARIO = 32;
Scanner2.WS = 33;

Scanner2.prototype.channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];

Scanner2.prototype.modeNames = [ "DEFAULT_MODE" ];

Scanner2.prototype.literalNames = [ null, "'def'", "'len'", "'if'", "'for'", 
                                    "'in'", "'else'", "'while'", "'return'", 
                                    "'print'", "'='", "','", "'=='", "'('", 
                                    "')'", "'+'", "'*'", "'/'", "'>'", "'<'", 
                                    "':'", "'-'", "'['", "']'", "'<='", 
                                    "'>='" ];

Scanner2.prototype.symbolicNames = [ null, "DEF", "LEN", "IF", "FOR", "IN", 
                                     "ELSE", "WHILE", "RETURN", "PRINT", 
                                     "ASSIGN", "COMA", "COMP", "PIZQ", "PDER", 
                                     "SUMA", "MUL", "DIV", "MAYOR", "MENOR", 
                                     "DOSPUN", "SUB", "CIZQ", "CDER", "MENORIGUAL", 
                                     "MAYORIGUAL", "NEWLINE", "CHAR", "NUM", 
                                     "IDENTIFIER", "STRING", "COMMENT", 
                                     "COMENTARIO", "WS" ];

Scanner2.prototype.ruleNames = [ "DEF", "LEN", "IF", "FOR", "IN", "ELSE", 
                                 "WHILE", "RETURN", "PRINT", "ASSIGN", "COMA", 
                                 "COMP", "PIZQ", "PDER", "SUMA", "MUL", 
                                 "DIV", "MAYOR", "MENOR", "DOSPUN", "SUB", 
                                 "CIZQ", "CDER", "MENORIGUAL", "MAYORIGUAL", 
                                 "NEWLINE", "L", "N", "SPACES", "CHAR", 
                                 "NUM", "IDENTIFIER", "STRING", "COMMENT", 
                                 "COMENTARIO", "WS" ];

Scanner2.prototype.grammarFileName = "Scanner2.g4";


 var CommonToken = require('antlr4/Token').CommonToken;
  var Parser2 = require('./Parser2').Parser2;
  var old_lexer = Scanner2;
  Scanner2 = function() {
    old_lexer.apply(this, arguments);
    this.reset.call(this);
  }

  Scanner2.prototype = Object.create(old_lexer.prototype);
  Scanner2.prototype.constructor = Scanner2;


  Scanner2.prototype.reset = function() {
    // A queue where extra tokens are pushed on (see the NEWLINE lexer rule).
    this.token_queue = [];
    // The stack that keeps track of the indentation level.
    this.indents = [];
    // The amount of opened braces, brackets and parenthesis.
    this.opened = 0;
    antlr4.Lexer.prototype.reset.call(this);
  };

  Scanner2.prototype.emitToken = function(token) {
    this._token = token;
    this.token_queue.push(token);
  };

  /**
   * Return the next token from the character stream and records this last
   * token in case it resides on the default channel. This recorded token
   * is used to determine when the lexer could possibly match a regex
   * literal.
   *
   */
  Scanner2.prototype.nextToken = function() {
    // Check if the end-of-file is ahead and there are still some DEDENTS expected.
    if (this._input.LA(1) === Parser2.EOF && this.indents.length) {
      // Remove any trailing EOF tokens from our buffer.
      this.token_queue = this.token_queue.filter(function(val) {
        return val.type !== Parser2.EOF;
      });

      // First emit an extra line break that serves as the end of the statement.
      this.emitToken(this.commonToken(Parser2.NEWLINE, "\n"));

      // Now emit as much DEDENT tokens as needed.
      while (this.indents.length) {
        this.emitToken(this.createDedent());
        this.indents.pop();
      }

      // Put the EOF back on the token stream.
      this.emitToken(this.commonToken(Parser2.EOF, "<EOF>"));
    }

    var next = antlr4.Lexer.prototype.nextToken.call(this);
    return this.token_queue.length ? this.token_queue.shift() : next;
  };

  Scanner2.prototype.createDedent = function() {
    return this.commonToken(Parser2.DEDENT, "");
  }

  Scanner2.prototype.commonToken = function(type, text) {
    var stop = this.getCharIndex() - 1;
    var start = text.length ? stop - text.length + 1 : stop;
    return new CommonToken(this._tokenFactorySourcePair, type, antlr4.Lexer.DEFAULT_TOKEN_CHANNEL, start, stop);
  }

  // Calculates the indentation of the provided spaces, taking the
  // following rules into account:
  //
  // "Tabs are replaced (from left to right) by one to eight spaces
  //  such that the total number of characters up to and including
  //  the replacement is a multiple of eight [...]"
  //
  //  -- https://docs.python.org/3.1/reference/lexical_analysis.html#indentation
  Scanner2.prototype.getIndentationCount = function(whitespace) {
    var count = 0;
    for (var i = 0; i < whitespace.length; i++) {
      if (whitespace[i] === '\t') {
        count += 8 - count % 8;
      } else {
        count++;
      }
    }
    return count;
  }

  Scanner2.prototype.atStartOfInput = function() {
    return this.getCharIndex() === 0;
  }
    //anterior
  /*private final DenterHelper denter = DenterHelper.builder()
    .nl(NEWLINE)
    .indent(Parser2.INDENT)
    .dedent(Parser2.DEDENT)
    .pullToken(Scanner2.super::nextToken);

  @Override
  public Token nextToken() {
    return denter.nextToken();
  }*/






Scanner2.prototype.action = function(localctx, ruleIndex, actionIndex) {
	switch (ruleIndex) {
	case 25:
		this.NEWLINE_action(localctx, actionIndex);
		break;
	default:
		throw "No registered action for:" + ruleIndex;
	}
};


Scanner2.prototype.NEWLINE_action = function(localctx , actionIndex) {
	switch (actionIndex) {
	case 0:

		                 var newLine = this.text.replace(/[^\r\n]+/g, '');
		                 var spaces = this.text.replace(/[\r\n]+/g, '');
		                 var next = this._input.LA(1);
		                 if (this.opened > 0 || next === 13 /* '\r' */ || next === 10 /* '\n' */ || next === 35 /* '#' */) {
		                   // If we're inside a list or on a blank line, ignore all indents,
		                   // dedents and line breaks.
		                   this.skip();
		                 } else {
		                   this.emitToken(this.commonToken(Parser2.NEWLINE, newLine));
		                   var indent = this.getIndentationCount(spaces);
		                   var previous = this.indents.length ? this.indents[this.indents.length - 1] : 0;
		                   if (indent === previous) {
		                     // skip indents of the same size as the present indent-size
		                     this.skip();
		                   } else if (indent > previous) {
		                     this.indents.push(indent);
		                     this.emitToken(this.commonToken(Parser2.INDENT, spaces));
		                   } else {
		                     // Possibly emit more than 1 DEDENT token.
		                     while (this.indents.length && this.indents[this.indents.length - 1] > indent) {
		                       this.emitToken(this.createDedent());
		                       this.indents.pop();
		                     }
		                   }
		                 }
		               
		break;
	default:
		throw "No registered action for:" + actionIndex;
	}
};
Scanner2.prototype.sempred = function(localctx, ruleIndex, predIndex) {
	switch (ruleIndex) {
		case 25:
			return this.NEWLINE_sempred(localctx, predIndex);
    	default:
    		throw "No registered predicate for:" + ruleIndex;
    }
};

Scanner2.prototype.NEWLINE_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return this.atStartOfInput();
		default:
			throw "No predicate with index:" + predIndex;
	}
};



exports.Scanner2 = Scanner2;

