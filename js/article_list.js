var Blog = Blog || {};

Blog.ArticleList = {
  articlesCallbackHandler: function(articles){
   var articlesHTML = '',
   article;

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
  // Retrieve all the articles
    $.ajax({
      url: "http://localhost:3000/articles",
      type: "GET",
      dataType: 'json',
    }).success(this.articlesCallbackHandler.bind(this));
  },
  init: function(getArticlesID, articlesListID){
    this.getArticlesButton = $(getArticlesID);
    this.articlesListElem = $(articlesListID);

    // Set the click handler
    this.getArticlesButton.on('click', this.getArticles.bind(this));

    // Simulate a user click event. Will get all the articles
    this.getArticlesButton.trigger('click');
  }

};