var AjaxDemo = AjaxDemo || {};

AjaxDemo.Article = function(id, title, body, template){
  this.id = id;
  this.title = title;
  this.body = body;
  this.template = template;
}

AjaxDemo.Article.prototype.showView = function(){
  var html = AjaxDemo.processTemplate(this, this.template);                      return html.valueOf();
}