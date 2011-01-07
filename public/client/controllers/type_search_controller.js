$.Controller.extend('TypeSearchController',
{
  init: function(el) {
    this._super(el);
  },

  "a click": function(el, ev) {
      var link = this;
      this.publish("search-initiated");
      el.addClass("selected");
      this.publish("search-started");
      $.getJSON("/radios/search", {type: "type", query: el.attr("rel")}, function(data, textStatus) {
        this.publish("search-complete", data);
      }.bind(this));
      return false;
  },

  "search-initiated subscribe": function(called, params) {
    this.element.find("a").removeClass("selected");
  }
});
