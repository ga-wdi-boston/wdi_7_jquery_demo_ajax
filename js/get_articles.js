$(document).ready(function(){

  // Get Articles from server using Ajax
  articleCount = 0;
  var getArticles = function(){
    // Retrieve all the articles
    $.ajax({
        url: "http://localhost:3000/articles",
        type: "GET",
        dataType: 'json'
      })
    .done(articlesCallbackHandler)
    .done(function(){
      // set the article count
      $('#get-articles').after("<p> " + articleCount + " Articles</p>");
    });
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

    articleCount = articles.length;

  };

  // Set up click handler for getting articles.
  $('#get-articles').on('click', getArticles);

  // Simulate a user click event.
  $('#get-articles').trigger('click');

}); // end ready