$.Controller.extend('EstimatorController',
{
  init: function(el) {
    this._super(el);
  },

  "selection-change subscribe": function(called, params) {
    var stations = params;
    var identifiers = [];
    for(var i = 0; i < stations.length; i++) {
      identifiers.push(stations[i])
    };
    if (identifiers.length == 0)  {
      this.element.find(".result").val("£0");
    } else {
      $.post("/radios/calculate", {"identifiers[]": identifiers}, function(data) {
        this.element.find(".result").val("£" + data);
      }.bind(this));
    }
  }
});