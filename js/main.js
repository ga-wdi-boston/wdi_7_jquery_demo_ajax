$(document).ready(function() {

    var jqxhr = $.get( "http://localhost:3000/articles", function(data) {
      console.log( "success" );
      console.log(data);
    })
      .done(function() {
        console.log( "second success" );
      })
      .fail(function() {
        console.log( "error" );
      })
      .always(function() {
        console.log( "finished" );
      });

    $.ajax({
        url: 'http://localhost:3000/articles',
        type: 'GET'
    }).done(ArticlesApp.showArticles)
      .fail(function(jqHXR, textStatus, errorThrown) {
        console.log(jqHXR, textStatus, errorThrown);
      });
});

var ArticlesApp = ArticlesApp || {};

ArticlesApp.showArticles = function(articles) {

    var createHTML = function(article) {
        var articleHTML =   "<li>" +
                                "<div id='article-" + article.id + "'>" +
                                    "<h3>" + article.title + "</h3>" +
                                    "<article>" + article.body + "</article>" +
                                "</div>" +
                            "</li>";
        $('#articles').append(articleHTML);
    };

    $('#article-count').text('There are ' + articles.length + ' articles:');

    articles.forEach(createHTML);

};
