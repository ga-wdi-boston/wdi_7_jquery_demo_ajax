// $(document).ready(function(){
//   var jqxhr = $.get( "http://localhost:3000/articles", function( data ) {
//    console.log( data );
//   })
//   .done(function(){
//     console.log( "second success" );
//   })
//   .fail(function(){
//     console.log( "error" );
//   })
//   .always(function() {
//     console.log( "finished" );
//   });
// });

// $(document).ready(function(){
//   $.ajax({
//     url: 'http://localhost:3000/articles',
//     type: 'GET'
//   }).done(function(data, textStatus){
//     console.log(data, textStatus);
//   }).fail(function(jqXHR, textStatus, errorThrown){
//     console.log(jqXHR, textStatus, errorThrown);
//   });
// });

// $(document).ready(function(){
//  $.ajax({
//    url: 'http://localhost:3000/articles',
//    type: 'get'
//  }).done(ArticleApp.getArticles);
// });

// // Create a namespace for my app
// var ArticleApp = ArticleApp || {};

// // callback handler for all articles from server
// ArticleApp.getArticles = function(data){

//  console.log(data);

 // Iterate over all the articles returned from the
 // server.

 // And create html for each article

 // The HTML for each article should be wrapped in a div
 // that has and id "article-<id>"
 // <div id="article-17"> .... </div>
// };

$(document).ready(function(){

  var getArticles = function(){
    $.ajax({
        url: "http://localhost:3000/articles/",
        type: "GET"
    }).success(articlesCallbackHandler);
  },

  articlesCallbackHandler = function(articles) {
    var articlesHTML = '<ul>';

    for(var i = 0; i < articles.length; i++){
      articlesHTML += '<li id=article_' + articles[i].id + '>';
      articlesHTML += '<h3>' + articles[i].title + '</h3>';
      articlesHTML += '<div>' + articles[i].body + '</div>';
      articlesHTML += '</li>';

    };

    $('#articles').append(articlesHTML);
  };

  $('#get-articles').on('click', getArticles);

});
