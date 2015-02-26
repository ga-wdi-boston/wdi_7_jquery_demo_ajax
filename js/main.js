$(document).ready(function() {

  $.ajax({
    url: 'http://localhost:3000/articles',
    type: 'GET',
    dataType: 'json'
  }).done(ArticleApp.getAritcles);

});

var ArticleApp = ArticleApp || {};

ArticleApp.getAritcles = function(data) {
  var str = JSON.stringify(data);
  var parsed = JSON.parse(str);

  parsed.forEach(function(article) {
    $('#article-id').append('<p>' + 'Article ' + article.id + ': ' + article.body);
  });
};

// Iterate over all the articles return from the server
// and create html for each article
// the HTML for each article should be wrapped in a div with an
// id="article-id"
