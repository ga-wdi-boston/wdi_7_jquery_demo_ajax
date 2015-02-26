$(document).ready(function(){
  //Example 1:
  //.get is the ajax request, pass data as the parameter
  // on response
  // $.get( "http://localhost:3000/articles", function( data ) {
  // $( ".result" ).html( data );
  // alert( "Load was performed." );
  // });

  //Example 2:
  // var jqxhr = $.get( "http://localhost:3000/articles", function( data ) {
  // an anonymous function where I can do things w/ the data that comes back
  // the data is what is returned in the response body
  // console.log(data);
  // })
  // .done(function() {
  //   console.log( "second success" );
  // })
  // .fail(function() {
  //   console.log( "error" );
  // })
  // .always(function() {
  //   console.log( "finished" );
  // });

  //Example 3:
  // $.ajax({
  //   url: 'http://localhost:3000/articles',
  //   type: 'GET'
  // }).done(function(data, textStatus, jqXHR){ //use an anonymous function & pass in the response.
  //   //done & fail are callback functions
  //   console.log(data, textStatus, jqXHR);
  // }).fail(function(jqXHR, textStatus, errorThrown){
  //   console.log(jqXHR, textStatus, errorThrown);
  // });

  //USE FOR Example 4 - 6:
//   $.ajax({
//    url: 'http://localhost:3000/articles',
//    type: 'GET'
//   }).done(ArticleApp.getArticles);
// }); //end document ready

// Create a namespace for my app
// var ArticleApp = ArticleApp || {};

// // callback handler for all articles from server
// ArticleApp.getArticles = function(data){
//  // debugger;
//  console.log(data); //array objects
//  console.log(data.length); //10

//  // Get just one article to show up in console & html page
//   var len = data.length;
//   $('#article-count').append(len);
//   console.log(data[1].title);
//   console.log(data[1].body);

//   $('#articles').append(data[1].title);
//   $('#articles').append(data[1].body);


//  // Iterate over all the articles returned from the
//  // server.
//   var articles_data = data;
//   for (var i = 0; i < articles_data.length; i++) {
//       var newItem = $('<li>');
//       var break_line = $('<br>')
//       var ea_article = articles_data[i];
//       newItem.text(ea_article.title + break_line + ea_article.body + " **** ");
//       $('ul').append(newItem);
//   };
// }; //end ArticleApp.getArticles


 // And create html for each article


 //Example 5: quick & dirty w/ html -review HW w/ Tom:
//   var ArticleApp = ArticleApp || {};

//   // callback handler for all articles from server
//   ArticleApp.getArticles = function(remoteArticles){
//   // debugger;
//   console.log(remoteArticles); //array objects
//   console.log('Total articles: ' + remoteArticles.length); //10

//  // Iterate over all the articles returned from the
//  // server.
//   var html = '<ul>';
//   remoteArticles.forEach(function(article){
//     html += "<li id='article-" + article.id + "'>";
//     html += "<h3>" + article.title + "</h3>";
//     html += "<article>" + article.body + "</article>";
//     html + "</li>";
//     html += "<br>Comments</br>";
//       article.comments.forEach(function(comment){
//         html += "<br>";
//         html += "<i>" + comment.creator + "</i>";
//         html += "<p>" + comment.body + "</p>";
//       });
//   });
//   html + "</ul>";
//   $('#container').append(html);
// }; //end ArticleApp.getArticles

//Example 6: better solution -review HW w/ Tom:
//   var ArticleApp = ArticleApp || {};

//   // callback handler for all articles from server
//   ArticleApp.getArticles = function(remoteArticles){
//   // debugger;
//   console.log(remoteArticles); //array objects
//   console.log('Total articles: ' + remoteArticles.length); //10

//  // Iterate over all the articles returned from the
//  // server.
//   var html = '<ul>';
//   remoteArticles.forEach(function(article){
//     html += "<li id='article-" + article.id + "'>";
//     html += "<h3>" + article.title + "</h3>";
//     html += "<article>" + article.body + "</article>";
//     html + "</li>";
//     html += "<br>Comments</br>";
//       article.comments.forEach(function(comment){
//         html += "<br>";
//         html += "<i>" + comment.creator + "</i>";
//         html += "<p>" + comment.body + "</p>";
//       });
//   });
//   html + "</ul>";
//   $('#container').append(html);
// }; //end ArticleApp.getArticles

//Example 7: alternate solution - review HW w/ Tom:
  ArticleApp.ArticleList.get();

}); //end document ready
  var ArticleApp = ArticleApp || {};



 // The HTML for each article should be wrapped in a div
 // that has and id "article-<id>"
 // <div id="article-17"> .... </div>



// }); //end document ready

