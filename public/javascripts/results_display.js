var ResultsDisplay = function(element, selection) {
  this.element = $(element);
  this.selection = selection;

  var isNumeric = function(val) {
    return val.match(/^[0-9]+$/);
  }

  this.add = function(radios) {
    this.element.empty();
    var prefix = "";
    for(var i = 0; i < radios.length; i++) {
      var radio = radios[i].radio;
      var current_prefix = radio.name ? radio.name.substring(0, 1) : "";
      if (current_prefix != prefix && !(isNumeric(prefix) && isNumeric(current_prefix))) {
        prefix = current_prefix;
        var display = isNumeric(prefix) ? "0-9" : prefix
        $('<li class="prefix">' + display + '</li>').appendTo(this.element);
      }
      var class = i % 2 == 0 ? "striped" : "normal";
      $('<li class="' + class + '"><input type="checkbox" id="radio-' + radio.id + '" value="' + radio.fee + '" /><label>' + radio.name + '</label><br/></li>').appendTo(this.element);
    }
  };

  this.element.find("input::checked").live('click', function() {
      selection.add($(this).val(), $(this).siblings("label").text(), $(this).attr("id"));
  });

}

