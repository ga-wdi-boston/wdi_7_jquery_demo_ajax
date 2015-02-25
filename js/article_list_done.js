var Blog = Blog || {};

Blog.ArticleList = {
  articlesCallbackHandler: function(articles){
    var articlesHTML = '',
    article;

    // num of articles
    this.count = articles.length;

      // Build the HTML for each Article
    for(var i = 0; i < articles.length; i++){
      article = new Blog.Article(articles[i].id, articles[i].title, articles[i].body)
      articlesHTML += article.showView();
    };

    // Clear list of articles.
    this.articlesListElem.empty();
    // Fill in the article list
    this.articlesListElem.append(articlesHTML);

  },
  getArticles: function(){
    this.count = 0;

  // Retrieve all the articles
    $.ajax({
      url: "http://localhost:3000/articles",
      type: "GET",
      dataType: 'json',
    })
    .done(this.articlesCallbackHandler.bind(this))
    .done(function(){
      this.articleCountElem.html("<p> " + this.count + " Articles</p>");
    }.bind(this));
  },
  addArticleToList: function(article){
    var newArticle = new Blog.Article(article.id, article.title, article.body),
    articleHTML = newArticle.showView();
    this.articlesListElem.append(articleHTML); 
  },
  createArticle: function(){
    // New article form
    var $form = $(event.target),
    $title = $form.find("input[name='title']"),
    $body = $form.find("input[name='body']"),
    requestObj = {article:  {title: $title.val(), body: $body.val()}};

    event.preventDefault();
    // Create and send a POST request
    $.ajax({
      type: "POST",
      url: 'http://localhost:3000/articles', 
      data: requestObj,
      dataType: 'json'
    }).done(this.addArticleToList.bind(this));
  },
  init: function(getArticlesID, articlesListID, articleCountID){
    this.getArticlesButton = $(getArticlesID);
    this.articlesListElem = $(articlesListID);
    this.articleCountElem = $(articleCountID);
    this.count = 0; 

     // Set up click handler for form submit
     $('#new-article').on('submit', this.createArticle.bind(this));

    // Set the click handler
    this.getArticlesButton.on('click', this.getArticles.bind(this));

    // Simulate a user click event. Will get all the articles
    this.getArticlesButton.trigger('click');
  }

};