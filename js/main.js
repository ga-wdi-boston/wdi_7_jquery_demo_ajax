$(document).ready(function (){



	$.ajax({
		url: 'http://localhost:3000/articles',
		type: 'GET',
		dataType; 'json'
	}).done(ArticleApp.getArticles);
});


//create a namespace for the app
var ArticleApp = ArticleApp || {};

// Callback handler for all articles from server
ArticleApp.getArticles = function(data){
          console.log(data);
		}

// homework is iterate over all the articles returned from the server.


//create HTML for each articles

//the HTML for each article should be wrapped in a div

//that has an id "article-<id>"
//<div id="article-17"> ....</div>