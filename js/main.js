$(document).ready(function(){
  ArticleApp.ArticleList.init($('#get-articles'), $('#articles'), $('#new-article') );

});

// Create a namespace for my app
var ArticleApp = ArticleApp || {};
