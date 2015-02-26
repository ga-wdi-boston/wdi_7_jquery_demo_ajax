// Create a namespace for my app
var ArticleApp = ArticleApp || {};

ArticleApp.Article = function(remoteArticle){
  this.title = remoteArticle.title;
  this.body = remoteArticle.body;
  this.id = remoteArticle.id;
  this.comment = [];
  remoteArticle.comments.forEach(function(commet){
    var newComment = {};
    newComment.creator = comment.creator;
    newComment.body = comment.body;
    this.comment.push(newComment);
  }).bind(this));
};

ArticleApp.Article.prototype.reder = function(){
  // spit out the html for one article
  var html = "div id='article-" + this.id + "'>";
  html += "<h3>" + this.title + "</h3>";
  html += "<article>" + this.body + "</article>";

  html += "<br>Comments<br>";
  this.comments.
  html += "</div>";
  return html
};
