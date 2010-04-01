var Estimator = function(element, selector) {
  var container = $(element);
  $(document).bind("selection-change", function() {
    var stations = $(selector);
    var identifiers = [];    
    for(var i = 0; i < stations.length; i++) {
      var identifier = stations.eq(i).attr("id");
      identifiers.push(identifier)
    };
    $.post("/radios/calculate", {identifiers: identifiers}, function(data) {
      container.find(".result").val("£" + data);
    })

  });
}