$(document).ready(function(){

  $.ajax({
    url: 'http://localhost:3000/articles',
    type: 'GET'
  }).done(ArticleApp.getArticles);
});

// Create a namespace for my app
var ArticleApp = ArticleApp || {};
//callback handler for all articles from server

 ArticleApp.getArticles = function(remoteArticles){
    // debugger;
    console.log(remoteArticles);
    // Iterate over all articles returned from the server

    // for(var i = 0; i < articles.length; i++){
    //   //create html for each article.
    //   $('ul').append('<li id=article' + articles[i].id + '>' + articles[i].title);
    // }
    // $('#container').append('<ul>');
    // var articlesHTML = "<div id='" + data.id + "'><dt>Article title</dt><dd>";
    // articlesHTML += data.title + "</dd>";
    // articlesHTML +=  data.body;
    // $('#container').append(articlesHTML);

    // console.log(data[1].title);
    var html = '<ul>';
    remoteArticles.forEach(function(article){
      html += "<li id='article-" article.id + "'>";
      html += "<h3>" + article.title + "</h3">;
      html += "<article>" + article.body + "</article>";
      html += "</li>"

      html += "<br>Comments<br>"
      article.comments.forEach(function(comment){
        html += "<i>" + comment.creator + "</i>";
        html += "<p>" + comment.body + "</p>";
      });
    });
    html + '</ul'>
    $('#continer').append(html);
  };





// The HTML for each article should we wrapped in a div that has an id "article-id" <div id="article-n">
