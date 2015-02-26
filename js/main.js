$( document ).ready(function() {

  $.ajax({
    url: 'http://localhost:3000/articles',
    type: 'GET'
  }).done(function(data, textStatus, jqxhr){
      peopleData = data;
    console.log(data, textStatus);
  }).fail(function(jqXHR, textStatus, errorThrown){
    console.log(jqXHR, textStatus, errorThrown);

  });

  $('#articleDiv').append('<ul>');
    peopleData = $.stringify(data);
    peopleDataString = $.parseJSON(peopleData);

    for (var i = 0; i < peopleDataString.length; i++) {
     $('ul').append(('<li>') + peopleDataString.title[i] + ('</li>'));
    };
  // };


});

