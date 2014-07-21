$(document).ready(function(){

  var articleHTML = function(article){
    var html = '<li id=article_' + article.id + '>';
    html += article.title;
    html += '<div>' + article.body + '</div>';
    html += '</li>';
    return html;
  },
  getArticle = function(article){
    // Add the article to the article list
    $('#articles').append(articleHTML(article));
  },
  createArticleCallbackHandler = function(event){
    // New article form
    var $form = $(event.target),
    $title = $form.find("input[name='title']"),
    $body = $form.find("input[name='body']"),
    // Get the form action
    action = $form.attr('action'),
    requestObj = {article:  {title: $title.val(), body: $body.val()}};

    event.preventDefault();
      
    // Create and send a POST request
    $.ajax({
      type: "POST",
      url: 'http://localhost:3000/articles', 
      data: requestObj,
      dataType: 'json'
    }).done(getArticle);
  };

  // Set up click handler for form submit
  $('#new-article').on('submit', createArticleCallbackHandler);

});
