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
 //var stringifiedArticlesJSON = JSON.stringify(data);
 //var parsedJSON = JSON.parse(stringifiedArticlesJSON);

 //$('#container').append('<ul>');
 for(var i = 0; i < data.length; i++){

  $('#articles').append("<br><div id= article-'" + data[i].id + "'><li> Article Title: " + data[i].title + '</li>'+ "<li> Body: " + data[i].body + '</li>' + "</div>");
    for(var j = 0; j < data[i].comments.length; j++){
      $('#articles').append("<li> Comment by " + data[i].comments[j].creator + ": " + data[i].comments[j].body + '</li>');
    };

 };


 // Iterate over all the articles returned from the
 // server.

 // And create html for each article

 // The HTML for each article should be wrapped in a div
 // that has and id "article-<id>"
 // <div id="article-17"> .... </div>
};

