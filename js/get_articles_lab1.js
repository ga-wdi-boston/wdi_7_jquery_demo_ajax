$(document).ready(function(){

  // Get Articles from server using Ajax
  var getArticles = function(){
    // Retrieve all the articles
    $.ajax({
        url: "http://localhost:3000/articles/555",
        type: "GET",
        dataType: 'json',
        beforeSend: function(jqXhr){ 
          alert("before sending the ajax request");
        },
        complete: function(jqXhr, textStatus){
          alert("Completed, status = " + textStatus);
        },
        error: function(jqXhr, textStatus, errorThrown){
          alert("Error, status = " + textStatus);
        }
    }).success(articlesCallbackHandler);
  },
  // Callback/Handler that is invoked when the Ajax 
  // request is done.
  articlesCallbackHandler = function(articles) {
    var articlesHTML = '';

    // Build the HTML for each Article
    for(var i = 0; i < articles.length; i++){
      articlesHTML += '<li id=article_' + articles[i].id + '>' + articles[i].title;
      articlesHTML += '<div>' + articles[i].body + '</div>';
      articlesHTML += '</li>';
    };

    // Fill in the Article list
    $('#articles').append(articlesHTML);
  };

  // Set up click handler for getting articles.
  $('#get-articles').on('click', getArticles);

  // Simulate a user click event.
  $('#get-articles').trigger('click');

}); // end ready