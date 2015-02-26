$(document).ready(function(){
  ArticleApp.ArticleList.get();
});

// Create a namespace for my app
var ArticleApp = ArticleApp || {};

// callback handler for all articles from server
ArticleApp.getArticles = function(data){
  // debugger;
  console.log(data);

  // Iterate over all the articles returned from the server.
  // for (var i = 0; i < data.length; i++) {
  //   console.log(data[i]);

  //   var articleLI = "<div id= '" + data[i].id + "' >";
  //     articleLI += "<h3>" + data[i].title + "</h3>";
  //     articleLI += "<article>"+ data[i].body + data[i].comments + '</article>';
  //     articleLI += "<br>Comments<br>";
  //     data[i].comments.forEach(function(comment){
  //       html += "<br>";
  //       html += "<i>" + data.comments + "</i>";
  //     })
  //     articleLI += "</div>";
  //     $('#articles').append(articleLI);

  // };

 // And create html for each article

 // The HTML for each article should be wrapped in a div
 // that has and id "article-<id>"
 // <div id="article-17"> .... </div>
};
