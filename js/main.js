var $list = $('#articles');

var ArticleApp = ArticleApp || {};

ArticleApp.getArticles = function(data){
  $.ajax({
    url: 'http://localhost:3000/articles',
    type: 'GET'
  }).done(function(data, textStatus){
    for(var i = 0; i < data.length; i++){
      var $newArticle = $('<li id="article-' + data[i].id + '">');
      $list.append($newArticle);
    }
  });

$(document).ready(function() {
  $('#get-articles').click(ArticleApp.getArticles);
  $("input[value='Create Article']").click(function(){
    event.preventDefault();
  });
});
