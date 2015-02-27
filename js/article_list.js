// Create a namespace for my app
var ArticleApp = ArticleApp || {};

ArticleApp.ArticleList = {
  articleListEl: null,
  get: function(){
    $.ajax({
      url: 'http://localhost:3000',
      dataType: 'json'
    }).done(ArticleApp.ArticleList.articlesHandler.bind(this));
  },
  articlesHandler: function(remoteArticles){
    var html = "", article;

    this.articleListEl.empty();

    remoteArticles.forEach(function(remoteArticle){
      // Create a new article from a remoteArticle
      article = new ArticleApp.Article(remoteArticle);
      // Generate HTML for one article
      html += article.render();
    });

    // Add HTML to the list
    this.articleListEl.append(html);
  },
  init: function($getArticlesButton, $articleListEl){
    // DOM element for list of articles
    this.articleListEl = $articleListEl;

    // Set click handler for "Get Articles" button.
    $getArticlesButton.on('click', this.get.bind(this));

    // Simulate a user click event, to get articles
    $getArticlesButton.trigger('click');
  }
};
