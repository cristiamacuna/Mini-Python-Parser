var antlr4 = require('antlr4/index.js');

var editor =CodeMirror(document.getElementById("codeeditor"),{
    value: "#Suba un archivo con código mini-python, o escriba su código aquí",

  mode:  "python",
  lineNumbers: true
});

function readFiles(event){
  var files = event.target.files;
  for (var i = 0, f; f = files[i]; i++)
     {
 
         var reader = new FileReader();
         reader.onload = (function(reader)
         {
             return function()
             {
                 var contents = reader.result;
                 var lines = contents.split('\n');
                 //////
                 editor.setValue(contents);
                 $('#filemodal').modal('hide');
                 $('#fileList').append('<li>'+files[0]['name']+'</li>');
                
             }
         })(reader);
 
         reader.readAsText(f);
     }
 }
 document.getElementById('files').addEventListener('change', readFiles, false);




