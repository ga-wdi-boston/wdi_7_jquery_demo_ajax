$(document).ready(function(){
<<<<<<< HEAD
  ArticleApp.ArticleList.get();
  // $.ajax({
  //   url: 'http://localhost:3000/articles',
  //   type: 'GET'
  // }).done(ArticleApp.getArticles);
=======
  $.ajax({
    url: 'http://localhost:3000/articles',
    type: 'get'
  }).done(ArticleApp.getArticles);
>>>>>>> c34d45dd3a37e896e924b3047a2bb4305bfd141b
});

// Create a namespace for my app
var ArticleApp = ArticleApp || {};
<<<<<<< HEAD
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
=======

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
>>>>>>> c34d45dd3a37e896e924b3047a2bb4305bfd141b
