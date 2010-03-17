var TypeSearch = function(element, callback) {

  var attachEventHandlers = function(container) {
    links = container.find("a");
    links.click(function() {
      callback(this.href);
      return false;
    })
  };

  attachEventHandlers($(element));
};