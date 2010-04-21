describe('Route', function() {

  describe("when checking if valid", function() {

    it("is invalid if the start point is not defined", function() {
      expect((new Route("", "London")).isValid()).toBeFalsy();
      expect((new Route(undefined, "London")).isValid()).toBeFalsy();
      expect((new Route(null, "London")).isValid()).toBeFalsy();
    });

    it("is invalid if the end point is not defined", function() {
      expect((new Route("London", "")).isValid()).toBeFalsy();
      expect((new Route("London", null)).isValid()).toBeFalsy();
      expect((new Route("London", undefined)).isValid()).toBeFalsy();
    });

    it("is valid if both endpoints are defined", function() {
      expect((new Route("London", "Barelona")).isValid()).toBeTruthy();
    })

    it("raises an error message if the start point is not defined", function() {
      var route = new Route("", "London");
      route.isValid();
      expect(route.errors.length).toEqual(1);
    });

    it("raises an error message if the end point is not defined", function() {
      var route = new Route("London", "");
      route.isValid();
      expect(route.errors.length).toEqual(1);
    });

    it("raises multiple error messages if neither endpoints are defined", function() {
      var route = new Route("", "");
      route.isValid();
      expect(route.errors.length).toEqual(2);
    });

  })

});
