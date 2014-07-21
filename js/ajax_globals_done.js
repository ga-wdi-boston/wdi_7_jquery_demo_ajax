$(document).ready(function(){
  // Ajax Global Functions

  // Fires at beginning of Ajax Request
  $(document).ajaxStart(function(){
  
   
    //Disable the get all articles button.
    $('#get-articles').prop('disabled', true);

  
    // Fires when Ajax Request starts
    $("#ajaxSpinnerImage").show();

  }).ajaxSend(function(event, xhr, options){
    //Clear the list of articles here?
    if(options.type !== 'POST'){
      $('#articles').html('');
    }
  }).ajaxComplete(function(event, xhr, options){

  }).ajaxStop(function(){

    // Fires when Ajax Request is done
    $("#ajaxSpinnerImage").hide();

    //Disable the get all articles button.
    $('#get-articles').prop('disabled', false);

    })
  .ajaxError(function( event, request, settings ) {

    // Fires when an Ajax Error Occurs
    $( "#msg" ).append( "<p>Error requesting page " + settings.url + "<p>" );
  });
  
});
