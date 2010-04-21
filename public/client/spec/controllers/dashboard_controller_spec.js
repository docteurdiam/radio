describe("DashboardController", function() {

  it("responds to the dashboard:route-selected event", function() {
    var result = undefined;
    var route = {calculate: function() {
      result = ["SUCCESS"];
    }};
    var dashboard_controller = new DashboardController();
    $(document).trigger("dashboard:route-selected", route);
    expect(result).toEqual(["SUCCESS"]);
  });

});