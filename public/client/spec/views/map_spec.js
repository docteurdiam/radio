describe('Map', function() {

  beforeEach(function() {
    this.specNode = $(document.createElement("div")).appendTo("body").addClass("specNode");
    this.specNode.attr("id", "map");
    this.specNode.css("width", "400px");
    this.specNode.css("height", "400px");
    this.map = new Map("map");
  });

  afterEach(function() {
    this.specNode.remove();
  });

  describe("when initializing the map", function() {

    it("creates a map", function() {
      expect(this.map.map).toBeDefined();
    })

    it("creates an empty marker layer", function() {
      expect(this.map.markers.length).toEqual(0);
    });

    it("creates an empty features layer", function() {
      expect(this.map.features.length).toEqual(0);
    });

  });

  describe("when displaying a route", function() {

    it("loads the route as a feature", function() {
      expect(false).toBeTruthy();
    });

    it("adds the start and endpoints as markers", function() {
      expect(false).toBeTruthy();
    })

    it("displays the name of the start point on hover", function() {
      expect(false).toBeTruthy();
    });

    it("displays the name of the end point on hover", function() {
      expect(false).toBeTruthy();
    });

  })

});