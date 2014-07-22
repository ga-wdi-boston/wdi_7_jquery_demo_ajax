var Blog = Blog || {};

Blog.ArticleList = {
  articlesCallbackHandler: function(articles){
   var articlesHTML = '';

    // Build the HTML for each Article
    for(var i = 0; i < articles.length; i++){
      articlesHTML += '<li id=article_' + articles[i].id + '>' + articles[i].title;
      articlesHTML += '<div>' + articles[i].body + '</div>';
      articlesHTML += '</li>';
    };

    $('#articles').empty();
    // Fill in the Article list
    $('#articles').append(articlesHTML);
  },
  getArticles: function(){
  // Retrieve all the articles
    $.ajax({
      url: "http://localhost:3000/articles",
      type: "GET",
      dataType: 'json',
    }).success(this.articlesCallbackHandler);
  },
  init: function(){
    // Set the click handler
    $('#get-articles').on('click', this.getArticles.bind(this));
  }

};