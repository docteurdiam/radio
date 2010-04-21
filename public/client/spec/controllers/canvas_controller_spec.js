describe("CanvasController", function() {

  it("responds to the controller:route-calculated event", function() {
    var result = undefined;
    var view = {showRoute: function(route) {
      result = route;
    }}
    var canvas_controller = new CanvasController(view);
    var aRoute = new Route(1, 2);
    $(document).trigger("controller:route-calculated", aRoute);
    expect(result).toEqual(aRoute);
  });

});