var AlphabeticalSearch = function(element, display) {

    var createLetters = function(element) {
    for(i = 1; i <= 26; i++) {
        $("<a href='#A'>" + String.fromCharCode(64+i) + "</a>").appendTo(element);
    }
    return element.find("a");
  };

  var attachEventHandlers = function(links) {
    links.click(function() {
      $.getJSON("/radios/search", {type: "name", query: this.text}, function(data, textStatus) {
        if (data.length > 0) display.add(data);
      })
      return false;
    });
  };

  attachEventHandlers(createLetters($(element)))
};

