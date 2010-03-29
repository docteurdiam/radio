var Estimator = function(element, selector) {
  var container = $(element);
  $(document).bind("selection-change", function() {
    var stations = $(selector);
    var total = 0;
    for(var i = 0; i < stations.length; i++) {
      var fee = parseInt(stations.eq(i).val());
      total = total + parseInt(fee);
    };
    container.find(".result").val(total);
  });
}