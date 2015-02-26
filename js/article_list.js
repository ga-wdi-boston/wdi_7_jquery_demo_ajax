// var ArticleApp = ArticleApp || {};

// ArticleApp.ArticleList = {

//   get: function(){
//     $.ajax({
//       url: 'http://localhost:3000',
//       dataType: 'json'
//     }).done(ArticleApp.ArticleList.articlesHandler);
//   },
//   articlesHandler: function(remoteArticles){
//     var html = '<ul>';
//     remoteArticles.forEach(function(remoteArticle){
//       var article = new ArticleApp.Article(remoteArticle);
//       html += article.render();
//     });
//     html +="<ul>";
//     $('#container').append(html)
//   }
// };

// $(document).ready(ArticleApp.ArticleList.get);

// //this would be in a new document
// var ArticleApp = ArticleApp || {};

// ArticleApp.Article = function(remoteArticle){
//   this.title = remoteArticle.title;
//   this.body = remoteArticle.body;
//   this.id = remoteArticle.id;
// };

// ArticleApp.Article.prototype.render = function(){
//   html = "<div id='article-" + this.id + "'>"
//   html += "<h3>" + this.title + "</h3>";
//   html += "<article>" + this.body + "</article";
//   return html;
// };
