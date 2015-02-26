$(document).ready(function(){

  $.ajax({
    url: 'http://localhost:3000/articles',
    type: 'GET'
  }).done(ArticleApp.getArticles);
});

// Create a namespace for my app
var ArticleApp = ArticleApp || {};
//callback handler for all articles from server

 ArticleApp.getArticles = function(data){
    // debugger;

    // Iterate over all articles returned from the server

    // for(var i = 0; i < articles.length; i++){
    //   //create html for each article.
    //   $('ul').append('<li id=article' + articles[i].id + '>' + articles[i].title);
    // }
    // $('#container').append('<ul>');
    var articlesHTML = "<div id='" + data.id + "'><dt>Article title</dt><dd>";
    articlesHTML += data.title + "</dd>";
    articlesHTML +=  data.body;
    $('#container').append(articlesHTML);
    console.log(data);
  };





// The HTML for each article should we wrapped in a div that has an id "article-id" <div id="article-n">
