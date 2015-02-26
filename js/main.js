var $list;
$(document).ready(function(){
  Blog.init();
});

var Blog = (function(){

  var init = function(){
    $list = $('#articles');
    $.ajax({
      url: 'http://localhost:3000/articles',
      type: 'GET',
    }).done(function(data, textStatus, jqXHR){
      _output(data);
    }).fail(function(jqXHR, textStatus, errorThrown){
      console.log(jqXHR, textStatus, errorThrown);
    })
  };

  var _output = function(dataJSON){
    for (var i = 0; i < dataJSON.length; i++){
      _populateArticle(dataJSON[i], i);
      _populateComments(dataJSON[i], i);
    }
  };

  var _addToList = function(target, selector, text){
    target.append($('<' + selector + '>').text(text));
  };

  var _populateArticle = function(article, id){
    _addToList($list, 'li', article.title);
    _addToList($list, 'div id=article-' + id, article.body);
  };

  var _populateComments = function(article, id){
    _addToList($list, 'ul id=comments-' + id);
    var $com = $('#comments-' + id);
    for (var i = 0; i < article.comments.length; i++){
      $com.append($('<li>').text(article.comments[i].body + " --" + article.comments[i].creator));
    }
  };

  return {
    init: init
  }

})();
