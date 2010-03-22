var Estimator = function(element, selector) {
  var container = $(element);       
  container.find(".calculate").click(function() {
    var stations = $(selector);
    var total = 0;
    for(var i = 0; i < stations.length; i++) {
      var fee = parseInt(stations.eq(i).val());
      console.debug(fee);
      total = total + parseInt(fee);
    };

    container.find(".result").val(total);
  });
}