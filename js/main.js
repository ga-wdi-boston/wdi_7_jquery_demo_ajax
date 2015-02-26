$(document).ready(function(){
  $.ajax({
    url: 'http://localhost:3000/articles',
    type: 'get',
    dataType: 'json'
  }).done(ArticleApp.getArticles);
});

// Create a namespace for my app
var ArticleApp = ArticleApp || {};

// callback handler for all articles from server
ArticleApp.getArticles = function(data){
  // debugger;
  console.log(data);

  // Iterate over all the articles returned from the server.
  for (var i = 0; i < data.length; i++) {
    console.log(data[i]);

    var articleLI = "<div id= '" + data[i].id + "' >";
      articleLI += "<li><ul>" + data[i].title;
      articleLI += "<li>"+ data[i].body + data[i].comments + '</li>';
      articleLI += "</ul></li></div>";
      $('#articles').append(articleLI);

  };

 // And create html for each article

 // The HTML for each article should be wrapped in a div
 // that has and id "article-<id>"
 // <div id="article-17"> .... </div>
};

// $('#albums').append('<ul>');
// for (var i = 0; i < parsedJSON.albums.length; i++) {
//     var $albumList = $('ul').append('<li>' + parsedJSON.albums[i].name + parsedJSON.albums[i].artist + parsedJSON.albums[i].unitsSold + '</li>');
//     $albumList.append('<ul>');
//     $('ul').append('<li>' + parsedJSON.albums[i].artist + '</li>' + '</ul>');

//     var personHTML = "<div id='" + data.id + "'<dt>Name</dt><dd>";
//     personHTML += data.name + "</dd>";
//     personHTML += "<dt>Occupation</dt><dd>" + data.occupation + "</dd>";
//     personHTML += "<dt>Company</dt><dd>" + data.company_name + "</dd>";
//     personHTML += "<dt>Chill Status</dt><dd>" + "killin' it" + "</dd>";
//     personHTML += "</div>";
//     $('#container').append(personHTML);
