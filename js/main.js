$(document).ready(function(){
  $.ajax({
   url: 'http://localhost:3000/articles',
   type: 'get'
  }).done(getArticles);
});


var getArticles = function(articleData){
  var stringifiedArticles = JSON.stringify(articleData);
  var parsedArticles = JSON.parse(stringifiedArticles);

  parsedArticles.forEach(function(article) {
    $('#articles').append("<li class = 'article-" + article.id + "'>" + '<h2>' + article.title + '</h2> <br> <p>' + article.body + '</p> </li>');
  });
};



//Iterate over all the articles returned from the server and create html for each article.
// The HTML for each article should be wrapped in a div that has an id of "article-<id>" (for article 17, <div id="article-17">)
