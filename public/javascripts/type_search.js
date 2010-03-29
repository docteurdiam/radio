var TypeSearch = function(element, display) {

  var attachEventHandlers = function(container) {
    links = container.find("a");
    links.click(function() {
      var link = this;
      $(document).trigger("search-initiated");
      $(link).addClass("selected");
      $.getJSON("/radios/search", {type: "type", query: $(this).attr("rel")}, function(data, textStatus) {
        display.add(data);
      });
      return false;
    })
    $(document).bind("search-initiated", function() {
      links.removeClass("selected");
    });
  };

  attachEventHandlers($(element));
};