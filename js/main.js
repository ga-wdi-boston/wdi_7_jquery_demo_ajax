//working code
// $(document).ready(function(){
//   Blog.ArticleList.init('#get-articles', '#articles');
// })

// inclass demo
$(document).ready(function(){
 ArticleApp.ArticleList.get();
})

var ArticleApp = ArticleApp || {};




// $(document).ready(function() {
//   $.ajax({
//     url: 'http://localhost:3000/articles',
//     type: 'GET'
//   }).done(function(data, textStatus, jqXHR){
//     console.log(data, textStatus, jqXHR);
//   }).fail(function(jqXHR, textStatus, errorThrown){
//     console.log(jqXHR, textStatus, errorThrown);
//   });
//   console.log('hello world');
// });
// // callback handler for all articles from the server
//ArticleApp.ge$(document).ready(function() {

//   for (var i = Things.length - 1; i >= 0; i++) {
//     Things[i]
//   };

//   var articleHTML = "<div id='" + data.id + "'><dt>Title</dt><dd> "
//     personHTML +=  data.title + '</dd>';
//     personHTML += '<dt>Body</dt><dd>' + data.body + '</dd>';
//     personHTML += '<dt>Comments</dt><dd>' + data.comments + '</dd>';
//     $('#articles').append(personHTML);
//     personHTML += '</div>';
// };



// // General formatting - This is from the people example
// var getPeople = function(data){
//     //$('#container').html(data);

//    // to do this for all the people just put this stuff in a loop and do all this for each person
//     var articleHTML = "<div id='" + data.id + "'><dt>Title</dt><dd> "
//     personHTML +=  data.title + '</dd>';
//     personHTML += '<dt>Body</dt><dd>' + data.body + '</dd>';
//     personHTML += '<dt>Comments</dt><dd>' + data.comments + '</dd>';
//     $('#articles').append(personHTML);
//     personHTML += '</div>';

  // }
