$(document).ready(function(){
  $.ajax({
   url: 'http://localhost:3000/articles',
   type: 'get'
  }).done(ArticleApp.getArticles);
});

var ArticleApp = ArticleApp || {};

ArticleApp.getArticles = function(data){
 console.log(data);

 // Iterate over all the articles returned from the
 // server.

 // And create html for each article

 // The HTML for each article should be wrapped in a div
 // that has and id "article-<id>"
 // <div id="article-17"> .... </div>
};

//Iterate over all the articles returned from the server and create html for each article.
// The HTML for each article should be wrapped in a div that has an id of "article-<id>" (for article 17, <div id="article-17">)
