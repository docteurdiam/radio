var ResultsDisplay = function(element, selection) {
  this.element = $(element);
  this.selection = selection;

  this.add = function(radios) {
    this.element.empty();
    for(var i = 0; i < radios.length; i++) {
      var radio = radios[i].radio;
      $('<li><input type="checkbox" id="radio-' + radio.id + '" value="' + radio.fee + '" /><label>' + radio.name + '</label><br/></li>').appendTo(this.element);
    }
  };

  this.element.find("input::checked").live('click', function() {
      selection.add($(this).val(), $(this).siblings("label").text(), $(this).attr("id"));
  });

}

