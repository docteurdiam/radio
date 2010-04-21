$.Controller.extend('AlphabeticalSearchController',
{
  init: function(el) {
    this._super(el);
    this.createLetters();
  },

  "a click": function(el, ev) {
    this.publish("search-initiated");
    el.addClass("selected");
    $.getJSON("/radios/search", {type: "alphabetical", query: el.text()}, function(data, textStatus) {
      if (data.length > 0) this.publish("search-complete", data);
    }.bind(this));
    return false;
  },

  "search-initiated subscribe": function(called, params) {
    this.element.find("a").removeClass("selected");
  },

  createLetters: function() {
    for(var i = 1; i <= 26; i++) {
      $("<a href='#A'>" + String.fromCharCode(64+i) + "</a>").appendTo(this.element);
    }
  }
});


