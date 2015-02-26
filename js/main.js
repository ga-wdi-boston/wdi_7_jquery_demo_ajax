$(document).ready(function(){
  var getArticles = function(){
 $.ajax({
   url: 'http://localhost:3000/articles',
   type: 'get'
 }).done(ArticleHTML.getArticles);
};

console.log(data);
// Create a namespace for my app
var ArticleHTML = ArticleHTML || {};

// callback handler for all articles from server
ArticleHTML.getArticles = function(data){


var articlesHTML = '';
  for(var i = 0; i < articles.length; i++){
      articlesHTML += '<li id=article_' + articles[i].id + '>' + articles[i].title;
      articlesHTML += '<div>' + articles[i].body + '</div>';
      articlesHTML += '</li>';
    };
   $('#articles').append(articlesHTML);

   };


};

