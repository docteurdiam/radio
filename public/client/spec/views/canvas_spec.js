describe('Canvas', function() {

  beforeEach(function() {
    this.specNode = $(document.createElement("div")).appendTo("body").addClass("specNode");
    this.canvas = new Canvas(this.specNode);
  });

  afterEach(function() {
    this.specNode.remove();
  });

  describe("when displaying routing information", function() {

    it("assigns the 'canvas' class to the root element", function() {
       expect(this.specNode.hasClass("canvas")).toBeTruthy();
    });

    it("displays the route steps as list elements", function() {
      var route = new Route(1, 2);
      route.directions = ["this is the first step", "this is the second step"]
      this.canvas.showRoute(route)
      expect(this.specNode.find("ul li").length).toEqual(2);
      expect(this.specNode.find("ul li").eq(0).text()).toContain("this is the first step");
      expect(this.specNode.find("ul li").eq(1).text()).toContain("this is the second step")
    });

  });

});
