// Create a namespace for my app
var ArticleApp = ArticleApp || {};

ArticleApp.ArticleList = {
  get: function(){
    $.ajax({
      url: 'http://localhost:3000',
      dataType: 'json'
    }).done(this.articlesHandler);
  };
};

articlesHandler = function(remoteArticle){
  var html = '<ul>';

  remoteArticles.forEach(function(articleArticle){
    // Create a new article from a remoteArticle
    article = new Article(remoteArticle)
    // Generate HTML for one article
    html += article.render();
  });

  html += '<ul>';
};
