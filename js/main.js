var DataModule = (function(){

  var showData = function(data){
    var $articles = $('#articles');
 // debugger;
    // for(var i = 0; i < data.length; i++ ){
    //   $articles.append($('<li>').text(' Article Title: ' + data[i].title + ' Content: ' + data[i].body ));
    // };
    debugger;
    for(var i = 0; i < data.length; i++ ){
       $articles.append('<br>' + '<div id=article-' + i + '>' + ' Article ' + data[i].id + ' Title: ' + data[i].title + ' Content: ' + data[i].body + '</div>');
  //  $('#articles').append('<div id=article-' + i + '><p>' + data[i].title + '<br>' + data[i].body + '</p></div>');
    };
  };

  return{
    showData: showData
  };
})();

$(document).ready(function(){
  // Blog.ArticleList.init('#get-articles', '#articles', '#article-count');
  $.ajax({
    url: 'http://localhost:3000/articles',
    type: 'GET'
  }).done(function(data, textStatus,jqXHR){
    DataModule.showData(data);
   // console.log(data, textStatus,jqXHR);
  }).fail(function(data, textStatus,errorThrown){
    console.log(data, textStatus,errorThrown);
  });
});
