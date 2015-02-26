$(document).ready(function(){
  $.ajax({
   url: 'http://localhost:3000/articles',
   type: 'get',
   dataType: 'json'
  }).done(getArticles);
});


var getArticles = function(articleData){
  articleData.forEach(function(article) {
    $('#articles').append("<li class = 'article-" + article.id + "'>" + '<h4>' + article.title + '</h4> <br> <p>' + article.body + '</p> </li>');
  });
};



//Iterate over all the articles returned from the server and create html for each article.
// The HTML for each article should be wrapped in a div that has an id of "article-<id>" (for article 17, <div id="article-17">)
