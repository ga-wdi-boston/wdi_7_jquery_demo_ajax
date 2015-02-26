// var Blog = Blog || {};

// Blog.ArticleList = {
//   articlesCallbackHandler: function(articles){
//    var articlesHTML = '',
//    article;
//     for(var i = 0; i < articles.length; i++){
//       article = new Blog.Article(articles[i].id, articles[i].title, articles[i].body, articles[i].comments)
//       articlesHTML += article.showView();
//     };
//     this.articlesListElem.empty();
//     this.articlesListElem.append(articlesHTML);
//   },
//   getArticles: function(){

//     $.ajax({
//       url: "http://localhost:3000/articles",
//       type: "GET",
//       dataType: 'json',
//     }).success(this.articlesCallbackHandler.bind(this));
//   },
//   init: function(getArticlesID, articlesListID){
//     this.getArticlesButton = $(getArticlesID);
//     this.articlesListElem = $(articlesListID);
//     this.getArticlesButton.on('click', this.getArticles.bind(this));
//     this.getArticlesButton.trigger('click');
//   }

// };


// in class demo
// Create a namespace for my app
var ArticleApp = ArticleApp || {};

ArticleApp.ArticleList = {
 get: function(){
   $.ajax({
     url: 'http://localhost:3000',
     dataType: 'json'
   }).done(ArticleApp.ArticleList.articlesHandler);
 },
 articlesHandler: function(remoteArticles){
   var html = "<ul>", article;

   remoteArticles.forEach(function(remoteArticle){
   // Create a new article from a remoteArticle
   article = new ArticleApp.Article(remoteArticle)
   // Generate HTML for one article
   html += article.render();
 });
 html += "<ul>";
 $('#container').append(html);
 }
};


