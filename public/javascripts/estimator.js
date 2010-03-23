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

  container.find(".email").click(function() {
    var lightbox = $('#lightbox');
    if (lightbox.length == 0) lightbox = $('<div id="lightbox"></div>').appendTo("body");
    lightbox.html('').load("/reminders", function() {
      lightbox.dialog({
        autoOpen: false,
        modal: true,
        title: 'Send yourself a reminder email'
      });
      lightbox.dialog('open');
    });
  });
}