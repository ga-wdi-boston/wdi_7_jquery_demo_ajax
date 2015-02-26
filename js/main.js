/*$(document).ready(function(){
  var jqxhr = $.get( "http://localhost:3000/articles", function(data) {
  //alert( "success" );
  console.log(data)
})
  .done(function() {
    console.log( "second success" );
  })
  .fail(function() {
    console.log( "error" );
  })
  .always(function() {
    console.log( "finished" );    //originally console.log was alert but jason wanted to see it in the console
  });
});*/

$(document).ready(function(){
  $.ajax({
    url: 'http://localhost:3000/articles',
    type: 'GET'
  }).done(function(data, textStatus, jqXHR){
    console.log(data, textStatus, jqXHR);
  }).fail(function(jqXHR,textStatus, errorThrown ){
    console.log(data, textStatus, jqXHR);
});
});
