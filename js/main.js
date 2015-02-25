$(document).ready(function(){
  $.ajax({
    url: 'http://localhost:3000/articles',
    type: 'get'
  }).done(ArticleApp.getArticles);
});

// Create a namespace for my app
var ArticleApp = ArticleApp || {};

// callback handler for all articles from server
ArticleApp.getArticles = function(data){
  debugger;
  console.log(data);

  // Iterate over all the articles returned from the
  // server.

  // And create html for each article

  // The HTML for each article should be wrapped in a div
  // that has and id "article-<id>"
  // <div id="article-17"> .... </div>
};
