$(document).ready(function() {

//     var getArticles = function(data) {
//         console.log(data);
//     };

//     $.ajax({
//         url: 'http://localhost:3000/articles',
//         type: 'GET'
//     }).done(ArticleApp.getArticles);
// });

// Create a namespace for my app

var ArticleApp = ArticleApp || {}; //---> if I already have an object called ArticleApp use it otherwise create an object called ArticleApp.

// callback handler for all articles from server
ArticleApp.getArticles = function(data){
  $.ajax({
    url: 'http://localhost:3000/articles',
    type: 'GET'
  }).done(function(data, textStatus){
    for(var i = 0; i < data.length; i++){
      var $newArticle = $('<li id="article-' + data[i].id + '">');
      $list.append($newArticle);
    }
  });


  // var articleJSON = JSON.parse(data);


  // for(var i = 0; i < articleJSON.length; i++){

  //   $('#container').append('<li>')
  // }
  debugger;
  console.log(data);

  //iterate over all the articles returned from the server and create HTML for each article.

  // the HTML for each article should be wrapped in a div that has an id "article-<id>"
  // e.g. <div id="article-17">...</div>
};
