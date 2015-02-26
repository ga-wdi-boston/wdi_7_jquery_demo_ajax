$(document).ready(function() {
    $('#get-articles').click(ArticleApp.getArticles);

    $("input[value='Create Article']").click(function() {
        event.preventDefault();

    var ArticleApp = ArticleApp || {};
    var $list = $('#articles');

    ArticleApp.getArticles = function() {


        $.ajax({
            url: 'http://localhost:3000/articles',
            type: 'GET'
        }).done(function(data) {
            for (var i = 0; i < data.length; i++) {
                var $newArticle = $('<li id="article-' + data[i].id + '">');
                $newArticle.html('<h3>' + data[i].title + '</h3>' + ' <p>' + data[i].body + '</p>');
                $list.append($newArticle);
            }
        });
    };
});
