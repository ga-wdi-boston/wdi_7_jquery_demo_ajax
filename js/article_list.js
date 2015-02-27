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
    var html = "", article;

    remoteArticles.forEach(function(remoteArticle){
    // Create a new article from a remoteArticle
    article = new ArticleApp.Article(remoteArticle)
    // Generate HTML for one article
    html += article.render();
  });
  html += "<ul>";
  $('#articles').append(html);
  }
};
