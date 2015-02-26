// create a namespace for my app
var ArticleApp = ArticleApp || {}

ArticleApp.Article = function(remoteArticle){
  this.title = remoteArticle.title;
  this.body = remoteArticle.body;
  this.id = remoteArticle.id;

  // create copy of remote comments
  this.comments = [];
  remoteArticle.comments.forEach(function(comment){
    var newComment = {}
    newComment.creator = comment.creator;
    newComment.body = comment.body;
    this.comments.push(newComment);
  }, this);
}

ArticleApp.Article.prototype.render = function(){
  // spit out html for one article
  var html = "<div id='article-" + this.id + "'>";
  html += "<h3>" + this.title + "</h3>";
  html += "<article>" + this.body + "</article>";
  html += "<br>Comments<br>";
  this.comments.forEach(function(comment){
    html += "<i>" + comment.creator + "</i>";
    html += "<p>" + comment.body + "</p>";
  });

  html += "</div>";
  return html;
}
