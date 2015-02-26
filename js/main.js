$(document).ready(function(){
 $.ajax({
   url: 'http://localhost:3000/articles',
   type: 'GET'
 }).done(ArticleApp.getArticles);

});


var ArticleApp = ArticleApp || {};

ArticleApp.getArticles = function(data){
  // debugger;
  console.log(data);
  for(var i = 0; i < data.length; i++){
    $('#articles').append("<br><div id= article-'" + data[i].id + "'><h3> " + data[i].title + '</h3>' + "<p> " + data[i].body + '</p>' + "</div>");
  };
};


