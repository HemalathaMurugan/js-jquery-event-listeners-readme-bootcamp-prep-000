//define functions here

 function getIt(){
 $('p').on("click", function(){
    alert('Hey!');
  });
}
function frameIt(){
  $('img').on("load",function(){
    $('img').addClass("tasty");
  });
}
function pressIt(){
  $('form.input').on("keydown",function(e){
    if($('e.key').val()==="G"){
      alert("You pressed G");
      return;
    }
  });
}
$(document).ready(function(){

// call functions here

});


