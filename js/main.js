$(document).ready(function(){
  $.ajax({
    url: 'http://localhost:3000/articles',
    type: 'GET'
  }).done(ArticleApp.showData);
});

var ArticleApp = {};

ArticleApp.showData = function(data){
  for(var i = 0; i < data.length; i++){
    $('#articles').append('<div id=article-' + i + '><p>' + data[i].title + '<br>' + data[i].body + '</p></div>');
  };
};

