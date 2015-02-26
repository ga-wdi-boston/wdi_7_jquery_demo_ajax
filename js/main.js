$(document).ready(function(){
  Blog.init();
});

var Blog = (function(){

  var init = function(){
    _requestArticles();
    $('#get-articles').click(_requestArticles);
  };

  var _requestArticles = function(){
    var $list = $('#articles');
    $.ajax({
      url: 'http://localhost:3000/articles',
      type: 'GET',
    }).done(function(data, textStatus, jqXHR){
      _output.call($list, data);
    })
  };

  var _output = function(articles){
    for (var i = 0; i < articles.length; i++){
      _populateArticle.call(this, articles[i], i);
      _populateComments.call(this, articles[i], i);
    }
  };

  var _addTo = function(target, selector, text){
    target.append($('<' + selector + '>').text(text));
  };

  var _populateArticle = function(article, id){
    _addTo(this, 'li', article.title);
    _addTo(this, 'div id=article-' + id, article.body);
  };

  var _populateComments = function(article, id){
    _addTo(this, 'ul id=comments-' + id);
    var $com = $('#comments-' + id);
    for (var i = 0; i < article.comments.length; i++){
      $com.append($('<li>').text(article.comments[i].body + " --" + article.comments[i].creator));
    }
  };

  return {
    init: init
  }

})();
