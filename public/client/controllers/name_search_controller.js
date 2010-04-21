$.Controller.extend('NameSearchController',
{
  init: function(el) {
    this._super(el);
    this.initialClick = true;
  },

  "input.partial focus": function(el, ev) {
    if (this.initialClick) {
      el.val("");
      this.initialClick = false;
    }
    this.publish("search-initiated");
  },

  "search-initiated subscribe": function(called, params) {
    if (!this.initialClick) this.element.find("input.partial").val("");
  },

  "input keyup": function(el, ev) {
    val = el.val();
    if (val.length > 0) {
      $.getJSON("/radios/search", {type: "name", query: el.val()}, function(data, textStatus) {
        this.publish("search-complete", data);
      }.bind(this))
    }
    return false;
  }
});
