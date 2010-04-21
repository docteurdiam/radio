describe('Dashboard', function() {

  beforeEach(function() {
    this.specNode = $(document.createElement("div")).appendTo("body").addClass("specNode");
    this.dashboard = new Dashboard(this.specNode);
  });

  afterEach(function() {
    this.specNode.remove();
  });

  it("assigns the 'dashboard' class to the root element", function() {
    expect(this.specNode.hasClass("dashboard")).toBeTruthy();
  });

  it("creates 3 panels when initialized", function() {
    expect(this.specNode.find(".panel").length).toEqual(3);
  });

  it("creates 3 tabs when initialized", function() {
    expect(this.specNode.find("ul li").length).toEqual(3);
  });

  it("creates a routing panel", function() {
    expect(this.specNode.find("#panel-routing").length).toEqual(1);
  });

  it("raises the dashboard:panel-changed event when a tab is clicked", function() {
    var result = undefined;
    $(document).bind("dashboard:panel-changed", function(e) {
      result = ["SUCCESS"];
    });
    this.specNode.find("ul li a").eq(2).assertExists().click();
    expect(result).toEqual(["SUCCESS"]);
  });

  it("creates a localization panel", function() {
    expect(this.specNode.find("#panel-localization").length).toEqual(1);
  });

  it("creates an index panel", function() {
    expect(this.specNode.find("#panel-index").length).toEqual(1);
  });

  describe("inside the routing panel", function() {

    beforeEach(function() {
      this.panel = this.specNode.find("#panel-routing")
    })

    it("creates a start textbox", function() {
      expect(this.panel.find("input.start").length).toEqual(1);
    });

    it("creates a hidden field for the start feature", function() {
      expect(this.panel.find("input.start_id").length).toEqual(1);
    });

    it("creates a hidden field for the end feature", function() {
      expect(this.panel.find("input.end_id").length).toEqual(1);
    });

    it("creates an end textbox", function() {
      expect(this.panel.find("input.end").length).toEqual(1);
    });

    it("creates a submission button", function() {
      expect(this.panel.find('input.submit').length).toEqual(1);
    });

    it("has an area to display error messages", function() {
      expect(this.panel.find(".error-messages").length).toEqual(1);
    });

    it("creates a button for finding the start feature", function() {
      expect(this.panel.find('input.start_finder').length).toEqual(1);
    })

    it("creates a button for finding the end feature", function() {
      expect(this.panel.find('input.end_finder').length).toEqual(1);
    })

    describe("when choosing a feature", function() {

      describe("and the search button is clicked", function(){

        it("shows the Feature Search lightbox", function() {
          expect(false).toBeTruthy();
        });

        describe("when a value is selected in the lightbox", function() {

          it ("updates the input box and the hidden field", function() {
            expect(false).toBeTruthy();
          })
        });
      });
    });
  })

  describe("when submitting routes", function() {

    beforeEach(function() {
      this.start_id = this.specNode.find("#panel-routing input.start_id");
      this.end_id = this.specNode.find("#panel-routing input.end_id");
      this.submit_button = this.specNode.find("#panel-routing input.submit");
      this.error_messages = this.specNode.find("#panel-routing .error-messages")
    })

    it("displays an error message if an empty route is submitted", function() {
      var message = "Veuillez choisir un point de depart et une destination";
      this.submit_button.click();
      expect(this.error_messages.html()).toContain(PhraseBook["MISSING_END_POINT_FOR_ROUTE"]);
    });

    it("displays an error message if a route with missing end is submitted", function() {
      this.start_id.val(1);
      this.submit_button.click();
      expect(this.error_messages.html()).toContain(PhraseBook["MISSING_START_POINT_FOR_ROUTE"]);
      expect(this.error_messages.html()).toContain(PhraseBook["MISSING_END_POINT_FOR_ROUTE"]);
    });

    it("displays an error message if a route with missing start is submitted", function() {
      this.end_id.val(1);
      this.submit_button.click();
      expect(this.error_messages.html()).toContain(PhraseBook["MISSING_START_POINT_FOR_ROUTE"]);
    });

    it("raises the 'dashboard:route-selected' if a valid route is submitted", function() {
      this.start_id.val(1);
      this.end_id.val(1);
      var result = undefined;
      $(document).bind("dashboard:route-selected", function(e, route) {
        result = route;
      });
      this.submit_button.click();
      expect(result).toBeDefined();
      expect(result.source_id).toEqual("1");
      expect(result.target_id).toEqual("1");
    })
  });
});
