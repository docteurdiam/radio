describe('Category', function() {

  describe("when retrieving all categories", function() {

    it("it fetches all categories", function() {
      var data = undefined;
      Category.findAll(function(categories){
        data = categories;
      });
      expect(data.size).toEqual(3);
    });

  })

});
