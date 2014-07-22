var Blog = Blog || {};

Blog.Article = function(id, title, body){
  this.id = id;
  this.title = title;
  this.body = body;
};

Blog.Article.prototype = {
  showView: function(){
    var articleHTML = '<li id=article_' + this.id + '>' + this.title;
    articleHTML += '<div>' + this.body + '</div>';
    articleHTML += '</li>';

    return articleHTML;
  }
};