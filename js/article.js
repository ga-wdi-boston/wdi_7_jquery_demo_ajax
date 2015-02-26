// working code
// var Blog = Blog || {};

// Blog.Article = function(id, title, body){
//   this.id = id;
//   this.title = title;
//   this.body = body;
// };

// Blog.Article.prototype = {
//   showView: function(){
//     var articleHTML = '<li id=article_' + this.id + '>' + this.title;
//     articleHTML += '<div>' + this.body + '</div>';
//     articleHTML += '</li>';

//     return articleHTML;
//   }
// };

//inclass demo
var ArticleApp = ArticleApp || {};

ArticleApp.Article = function(remoteArticle){
  this.title = remoteArticle.title;
  this.body = remoteArticle.body;
  this.id = remoteArticle.id;
  this.comment = []
  remoteArticle.comments.forEach(function(comment){
    var newComment = {};
    newComment.creator = comment.creator;
    newComment.body = comment.body;
    // NOTE: Without the .bind, the line below gives the error 'cannot read push of undefined' - doesn't know what this is
     //debugger;
     this.comment.push(newComment);
  }, this);

  //}.bind(this)); or whats above will
  // define what keyword this is supposed to mean
};

// Creating an object constructor instead of literal because we'll be creating multiple articles, as opposed to the singular list of articles
ArticleApp.Article.prototype.render = function() {
  // html for one article
  var html = "<div id='article-'" + this.id + ">";
  html += '<h3>' + this.title + '</h3>';
  html += '<article>' + this.body + '</article>';

  html += '<br>Comments<br>';
  this.comment.forEach(function(comment){
    html += '<i>' + comment.creator + '</i>';
    html += '<p>' + comment.body + '</p>';

  });

  html += '</div>';
  return html;
};
