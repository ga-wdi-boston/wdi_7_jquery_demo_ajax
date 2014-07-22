var AjaxDemo = AjaxDemo || {};

// Given and Object and a template id
AjaxDemo.processTemplate = function(object, template_id){
  var source = $('#'+template_id).html(),
  template = Handlebars.compile(source),
  html = template(article);

  return html;
};

// Only need one Article List 
AjaxDemo.ArticleList = {}

// Initialize with the 
AjaxDemo.ArticleList.init = function(getUrl, articleListEl, articleTemplate){
  this.url = getUrl,
  this.articleListEl = $(articleListEl);
  this.articleTemplate = articleTemplate;
  
  // Set the get articles handler
  $('#get-articles').click(this.getArticlesCallback.bind(this));

  // Trigger the click event to get the articles
  $('#get-articles').trigger('click');

  // set the handler for creating a new article
  $('#new-article').submit(this.createArticleCallback.bind(this));

};

// Handler for creating one article
AjaxDemo.ArticleList.createArticleCallback = function(event){
  // New article form
  var $form = $(event.target),
  $title = $form.find("input[name='title']"),
  $body = $form.find("input[name='body']"),
  // Get the form action
  action = $form.attr('action');
  // Make this available to the success function below
  //   articleListEl = this.articleListEl;

  event.preventDefault();
  // Create and send a POST request
  $.ajax({
    type: "POST",
    url: this.url + '/articles', 
    data: {article:  {title: $title.val(), body: $body.val()}},
    dataType: 'json',
    success: function(remote_article){
      // Add the article to the article list
      var article = new AjaxDemo.Article(
        remote_article.id, 
        remote_article.title,
        remote_article.body, this.articleTemplate);
      var articleHTML = article.showView();   
      this.articleListEl.append(articleHTML);
    }.bind(this)
  });
};

AjaxDemo.ArticleList.getArticlesCallback = function(event){
  var articlesHTML = '';
   // Retrieve all the articles

  $.get(this.url, function(articles) {
     // Build the HTML for each Article
     for(var i = 0; i < articles.length; i++){
       article = new AjaxDemo.Article(articles[i].id, articles[i].title, articles[i].body, this.articleTemplate);
       articlesHTML += article.showView();
     };

    // Fill in the Article list
    this.articleListEl.empty();
    this.articleListEl.append(articlesHTML);
  }.bind(this)); // end get xhr
}