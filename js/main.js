$(document).ready(function() {
 $.ajax({
   url: 'http://localhost:3000/articles',
   type: 'get'
    dataType: 'json'
 }).done(ArticleApp.getArticles);
});

// Create a namespace for my app
 ArticleApp = ArticleApp || {};

// callback handler for all articles from server
ArticleApp.getArticles = function(data){
 //debugger;
 console.log(data);

 var string = JSON.stringify(data);


 // Iterate over all the articles returned from the
 // server.

 // And create html for each article

 // The HTML for each article should be wrapped in a div
 // that has and id "article-<id>"
 // <div id="article-17"> .... </div>

};




































// $(document).ready(function() {
//    // $.get( "http://localhost:3000/articles", function( data ) {

// //    console.log( "Load was performed." );
// //  });

// // // });

// // var jqxhr = $.get( "http://localhost:3000/articles", function() {
// //   console.log( "success" );
// // })
// //   .done(function() {
// //     console.log( "second success" );
// //   })
// //   .fail(function() {
// //     console.log( "error" );
// //   })
// //   .always(function() {
// //     console.log( "finished" );
// //   });
//   $.ajax({
//   url: "http://localhost:3000/articles",
//   type: 'GET'

// })
// .done(function(data, textStatus, jqxhr) {
//   console.log(data, textStatus, jqxhr);
// })
// .fail(function(data, textStatus, jqxhr) {
//   console.log(data, textStatus, jqxhr);
// });


// });
