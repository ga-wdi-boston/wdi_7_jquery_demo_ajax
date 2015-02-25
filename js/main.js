$(document).ready(function(){

  $.ajax({
    url: "http://localhost:3000/articles",
    type: 'GET'
  }).done(ArticleApp.showArticles);

  ;
});

var ArticleApp = ArticleApp || {};

  ArticleApp.getArticles = function(data){
    console.log(data);
  };

  ArticleApp.showArticles = function(data){
  data.forEach(function(article){
    $('#articles').append('<div id="article-' + article.id + '"></div>');
    $('#article-'+ article.id).append('<h1> Title:' + article.title + '</h1>');
    $('#article-'+ article.id).append('<p>' + article.body + '</p>');
    article.comments.forEach(function(comment){
      $('#article-'+ article.id).append('<h4> Written By:' + comment.creator + '</h4>');
      $('#article-'+ article.id).append('<p style ="font-size: 6px">' + comment.body + '</p>');
    });
  });


}


// iterate over all the articles returned from the server and create html for each article

// the html for each article should be wrapped in a div that has an id "article-<id>"
// <div id="article-17">.....</div>
