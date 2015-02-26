$(document).ready(function(){

$('#get-articles').click(ArticleApp.getArticles);
$('#hide-articles').click(ArticleApp.hideArticles);
$('#show-articles').click(ArticleApp.showArticles);

});


var ArticleApp = ArticleApp || {};

ArticleApp.getArticles = function(data){
  // debugger;
  // console.log(data);
  $.ajax({
     url: 'http://localhost:3000/articles',
     type: 'GET'
   }).done(function(data, textStatus){
     for(var i = 0; i < data.length; i++){
      $('#articles').append("<br><div id= article-'" + data[i].id + "'><h3> " + data[i].title + '</h3>' + "<p> " + data[i].body + '</p>' + "</div>");
    };
   });
};

ArticleApp.hideArticles = function(){
  $('#articles').hide("slow");
};

ArticleApp.showArticles = function(){
  $('#articles').show("slow");
};
