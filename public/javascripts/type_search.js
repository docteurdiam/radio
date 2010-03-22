var TypeSearch = function(element, display) {

  var attachEventHandlers = function(container) {
    links = container.find("a");
    links.click(function() {
      $.getJSON("/radios/search", {type: "type", query: $(this).attr("rel")}, function(data, textStatus) {
        display.add(data);
      });
      return false;
    })
  };

  attachEventHandlers($(element));
};