// Create a namespace for my app
var ArticleApp = ArticleApp || {};

ArticleApp.ArticleList = {
  articleListEl: null,
  getArticlesButton: null,
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
  init: function($getArticlesButton, $articleListEl, $newArticleSubmit){
    // DOM element for list of articles
    this.articleListEl = $articleListEl;
    this.getArticlesButton = $getArticlesButton;

    // Set click handler for "Get Articles" button.
    $getArticlesButton.on('click', this.get.bind(this));

    // Simulate a user click event, to get articles
    $getArticlesButton.trigger('click');

    $newArticleSubmit.on('submit', this.createArticle.bind(this));
  },
  createArticle: function(event){
    // stop default behavior for form submit
    event.preventDefault();

    var $form = $(event.target),
        $title = $form.find("input[name='title']"),
        $body = $form.find("input[name='body']"),
        requestObj = {
          article: {
            title: $title.val(), body: $body.val()
          }
        };

    $.ajax({
      url: 'http://localhost:3000/articles',
      dataType: 'json',
      type: 'post',
      data: requestObj
    }).done(this.addArticleToList.bind(this));
  },
  addArticleToList: function(remoteArticle){
    console.log("Add article");
    this.articleListEl.empty();
    // Simulate a user click event, to get articles
    this.getArticlesButton.trigger('click');

  }
};
