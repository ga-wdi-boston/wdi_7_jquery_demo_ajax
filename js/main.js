$(document).ready(function (){

	$.ajax({
		url: 'http://localhost:3000/articles',
		type: 'GET',
		dataType: 'json'
	}).done(ArticleApp.articlesCallbackHandler);
});


//create a namespace for the app
var ArticleApp = ArticleApp || {};

// Callback handler for all articles from server
  ArticleApp.articlesCallbackHandler = function(articles) {
    var articlesHTML = '';

    // iterate over all the articles returned from the server.
    for(var i = 0; i < articles.length; i++){
      //create HTML for each articles
      //that has an id "article-<id>", <div id="article-17"> ....</div>
      articlesHTML += '<li id=article_' + articles[i].id + '>' + articles[i].title;
      //the HTML for each article should be wrapped in a div
      articlesHTML += '<div>' + articles[i].body + '</div>';
      articlesHTML += '</li>';
    };

    // Populate the Articles list
    $('#articles').append(articlesHTML);
  };
