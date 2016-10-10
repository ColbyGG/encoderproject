$("#inputArea").keydown(function(e) {
  if(e.keyCode == 13){
    $("#textArea").append(document.getElementById('inputText').value += "");
    document.getElementById('inputText').value = "";
  }
});
