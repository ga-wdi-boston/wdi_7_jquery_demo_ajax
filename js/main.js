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
      _addToList('li', dataJSON[i].title);
      _addToList('p', dataJSON[i].body);
      _addToList('ul id=comments' + i);
      _populateComments.call($('#comments' + i), dataJSON[i]);
    }
  };

  var _addToList = function(selector, text){
    $list.append($('<' + selector + '>').text(text));
  };

  var _populateComments = function(article){
    for (var i = 0; i < article.comments.length; i++){
      this.append($('<li>').text(article.comments[i].body));
    }
  };

  return {
    init: init
  }

})();
