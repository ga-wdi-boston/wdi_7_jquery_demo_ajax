// Tom's Example

$(document).ready(function(){

 $.ajax({
   url: 'http://localhost:3000/articles',
   type: 'GET'
 }).done(ArticleApp.getArticles);
});

//Create a namespace for my app
var ArticleApp = ArticleApp ||{};

//callback handler for all articles from server

Article.getArticles = function(data){
  console.log(data);
  for(var i = 0; i < data.length; i++){
    $('#articles').append(" <div id= article-'" + data[i].id + "'><h3> " + data[i].title + '</h3>' + "<p> " + data[i].body + '</p>' + "</div>");
    };
  };

//Iterate over all the articles returned from the server and create html for each article.  The HTML for each article should be wrapped in a div that has an id "article-<id>"
// <div id="article-17">...</div>








// First Example
//   $(document).ready(function() {
//   $.get("http://localhost:3000/articles", function(data){
//     alert("Load was performed.");
//   });
// });

// Second exmaple
// $(document).ready(function() {

// var jqxhr = $.get("http://localhost:3000/articles", function(data){
//   console.log(data);
// })
//   .done(function() {
//     alert( "second success" );
//   })
//   .fail(function() {
//     alert( "error" );
//   })
//   .always(function() {
//     alert( "finshed" );
//   });
// });


// // Third Example

// $(document).ready(function(){
//  $.ajax({
//    url: 'http://localhost:3000/articles',
//    type: 'GET'
//  }).done(function(data,textStatus, jqHXR){
//   debugger;
//    console.log(data,textStatus, jqHXR);
//  }).fail(function(data,textStatus, errorThrown){
//    console.log(data,textStatus, errorThrown);
//  });
// });
