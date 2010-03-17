var AlphabeticalSearch = function(element, callback) {

    var createLetters = function(element) {
    console.debug(element);
    for(i = 1; i <= 26; i++) {
        $("<a href='#A'>" + String.fromCharCode(64+i) + "</a>").appendTo(element);
    }
    return element.find("a");
  };

  var attachEventHandlers = function(links) {
    links.click(function() {
        callback(this.text)
    });
  };

  attachEventHandlers(createLetters($(element)))
};

