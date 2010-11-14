$.Controller.extend('EstimatorController',
{
  init: function(el) {
    this._super(el);
  },

  "selection-change subscribe": function(called, params) {
    var identifiers = [];
    for(var i = 0; i < params.length; i++) {
      identifiers.push(params[i])
    }
    if (identifiers.length == 0)  {
      this.element.find(".result").val("£0");
    } else {
      $.post("/radios/calculate", {"identifiers[]": identifiers}, function(data) {
        var worksheet = eval("(" + data + ")");
        this.element.find(".result").val("£" + worksheet["total"]);
        console.debug($("lblTotalWithoutDiscounts"));
        $("#lblTotalWithoutDiscounts").html(worksheet["total_without_discounts"]);
        console.debug(worksheet["messages"]);
        if (worksheet["messages"]) {
            $("#lblDiscountsApplied").empty();
            $("#lblDiscountsApplied").append("<h2 style='color: black'>Discounts</h2>");
            for(var i = 0; i < worksheet["messages"].length; i++) {
                $("#lblDiscountsApplied").append("<p>" + worksheet["messages"][i] + "</p>" );
            }
        }
        else
        {
          $("#lblDiscountsApplied").html("<p>No discounts have been applied</p>")
        }
       }.bind(this));
    }
  }
});