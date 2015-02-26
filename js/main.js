$(document).ready(function() {
  $.ajax({
      url: 'http://localhost:3000/articles',
      type: 'GET'
    }).done(ArticleApp.getArticles);
  });

      // $('#get-articles').click(ArticleApp.getArticles);

      // $("input[value='Create Article']").click(function() {
      //     event.preventDefault();
      // });

    var ArticleApp = ArticleApp || {};

    ArticleApp.getArticles = function(data) {
      var articles = data;
      console.log(articles);
      var $list = $('#articles');
      for(var i = 0; i < articles.length; i++) {
        var $newArticle = $('<li id="article-' + articles[i].id + '">');
        $newArticle.html('<h3>' + articles[i].title + '</h3>' + ' <p>' + articles[i].body + '</p>' + '<p><small>' + articles[i].comments[i].body + '</small></p>');
        $list.append($newArticle);
      };
};
