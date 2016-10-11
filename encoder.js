$("#inputArea").keydown(function(e) {
  if(e.keyCode == 13){
    $("#textArea").append(document.getElementById('inputText').value += "");
    document.getElementById('inputText').value = "";
  }
});

$("input[type='radio']").click(function(){
  $("input:checked").prop('checked', false);
  $(this).prop('checked', true);
});
